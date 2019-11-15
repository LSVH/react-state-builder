import { configure, addParameters } from '@storybook/react';
import mdx from "../books/index.mdx";

addParameters({docs: { page: mdx }});

const req = require.context('../books', true, /story\.(js|tsx?)$/);

configure(req, module);
