import { CodeBlockWithoutExtendCollapseButtons } from "@/components/Examples/codeBlockWithoutExtendCollapseButtons";
import HeroSection from "@/components/HeroSection";
import { CodeBlockDemo } from "@/components/codeBlock";
import { CodeBlockFifth } from "@/components/codeBlockFifth";
import { CodeBlockFourth } from "@/components/codeBlockFourth";
import { CodeBlockDemoSecond } from "@/components/codeBlockSecond";
import { CodeBlockThird } from "@/components/codeBlockThird";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <HeroSection />
      <CodeBlockDemo />
      <CodeBlockDemoSecond />
      <CodeBlockThird />
      <CodeBlockFourth />
      <CodeBlockFifth />
      <CodeBlockWithoutExtendCollapseButtons />
    </div>
  );
}
