import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function ThemProviderCodeBlock() {
    const code = `"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`;

    return (
        <CodeBlock
            language="tsx"
            filename="components/theme-provider.tsx"
            code={code}
            showLineNumbers={false}
        />
    );
}


