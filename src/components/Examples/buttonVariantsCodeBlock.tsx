import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function ButtonVariantsCodeBlock() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function ButtonVariantsCodeBlock() {
    const code = \`import React from 'react'

const SponserPage = () => {
    return (
        <div>This is the Sponser Page</div>
    )
}

export default SponserPage\`;

    return (
        <CodeBlock
            language="jsx"
            filename="ButtonVariantsCodeBlock.jsx"
            code={code}
            buttonVariant={"default"}
        />
    );
}`;

    return (
        <CodeBlock
            language="jsx"
            filename="ButtonVariantsCodeBlock.jsx"
            code={code}
            buttonVariant={"default"}
        />
    );
}
