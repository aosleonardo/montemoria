const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">A.R.L.S. Mount Moriah</h3>
          <p className="text-sm text-muted-foreground">Filiada ao GOB-SP, federada ao GOB.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Oriente</h4>
          <p className="text-sm text-muted-foreground">São Paulo - SP</p>
          <p className="text-sm text-muted-foreground">Reuniões: consulte a Agenda</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Links</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><a href="/sobre" className="hover:underline">Sobre</a></li>
            <li><a href="/agenda" className="hover:underline">Agenda</a></li>
            <li><a href="/contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">© {new Date().getFullYear()} A.R.L.S. Mount Moriah. Todos os direitos reservados.</div>
    </footer>
  );
};

export default Footer;
