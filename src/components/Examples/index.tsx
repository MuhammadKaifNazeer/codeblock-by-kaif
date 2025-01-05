import React from 'react'
import { CodeBlockExample } from './codeBlockExample';
import { OneLinerCodeBlock } from './oneLinerCodeBlock';
import { TabsCodeBlock } from './tabsCodeBlock';
import { HightlighterCodeBlock } from './highlighterCodeBlock';
import { CodeBlockWithoutFileName } from './codeBlockWithoutFIleName';
import { CodeBlockWithoutLineNumbers } from './codeBlockWithoutLineNumbers';
import { CodeBlockWithoutCopyButton } from './codeBlockWithoutCopyButton';
import { OnHoverCopyButtonCodeBlock } from './onHoverCopyButtonCodeBlock';
import { ButtonVariantsCodeBlock } from './buttonVariantsCodeBlock';
import { CodeBlockWithoutExtendCollapseButtons } from './codeBlockWithoutExtendCollapseButtons';

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
            <OnHoverCopyButtonCodeBlock />
            <ButtonVariantsCodeBlock />
            <CodeBlockWithoutExtendCollapseButtons/>
        </div>
    )
}

export default Examples