import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function OneLinerCodeBlock() {

    return (
        <CodeBlock
            language="bash"
            code={'npm i your-library'}
        />
    );
}
