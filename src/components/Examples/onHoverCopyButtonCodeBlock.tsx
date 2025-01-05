import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function OnHoverCopyButtonCodeBlock() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function OnHoverCopyButtonCodeBlock() {
    const code = \`import React from 'react'

const BlogPage = () => {
    return (
        <div>This is the Blog Page</div>
    )
}

export default BlogPage\`;

    return (
        <CodeBlock
            language="jsx"
            code={code}
            copyButtonVisibility={"onHover"}
        />
    );
}`;

    return (
        <CodeBlock
            language="jsx"
            code={code}
            copyButtonVisibility={"onHover"}
        />
    );
}
