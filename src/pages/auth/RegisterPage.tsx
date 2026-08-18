import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { Button } from '@/src/components/ui/Button';
import { ShieldCheck, ArrowRight, Lock, Mail, User, Phone, Building, Eye, EyeOff, Check, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Password rules validation
  const hasMinLength = formData.password.length >= 8;
  const hasUpper = /[A-Z]/.test(formData.password);
  const hasLower = /[a-z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);

  const passwordScore = [hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName || !formData.email || !formData.company) {
      setError('Please fill in all required fields');
      return;
    }

    if (passwordScore < 4) {
      setError('Please provide a stronger password meeting the security criteria.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!formData.termsAccepted) {
      setError('You must accept the terms of service to create an account.');
      return;
    }

    try {
      await register(formData);
      navigate('/verify-email?email=' + encodeURIComponent(formData.email));
    } catch {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-[#0B0F19]">
      {/* Left Branding Hero Column */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 flex-col justify-between text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <Link to="/" className="inline-block">
            <TaskSathiLogo size="lg" className="brightness-125" />
          </Link>
          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              Start building with Nepal's leading software engineering partner.
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Create your corporate portal account to access dedicated engineering sprints, sprint reviews, and technical project assets.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Enterprise SLA & Privacy Guaranteed</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              All proprietary project IP, source codes, and database backups are governed by strict confidentiality terms.
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
        <div className="max-w-md w-full mx-auto space-y-6">
          <div>
            <div className="lg:hidden mb-6">
              <Link to="/">
                <TaskSathiLogo size="md" />
              </Link>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Create your client portal account
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Join enterprise teams managing software delivery on TASK SATHI.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 font-medium">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Company / Organization Name *
              </label>
              <div className="relative">
                <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Himalayan Retail Group Pvt. Ltd."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password.length > 0 && (
                <div className="pt-2 space-y-1.5">
                  <div className="flex gap-1 h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        'h-full transition-all duration-300',
                        passwordScore <= 2
                          ? 'w-1/3 bg-rose-500'
                          : passwordScore <= 4
                          ? 'w-2/3 bg-amber-500'
                          : 'w-full bg-emerald-500'
                      )}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className={cn('flex items-center gap-0.5', hasMinLength ? 'text-emerald-600 dark:text-emerald-400' : '')}>
                      {hasMinLength ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} 8+ chars
                    </span>
                    <span className={cn('flex items-center gap-0.5', hasUpper && hasLower ? 'text-emerald-600 dark:text-emerald-400' : '')}>
                      {hasUpper && hasLower ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} Upper & lower
                    </span>
                    <span className={cn('flex items-center gap-0.5', hasNumber ? 'text-emerald-600 dark:text-emerald-400' : '')}>
                      {hasNumber ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} Number
                    </span>
                    <span className={cn('flex items-center gap-0.5', hasSpecial ? 'text-emerald-600 dark:text-emerald-400' : '')}>
                      {hasSpecial ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} Symbol
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Terms Acceptance */}
            <div className="flex items-start pt-1">
              <input
                id="terms"
                type="checkbox"
                required
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="h-4 w-4 mt-0.5 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-relaxed">
                I agree to the{' '}
                <a href="#privacy" className="text-blue-600 dark:text-blue-400 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="text-blue-600 dark:text-blue-400 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              className="mt-4"
            >
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </form>

          {/* Footer Link */}
          <div className="text-center text-xs text-slate-600 dark:text-slate-400">
            Already have an active portal account?{' '}
            <Link
              to="/login"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
