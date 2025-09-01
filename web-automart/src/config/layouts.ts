import { LayoutRegistry } from '@nxweb/react';

import { FixedLayout, FluidLayout, MainLayout } from '@layouts/index.js';

export const layouts: LayoutRegistry = new LayoutRegistry({
  default: MainLayout,
  fixed: FixedLayout,
  fluid: FluidLayout
});
