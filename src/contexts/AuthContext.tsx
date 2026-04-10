import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  serviceNumber: string;
  login: (sn: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [serviceNumber, setServiceNumber] = useState('');

  const login = (sn: string) => {
    setServiceNumber(sn);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setServiceNumber('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, serviceNumber, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth hook moved to hooks/useAuth.ts to fix react-refresh lint error




