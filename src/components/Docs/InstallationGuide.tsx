import React from 'react'
import { CodeBlock } from '../ui/code-block'
import { Steps, Step } from '@/components/ui/steps';
import { UtilFileCodeBlock } from './installationCodeBlocks/utilFile';
import { ThemProviderCodeBlock } from './installationCodeBlocks/ThemeProvider';
import { RootLayoutCodeBlock } from './installationCodeBlocks/RootLayout';
import { SourceCodeCodeBlock } from './installationCodeBlocks/SourceCode';
import { CodeBlockUsageExample } from './installationCodeBlocks/UsageExample';

const InstallationGuide = () => {

    return (
        <div className=''>
            <h1 className='text-xl font-bold mt-4'>Installation Guide</h1>
            <div className="py-4">
                <Steps>
                    <Step title="Install dependencies">
                        Ensure the necessary dependencies are installed in your project to enable syntax highlighting and other UI components:
                        <div className='mt-4'>
                            <CodeBlock
                                language="bash"
                                code={`npm install react-syntax-highlighter @types/react-syntax-highlighter clsx tailwind-merge next-themes lucide-react tailwindcss-animate`}
                            />
                        </div>
                    </Step>
                    <Step title="Install Required ShadCN UI Components">
                        Add the essential ShadCN UI components (like buttons and scroll areas) to your project for a modern and seamless UI:
                        <div className='mt-4'>
                            <CodeBlock
                                language="bash"
                                code={`npx shadcn@latest add button scroll-area`}
                            />
                        </div>
                    </Step>
                    <Step title="Add util file">
                        Add a utility file that provides helper functions for integration and makes the setup smoother. This file contains crucial utility functions for the application:
                        <div className='mt-4'>
                            <UtilFileCodeBlock />
                        </div>
                    </Step>
                    <Step title="Setup Next Themes">
                        Set up the Next.js theme provider to manage themes such as light and dark modes efficiently throughout your application:
                        <div className='mt-4'>
                            <ThemProviderCodeBlock />
                        </div>
                        <div className='mt-4'>
                            <RootLayoutCodeBlock />
                        </div>
                    </Step>
                    <Step title="Copy the source code">
                        Copy the source code from the provided code block into your project. This step will ensure the core functionality is integrated properly:
                        <div className='mt-4'>
                            <SourceCodeCodeBlock />
                        </div>
                    </Step>
                    <Step title="Use CodeBlock">
                        Implement the `CodeBlock` component for displaying code snippets in your project. This component will allow you to showcase code with syntax highlighting:
                        <div className='mt-4'>
                            <CodeBlockUsageExample />
                        </div>
                    </Step>
                </Steps>
            </div>
        </div>
    )
}

export default InstallationGuide
