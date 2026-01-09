import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const backend = import.meta.env.VITE_BACKEND_URI || "http://localhost:5000";

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    setLoading(true);

    // IMPORTANT: clear old token before register
    localStorage.removeItem("token");

    const res = await api.post(
      "/user/register",
      { username, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = res.data;
    console.log("REGISTER RESPONSE:", data);

    // ✅ ONLY store token if success === true
    if (data.success && data.token) {
      localStorage.setItem("token", data.token);
      // navigate("/") optional
    } else {
      console.log(data.message);
      throw new Error(data.message || "Registration failed");
      
    }
    navigate('/');

  } catch (err) {
    console.error("REGISTER ERROR:", err.response?.data || err.message);
    setError(err.response?.data?.message || err.message || "Registration failed");
  } finally {
    setLoading(false);
  }
};

useEffect(()=>{
    if(localStorage.getItem('token'))
    {
        navigate('/');
    }
},[navigate])


  return (
    <div className="relative min-h-screen w-full py-20 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white">
      {/* Background orbs */}
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
              <h2 className="text-3xl font-bold leading-tight">Join the Movie Club 🎬</h2>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                Register to discover movies, trailers, and build your personalized watchlist.
              </p>
            </div>
          </div>

          {/* Right panel: form */}
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Register</h3>
              <p className="mt-1 text-sm text-white/70">Create your account to get started.</p>
            </div>

            {error && <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</div>}
            {success && <div className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{success}</div>}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label className="mb-1 block text-sm text-white/80">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your username"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30 focus:bg-white/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail size={18} className="text-white/50" />
                  </div>
                  <input
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
                <label className="mb-1 block text-sm text-white/80">Password</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock size={18} className="text-white/50" />
                  </div>
                  <input
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
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
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
                    Registering...
                  </>
                ) : (
                  <>
                    Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              <p className="mt-6 text-center text-xs text-white/60">
                Already have an account?{" "}
                <a href="/login" className="text-fuchsia-300 hover:text-fuchsia-200">Log in</a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
