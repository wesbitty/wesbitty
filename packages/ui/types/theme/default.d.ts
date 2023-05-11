declare const defaultTheme: {
  accordion: {
    variants: {
      default: {
        base: string
        container: string
        trigger: string
        content: string
        panel: string
      }
      bordered: {
        base: string
        container: string
        trigger: string
        content: string
        panel: string
      }
    }
    justified: string
    chevron: {
      base: string
      align: {
        left: string
        right: string
      }
    }
    animate: {
      enter: string
      enterFrom: string
      enterTo: string
      leave: string
      leaveFrom: string
      leaveTo: string
    }
  }
  badge: {
    base: string
    size: {
      large: string
    }
    dot: string
    color: {
      brand: string
      scale: string
      tomato: string
      red: string
      crimson: string
      pink: string
      plum: string
      purple: string
      violet: string
      indigo: string
      blue: string
      cyan: string
      teal: string
      green: string
      grass: string
      brown: string
      orange: string
      sky: string
      mint: string
      lime: string
      yellow: string
      amber: string
      gold: string
      bronze: string
      gray: string
      mauve: string
      slate: string
      sage: string
      olive: string
      sand: string
    }
  }
  alert: {
    base: string
    header: string
    description: string
    variant: {
      danger: {
        base: string
        icon: string
        header: string
        description: string
      }
      warning: {
        base: string
        icon: string
        header: string
        description: string
      }
      info: {
        base: string
        icon: string
        header: string
        description: string
      }
      success: {
        base: string
        icon: string
        header: string
        description: string
      }
      neutral: {
        base: string
        icon: string
        header: string
        description: string
      }
    }
    close: string
  }
  card: {
    base: string
    hoverable: string
    head: string
    content: string
  }
  tabs: {
    base: string
    underlined: {
      list: string
      base: string
      inactive: string
      active: string
    }
    pills: {
      list: string
      base: string
      inactive: string
      active: string
    }
    block: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    scrollable: string
    content: string
  }
  /**
   * @button
   */
  button: {
    base: string
    label: string
    container: string
    type: {
      primary: string
      secondary: string
      default: string
      alternative: string
      outline: string
      dashed: string
      link: string
      text: string
      danger: string
      warning: string
    }
    block: string
    shadow: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    loading: string
    disabled: string
  }
  /**
   * @input
   */
  input: {
    base: string
    variants: {
      standard: string
      error: string
    }
    container: string
    with_icon: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    disabled: string
    actions_container: string
    textarea_actions_container: string
    textarea_actions_container_items: string
  }
  select: {
    base: string
    variants: {
      standard: string
      error: string
    }
    container: string
    with_icon: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    disabled: string
    actions_container: string
    chevron_container: string
    chevron: string
  }
  inputNumber: {
    base: string
    variants: {
      standard: string
      error: string
    }
    disabled: string
    container: string
    with_icon: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    actions_container: string
  }
  checkbox: {
    base: string
    container: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    disabled: string
    label: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    label_before: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    label_after: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    description: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    group: string
  }
  radio: {
    base: string
    hidden: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    variants: {
      cards: {
        container: {
          base: string
          align: {
            vertical: string
            horizontal: string
          }
        }
        group: string
        base: string
        size: {
          tiny: string
          small: string
          medium: string
          large: string
          xlarge: string
        }
        inactive: string
        active: string
        radio_offset: string
      }
      'stacked-cards': {
        container: {
          base: string
          align: {
            vertical: string
            horizontal: string
          }
        }
        group: string
        base: string
        size: {
          tiny: string
          small: string
          medium: string
          large: string
          xlarge: string
        }
        inactive: string
        active: string
        radio_offset: string
      }
      'small-cards': {
        container: {
          base: string
          align: {
            vertical: string
            horizontal: string
          }
        }
        group: string
        base: string
        size: {
          tiny: string
          small: string
          medium: string
          large: string
          xlarge: string
        }
        inactive: string
        active: string
        radio_offset: string
      }
      'large-cards': {
        container: {
          base: string
          align: {
            vertical: string
            horizontal: string
          }
        }
        group: string
        base: string
        size: {
          tiny: string
          small: string
          medium: string
          large: string
          xlarge: string
        }
        inactive: string
        active: string
        radio_offset: string
      }
      list: {
        container: {
          base: string
          size: {
            tiny: string
            small: string
            medium: string
            large: string
            xlarge: string
          }
          align: {
            vertical: string
            horizontal: string
          }
        }
        group: string
        base: string
        size: {
          tiny: string
          small: string
          medium: string
          large: string
          xlarge: string
        }
        active: string
        radio_offset: string
      }
    }
    label: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    label_before: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    label_after: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    description: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    optionalLabel: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      base: string
    }
    disabled: string
  }
  sidepanel: {
    base: string
    header: string
    contents: string
    content: string
    footer: string
    size: {
      medium: string
      large: string
    }
    align: {
      left: string
      right: string
    }
    seperator: string
    overlay: string
    trigger: string
  }
  toggle: {
    base: string
    active: string
    handle_container: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    handle: {
      base: string
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    handle_active: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    disabled: string
  }
  form_layout: {
    container: string
    flex: {
      left: {
        base: string
        content: string
        labels: string
        data_input: string
      }
      right: {
        base: string
        content: string
        labels: string
        data_input: string
      }
    }
    responsive: string
    non_responsive: string
    labels_horizontal_layout: string
    labels_vertical_layout: string
    data_input_horizontal_layout: string
    non_box_data_input_spacing_vertical: string
    non_box_data_input_spacing_horizontal: string
    data_input_vertical_layout: string
    data_input_vertical_layout__align_right: string
    label: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    label_optional: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    description: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    label_before: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    label_after: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    error: {
      base: string
      size: {
        tiny: string
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
  dropdown: {
    trigger: string
    item_nested: string
    content: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      content: string
    }
    arrow: string
    item: string
    label: string
    seperator: string
    misc: string
    check: string
    input: string
    right_slot: string
  }
  popover: {
    trigger: string
    content: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      content: string
    }
    header: string
    footer: string
    close: string
    seperator: string
  }
  menu: {
    item: {
      base: string
      content: {
        base: string
        normal: string
        active: string
      }
      icon: {
        base: string
        normal: string
        active: string
      }
      variants: {
        text: {
          base: string
          normal: string
          active: string
        }
        border: {
          base: string
          normal: string
          active: string
          rounded: string
        }
        pills: {
          base: string
          normal: string
          active: string
        }
      }
    }
    group: {
      base: string
      icon: string
      content: string
      variants: {
        text: string
        pills: string
        border: string
      }
    }
  }
  modal: {
    base: string
    header: string
    footer: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    }
    overlay: string
    scroll_overlay: string
    seperator: string
    content: string
  }
  auth: {
    base: string
    label: string
  }
  /** DIVIDER */
  divider: {
    span: string
    base: string
    vertical: string
    light: string
    no_text: string
    orientation: {
      left: string
      center: string
      right: string
    }
  }
  /** TYPOGRAPHY **/
  typography: {
    title: {
      base: string
      level: {
        1: string
        2: string
        3: string
        4: string
        5: string
      }
    }
    text: {
      base: string
      small: string
      type: {
        secondary: string
        success: string
        warning: string
        danger: string
      }
      disable: string
      underline: string
      strikethrough: string
      mark: string
      code: string
    }
    link: string
  }
  space: {
    base: string
    block: string
    row: string
    col: string
    'wsb-space-y-0': string
    'wsb-space-y-1': string
    'wsb-space-y-2': string
    'wsb-space-y-3': string
    'wsb-space-y-4': string
    'wsb-space-y-5': string
    'wsb-space-y-6': string
    'wsb-space-y-7': string
    'wsb-space-y-8': string
    'wsb-space-y-9': string
    'wsb-space-y-10': string
    'wsb-space-x-0': string
    'wsb-space-x-1': string
    'wsb-space-x-2': string
    'wsb-space-x-3': string
    'wsb-space-x-4': string
    'wsb-space-x-5': string
    'wsb-space-x-6': string
    'wsb-space-x-7': string
    'wsb-space-x-8': string
    'wsb-space-x-9': string
    'wsb-space-x-10': string
    'wsb-minus-space-y-0': string
    'wsb-minus-space-y-1': string
    'wsb-minus-space-y-2': string
    'wsb-minus-space-y-3': string
    'wsb-minus-space-y-4': string
    'wsb-minus-space-y-5': string
    'wsb-minus-space-y-6': string
    'wsb-minus-space-y-7': string
    'wsb-minus-space-y-8': string
    'wsb-minus-space-y-9': string
    'wsb-minus-space-y-10': string
    'wsb-minus-space-x-0': string
    'wsb-minus-space-x-1': string
    'wsb-minus-space-x-2': string
    'wsb-minus-space-x-3': string
    'wsb-minus-space-x-4': string
    'wsb-minus-space-x-5': string
    'wsb-minus-space-x-6': string
    'wsb-minus-space-x-7': string
    'wsb-minus-space-x-8': string
    'wsb-minus-space-x-9': string
    'wsb-minus-space-x-10': string
  }
  listbox: {
    base: string
    container: string
    label: string
    variants: {
      standard: string
      error: string
    }
    options_container_animate: string
    options_container: string
    with_icon: string
    addOnBefore: string
    size: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    disabled: string
    actions_container: string
    chevron_container: string
    chevron: string
    option: string
    option_active: string
    option_disabled: string
    option_inner: string
    option_check: string
    option_check_active: string
    option_check_icon: string
  }
  collapsible: {
    content: string
  }
  inputErrorIcon: {
    base: string
  }
  inputIconContainer: {
    base: string
  }
  icon: {
    container: string
  }
  loading: {
    base: string
    content: {
      base: string
      active: string
    }
    spinner: string
  }
}
export default defaultTheme
