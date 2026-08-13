"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          if (error.message.includes("Invalid login")) throw new Error("Correo o contraseña incorrectos.");
          throw error;
        }
        // Redirigir al dashboard tras login exitoso
        window.location.href = "/dashboard";
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
          },
        });
        if (error) {
          if (error.message.includes("already registered")) throw new Error("Este correo ya está registrado.");
          throw error;
        }
        setSuccess("¡Registro exitoso! Ya puedes iniciar sesión.");
        setIsLogin(true);
        setPassword("");
      }
    } catch (err: any) {
      setError(err.message || "Ha ocurrido un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <a href="/" className="auth-logo">Tu<span>Pega</span>!</a>
          <h1 className="auth-title">
            {isLogin ? "Bienvenido de vuelta" : "Crea tu cuenta"}
          </h1>
          <p className="auth-sub">
            {isLogin 
              ? "Ingresa tus credenciales para acceder al panel."
              : "Comienza a automatizar tu prospección laboral o comercial."}
          </p>
        </div>

        {error && (
          <div className="alert alert-error">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="fullName">Nombre completo</label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="Ej. Juan Pérez"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label htmlFor="password">Contraseña</label>
              {isLogin && <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>}
            </div>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              isLogin ? "Iniciar sesión" : "Registrarse"
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
            <button 
              type="button" 
              className="toggle-btn" 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setSuccess(null);
              }}
            >
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>

      <style>{`
        .auth-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A0818;
          padding: 24px;
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow */
        .auth-wrapper::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(124,92,252,0.15) 0%, rgba(10,8,24,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
          backdrop-filter: blur(20px);
          position: relative;
          z-index: 10;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #F0EEFF;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 24px;
        }
        .auth-logo span { color: #7C5CFC; }

        .auth-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #F0EEFF;
          margin: 0 0 8px 0;
        }
        
        .auth-sub {
          font-size: 0.875rem;
          color: #9D9AB8;
          margin: 0;
          line-height: 1.5;
        }

        .alert {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .alert-error {
          background: rgba(251,146,60,0.12);
          color: #FB923C;
          border: 1px solid rgba(251,146,60,0.2);
        }
        .alert-success {
          background: rgba(52,211,153,0.12);
          color: #34D399;
          border: 1px solid rgba(52,211,153,0.2);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #D4D4E8;
        }

        .forgot-link {
          font-size: 0.75rem;
          color: #7C5CFC;
          text-decoration: none;
          font-weight: 500;
        }
        .forgot-link:hover { text-decoration: underline; }

        input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 0.95rem;
          color: #F0EEFF;
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
        }
        input::placeholder { color: #5C5878; }
        input:focus {
          border-color: #7C5CFC;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(124,92,252,0.15);
        }
        input:disabled { opacity: 0.6; cursor: not-allowed; }

        .btn-submit {
          background: #7C5CFC;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 48px;
        }
        .btn-submit:hover:not(:disabled) {
          background: #8A6DFD;
          transform: translateY(-1px);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .auth-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 0.85rem;
          color: #9D9AB8;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #F0EEFF;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          text-decoration: underline;
          text-decoration-color: rgba(240,238,255,0.3);
          transition: all 0.2s;
        }
        .toggle-btn:hover {
          color: #7C5CFC;
          text-decoration-color: #7C5CFC;
        }
      `}</style>
    </div>
  );
}
