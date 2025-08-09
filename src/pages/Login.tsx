import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import { useAuth } from "@/contexts/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { signIn, supabaseAvailable } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));
    if (!supabaseAvailable) {
      const role = String(fd.get("role") || "aprendiz");
      localStorage.setItem("mock_role", role);
    }
    const { error } = await signIn(email, password);
    if (error) toast({ title: "Erro ao entrar", description: error.message });
    else navigate(from, { replace: true });
  };
  return (
    <main className="container mx-auto px-4 py-16 max-w-xl">
      <SEO title="Login | A.R.L.S. Mount Moriah" description="Acesso restrito aos irmãos." />
      {!supabaseAvailable && (
        <div className="mb-4 rounded-md border p-3 text-sm text-muted-foreground">
          Para ativar o login, conecte este projeto ao Supabase (botão verde no topo direito) e publique novamente.
        </div>
      )}

      <h1 className="text-3xl font-display font-bold mb-6 text-center">Entrar</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-sm font-medium">E-mail</label>
          <Input name="email" type="email" required placeholder="email@exemplo.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Senha</label>
          <Input name="password" type="password" required placeholder="••••••••" />
        </div>
        {!supabaseAvailable && (
          <div>
            <label className="text-sm font-medium">Perfil (simulação)</label>
            <select name="role" className="w-full h-10 rounded-md border bg-background px-3">
              <option value="aprendiz">Aprendiz</option>
              <option value="companheiro">Companheiro</option>
              <option value="mestre">Mestre</option>
            </select>
          </div>
        )}
        <Button type="submit" className="w-full">Entrar</Button>
      </form>
    </main>
  );
};

export default Login;
