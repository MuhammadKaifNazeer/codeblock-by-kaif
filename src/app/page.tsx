import Docs from "@/components/Docs";
import Examples from "@/components/Examples";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <HeroSection />
      <Tabs defaultValue="tab-1" className="mt-6">
        <TabsList className="h-auto w-full rounded-none border-b border-border bg-transparent p-0">
          <TabsTrigger
            value="tab-1"
            className="relative w-full rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            Examples
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="relative w-full rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            Docs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <Examples />
        </TabsContent>
        <TabsContent value="tab-2">
          <Docs />
        </TabsContent>
      </Tabs>
      <Footer />
    </div>
  );
}
