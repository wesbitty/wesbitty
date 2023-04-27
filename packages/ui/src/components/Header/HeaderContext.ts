import { createContext } from 'react';
import { breakpoint } from '../Shared/styles';

interface HeaderContextInterface {
  navBreakpoint: number;
  inverse: boolean;
}

export const defaultHeaderContext = {
  navBreakpoint: breakpoint,
  inverse: false,
};

export const HeaderContext = createContext<HeaderContextInterface>(defaultHeaderContext);
