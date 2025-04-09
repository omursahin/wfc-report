import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeEditorProps {
    content: string;
    // start: number;
    // end: number;
    language: string;
}

export function CodeBlock({ content, language }: ICodeEditorProps) {

    return (
        <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers
            wrapLines
            // lineProps={(lineNumber) => (lineNumber >= start && lineNumber <= end + 1) ? { style: { backgroundColor: "#EC5228" } } : {}}
        >
            {content}
        </SyntaxHighlighter>
    );

}

