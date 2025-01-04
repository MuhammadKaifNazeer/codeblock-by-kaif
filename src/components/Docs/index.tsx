import React from 'react'
import { CodeBlock } from '../ui/code-block'

const Docs = () => {
    const code = `const DummyComponent = () => {
        const [count, setCount] = React.useState(0);
      
        const handleClick = () => {
          setCount(prev => prev + 1);
        };
      
        return (
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
            <p className="mb-2">Fight Club Fights Count: {count}</p>
            <button 
              onClick={handleClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
            >
              Increment
            </button>
          </div>
        );
      };`;
    return (
        <div className='space-y-4'>
            <CodeBlock
                language="bash"
                code={`npm run dev`}
            />
            <CodeBlock
                language="tsx"
                code={code}
            />
        </div>
    )
}

export default Docs