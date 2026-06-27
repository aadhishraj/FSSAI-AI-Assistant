"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Shield } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    // Dummy auth
    if (email === "admin@fssai.gov.in" && password === "admin123") {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Try admin@fssai.gov.in / admin123");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-[#f8fafb] px-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg w-full max-w-sm p-8">
        {/* Logo */}
        <div className="text-center mb-7">
          <div className="w-14 h-14 bg-[#006b3f] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-900">Admin Login</h1>
          <p className="text-xs text-gray-500 mt-1">Access the admin dashboard</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f]/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#006b3f] focus:ring-1 focus:ring-[#006b3f]/20 transition-colors pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#006b3f]"
              />
              <span className="text-xs text-gray-600">Remember me</span>
            </label>
            <button className="text-xs text-[#006b3f] hover:underline">Forgot Password?</button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#006b3f] hover:bg-[#004d2c] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Secure access only for authorized admins
        </p>

        <div className="mt-3 p-3 bg-[#e8f5ee] rounded-lg">
          <p className="text-xs text-[#006b3f] text-center font-medium">Demo: admin@fssai.gov.in / admin123</p>
        </div>
      </div>
    </div>
  );
}
