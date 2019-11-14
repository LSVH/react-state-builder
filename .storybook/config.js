import { configure } from '@storybook/react';

// automatically import all files in the __stories__ directory
const req = require.context('../src/__stories__', true, /\.(js|tsx?)$/);

configure(req, module);
