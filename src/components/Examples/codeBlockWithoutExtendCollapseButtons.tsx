import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutExtendCollapseButtons() {
  const code = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockWithoutExtendCollapseButtons() {
    
const code = \`import React, { useState } from 'react';

interface ToggleButtonProps {
  label: string;
}

interface ToggleState {
  isOn: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label }) => {
  const [state, setState] = useState<ToggleState>({ isOn: false });

  const toggle = () => setState({ isOn: !state.isOn });

  return (
    <div>
      <p>{label}: {state.isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleButton;\`


    return (
        <CodeBlock
            language="jsx"
            filename="CodeBlockWithoutExtendCollapseButtons.jsx"
            code={code}
            buttonVariant={"default"}
        />
    );
}`;


  return (
    <CodeBlock
      language="jsx"
      filename="CodeBlockWithoutExtendCollapseButtons.jsx"
      code={code}
      showExpandCollapseButtons={false}
    />
  );
}

