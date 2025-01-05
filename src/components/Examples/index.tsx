import React from 'react'
import { CodeBlockExample } from './codeBlockExample';
import { OneLinerCodeBlock } from './oneLinerCodeBlock';
import { TabsCodeBlock } from './tabsCodeBlock';
import { HightlighterCodeBlock } from './highlighterCodeBlock';
import { CodeBlockWithoutFileName } from './codeBlockWithoutFIleName';

const Examples = () => {
    return (
        <div className='mt-5 space-y-4'>
            <OneLinerCodeBlock />
            <CodeBlockExample />
            <TabsCodeBlock />
            <HightlighterCodeBlock />
            <CodeBlockWithoutFileName />
        </div>
    )
}

export default Examples