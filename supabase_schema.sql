-- ═══════════════════════════════════════════════════════
-- TuPega — Schema SQL Completo
-- Ejecutar en: Supabase Dashboard > SQL Editor
-- ═══════════════════════════════════════════════════════

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT,
  email       TEXT,
  plan        TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free','pro','enterprise')),
  daily_limit INTEGER NOT NULL DEFAULT 50,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT TO authenticated USING ((SELECT auth.uid()) = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE TO authenticated USING ((SELECT auth.uid()) = id) WITH CHECK ((SELECT auth.uid()) = id);

-- Auto-crear perfil al registrarse
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY INVOKER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. CAMPAIGNS
CREATE TABLE IF NOT EXISTS public.campaigns (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,
  subject       TEXT NOT NULL DEFAULT '',
  body_template TEXT NOT NULL DEFAULT '',
  status        TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','paused','completed')),
  daily_limit   INTEGER NOT NULL DEFAULT 50,
  sent_count    INTEGER NOT NULL DEFAULT 0,
  reply_count   INTEGER NOT NULL DEFAULT 0,
  bounce_count  INTEGER NOT NULL DEFAULT 0,
  started_at    TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
CREATE POLICY "campaigns_all_own" ON public.campaigns FOR ALL TO authenticated USING ((SELECT auth.uid()) = user_id) WITH CHECK ((SELECT auth.uid()) = user_id);

-- 3. CAMPAIGN LOGS
CREATE TABLE IF NOT EXISTS public.campaign_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id     UUID NOT NULL REFERENCES public.campaigns(id) ON DELETE CASCADE,
  user_id         UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  recipient_email TEXT NOT NULL,
  recipient_name  TEXT,
  status          TEXT NOT NULL DEFAULT 'sent' CHECK (status IN ('sent','bounced','replied','pending')),
  sent_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.campaign_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "logs_all_own" ON public.campaign_logs FOR ALL TO authenticated USING ((SELECT auth.uid()) = user_id) WITH CHECK ((SELECT auth.uid()) = user_id);

-- 4. REPLIES
CREATE TABLE IF NOT EXISTS public.replies (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id  UUID NOT NULL REFERENCES public.campaigns(id) ON DELETE CASCADE,
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  from_email   TEXT NOT NULL,
  from_name    TEXT,
  subject      TEXT,
  body_preview TEXT,
  is_hot       BOOLEAN NOT NULL DEFAULT FALSE,
  received_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "replies_all_own" ON public.replies FOR ALL TO authenticated USING ((SELECT auth.uid()) = user_id) WITH CHECK ((SELECT auth.uid()) = user_id);

-- 5. MASTER CONTACTS (Tabla privada de TuPega)
-- Esta tabla está en public pero SIN RLS abierto → solo service_role puede escribir/leer
CREATE TABLE IF NOT EXISTS public.master_contacts (
  id           BIGSERIAL PRIMARY KEY,
  email        TEXT NOT NULL UNIQUE,
  company      TEXT,
  contact_name TEXT,
  industry     TEXT DEFAULT 'general',
  region       TEXT DEFAULT 'Chile',
  source       TEXT DEFAULT 'excel_import',
  is_valid     BOOLEAN NOT NULL DEFAULT TRUE,
  bounce_count INTEGER NOT NULL DEFAULT 0,
  last_sent_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.master_contacts ENABLE ROW LEVEL SECURITY;
-- Sin políticas = nadie puede acceder via anon/authenticated
-- Solo service_role (backend) puede leer/escribir

-- 6. BOUNCE REGISTRY (Blacklist global)
CREATE TABLE IF NOT EXISTS public.bounce_registry (
  email         TEXT PRIMARY KEY,
  reason        TEXT,
  first_bounced TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  bounce_count  INTEGER NOT NULL DEFAULT 1
);
ALTER TABLE public.bounce_registry ENABLE ROW LEVEL SECURITY;
-- Sin políticas = solo service_role

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_campaigns_user_id ON public.campaigns(user_id);
CREATE INDEX IF NOT EXISTS idx_logs_campaign_id ON public.campaign_logs(campaign_id);
CREATE INDEX IF NOT EXISTS idx_logs_user_id ON public.campaign_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_replies_campaign_id ON public.replies(campaign_id);
CREATE INDEX IF NOT EXISTS idx_master_email ON public.master_contacts(email);
CREATE INDEX IF NOT EXISTS idx_master_valid ON public.master_contacts(is_valid) WHERE is_valid = TRUE;
