import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight, Github, Chrome } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Prefill email if remembered
  useEffect(() => {
    const savedEmail = localStorage.getItem("login_email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const backend = import.meta.env.VITE_BACKEND_URI || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      return setError("Please enter email and password.");
    }
    const emailOk = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);
    if (!emailOk) return setError("Please enter a valid email address.");

    try {
      setLoading(true);
      // Remember email
      if (remember) localStorage.setItem("login_email", email);
      else localStorage.removeItem("login_email");

      // POST to your backend (adjust path if needed)
      const res = await fetch(`${backend}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      // Save token (if returned)
      if (data.token) localStorage.setItem("token", data.token);
      // Redirect example
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setEmail("demo@example.com");
    setPassword("demopassword");
  };

  return (
    <div className="relative min-h-screen w-full py-20 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white">
      {/* Animated background orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-600/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"
      />

      {/* Center card */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl md:grid-cols-2"
        >

          {/* Left panel */}
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2400&auto=format&fit=crop"
              alt="Cinema"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Secure Login
              </div>
              <h2 className="text-3xl font-bold leading-tight">Welcome back 👋</h2>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                Sign in to continue discovering movies, trailers and your personalized watchlist.
              </p>
            </div>
          </div>

          {/* Right panel: form */}
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Log in</h3>
              <p className="mt-1 text-sm text-white/70">Enter your credentials to access your account.</p>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-white/80">
                  Email
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail size={18} className="text-white/50" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30 focus:bg-white/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1 block text-sm text-white/80">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock size={18} className="text-white/50" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30 focus:bg-white/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 hover:text-white"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Extras */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-white/70">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-white/20 bg-white/10"
                  />
                  Remember me
                </label>
                <a href="/forgot" className="text-xs text-fuchsia-300 hover:text-fuchsia-200">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 transition hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-3 flex items-center justify-center">
                <div className="h-px w-full bg-white/10" />
                <span className="absolute bg-transparent px-3 text-xs text-white/40">or</span>
              </div>

              {/* Social buttons (placeholders) */}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                  <Chrome size={16} /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                  <Github size={16} /> GitHub
                </button>
              </div>

              {/* Demo fill */}
              <button
                type="button"
                onClick={fillDemo}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 hover:bg-white/10"
              >
                Use demo credentials
              </button>

              <p className="mt-6 text-center text-xs text-white/60">
                Don’t have an account? {" "}
                <a href="/register" className="text-fuchsia-300 hover:text-fuchsia-200">Create one</a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
