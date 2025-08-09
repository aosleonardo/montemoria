import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthProvider";

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"} transition-colors`;

const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="font-display text-xl font-bold">A.R.L.S. Mount Moriah</a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navLinkCls}>Início</NavLink>
          <NavLink to="/sobre" className={navLinkCls}>Sobre</NavLink>
          <NavLink to="/agenda" className={navLinkCls}>Agenda</NavLink>
          <NavLink to="/contato" className={navLinkCls}>Contato</NavLink>
          {user && <NavLink to="/dashboard" className={navLinkCls}>Dashboard</NavLink>}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <NavLink to="/login"><Button variant="hero" size="sm">Entrar</Button></NavLink>
          ) : (
            <>
              <NavLink to="/perfil" className="text-sm text-foreground/80 hover:text-foreground">Perfil</NavLink>
              <Button variant="secondary" size="sm" onClick={signOut}>Sair</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
