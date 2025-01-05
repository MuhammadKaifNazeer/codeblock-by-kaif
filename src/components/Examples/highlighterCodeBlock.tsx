import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function HightlighterCodeBlock() {
    const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function HightlighterCodeBlock() {
    const code = \`import React, { useState } from 'react';

function Counter({ initialCount }) {
    const [state, setState] = useState({ count: initialCount });

    const increment = () => setState({ count: state.count + 1 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;\`

    return (
        <CodeBlock
            language="jsx"
            filename="HightlighterCodeBlock.jsx"
            highlightLines={[1, 4, 6, 9]}
            code={code}
        />
    );
}`

    return (
        <CodeBlock
            language="jsx"
            filename="HightlighterCodeBlock.jsx"
            highlightLines={[2, 4, 7, 8, 23, 26]}
            code={code}
        />
    );
}

