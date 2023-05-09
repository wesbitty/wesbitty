# Wesbitty UI

Wesbitty UI is a React UI library.

🚧  
Note: Wesbitty UI is still a work-in-progress until a major release is published.

## Install Wesbitty UI

### Install TailwindCSS

You will need to have tailwind already installed.
Follow the instructions for [installing tailwind on their docs](https://tailwindcss.com/docs/installation/framework-guides).

You will need to use at least tailwind v3.

### Install Wesbitty UI package

After that, you can go ahead and install Wesbitty UI.

```cli
npm install @wesbitty/ui
```

### Modify the tailwind config

You will need to update tailwind.config.js in the root of your project.

#### Default tailwind.config.js tailwind setup

This is what a regular tailwind config file looks like

```js
// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Update tailwind.config.js to the following

You will need to wrap the WesbittyUI config around your own tailwind config like below.
Also add the new purge rules

```js
// using Wesbitty UI

// tailwind.config.js
const config = require('@wesbitty/ui/lib/theme/config.js')

module.exports = config({
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@wesbitty/ui/lib/theme/default.js', // add this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
```

## Usage

### Colors

Wesbitty UI uses Radix Colors for everything, and all the colors are already set up and ready to use once the installation above is complete.

#### Scale

In addition to accessing all colors from Radix, we have also assigned a new color pallete called `scale`. This is the designated grayscale color we use throughout all the component.

`scale`, as a default, is actually just the radix `gray` in dark mode, and radix `slate` in light mode. The colors are stored as CSS variables, so they can be swapped out for other color scales. These serve as the backbone of the components theme. It is advised you use `scale` wherever possible so that, if the scale theme is changed, everything will follow suite.

To ahieve this, the `scale` colors just reference other CSS variables.

As an example, and for aneyone interested, the CSS variables look a bit like this:

```css
:root {
  --colors-gray: var(--colors-gray) `;
  /* and so on */
}

.dark {
  --colors-gray: var(--colors-gray) `;
  /* and so on */
}
```

We have then populated tailwind with the relevant colors based on CSS variables, rather than the usual hex values.

##### Caveats

A drawback to this is that [bg opacity classes eg: (bg-gray-100/25)](https://tailwindcss.com/docs/background-color#changing-the-opacity) don't work, although maybe a workaround can be figured out in the future.

Another, and possibly larger drawback, is that by relying on a 'color scale' as a theme, we are effectively making it quite hard to have element level theming. For example, custom themeing by a user to, perhaps, pick the 'app background color', or maybe the 'border color'. This is rather hard with this current solution but it's also a bit of a drawback with Tailwind its self as we declare the color and index of the color directly in jsx usually.

A possible workaround could be to create tailwind classes for various things, and then they reference a tailwind class themselves. Although that could be convoluted as we then have a custom tailwind class, referencing another tailwind class, which in turn references a CSS variable (pheww!).

#### Dark mode

All colors now do not need a dark mode equivalent.

For example, `bg-gray-100` will show the dark mode version of the color in dark mode (which is actually `bg-gray-100`), and then automatically show the light mode version when in light mode (which is `bg-slate-100`).

We have already seperated all the radix colors for light and dark with CSS variables, so the app will render the correct light/dark shade depending on wether or not the app has `.dark` class added into the `<body>`.

You may however sometimes want to a different color shade in darkmode vs lightmode. This makes sense, a lot of subtle background and borders need to be different between the two so you will need to add some variation in sometimes.

For example, you may want to have a app background the same shade across light and dark mode but the panel is a white background for light mode, and in dark mode you want the panel in a ligher shade.

You can just use tailwind dark mode classes as normal to achieve that:

```jsx
const index = () => (
  <body className="bg-gray-200">
    <div className="bg-gray-100 dark:bg-gray-300">I am content</div>
  </body>
)
```

### Typography

Use tailwind classes as normal for typography, but use `text-gray-*` classes for the text color.

You can also use the class `text-code` to style text for inline code blocks.

```jsx

const index = () => {
  <body>
    <h1 className="text-xl text-gray-900">Hello world, this is a header, using gray-900</h1>
    <p className="text-sm text-gray-1100">This is a paragraph that is using gray-1100</h1>
    <p className="text-xs text-gray-900">This is a paragraph that is small and more gray, for things like captions</p>
    <p className="text-xs text-code">{"$ npm install @wesbitty/ui"}</p>
  </body>
}
```

Example of importing a component

```js
import { Button } from '@wesbitty/ui'

//...

return <Button>Wesbitty UI button</Button>
```

It is probably advisable to use [Normalize](https://github.com/sindresorhus/modern-normalize) with Wesbitty UI for the timebeing.

### Using Icons

We use [Feather icon library](https://feathericons.com/) in Wesbitty UI

You can use any Icon from the library as a component by prepending `Icon` to any Icon name, like, `<IconMail>`

```js
import { IconMail } from '@wesbitty/ui'

//...

return <IconMail size="small" />
```

## Using Wesbitty UI Auth

You can use our Auth widget straight out the box with Supabase auth including social logins.

<img width="380" alt="Screenshot 2021-02-05 at 19 25 01" src="https://user-images.githubusercontent.com/8291514/107029572-32f72d00-67ea-11eb-982e-e737f052eea1.png">

The Auth component also includes a context component which detects whether a user is logged in or not.

Make sure to also install `@supabase/supabase-js`

```cli
npm install @supabase/supabase-js
```

You can then easily import `Auth` from the ui library and pass the `createClient` to the `Auth` component.

```js
import { Auth, Typography, Button } from '@wesbitty/ui'
import { createClient } from '@supabase/supabase-js'

const { Text } = Typography

// Create a single supabase client for interacting with your database
const wesbittyOauth = createClient(
  'https://fgutddcvhhjrddcvvb.wesbitty.org',
  'public-anon-key'
)

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.wesbittyOauth.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function Home() {
  return (
    <Auth.UserContextProvider wesbittyOauth={wesbittyOauth}>
      <Container wesbittyOauth={wesbittyOauth}>
        <Auth
          providers={['facebook', 'github']}
          wesbittyOauth={wesbittyOauth}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
```

## Roadmap

Some of these are a work in progress - we invite anyone to submit a [feature request](https://github.com/wesbitty/ui/issues/new?labels=enhancement&template=2.Feature_request.md) if there is something you would like to see.

_General_

- [x] Button
- [x] Typography
- [x] Icon
- [x] Image (work in progress)

_Data Input_

- [x] Input
- [x] InputNumber
- [x] Select (custom select wip)
- [x] Checkbox
- [x] Radio
- [x] Toggle
- [ ] Upload
- [ ] Slider
- [ ] Date picker
- [ ] Time picker
- [ ] Form

_Layout_
~

- [x] Divider
- [x] Space (Flex)

_Display_

- [x] Card
- [ ] Avatar
- [x] Accordion
- [x] Alert
- [x] Badge
- [x] Menu
- [ ] Tooltips
- [ ] Tables
- [ ] Code block

_Navigation_

- [x] Tabs
- [x] Breadcrumb
- [x] Dropdown
- [x] Menu
- [ ] Page Header
- [ ] Sidebar
- [ ] Flyout menu
- [ ] Steps

_Overlay_

- [x] Modal
- [x] Context Menu
- [x] Drawer / SidePanel
- [ ] Toast messages / Notification
- [ ] Progress
- [ ] Feeds / Timeline

_Utility_

- [x] Loading
- [x] Transition (work in progress)

_Misc_

- [x] Storybook docs
- [ ] Theming (in progress)
- [x] Wesbitty Auth Elements
- [x] Documentation website

We would be keen to hear any feedback on this project.

Feel free to [submit a question or idea here](https://github.com/wesbitty/wesbitty/discussions/category_choices)
