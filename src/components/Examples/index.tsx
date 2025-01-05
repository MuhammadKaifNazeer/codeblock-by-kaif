import React from 'react'
import { CodeBlockExample } from './codeBlockExample';
import { OneLinerCodeBlock } from './oneLinerCodeBlock';
import { TabsCodeBlock } from './tabsCodeBlock';
import { HightlighterCodeBlock } from './highlighterCodeBlock';
import { CodeBlockWithoutFileName } from './codeBlockWithoutFIleName';
import { CodeBlockWithoutLineNumbers } from './codeBlockWithoutLineNumbers';
import { CodeBlockWithoutCopyButton } from './codeBlockWithoutCopyButton';

const Examples = () => {
    return (
        <div className='mt-5 space-y-4'>
            <OneLinerCodeBlock />
            <CodeBlockExample />
            <TabsCodeBlock />
            <HightlighterCodeBlock />
            <CodeBlockWithoutFileName />
            <CodeBlockWithoutLineNumbers />
            <CodeBlockWithoutCopyButton />
        </div>
    )
}

export default Examples