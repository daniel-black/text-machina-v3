import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go'
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';


SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javacript', javascript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

type MarkdownProps = {
  markdown: string & { content?: string };
};

// https://amirardalan.com/blog/syntax-highlight-code-in-markdown
export default function Markdown(props: MarkdownProps) {
  const syntaxTheme = oneLight

  const MarkDownComponents: object = {
    code({ node, inline, className, ...props }: any) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      // const applyHighlights: object = (applyHighlights: number) => {
      //   if (hasMeta) {
      //     const RE = /{([\d,-]+)}/;
      //     const metadata = node.data.meta?.replace(/\s/g, '');
      //     const strlineNumbers = RE?.test(metadata)
      //       ? RE?.exec(metadata)[1]
      //       : '0';
      //     const highlightLines = rangeParser(strlineNumbers);
      //     const highlight = highlightLines;
      //     const data: string = highlight.includes(applyHighlights)
      //       ? 'highlight'
      //       : null;
      //     return { data };
      //   } else {
      //     return {};
      //   }
      // };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          customStyle={{
            border: '1px solid #d4d4d8',
            borderRadius: '0.5rem',
            maxWidth: 'fit-content',
            paddingRight: '2rem',
          }}
          // lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      )
    },
  }

  return (
    <ReactMarkdown
      components={MarkDownComponents}
    >
      {props.markdown}
    </ReactMarkdown>
  )
}