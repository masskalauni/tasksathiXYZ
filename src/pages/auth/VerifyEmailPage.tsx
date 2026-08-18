import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { Button } from '@/src/components/ui/Button';
import { MailCheck, ArrowRight, RotateCcw, ArrowLeft } from 'lucide-react';

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyEmail, isLoading } = useAuth();

  const email = new URLSearchParams(location.search).get('email') || 'client@company.com';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[val.length - 1];
    const updated = [...otp];
    updated[index] = val;
    setOtp(updated);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) return;

    await verifyEmail({ email, code });
    navigate('/dashboard');
  };

  const handleResend = async () => {
    setResending(true);
    await new Promise((r) => setTimeout(r, 600));
    setResending(false);
    setResendSuccess(true);
    setTimeout(() => setResendSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-block mb-2">
            <Link to="/">
              <TaskSathiLogo size="md" />
            </Link>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2">
            <MailCheck className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Verify your email
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            We've sent a 6-digit verification code to <strong className="text-slate-900 dark:text-white">{email}</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Boxes */}
          <div className="flex justify-between gap-2 max-w-xs mx-auto">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-11 h-12 text-center text-lg font-bold rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            ))}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isLoading}
            disabled={otp.join('').length < 6}
          >
            <span>Verify & Access Portal</span>
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>

          {/* Resend Action */}
          <div className="flex items-center justify-between text-xs pt-2">
            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{resendSuccess ? 'Code resent!' : 'Resend code'}</span>
            </button>

            <Link
              to="/register"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Change email
            </Link>
          </div>
        </form>

        <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
          <Link
            to="/login"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
