import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import React from "react";

const Contato = () => {
  const { toast } = useToast();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada", description: "Em breve entraremos em contato." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <SEO
        title="Contato | A.R.L.S. Mount Moriah"
        description="Fale com a A.R.L.S. Mount Moriah."
        jsonLd={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contato" }}
      />
      <h1 className="text-3xl font-display font-bold mb-6">Contato</h1>
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="text-sm font-medium">Nome</label>
          <Input name="name" required placeholder="Seu nome" />
        </div>
        <div>
          <label className="text-sm font-medium">E-mail</label>
          <Input type="email" name="email" required placeholder="voce@email.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Mensagem</label>
          <Textarea name="message" required placeholder="Escreva sua mensagem" />
        </div>
        <Button type="submit" variant="default">Enviar</Button>
      </form>
    </main>
  );
};

export default Contato;
