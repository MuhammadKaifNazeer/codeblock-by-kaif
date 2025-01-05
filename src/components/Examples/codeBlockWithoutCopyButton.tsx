import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutCopyButton() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutFileName() {
    const code = \`import React from 'react'

const ContactPage = () => {
    return (
        <div>This is the Contact Page</div>
    )
}

export default ContactPage\`;

    return (
        <CodeBlock
            language="jsx"
            filename="CodeBlockWithoutCopyButton.tsx"
            code={code}
            copyButton={false}
        />
    );
}`;

    return (
        <CodeBlock
            language="jsx"
            filename="CodeBlockWithoutCopyButton.tsx"
            code={code}
            copyButton={false}
        />
    );
}
