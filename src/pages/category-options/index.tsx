import type { PageComponent } from '@nxweb/react';

import { CategoryOptionsView } from '@views/category-options/view/index.js';

const CategoryOptionsPage: PageComponent = () => {
  return <CategoryOptionsView />;
};

CategoryOptionsPage.displayName = 'CategoryOptionsPage';
CategoryOptionsPage.layout = 'default';
CategoryOptionsPage.title = 'Category Options';
export default CategoryOptionsPage;
