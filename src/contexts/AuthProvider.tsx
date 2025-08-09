import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Role = "aprendiz" | "companheiro" | "mestre";

interface AuthContextValue {
  user: any | null;
  role: Role | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signUp: (email: string, password: string, role: Role) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  updateProfile: (data: { full_name?: string; role?: Role }) => Promise<{ error?: any }>;
  supabaseAvailable: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function getClient(): Promise<any | null> {
  // Supabase ainda não configurado; esta função retorna null para evitar erros de build
  return null;
}


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabaseAvailable, setSupabaseAvailable] = useState(false);

  const roleFromUser = (u: any | null): Role | null => (u?.user_metadata?.role ?? null) as Role | null;

  useEffect(() => {
    let active = true;
    (async () => {
      const client = await getClient();
      if (!active) return;
      setSupabaseAvailable(!!client);
      if (client) {
        const { data } = await client.auth.getUser();
        setUser(data.user ?? null);
        client.auth.onAuthStateChange((_e: any, session: any) => setUser(session?.user ?? null));
      } else {
        const saved = localStorage.getItem("mock_user");
        if (saved) {
          try { setUser(JSON.parse(saved)); } catch {}
        }
      }
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    role: roleFromUser(user),
    loading,
    supabaseAvailable,
    signIn: async (email, password) => {
      const client = await getClient();
      if (!client) {
        const rawRole = (localStorage.getItem("mock_role") as Role | null) ?? "aprendiz";
        const mock = {
          id: `mock_${Date.now()}`,
          email,
          user_metadata: { role: rawRole, full_name: email.split("@")[0] },
        };
        setUser(mock);
        localStorage.setItem("mock_user", JSON.stringify(mock));
        return {};
      }
      const { error } = await client.auth.signInWithPassword({ email, password });
      return { error };
    },
    signUp: async (email, password, role) => {
      const client = await getClient();
      if (!client) return { error: { message: "Supabase não configurado. Conecte o projeto ao Supabase." } };
      const { error } = await client.auth.signUp({ email, password, options: { data: { role } } });
      return { error };
    },
    signOut: async () => {
      const client = await getClient();
      if (client) await client.auth.signOut();
      localStorage.removeItem("mock_user");
      setUser(null);
    },
    updateProfile: async (data) => {
      const client = await getClient();
      if (!client) {
        setUser((prev: any) => {
          const updated = {
            ...prev,
            user_metadata: {
              ...prev?.user_metadata,
              ...(data.full_name ? { full_name: data.full_name } : {}),
              ...(data.role ? { role: data.role } : {}),
            },
          };
          localStorage.setItem("mock_user", JSON.stringify(updated));
          return updated;
        });
        return {};
      }
      const { error } = await client.auth.updateUser({ data });
      return { error };
    },
  }), [user, loading, supabaseAvailable]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
