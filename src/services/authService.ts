import { User, Role, LoginCredentials, RegisterData, ForgotPasswordData, VerifyEmailData, ResetPasswordData } from '@/src/types/auth';
import { MOCK_USERS } from '@/src/data/mockDashboardData';

export interface AuthService {
  login(credentials: LoginCredentials): Promise<User>;
  register(data: RegisterData): Promise<User>;
  logout(): Promise<void>;
  getCurrentUser(): User | null;
  switchRole(role: Role): User;
  forgotPassword(data: ForgotPasswordData): Promise<boolean>;
  verifyEmail(data: VerifyEmailData): Promise<boolean>;
  resetPassword(data: ResetPasswordData): Promise<boolean>;
}

class MockAuthServiceImpl implements AuthService {
  private currentUser: User | null = null;
  private readonly STORAGE_KEY = 'tasksathi_auth_user_v1';

  constructor() {
    this.initSession();
  }

  private initSession() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.currentUser = JSON.parse(stored);
      } else {
        // Default to demo client for immediate preview accessibility
        this.currentUser = MOCK_USERS[0];
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentUser));
      }
    } catch {
      this.currentUser = MOCK_USERS[0];
    }
  }

  async login(credentials: LoginCredentials): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Match existing user by email or pick appropriate mock role
    const found = MOCK_USERS.find((u) => u.email.toLowerCase() === credentials.email.toLowerCase());
    const user: User =
      found ||
      (credentials.email.includes('admin')
        ? MOCK_USERS[1]
        : credentials.email.includes('manager')
        ? MOCK_USERS[2]
        : credentials.email.includes('staff')
        ? MOCK_USERS[3]
        : {
            id: `user-${Date.now()}`,
            name: credentials.email.split('@')[0].replace('.', ' '),
            email: credentials.email,
            company: 'Partner Enterprise',
            role: 'client',
            status: 'active',
            joinedDate: new Date().toISOString().split('T')[0],
            lastActive: 'Just now',
          });

    this.currentUser = user;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  async register(data: RegisterData): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      role: 'client',
      status: 'active',
      joinedDate: new Date().toISOString().split('T')[0],
      lastActive: 'Just now',
    };

    this.currentUser = newUser;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  }

  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  switchRole(role: Role): User {
    const targetUser = MOCK_USERS.find((u) => u.role === role) || MOCK_USERS[0];
    this.currentUser = targetUser;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(targetUser));
    return targetUser;
  }

  async forgotPassword(_data: ForgotPasswordData): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return true;
  }

  async verifyEmail(_data: VerifyEmailData): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return true;
  }

  async resetPassword(_data: ResetPasswordData): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return true;
  }
}

export const authService: AuthService = new MockAuthServiceImpl();
