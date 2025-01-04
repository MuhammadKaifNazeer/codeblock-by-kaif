import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggler";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ChevronRight, Code, Layers, Paintbrush, Layout } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="flex flex-col min-h-0 gap-y-6 mt-12">
            <div>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <h1 className="text-4xl font-bold inline-flex items-center gap-3">
                            CodeCast
                        </h1>
                    </Link>
                    <ThemeToggle />
                </div>
                <div className="text-xs font-mono text-pretty mt-2">
                    A plug-and-play React code block component with advanced features for seamless code presentation.
                </div>
            </div>

            <p className="text-base text-wrap">
                This CodeBlock component is a robust and flexible tool for developers who want to showcase code snippets with style. It supports syntax highlighting using react-syntax-highlighter, multi-tab views, line highlighting, expand/collapse functionality, and dark/light mode themes. With built-in options like a customizable copy button, line numbers, and filename display, this component integrates effortlessly into your React projects. Simply copy and paste the code to enhance your developer-focused apps, tutorials, or documentation with a clean, professional UI.
            </p>

            <div className="flex min-h-0 gap-y-2 justify-start gap-x-4 items-center">
                <h2 className="text-sm">Want to make it better?</h2>
                <Link href={'/'}>
                    <Badge variant="outline" className={"text-green-500 border-green-500"}>
                        Github
                    </Badge>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="w-full dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
                >
                    <Code size={20} />
                    <span>React</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="w-full dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
                >
                    <Layers size={20} />
                    <span>Next.js</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="w-full dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
                >
                    <Paintbrush size={20} />
                    <span>Tailwind CSS</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="w-full dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
                >
                    <Layout size={20} />
                    <span>Shadcn UI</span>
                </HoverBorderGradient>
            </div>

        </section>
    );
}
