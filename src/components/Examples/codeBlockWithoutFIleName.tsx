import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutFileName() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutFileName() {
    const code = \`import React from 'react'

const AboutPage = () => {
    return (
        <div>This is the About Page</div>
    )
}

export default AboutPage\`;

    return (
        <CodeBlock
            language="jsx"
            code={code}
        />
    );
}`;

    return (
        <CodeBlock
            language="jsx"
            code={code}
        />
    );
}
