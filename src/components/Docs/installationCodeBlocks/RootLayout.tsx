import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function RootLayoutCodeBlock() {
    const code = `import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}`;

    return (
        <CodeBlock
            language="tsx"
            filename="app/layout.tsx"
            code={code}
            showLineNumbers={false}
        />
    );
}

