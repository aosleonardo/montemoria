import SEO from "@/components/SEO";
import { useAuth, Role } from "@/contexts/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const Profile = () => {
  const { user, role, updateProfile } = useAuth();
  const { toast } = useToast();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const full_name = String(fd.get("full_name") || "");
    const newRole = String(fd.get("role") || role) as Role;
    const { error } = await updateProfile({ full_name, role: newRole });
    if (error) toast({ title: "Erro ao atualizar", description: error.message });
    else toast({ title: "Perfil atualizado" });
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl">
      <SEO title="Perfil | A.R.L.S. Mount Moriah" description="Gerencie seus dados de perfil." />
      <h1 className="text-3xl font-display font-bold mb-6">Perfil</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">E-mail</label>
          <Input value={user?.email ?? ""} readOnly />
        </div>
        <div>
          <label className="text-sm font-medium">Nome</label>
          <Input name="full_name" defaultValue={user?.user_metadata?.full_name ?? ""} placeholder="Seu nome" />
        </div>
        <div>
          <label className="text-sm font-medium">Perfil</label>
          <select name="role" defaultValue={role ?? "aprendiz"} className="w-full h-10 rounded-md border bg-background px-3">
            <option value="aprendiz">Aprendiz</option>
            <option value="companheiro">Companheiro</option>
            <option value="mestre">Mestre</option>
          </select>
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </main>
  );
};

export default Profile;
