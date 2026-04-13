import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}

const defaultData: PortfolioData = {
  name: 'Loading...',
  title: '',
  bio: '',
  email: '',
  github: '#',
  linkedin: '#',
  twitter: '#',
  skills: [],
  projects: [],
  experience: [],
};

interface PortfolioContextType {
  data: PortfolioData;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/data/portfolio.json');
      if (!response.ok) {
        throw new Error('Failed to load portfolio data');
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error, refresh: loadData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
