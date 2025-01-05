import Docs from "@/components/Docs";
import Examples from "@/components/Examples";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4 relative">
      <div className="pointer-events-none absolute -right-64 -top-48" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="856" height="745" fill="none">
          <g filter="url(#ill-a)">
            <path
              fill="url(#ill-b)"
              fillRule="evenodd"
              d="m56 88 344 212-166 188L56 88Z"
              clipRule="evenodd"
            />
          </g>
          <g filter="url(#ill-c)">
            <path
              fill="url(#ill-d)"
              fillRule="evenodd"
              d="m424 257 344 212-166 188-178-400Z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <linearGradient
              id="ill-b"
              x1="210.5"
              x2="210.5"
              y1="88"
              y2="467"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.64" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ill-d"
              x1="578.5"
              x2="578.5"
              y1="257"
              y2="636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.64" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <filter
              id="ill-a"
              width="520"
              height="576"
              x="-32"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_244_5" stdDeviation="44" />
            </filter>
            <filter
              id="ill-c"
              width="520"
              height="576"
              x="336"
              y="169"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_244_5" stdDeviation="44" />
            </filter>
          </defs>
        </svg>
      </div>
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
