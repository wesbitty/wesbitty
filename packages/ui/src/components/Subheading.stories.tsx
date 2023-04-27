import React from 'react';

import { Subheading } from './Subheading';

export default {
  title: 'Subheading',
  component: Subheading,
};

export const Basic = () => <Subheading>Subheading</Subheading>;

export const Muted = () => <Subheading muted>Subheading</Subheading>;
