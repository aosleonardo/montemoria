import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Emblems from "@/components/site/Emblems";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "A.R.L.S. Mount Moriah",
    url: "/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR"
    }
  };

  return (
    <main>
      <SEO
        title="Início | A.R.L.S. Mount Moriah"
        description="Conheça a A.R.L.S. Mount Moriah: história, agenda e contato. Filiada ao GOB‑SP."
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 py-20 text-center">
          <img src="/lovable-uploads/cf78b7de-3f3c-4e81-a1e7-de998a1bfbd1.png" alt="Brasão A.R.L.S. Mount Moriah" loading="lazy" className="mx-auto h-40 w-auto mb-6" />
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight animate-enter">
            A.R.L.S. <span className="text-primary">Mount Moriah</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in">
            Loja Maçônica filiada ao GOB‑SP. Tradição, estudo e fraternidade.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/sobre"><Button variant="hero" size="lg">Conheça nossa história</Button></a>
            <a href="/dashboard"><Button variant="outline" size="lg">Área do Irmão</Button></a>
          </div>
        </div>
      </section>

      <Emblems />

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <article>
          <h2 className="text-2xl font-semibold mb-3">Quem somos</h2>
          <p className="text-muted-foreground">
            A Mount Moriah promove o aperfeiçoamento moral e intelectual de seus membros,
            valorizando os estudos maçônicos e a prática dos valores que nos unem.
          </p>
        </article>
        <aside className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Reuniões</h3>
          <p className="text-sm text-muted-foreground">
            Consulte a Agenda para datas e horários das sessões.
          </p>
        </aside>
      </section>
    </main>
  );
};

export default Index;
