# react-state-builder

> A simple framework for building your application state 

[![NPM](https://img.shields.io/npm/v/react-state-builder.svg)](https://www.npmjs.com/package/react-state-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/LSVH/react-state-builder.svg?branch=master)](https://travis-ci.com/LSVH/react-state-builder)

## Install

```bash
npm install --save react-state-builder
```

## Usage

```tsx
import * as React from 'react'
import createReactStateBuilder, {onLoadAction} from 'react-state-builder'

export const [context, Provider] = createReactStateBuilder({onInit, onLoad});

function ChildComponent() {
    const {state, dispatch} = React.useContext(context);
    const onClick = () => dispatch(onLoadAction('foo', 'bar'));
    return (
        <div>
            <h1>Current state</h1>
            <code>{JSON.stringify(state)}</code>
            <button onClick={onClick}>Update state</button>
        </div>
    );
}

export default () => (
    <Provider>
        <ChildComponent />
    </Provider>
);
```

## Documentation

The documentation with live examples can be found in [our storybook](https://lsvh.github.io/react-state-builder/).

## Roadmap

* Improve currently implemented conditions at the reducer.
* Add conditions at the reducer for bulk payloads.
* Add the option to skip the condition check before the storing the `payload` in to the state.
* Add option to use a custom condition at `isPayloadAlreadyLoaded()`.
* Add ESLint to enhance the code style.
* Add CI tools and tests.

## License

MIT © [LSVH](https://github.com/LSVH)
