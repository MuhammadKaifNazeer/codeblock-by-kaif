import { PropsTable } from '@/components/ui/props-table'


export default function TypesTable() {
    return (
        <div className="space-y-4">
            <div className="py-6">
                <h1 className="text-2xl font-bold mb-4">CodeBlock Component Props</h1>
                <PropsTable props={codeBlockProps} />
            </div>
            <div className="py-6">
                <h1 className="text-2xl font-bold mb-4">Tab Props</h1>
                <PropsTable props={tabProps} />
            </div>
        </div>
    )
}

const codeBlockProps = [
    {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply to the code block container.'
    },
    {
        name: 'language',
        type: 'string',
        description: 'The programming language of the code for syntax highlighting.'
    },
    {
        name: 'filename',
        type: 'string',
        description: 'Optional filename to display above the code block.'
    },
    {
        name: 'code',
        type: 'string',
        description: 'The code to be displayed in the code block.'
    },
    {
        name: 'highlightLines',
        type: 'number[]',
        defaultValue: '[]',
        description: 'Array of line numbers to highlight in the code.'
    },
    {
        name: 'showLineNumbers',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show line numbers in the code block.'
    },
    {
        name: 'copyButton',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show a copy button for the code.'
    },
    {
        name: 'copyButtonVisibility',
        type: '"always" | "onHover"',
        defaultValue: '"always"',
        description: 'When to show the copy button.'
    },
    {
        name: 'tabs',
        type: 'tabs[]',
        description: 'Array of tab objects for multiple code snippets.'
    },
    {
        name: 'showExpandCollapseButtons',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show expand/collapse buttons for long code blocks.'
    },
    {
        name: 'buttonVariant',
        type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
        defaultValue: '"secondary"',
        description: 'The visual style of the expand/collapse buttons.'
    },
]

const tabProps = [
    {
        name: 'name',
        type: 'string',
        description: 'The name of the tab, displayed in the tab header.'
    },
    {
        name: 'code',
        type: 'string',
        description: 'The code content to be displayed when this tab is active.'
    },
    {
        name: 'language',
        type: 'string',
        description: 'Optional. The programming language of the code for syntax highlighting. If not provided, it falls back to the language prop of the CodeBlock.'
    },
    {
        name: 'highlightLines',
        type: 'number[]',
        description: 'Optional. Array of line numbers to highlight in this tab\'s code. If not provided, it falls back to the highlightLines prop of the CodeBlock.'
    },
]