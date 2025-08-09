import { Sun, Moon, Mountain, Gem } from "lucide-react";

const items = [
  { icon: Mountain, title: "Monte Moriah", desc: "Símbolo de elevação espiritual e superação." },
  { icon: Sun, title: "Sol", desc: "Luz do conhecimento e da razão." },
  { icon: Moon, title: "Lua", desc: "Intuição, equilíbrio e reflexão." },
  { icon: Gem, title: "Pedra", desc: "Trabalho e lapidação do caráter." },
];

const Emblems = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <h2 className="text-2xl font-semibold text-center mb-8">Símbolos</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="border rounded-xl p-5 text-center transition-shadow hover:shadow-lg">
            <it.icon className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden />
            <p className="font-medium">{it.title}</p>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Emblems;
