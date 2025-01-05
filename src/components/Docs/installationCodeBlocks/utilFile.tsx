import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function UtilFileCodeBlock() {
    const code = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`;

    return (
        <CodeBlock
            language="ts"
            filename="lib/utils.ts"
            code={code}
            showLineNumbers={false}
        />
    );
}