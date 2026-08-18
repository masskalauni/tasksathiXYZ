import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Role, LoginCredentials, RegisterData, ForgotPasswordData, VerifyEmailData, ResetPasswordData } from '@/src/types/auth';
import { authService } from '@/src/services/authService';

interface AuthContextType {
  user: User | null;
  role: Role | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  register: (data: RegisterData) => Promise<User>;
  logout: () => Promise<void>;
  switchRole: (role: Role) => void;
  forgotPassword: (data: ForgotPasswordData) => Promise<boolean>;
  verifyEmail: (data: VerifyEmailData) => Promise<boolean>;
  resetPassword: (data: ResetPasswordData) => Promise<boolean>;
  canAccessAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialUser = authService.getCurrentUser();
    setUser(initialUser);
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const loggedInUser = await authService.login(credentials);
      setUser(loggedInUser);
      return loggedInUser;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const registeredUser = await authService.register(data);
      setUser(registeredUser);
      return registeredUser;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const switchRole = (role: Role) => {
    const updated = authService.switchRole(role);
    setUser(updated);
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    return authService.forgotPassword(data);
  };

  const verifyEmail = async (data: VerifyEmailData) => {
    return authService.verifyEmail(data);
  };

  const resetPassword = async (data: ResetPasswordData) => {
    return authService.resetPassword(data);
  };

  const role = user?.role || null;
  const isAuthenticated = !!user;
  const canAccessAdmin = role === 'admin' || role === 'manager' || role === 'staff';

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        switchRole,
        forgotPassword,
        verifyEmail,
        resetPassword,
        canAccessAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
