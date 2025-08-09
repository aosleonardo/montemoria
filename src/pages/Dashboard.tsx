import SEO from "@/components/SEO";
import { useAuth, Role } from "@/contexts/AuthProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const visibility: Record<Role, string[]> = {
  aprendiz: ["fotos", "artigos"],
  companheiro: ["fotos", "trabalhos", "artigos"],
  mestre: ["fotos", "trabalhos", "artigos", "atas"],
};

const SectionCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { role } = useAuth();
  const allowed = role ? visibility[role] : [];

  return (
    <main className="container mx-auto px-4 py-16">
      <SEO title="Dashboard | A.R.L.S. Mount Moriah" description="Área reservada aos irmãos." />
      <h1 className="text-3xl font-display font-bold mb-6">Dashboard</h1>

      <Tabs defaultValue={allowed[0]}>
        <TabsList className="mb-4 flex flex-wrap">
          {allowed.includes("fotos") && <TabsTrigger value="fotos">Fotos</TabsTrigger>}
          {allowed.includes("trabalhos") && <TabsTrigger value="trabalhos">Trabalhos</TabsTrigger>}
          {allowed.includes("artigos") && <TabsTrigger value="artigos">Artigos</TabsTrigger>}
          {allowed.includes("atas") && <TabsTrigger value="atas">Atas</TabsTrigger>}
        </TabsList>

        {allowed.includes("fotos") && (
          <TabsContent value="fotos">
            <SectionCard title="Galeria de Fotos" description="Em breve: upload e organização de imagens." />
          </TabsContent>
        )}
        {allowed.includes("trabalhos") && (
          <TabsContent value="trabalhos">
            <SectionCard title="Trabalhos" description="Espaço para submissão e leitura de trabalhos maçônicos." />
          </TabsContent>
        )}
        {allowed.includes("artigos") && (
          <TabsContent value="artigos">
            <SectionCard title="Artigos" description="Publicações e referências para estudo." />
          </TabsContent>
        )}
        {allowed.includes("atas") && (
          <TabsContent value="atas">
            <SectionCard title="Atas" description="Área restrita aos Mestres para consulta de atas." />
          </TabsContent>
        )}
      </Tabs>
    </main>
  );
};

export default Dashboard;
