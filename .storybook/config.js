import { configure } from '@storybook/react';

// automatically import all files in the books directory
const req = require.context('../books', true, /story\.(js|tsx?)$/);

configure(req, module);
