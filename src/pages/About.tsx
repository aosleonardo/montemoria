import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <SEO
        title="Sobre | A.R.L.S. Mount Moriah"
        description="História e propósito da A.R.L.S. Mount Moriah."
        jsonLd={{ "@context": "https://schema.org", "@type": "AboutPage", name: "Sobre" }}
      />
      <h1 className="text-3xl font-display font-bold mb-6">Nossa História</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <p>
          A A.R.L.S. Mount Moriah reúne irmãos comprometidos com o aperfeiçoamento moral e
          intelectual, a pesquisa maçônica e a prática da fraternidade.
        </p>
        <p>
          Inspirada nos símbolos do Monte Moriah, do Sol e da Lua, a Loja promove o estudo e
          a vivência dos princípios que iluminam o trabalho do maçom.
        </p>
      </div>
    </main>
  );
};

export default About;
