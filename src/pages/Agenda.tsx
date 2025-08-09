import SEO from "@/components/SEO";

const Agenda = () => {
  const items = [
    { date: "2º sábado, 9:30h", title: "Sessão Ordinária", location: "Rua Augusta, 719 – Sobreloja" },
    { date: "Última semana do mês", title: "Estudos & Palestra", location: "A confirmar" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <SEO
        title="Agenda | A.R.L.S. Mount Moriah"
        description="Agenda de reuniões e eventos da A.R.L.S. Mount Moriah."
        jsonLd={{ "@context": "https://schema.org", "@type": "Event", name: "Agenda" }}
      />
      <h1 className="text-3xl font-display font-bold mb-6">Agenda</h1>
      <ul className="divide-y rounded-lg border">
        {items.map((it, i) => (
          <li key={i} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">{it.title}</p>
              <p className="text-sm text-muted-foreground">{it.location}</p>
            </div>
            <div className="text-sm text-primary mt-2 md:mt-0">{it.date}</div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Agenda;
