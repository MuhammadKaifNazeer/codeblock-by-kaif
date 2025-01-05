import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function UsageExampleCodeBlock() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function UsageExampleCodeBlock() {
    const code = \`import React from "react";

    const HomePage = () => {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <h1 className="text-2xl text-black dark:text-white">Welcome to the Example</h1>
            </div>
        );
    };

    export default HomePage; \`;

    return (
        <CodeBlock
            language="jsx"
            filename="ExampleComponent.jsx"
            code={code}
            showLineNumbers={false}
        />
    );
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
