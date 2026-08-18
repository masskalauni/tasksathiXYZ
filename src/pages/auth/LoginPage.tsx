import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { Button } from '@/src/components/ui/Button';
import { ShieldCheck, ArrowRight, Lock, Mail, Eye, EyeOff, Sparkles, UserCheck } from 'lucide-react';
import { Role } from '@/src/types/auth';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();

  const [email, setEmail] = useState('aarav@himalayanretail.com.np');
  const [password, setPassword] = useState('TaskSathi@2024');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectUrl = new URLSearchParams(location.search).get('redirect') || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const user = await login({ email, password, rememberMe });
      if (user.role === 'admin' || user.role === 'manager') {
        navigate(redirectUrl.startsWith('/admin') ? redirectUrl : '/admin');
      } else {
        navigate(redirectUrl);
      }
    } catch {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleDemoLogin = async (role: Role) => {
    let demoEmail = 'aarav@himalayanretail.com.np';
    if (role === 'admin') demoEmail = 'admin@tasksathi.com';
    if (role === 'manager') demoEmail = 'pooja.t@tasksathi.com';
    if (role === 'staff') demoEmail = 'bikash.k@tasksathi.com';

    setEmail(demoEmail);
    setPassword('TaskSathi@2024');

    const user = await login({ email: demoEmail, password: 'TaskSathi@2024' });
    if (user.role === 'admin' || user.role === 'manager') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-[#0B0F19]">
      {/* Left Branding Hero Column (Desktop) */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 flex-col justify-between text-white overflow-hidden">
        {/* Ambient Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

        {/* Top Branding */}
        <div className="relative z-10">
          <Link to="/" className="inline-block">
            <TaskSathiLogo size="lg" className="brightness-125" />
          </Link>
          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              Your technology partner, all in one place.
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Secure client portal for enterprise project timelines, IRD-verified invoices, milestone deliverables, and round-the-clock technical dispatch.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="relative z-10 space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Real-Time Client Transparency</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Track project milestones, direct team communication, and IRD-compliant billing without friction.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-white/10">
            <span>© {new Date().getFullYear()} TASK SATHI Pvt. Ltd.</span>
            <span>Putalisadak, Kathmandu</span>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-md w-full mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="lg:hidden mb-6">
              <Link to="/">
                <TaskSathiLogo size="md" />
              </Link>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Sign in to your portal
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Enter your corporate credentials or use quick demo profiles below.
            </p>
          </div>

          {/* Quick Demo Access Switcher */}
          <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-900 dark:text-blue-200">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Quick Demo 1-Click Login</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('client')}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-400 transition-all text-left flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <UserCheck className="h-3 w-3 text-orange-500 shrink-0" />
                <span className="truncate">Demo Client</span>
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('admin')}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-400 transition-all text-left flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <ShieldCheck className="h-3 w-3 text-blue-600 shrink-0" />
                <span className="truncate">Demo Admin</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 font-medium">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                Remember my session on this device
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              className="mt-2"
            >
              <span>Sign In to Portal</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-[#0B0F19] px-3 text-slate-500 dark:text-slate-400 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Mock Google Login */}
          <button
            type="button"
            onClick={() => handleDemoLogin('client')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google Workspace (SSO)</span>
          </button>

          {/* Footer Link */}
          <div className="text-center text-xs text-slate-600 dark:text-slate-400">
            Don't have an enterprise portal account?{' '}
            <Link
              to="/register"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Register your organization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
