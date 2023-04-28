import { css, keyframes } from '@storybook/theming'
import { rgba } from 'polished'

const defaults = {
  bg: {
    brand: {
      primary: 'bg-gray-600 dark:text-white',
      secondary: 'bg-gray-200 dark:text-white',
    },
  },
  text: {
    brand: 'text-gray-700 dark:text-white',
    body: 'text-gray-600 dark:text-white',
    title: 'text-gray-700 dark:text-white',
  },
  border: {
    brand: 'border-sky-600',
    primary: 'border-gray-700',
    secondary: 'border-gray-400',
    alternative: 'border-gray-600 dark:border-gray-200',
  },
  placeholder: 'placeholder-gray-800 dark:text-white',
  focus: `
    outline-none
    focus:ring-current focus:ring-2
  `,
  'focus-visible': `
    outline-none
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,
  size: {
    // buttons, inputs, input labels use these sizes
    text: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
    // buttons, inputs, input labels use these sizes
    padding: {
      tiny: 'px-2.5 py-1.5',
      small: 'px-3 py-2',
      medium: 'px-4 py-2',
      large: 'px-4 py-2',
      xlarge: 'px-6 py-3',
    },
  },
  overlay: {
    base: `absolute inset-0 bg-gray-200 opacity-50`,
    container: `fixed inset-0 transition-opacity`,
  },
}

const utils = {
  border: {
    hover:
      'border-opacity-50 dark:border-opacity-50 hover:border-opacity-100 dark:hover:border-opacity-100',
    fix: 'border-opacity-100 dark:border-opacity-100',
  },
}

const default__padding_and_text = {
  tiny: `${defaults.size.text.tiny} ${defaults.size.padding.tiny}`,
  small: `${defaults.size.text.small} ${defaults.size.padding.small}`,
  medium: `${defaults.size.text.medium} ${defaults.size.padding.medium}`,
  large: `${defaults.size.text.large} ${defaults.size.padding.large}`,
  xlarge: `${defaults.size.text.xlarge} ${defaults.size.padding.xlarge}`,
}

/*
 * Animations
 *
 */

const default___animations = {
  accordion: {
    enter: 'transition-max-height ease-in-out duration-700 overflow-hidden',
    enterFrom: 'max-h-0',
    enterTo: 'max-h-screen',
    leave: 'transition-max-height ease-in-out duration-300 overflow-hidden',
    leaveFrom: 'max-h-screen',
    leaveTo: 'max-h-0',
  },
}

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
  calmBlue: '#E3F3FF',
}

export const color = {
  // Palette
  primary: '#FF4785', // Coral
  secondary: '#029CFD', // Ocean
  tertiary: '#E3E6E8', // Light grey

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  red: '#ff4400',

  // Calm
  bluelight: '#E3F3FF', // rgba($color.blue, 12%)
  bluelighter: '#F5FBFF',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F7FAFC',
  light: '#EEF3F6',
  mediumlight: '#ECF4F9',
  medium: '#D9E8F2',
  mediumdark: '#73828C',
  dark: '#5C6870',
  darker: '#454E54',
  darkest: '#2E3438',
  tr10: 'rgba(0, 0, 0, 0.1)',
  tr5: 'rgba(0, 0, 0, 0.05)',

  border: 'hsla(203, 50%, 30%, 0.15)',

  // Status
  positive: '#448028', // Evergreen
  negative: '#D43900', // Crimson
  warning: '#A15C20', // Burnt sienna
  selected: '#0271B6', // Navy
}

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
}

export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)',
}

export const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`

export const float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`

export const jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`

export const shake = keyframes`
  0% { transform:rotate(-3deg) }
  1.68421% { transform:rotate(3deg) }
  2.10526% { transform:rotate(6deg) }
  3.78947% { transform:rotate(-6deg) }
  4.21053% { transform:rotate(-6deg) }
  5.89474% { transform:rotate(6deg) }
  6.31579% { transform:rotate(6deg) }
  8% { transform:rotate(-6deg) }
  8.42105% { transform:rotate(-6deg) }
  10.10526% { transform:rotate(6deg) }
  10.52632% { transform:rotate(6deg) }
  12.21053% { transform:rotate(-6deg) }
  12.63158% { transform:rotate(-6deg) }
  14.31579% { transform:rotate(6deg) }
  15.78947% { transform:rotate(0deg) }
  100% { transform:rotate(0deg) }
`

export const inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  background: ${color.tr5};
  color: transparent;
  cursor: progress;
`

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
}

/*
 * Main tailwind utility classes output
 *
 */

export default {
  // Accordion
  accordion: {
    variants: {
      default: {
        base: `
          flex flex-col
          space-y-3
        `,
        container: `
          group
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
          overflow-hidden
        `,
        trigger: `
          flex flex-row
          gap-3
          items-center
          w-full 
          text-left 
          cursor-pointer 
          outline-none
          focus-visible:ring-1
          focus-visible:z-50
          ring-gray-900 dark:ring-white
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          py-3
        `,
      },
      bordered: {
        base: `
          flex flex-col
          -space-y-px
        `,
        container: `
          group
          border border-gray-600 
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        trigger: `
          flex flex-row items-center
          px-6 py-4 
          w-full 
          text-left 
          cursor-pointer           
          font-medium text-base 
          bg-transparent hover:bg-gray-50
          outline-none
          focus-visible:ring-1 focus-visible:z-50
          ring-gray-600  dark:ring-white        
          transition-colors
          dark:text-white dark:hover:bg-stone-800
          overflow-hidden
          group-first:rounded-tl-md group-first:rounded-tr-md
          group-last:rounded-bl-md group-last:rounded-br-md
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          px-6 py-3 
          border-t bg-stone-100 border-gray-600
          dark:bg-stone-800 dark:text-gray-100
        `,
      },
    },
    justified: `justify-between`,
    chevron: {
      base: `
        text-gray-900 dark:text-gray-100
        rotate-0 group-state-open:rotate-180
        duration-200
      `,
      align: {
        left: 'order-first',
        right: 'order-last',
      },
    },
    animate: {
      ...default___animations.accordion,
    },
  },

  /*
   * Badge
   *
   */

  badge: {
    base: 'inline-flex items-center px-2 py-1 leading-5 rounded-full text-xs font-medium',
    size: {
      large: 'px-4 py-1 rounded-full text-sm',
    },
    dot: '-ml-0.5 mr-1.5 h-2 w-2 text-white rounded-full',
    color: {
      brand: 'bg-sky-600 text-white border-2 border-gray-300',
      red: `bg-red-600 text-white border-2 border-gray-300`,
      purple: `border-2 border-gray-300 text-white bg-purple-600`,
      violet: `bg-violet-600 text-white border-2 border-gray-300`,
      teal: `bg-teal-600 text-white border-2 border-gray-300`,
      blue: `bg-blue-600 text-white border-2 border-gray-300`,
      cyan: `bg-cyan-600 text-white border-2 border-gray-300`,
      green: `bg-green-700 text-green-100 border-2 border-gray-300`,
      brown: `bg-stone-700 text-white border-2 border-gray-300`,
      sky: `bg-sky-600 text-white border-2 border-gray-300`,
      yellow: `bg-yellow-600 text-white border-2 border-gray-300`,
      amber: `bg-amber-600 text-white border-2 border-gray-300`,
      gray: `text-gray-100 bg-gray-700 border-2 border-slate-600`,
      slate: `bg-slate-600 text-white border-2 border-bue-300`,
    },
  },

  /*
   * Alert
   *
   */

  alert: {
    base: `
      relative rounded border py-4 px-6 
      flex space-x-4 items-start 
    `,
    title: 'block text-base font-normal mb-1',
    description: `text-sm`,
    variant: {
      danger: {
        base: `bg-red-600 border-red-700`,
        icon: `text-white dark:text-red-300`,
        title: `text-gray-50`,
        description: `text-gray-100`,
      },
      warning: {
        base: `bg-yellow-600 border-gray-300`,
        icon: `text-gray-50`,
        title: `text-gray-50`,
        description: `text-gray-100`,
      },
      info: {
        base: `bg-blue-600 border-blue-700`,
        icon: `text-gray-50`,
        title: `text-gray-50`,
        description: `text-gray-100`,
      },
      success: {
        base: `bg-green-600 border-gray-700`,
        icon: `text-white`,
        title: `text-gray-50`,
        description: `text-gray-100`,
      },
      neutral: {
        base: `bg-gray-700 border-gray-500`,
        icon: `text-gray-200`,
        title: `text-gray-100`,
        description: `text-gray-200`,
      },
    },
    close: `
      absolute 
      right-6 top-4 
      p-0 m-0 
      text-gray-700 dark:text-white
      cursor-pointer transition ease-in-out 
      bg-transparent border-transparent focus:outline-none
      opacity-100 hover:opacity-150`,
  },

  /*
   * Card
   */

  card: {
    base: `
      bg-white dark:bg-scaleDark-700
      
      border
      ${defaults.border.primary} 
      flex flex-col 
      rounded-md shadow-sm overflow-hidden relative
    `,
    hoverable: 'transition hover:-translate-y-1 hover:shadow-2xl',
    head: `px-8 py-6 flex justify-between 
    border-b
      ${defaults.border.primary} `,
    content: 'p-8',
  },

  /*
   * Tabs
   */

  tabs: {
    base: `w-full justify-between space-y-4`,
    underlined: {
      list: `
        flex items-center border-b 
        ${defaults.border.secondary}
        `,
      base: ` 
        relative 
        cursor-pointer 
        text-gray-900 
        flex 
        items-center 
        space-x-2
        text-center 
        transition
        focus:outline-none 
        focus-visible:ring 
        focus-visible:ring-gray-700
        focus-visible:border-gray-900
      `,
      inactive: `
        hover:text-gray-900
      `,
      active: `
        text-gray-900
        border-b-2 border-gray-900
      `,
    },
    pills: {
      list: 'flex space-x-1',
      base: ` 
        relative 
        cursor-pointer 
        flex 
        items-center 
        space-x-2
        text-center 
        transition
        shadow-sm
        rounded
        focus:outline-none 
        focus-visible:ring 
        focus-visible:ring-gray-700
        focus-visible:border-gray-900
        `,
      inactive: `
        bg-gray-200
        border border-gray-700 hover:border-gray-900
        text-gray-900 hover:text-gray-900
      `,
      active: `
        bg-gray-900
        text-gray-200
        border-gray-900 
      `,
    },
    block: 'w-full flex items-center justify-center',
    size: {
      ...default__padding_and_text,
    },
    scrollable: `overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right`,
    content: `focus:outline-none focus:ring text-gray-900`,
  },

  // Button
  button: {
    base: `
      relative 
      cursor-pointer 
      inline-flex items-center space-x-2 
      text-center
      font-regular
      transition ease-out duration-200 
      rounded 
      ${defaults['focus-visible']}
    `,
    label: `truncate`,
    container: 'inline-flex font-medium',
    type: {
      primary: `
        bg-blue-600 hover:bg-blue-500 text-white shadow-md 
        opacity-100
        focus-visible:outline-sky-600
      `,
      secondary: `
        bg-green-600 hover:bg-green-500 text-white
        opacity-100
        shadow-green-900 hover:shadow-green-600
        focus-visible:outline-green-600
      `,
      default: `
        text-white bg-indigo-600 hover:bg-indigo-500
        shadow-lg shadow-indigo-500/50
        opacity-100
        focus-visible:outline-sky-600      
      `,
      alternative: `
        bg-cyan-500 shadow-lg shadow-cyan-100 text-white
        focus-visible:border-sky-800
        focus-visible:outline-sky-600
      `,
      outline: `
        text-gray-900 dark:text-white
        bg-transparent 
        border-gray-500 hover:border-gray-700
        dark:border-white hover:dark:border-gray-300
        focus-visible:outline-gray-700
      `,
      dashed: `
      border border-gray-400 border-dashed
      text-gray-500 bg-transparent 
      hover:text-gray-600 hover:border-gray-600
      dark:text-white dark:border-dark-400 
      dark:hover:text-white dark:hover:border-white
      focus-visible:outline-gray-300
      `,
      link: `
        text-sky-600
        border border-transparent
        hover:bg-sky-200
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        shadow-none
        focus-visible:outline-gray-700
      `,
      text: `
        text-gray-900 bg-gray-100 
        hover:bg-gray-200
        shadow-none
        focus-visible:outline-gray-700
      `,
      danger: `
        dark:border-gray-300 
        bg-red-600 text-white 
        hover:bg-red-500
        focus-visible:outline-red-700
      `,
      warning: `
        text-gray-800 bg-amber-200
        border-amber-700 hover:border-amber-900
        hover:bg-amber-300
        hover:text-hi-contrast
        focus-visible:outline-amber-700
      `,
    },
    block: 'w-full flex items-center justify-center',
    shadow: 'shadow-sm',
    size: {
      ...default__padding_and_text,
    },
    loading: 'animate-spin',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },

  /*
   * Input
   */

  input: {
    base: `
      block box-border w-full 
      rounded-md shadow-sm 
      transition-all text-gray-600 dark:text-gray-600 border
      focus:shadow-md
      ${defaults.focus}
      focus:border-gray-800
      focus:ring-gray-400
      ${defaults.placeholder}
    `,
    variants: {
      standard: `
        bg-gray-100
        border border-gray-700
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
    textarea_actions_container:
      'absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start',
    textarea_actions_container_items: 'flex items-center',
  },

  /*
   * Select
   */

  select: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-gray-900  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-gray-900
      focus:ring-gray-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-gray-200
        border border-gray-700
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    disabled: 'opacity-50',
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center',
    chevron_container:
      'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    chevron: 'h-5 w-5 text-gray-600',
  },

  /*
   * Input Number
   */

  inputNumber: {
    base: `
      block
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-gray-900  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-gray-900
      focus:ring-gray-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-gray-200
        border border-gray-700
      `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    disabled: 'opacity-50',
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
  },

  /*
   *  Checkbox
   *
   * 
   * This Checkbox requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  checkbox: {
    base: `
      bg-transparent 
      ${defaults.focus}
      focus:ring-gray-400
      text-sky-700 
      border-gray-800
      dark:border-gray-200 
      shadow-sm
      rounded
      cursor-pointer
    `,
    container: `flex cursor-pointer leading-none`,
    size: {
      tiny: `h-3 w-3 mt-1 mr-3`,
      small: `h-3.5 w-3.5 mt-0.5 mr-3.5`,
      medium: `h-4 w-4 mt-0.5 mr-3.5`,
      large: `h-5 w-5 mt-0.5 mr-4`,
      xlarge: `h-5 w-5 mt-0.5 mr-4`,
    },
    disabled: 'opacity-50',
    label: {
      base: `text-gray-900 dark:text-white cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-gray-800 dark:text-gray-200',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-gray-800 dark:text-gray-200',
      ...defaults.size.text,
    },
    description: {
      base: `text-gray-800 dark:text-gray-200`,
      ...defaults.size.text,
    },
    group: `space-y-3`,
  },

  /*
   *  Radio
   *
   * 
   * This Radio requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  radio: {
    base: `
      absolute
      ${defaults.focus}
      focus:ring-sky-400
      border-gray-600    
      text-sky-600
      shadow-sm
      cursor-pointer
      peer
      bg-gray-300
    `,
    hidden: `absolute opacity-0`,
    size: {
      tiny: `h-3 w-3`,
      small: `h-3.5 w-3.5`,
      medium: `h-4 w-4`,
      large: `h-5 w-5`,
      xlarge: `h-5 w-5`,
    },
    variants: {
      cards: {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `-space-y-px shadow-sm`,
        base: `
          transition
          border
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-gray-100 dark:bg-gray-400
          border-gray-500 dark:border-gray-500
          hover:border-gray-700 hover:dark:border-gray-700
          hover:bg-gray-200 dark:hover:bg-gray-500
        `,
        active: `
          bg-gray-300 dark:bg-gray-600 z-10
          border-gray-900 dark:border-gray-900 
          border-1
        `,
        radio_offset: 'left-4',
      },

      'stacked-cards': {
        container: {
          base: `relative cursor-pointer flex items-center justify-between`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-3`,
        base: `
          transition
          rounded-md
          border
          shadow-sm 
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-gray-100 dark:bg-gray-400
          border-gray-500 dark:border-gray-500
          hover:border-gray-700 hover:dark:border-gray-700
          hover:bg-gray-200 dark:hover:bg-gray-500
        `,
        active: `
          bg-gray-300 dark:bg-gray-600 z-10
          border-gray-900 dark:border-gray-900 
          border-1
        `,
        radio_offset: 'left-4',
      },

      'small-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1 items-center justify-center',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border
          rounded-lg 
          grow
          items-center
          flex-wrap
          justify-center
          shadow-sm
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-gray-100 dark:bg-gray-400
          border-gray-500 dark:border-gray-500
          hover:border-gray-700 hover:dark:border-gray-700
          hover:bg-gray-200 dark:hover:bg-gray-500
        `,
        active: `
          bg-gray-300 dark:bg-gray-500 z-10
          border-gray-900 dark:border-gray-900 border-1
        `,
        radio_offset: 'left-4',
      },

      'large-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border border-gray-700 hover:border-gray-900 
          shadow-sm
          rounded-lg 
          grow
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-gray-100 dark:bg-gray-400
          border-gray-500 dark:border-gray-500
          hover:border-gray-700 hover:dark:border-gray-700
          hover:bg-gray-200 dark:hover:bg-gray-500
        `,
        active: `
          bg-gray-300 dark:bg-gray-600 z-10
          border-gray-900 dark:border-gray-900 
          border-1
        `,
        radio_offset: 'left-4',
      },

      list: {
        container: {
          base: `relative cursor-pointer flex`,
          size: {
            tiny: `pl-6`,
            small: `pl-6`,
            medium: `pl-7`,
            large: `pl-10`,
            xlarge: `pl-10`,
          },
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-4`,
        base: ``,
        size: {
          tiny: `0`,
          small: `0`,
          medium: `0`,
          large: `0`,
          xlarge: `0`,
        },
        active: ``,
        radio_offset: 'left-0',
      },
    },
    label: {
      base: `text-gray-900 dark:text-white cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-gray-500 dark:text-white',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-gray-500 dark:text-white',
      ...defaults.size.text,
    },
    description: {
      base: `text-gray-900 dark:text-white`,
      ...defaults.size.text,
    },
    optionalLabel: {
      base: `text-gray-900 dark:text-white`,
      ...defaults.size.text,
    },
    disabled: `opacity-50 cursor-auto border-dashed`,
  },

  sidepanel: {
    base: `
      bg-gray-100 dark:bg-gray-300
      flex flex-col 
      fixed 
      inset-y-0 
      max-w-full 
      h-screen
      border-l border-overlay-border
      shadow-xl
    `,
    header: `
      space-y-1 py-4 px-4 bg-overlay-bg sm:px-6 
      border-b border-overlay-border
    `,
    contents: `
      relative 
      flex-1 
      overflow-y-auto
    `,
    content: `
      px-4 sm:px-6
    `,
    footer: `
      flex justify-end gap-2
      p-4 bg-overlay-bg
      border-t border-overlay-border
    `,
    size: {
      medium: `w-screen max-w-md h-full`,
      large: `w-screen max-w-2xl h-full`,
    },
    align: {
      left: `
        left-0
        data-open:animate-panel-slide-left-out 
        data-closed:animate-panel-slide-left-in
      `,
      right: `
        right-0
        data-open:animate-panel-slide-right-out 
        data-closed:animate-panel-slide-right-in
      `,
    },
    seperator: `
      w-full
      h-px
      my-2
      bg-gray-300 dark:bg-gray-500
    `,
    overlay: `
      fixed
      bg-gray-300
      dark:bg-gray-100
      h-full w-full
      left-0
      top-0 
      opacity-75
      data-closed:animate-fade-out-overlay-bg 
      data-open:animate-fade-in-overlay-bg
    `,
    // this is to reset the button
    // it is advised not to change this
    trigger: `
      border-none bg-transparent p-0 focus:ring-0
    `,
  },

  /*
   *  Toggle
   */

  toggle: {
    base: `
      p-0 relative 
      inline-flex flex-shrink-0 
      border-2 border-transparent 
      rounded-full 
      cursor-pointer
      transition-colors ease-in-out duration-200
      ${defaults.focus}
      focus:ring-gray-400
      bg-gray-500

      hover:bg-gray-700
    `,
    active: `
      bg-sky-900    
      hover:bg-sky-900    
    `,
    handle_container: {
      tiny: 'h-4 w-7',
      small: 'h-6 w-11',
      medium: 'h-6 w-11',
      large: 'h-7 w-12',
      xlarge: 'h-7 w-12',
    },
    handle: {
      base: `
        inline-block h-5 w-5 
        rounded-full 
        bg-gray-100
        dark:bg-gray-900
        shadow ring-0 
        transition 
        ease-in-out duration-200
      `,
      tiny: 'h-3 w-3',
      small: 'h-5 w-5',
      medium: 'h-5 w-5',
      large: 'h-6 w-6',
      xlarge: 'h-6 w-6',
    },
    handle_active: {
      tiny: ' translate-x-3 dark:bg-white',
      small: 'translate-x-5 dark:bg-white',
      medium: 'translate-x-5 dark:bg-white',
      large: 'translate-x-5 dark:bg-white',
      xlarge: 'translate-x-5 dark:bg-white',
    },
    disabled: 'opacity-75 cursor-not-allowed',
  },

  /*
   *  Form Layout
   */

  form_layout: {
    container: 'grid gap-2',

    flex: {
      left: {
        base: 'flex flex-row gap-6',
        content: ``,
        labels: 'order-2',
        data_input: 'order-1',
      },
      right: {
        base: 'flex flex-row gap-6 justify-between',
        content: `order-last`,
        labels: '',
        data_input: 'text-right',
      },
    },

    responsive: 'md:grid md:grid-cols-12 md:gap-x-4',
    non_responsive: 'grid grid-cols-12 gap-2',

    labels_horizontal_layout:
      'flex flex-row space-x-2 justify-between col-span-12',
    labels_vertical_layout: 'flex flex-col space-y-2 col-span-4',

    data_input_horizontal_layout: 'col-span-12',

    non_box_data_input_spacing_vertical: 'my-3',
    non_box_data_input_spacing_horizontal: 'my-3 md:mt-0 mb-3',

    data_input_vertical_layout: 'col-span-8',

    data_input_vertical_layout__align_right: 'text-right',

    label: {
      base: 'block text-gray-600 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    label_optional: {
      base: 'text-gray-600 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    description: {
      base: 'mt-2 text-gray-600 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    label_before: {
      base: 'text-gray-500 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    label_after: {
      base: 'text-gray-500 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    error: {
      base: `
        text-red-600
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,
      size: {
        ...defaults.size.text,
      },
    },
    size: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
  },

  /*
   *  Dropdown
   */

  dropdown: {
    // root:
    trigger: `
      flex

      border-none 
      rounded
      bg-transparent p-0
      outline-none
      outline-offset-1
      transition-all
      focus:outline-4
      focus:outline-gray-600
    `,
    item_nested: `
      border-none
      focus:outline-none
      focus:bg-gray-300 dark:focus:bg-gray-500
      focus:text-gray-900
      data-open:bg-gray-300 dark:data-open:bg-gray-500
      data-open:text-gray-900
    `,
    content: `
      bg-gray-100 dark:bg-gray-300
      border border-gray-300 dark:border-gray-500
      rounded
      shadow-lg
      py-1.5

      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
      min-w-fit
    `,
    size: {
      tiny: `w-40`,
      small: `w-48`,
      medium: `w-64`,
      large: `w-80`,
      xlarge: `w-96`,
      content: `w-auto`,
    },
    arrow: `
      fill-current
      border-0 border-t
    `,
    item: `
      group
      relative
      text-xs
      text-gray-900
      px-4 py-1.5 flex items-center space-x-2
      cursor-pointer
      focus:bg-gray-300 dark:focus:bg-gray-500
      focus:text-gray-900
      border-none
      focus:outline-none
    `,
    label: `
      text-gray-900
      px-4 flex items-center space-x-2 py-1.5
      text-xs
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-gray-300 dark:bg-gray-500
    `,
    misc: `
      px-4 py-1.5
    `,
    check: `
      absolute left-3
      flex items-center
      data-checked:text-gray-900
    `,
    input: `
      flex items-center space-x-0 pl-8 pr-4
    `,
    right_slot: `
      text-gray-900
      group-focus:text-gray-900
      absolute
      -translate-y-1/2
      right-2
      top-1/2
    `,
  },

  /*
   *  Popover
   */

  popover: {
    trigger: `
      flex
      border-none 
  
      rounded
      bg-transparent
      p-0
      outline-none
      outline-offset-1
      transition-all
      focus:outline-4
      focus:outline-gray-600

    `,
    content: `
      bg-gray-100 dark:bg-gray-300
      border border-gray-300 dark:border-gray-500
      rounded
      shadow-lg
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
      min-w-fit

      origin-popover 
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,
    size: {
      tiny: `w-40`,
      small: `w-48`,
      medium: `w-64`,
      large: `w-80`,
      xlarge: `w-96`,
      content: `w-auto`,
    },
    header: `
      bg-gray-200 dark:bg-gray-400
      space-y-1 py-1.5 px-3
      border-b border-gray-300 dark:border-gray-500
    `,
    footer: `
      bg-gray-200 dark:bg-gray-400
      py-1.5 px-3
      border-t border-gray-300 dark:border-gray-500
    `,
    close: `
      transition
      text-gray-900 hover:text-gray-900
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-gray-300 dark:bg-gray-500
    `,
  },

  /*
   * Menu
   */

  menu: {
    item: {
      base: `
        cursor-pointer
        flex space-x-3 items-center
        outline-none
        focus-visible:ring-1 ring-gray-900 focus-visible:z-10 
        group
      `,
      content: {
        base: `transition truncate text-sm w-full`,
        normal: `text-gray-900 group-hover:text-gray-900`,
        active: `text-gray-900 font-semibold`,
      },
      icon: {
        base: `transition truncate text-sm`,
        normal: `text-gray-900 group-hover:text-gray-900`,
        active: `text-gray-900`,
      },
      variants: {
        text: {
          base: `
            py-1
          `,
          normal: `
            font-normal
            border-gray-500
            group-hover:border-gray-900`,
          active: `
            font-semibold
            text-gray-900
            z-10
          `,
        },
        border: {
          base: `
            px-4 py-1
          `,
          normal: `
            border-l
            font-normal
            border-gray-500
            group-hover:border-gray-900`,
          active: `
            font-semibold

            text-gray-900
            z-10

            border-l
            border-sky-900
            group-hover:border-sky-900
          `,
          rounded: `rounded-md`,
        },
        pills: {
          base: `
            px-3 py-1
          `,
          normal: `
            font-normal
            border-gray-500
            group-hover:border-gray-900`,
          active: `
            font-semibold
            bg-gray-400
            dark:bg-gray-300
            text-gray-900
            z-10

            rounded-md
          `,
        },
      },
    },
    group: {
      base: `
        flex space-x-3 
        mb-2
        font-normal
      `,
      icon: `text-gray-900`,
      content: `text-sm text-gray-900 w-full`,
      variants: {
        text: ``,
        pills: `px-3`,
        border: ``,
      },
    },
  },

  /*
   * modal
   */
  modal: {
    base: `
      relative
      bg-gray-100 dark:bg-gray-300
      my-4
      border border-gray-300 dark:border-gray-500
      rounded-md 
      shadow-xl 
      data-open:animate-overlay-show 
      data-closed:animate-overlay-hide  
      
    `,
    header: `
      bg-gray-200 dark:bg-gray-400
      space-y-1 py-3 px-4 sm:px-5 
      border-b border-gray-300 dark:border-gray-500
    `,
    footer: `
      flex justify-end gap-2
      py-3 px-5 
      border-t border-gray-300 dark:border-gray-500
    `,
    size: {
      tiny: `sm:align-middle sm:w-full sm:max-w-xs`,
      small: `sm:align-middle sm:w-full sm:max-w-sm`,
      medium: `sm:align-middle sm:w-full sm:max-w-lg`,
      large: `sm:align-middle sm:w-full max-w-xl`,
      xlarge: `sm:align-middle sm:w-full max-w-3xl`,
      xxlarge: `sm:align-middle sm:w-full max-w-6xl`,
      xxxlarge: `sm:align-middle sm:w-full max-w-7xl`,
    },
    overlay: `
      fixed
      bg-gray-300
      dark:bg-gray-100
      h-full w-full
      left-0
      top-0 
      opacity-75
      data-closed:animate-fade-out-overlay-bg 
      data-open:animate-fade-in-overlay-bg
    `,
    scroll_overlay: `
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide  
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-gray-300 dark:bg-gray-500
    `,
    content: `px-5`,
  },

  // listbox

  listbox: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      text-gray-600
      dark:text-gray-700 
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-gray-900
      focus:ring-gray-400
      ${defaults.placeholder}
      indent-px
      transition-all
      bg-none
    `,
    container: 'relative',
    label: `truncate`,
    variants: {
      standard: `
        bg-gray-100
        border border-gray-700
        aria-expanded:border-gray-900
        aria-expanded:ring-gray-400
        aria-expanded:ring-2
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    options_container_animate: `
      transition
      data-open:animate-slide-down 
      data-open:opacity-1
      data-closed:animate-slide-up
      data-closed:opacity-0
    `,
    options_container: `
      bg-gray-100 dark:bg-gray-300 
      shadow-lg 
      border border-solid 
      border-gray-100 dark:border-gray-600 max-h-60 
      rounded-md py-1 text-base 
      sm:text-sm z-10 overflow-hidden overflow-y-scroll
      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,
    with_icon: 'pl-10',
    addOnBefore: `
    w-full flex flex-row items-center space-x-3
    `,
    size: {
      ...default__padding_and_text,
    },
    disabled: `opacity-50`,
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
    chevron_container:
      'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    chevron: 'h-5 w-5 text-gray-600',
    option: `
      w-listbox
      transition cursor-pointer select-none relative py-2 pl-3 pr-9 
      text-gray-600
      dark:text-gray-700
      text-sm
      focus:bg-gray-200 dark:focus:bg-gray-500
      focus:text-gray-800
      border-none
      focus:outline-none
    `,
    option_active: `text-gray-900 bg-gray-200`,
    option_disabled: `cursor-not-allowed opacity-50`,
    option_inner: `flex items-center space-x-3`,
    option_check: `absolute inset-y-0 right-0 flex items-center pr-3 text-sky-900`,
    option_check_active: `text-sky-900`,
    option_check_icon: `h-5 w-5`,
  },
  collapsible: {
    content: `
      data-open:animate-slide-down-normal
      data-closed:animate-slide-up-normal
    `,
  },

  inputErrorIcon: {
    base: `
      flex items-center 
      right-3 pr-2 pl-2 
      inset-y-0 
      pointer-events-none
      text-red-900
    `,
  },

  inputIconContainer: {
    base: `
    absolute inset-y-0 
    left-0 pl-3 flex 
    items-center pointer-events-none
    text-gray-900
    `,
  },

  // Icon

  icon: {
    container: `flex-shrink-0 flex items-center justify-center rounded-full p-3`,
  },

  loading: {
    base: `relative`,
    content: {
      base: `transition-opacity duration-300`,
      active: `opacity-40`,
    },
    spinner: `
      absolute
      text-sky-900 animate-spin
      inset-0
      m-auto
    `,
  },
}
