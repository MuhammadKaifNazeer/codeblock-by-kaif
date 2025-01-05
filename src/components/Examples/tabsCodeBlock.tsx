import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function TabsCodeBlock() {
    const code = `import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function TabsCodeBlock() {

    const JavascriptCode = \`import React, { useState } from 'react';

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


    const TypscriptCode = \`import React, { useState } from 'react';

interface CounterProps {
    initialCount: number;
}

interface CounterState {
    count: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
    const [state, setState] = useState<CounterState>({ count: initialCount });

    const increment = () => setState({ count: state.count + 1 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;\`

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                tabs={[
                    {
                        name: "Javascript",
                        code: JavascriptCode,
                        language: "jsx"
                    },
                    {
                        name: "Typescript",
                        code: TypscriptCode,
                        language: "tsx",
                    },
                ]}
            />
        </div>
    );
}`

    const SecondTabCode = `import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-2xl text-black dark:text-white">Welcome to the Example</h1>
        </div>
    );
};

export default HomePage;`

    return (
        <CodeBlock
            language="tsx"
            tabs={[
                {
                    name: "TabsCodeBlock.tsx",
                    code: code,
                    language: "tsx"
                },
                {
                    name: "SecondTab.tsx",
                    code: SecondTabCode,
                    language: "tsx",
                },
            ]}
        />
    );
}