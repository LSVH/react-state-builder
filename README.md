# react-state-builder

> A simple framework for building your application state 

[![NPM](https://img.shields.io/npm/v/react-state-builder.svg)](https://www.npmjs.com/package/react-state-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-state-builder
```

## Usage

```tsx
import * as React from 'react'
import createReactStateBuilder from 'react-state-builder'

export const [context, Provider] = createReactStateBuilder({onInit, onLoad});

function ChildComponent() {
    const {state, dispatch} = React.useContext(context);
    const onClick = () => dispatch({type: 'foo', payload: 'bar'});
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

* Test and improve examples about the `loading` property of a sub state.
* Improve currently implemented conditions at the reducer.
* Add conditions at the reducer for bulk payloads.
* Add the option to skip the condition check before the storing the `payload` in to the state.
* Add option to use a custom condition at `isPayloadAlreadyLoaded()`.
* Refactor naming and distribution of code in general.
* Add ESLint to enhance the code style.
* Add CI tools and tests.

## License

MIT © [LSVH](https://github.com/LSVH)
