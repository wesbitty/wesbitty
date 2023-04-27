import copyToClipboard from 'copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import { styled } from '@storybook/theming';
import { TooltipNote } from '../Tooltip/TooltipNote';
import WithTooltip from '../Tooltip/WithTooltip';

const Tooltip = styled(WithTooltip)`
  cursor: pointer;
`;

interface ClipboardProps {
  children: React.ReactNode | ((copied: boolean) => React.ReactNode);
  toCopy?: string;
  getCopyContent?: () => string;
  copyOptions?: any;
  renderCopiedTooltip?: () => React.ReactNode;
  renderUncopiedTooltip?: () => React.ReactNode;
  resetTimeout?: number;
}

export const Clipboard = ({
  children,
  toCopy,
  getCopyContent,
  copyOptions,
  resetTimeout,
  renderCopiedTooltip,
  renderUncopiedTooltip,
  ...props
}: ClipboardProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (copied && timeoutId) {
      clearTimeout(timeoutId);
    }
    if (copied && resetTimeout) {
      timeoutId = setTimeout(() => setCopied(false), resetTimeout);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  const copy = () => {
    if (copyToClipboard(toCopy || getCopyContent(), copyOptions)) {
      setCopied(true);
    }
  };

  return (
    <Tooltip
      onClick={copy}
      hasChrome={false}
      tooltip={copied ? renderCopiedTooltip : renderUncopiedTooltip}
      {...props}
    >
      {typeof children === 'function' ? children(copied) : children}
    </Tooltip>
  );
};

Clipboard.defaultProps = {
  copyOptions: undefined,
  renderCopiedTooltip: () => <TooltipNote note="Copied" />,
  renderUncopiedTooltip: () => <TooltipNote note="Copy to clipboard" />,
  resetTimeout: 3000,
  toCopy: undefined,
  getCopyContent: () => '',
};
