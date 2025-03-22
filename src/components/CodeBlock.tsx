import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeEditorProps {
    content: string
    language: string
}

export function CodeBlock({ content, language }: CodeEditorProps) {

    return (
        <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers
            wrapLines
            lineProps={(lineNumber) => (lineNumber >= 5 && lineNumber <= 12) ? { style: { backgroundColor: "#EC5228" } } : {}}
        >
            {content}
        </SyntaxHighlighter>
    );

}

