export type Role = 'client' | 'admin' | 'manager' | 'staff';
export type UserRole = Role;

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  avatar?: string;
  role: Role;
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  joinedDate: string;
  lastActive?: string;
  jobTitle?: string;
  bio?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  role: Role | null;
}

export interface LoginCredentials {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

export interface ForgotPasswordData {
  email: string;
}

export interface VerifyEmailData {
  email: string;
  code: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
  code?: string;
}

export interface Permission {
  resource: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
}
