import React from 'react'
// import { AutoForm } from 'uniforms'
// @ts-ignore
import MarkdownExample from '../../lib/MarkdownSample.md'
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

import Typography from '.'
// @ts-ignore
import { Space } from '../../index'

const { Title, Text, Link } = Typography

export default {
  title: 'General/Typography',
  component: Typography,
}

export const article = () => (
  <Typography tag="article">
    <ReactMarkdown plugins={[gfm]} source={MarkdownExample} />
  </Typography>
)

export const Titles = () => (
  <React.Fragment>
    <Title level={1}>Hello world</Title>
    <Title level={2}>Hello world</Title>
    <Title level={3}>Hello world</Title>
    <Title level={4}>Hello world</Title>
    <Title level={5}>Hello world</Title>
  </React.Fragment>
)

export const Texts = () => (
  <>
    <Text>Wesbitty-UI (default)</Text>
    <br />
    <Text type="secondary">Wesbittu UI (secondary)</Text>
    <br />
    <Text type="success">Wesbitty UI (success)</Text>
    <br />
    <Text type="warning">Wesbitty UI (warning)</Text>
    <br />
    <Text type="danger">Wesbitty UI (danger)</Text>
    <br />
    <Text disabled>Wesbitty UI (disabled)</Text>
    <br />
    <Text mark>Wesbitty UI (mark)</Text>
    <br />
    <Text code>Wesbitty UI (code)</Text>
    <br />
    <Text keyboard>Wesbitty UI (keyboard)</Text>
    <br />
    <Text underline>Wesbitty UI (underline)</Text>
    <br />
    <Text strikethrough>Wesbitty UI (strikethrough)</Text>
    <br />
    <Text strong>Wesbitty UI (strong)</Text>
    <br />
    <Link href="https://wesbitty.com" target="_blank">
      Wesbitty (Link)
    </Link>
  </>
)
