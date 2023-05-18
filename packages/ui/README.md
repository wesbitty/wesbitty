# Wesbitty UI

**Wesbitty UI** is a React UI Component Library.

## Roadmap

**Elements**

- [x] Button
- [x] Badge
- [x] Icon

**Typography**

- [x] Title
- [x] Text
- [x] Link

**Feedback**

- [x] Alert

## Installation

```cli
npm install @wesbitty/ui
```

## Usage

- Icon
  We use [Feather icon library](https://feathericons.com/) in **Wesbitty UI**

You can use any Icon from the library as a component by prepending `Icon` to any Icon name, like, `<IconHome>`

```js
import { IconHome } from 'ui'
//...
return <IconHome size="small" />
```

- Button
  To implement Button component into your project you'll need to add the import:

```js
import { Button } from 'ui'
```

After adding import into your project you can use it simply like:

```jsx
<Button type="primary">Button</Button>
```

**Button Props**

Table below contains all types of the props available in Button component.

| Name         | Type                      | Default    | Description                                                                |
| :----------- | :------------------------ | :--------- | :------------------------------------------------------------------------- |
| ariaControls | `string`                  |            | Id of the element the button controls.                                     |
| ariaExpanded | `boolean`                 |            | Tells screen reader the controlled element from `ariaControls` is expanded |
| asComponent  | `string \| React.Element` | `"button"` | The component used for the root node.                                      |
| fullWidth    | `boolean`                 | `false`    | If `true`, the Button will grow up to the full width of its container.     |
| iconRight    | `React.Node`              | `false`    | The displayed icon on the right.                                           |
| iconLeft     | `React.Node`              |            | The displayed icon on the left.                                            |

## Feedback

We want to provide only components of the highest quality. We can’t do that without your feedback. If you have any suggestions about what we can do to improve components, please report it directly as an [issue](https://github.com/wesbitty/wesbitty/issues/new/choose) or write to us at **#Wesbitty-UI** on Slack.

Feel free to [submit a question or idea here](https://github.com/wesbitty/wesbitty/discussions/category_choices)
