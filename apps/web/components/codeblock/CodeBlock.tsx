import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import CodeBlockStyles from './CodeBlock.module.css'
import { Button, IconCopy, IconCheck } from '@wesbitty/ui'
import CopyToClipboard from 'react-copy-to-clipboard'
import monokaiCustomTheme from './code'
import py from 'react-syntax-highlighter/dist/cjs/languages/hljs/python'
import sql from 'react-syntax-highlighter/dist/cjs/languages/hljs/sql'
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import { useState } from 'react'

interface Props {
  lang: 'js' | 'sql' | 'py' | 'bash' | 'ts' | 'tsx'
  startingLineNumber?: number
  hideCopy?: boolean
  className?: string
  children?: string
  size?: 'small' | 'medium' | 'large'
}

function CodeBlock(props: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  let lang = props.lang
    ? props.lang
    : props.className
    ? props.className.replace('language-', '')
    : 'js'
  // force jsx to be js highlighted
  if (lang === 'jsx') lang = 'js'

  SyntaxHighlighter.registerLanguage('bash', bash)
  SyntaxHighlighter.registerLanguage('js', js)
  SyntaxHighlighter.registerLanguage('py', py)
  SyntaxHighlighter.registerLanguage('sql', sql)

  // const large = props.size === 'large' ? true : false
  const large = false

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={lang}
        style={monokaiCustomTheme}
        className={CodeBlockStyles['code-block']}
        customStyle={{
          padding: '21px 24px',
          fontSize: large ? 18 : '0.875rem',
          lineHeight: large ? 1.6 : 1.4,
          background: '#181818',
        }}
        showLineNumbers={lang === 'cli' ? false : true}
        lineNumberContainerStyle={{
          paddingTop: '128px',
        }}
        lineNumberStyle={{
          padding: '0px',
          marginRight: '21px',
          minWidth: '1.5em',
          opacity: '0.3',
          fontSize: large ? 14 : '0.75rem',
        }}
      >
        {props.children}
      </SyntaxHighlighter>
      {!props.hideCopy && props.children ? (
        <div className="absolute right-2 top-2 dark">
          <CopyToClipboard text={props.children}>
            <Button
              type="text"
              icon={
                copied ? (
                  <span className="text-brand-900">
                    <IconCheck strokeWidth={3} />
                  </span>
                ) : (
                  <IconCopy />
                )
              }
              onClick={() => handleCopy()}
            >
              {/* {copied ? 'Copied' : 'Copy'} */}
            </Button>
          </CopyToClipboard>
        </div>
      ) : null}
    </div>
  )
}

export default CodeBlock
