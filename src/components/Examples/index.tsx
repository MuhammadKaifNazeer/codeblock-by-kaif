import React from 'react'
import { CodeBlockDemo } from "@/components/codeBlock";
import { CodeBlockFifth } from "@/components/codeBlockFifth";
import { CodeBlockFourth } from "@/components/codeBlockFourth";
import { CodeBlockDemoSecond } from "@/components/codeBlockSecond";
import { CodeBlockThird } from "@/components/codeBlockThird";
import { CodeBlockWithoutExtendCollapseButtons } from './codeBlockWithoutExtendCollapseButtons';

const Examples = () => {
    return (
        <div className='mt-5 space-y-4'>
            <CodeBlockDemo />
            <CodeBlockDemoSecond />
            <CodeBlockThird />
            <CodeBlockFourth />
            <CodeBlockFifth />
            <CodeBlockWithoutExtendCollapseButtons />
        </div>
    )
}

export default Examples