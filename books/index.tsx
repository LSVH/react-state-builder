import * as React from 'react'
import {storiesOf} from '@storybook/react';
import {text, withKnobs} from '@storybook/addon-knobs';
import createStateBuilder from "../src";
import mdx from './index.mdx';

const [context, Provider] = createStateBuilder(onInit, onLoad);

function onInit() {
  return {
    a: {
      items: [Math.random()]
    },
    b: {
      identifier: 'id',
      items: [{'id': Math.random()}]
    },
    c: {
      identifier: ['id', 'lang'],
      items: [{'id': Math.random(), 'lang': 'en'}]
    },
  }
}

function onLoad(type: string, payload?: any): any {
  console.log({type, payload});
  return payload;
}

function InitialState() {
  return <p>{`Initial state: ${JSON.stringify(onInit())}`}</p>;
}

function CurrentState({type}: React.PropsWithChildren<{ type?: string }>) {
  const {state} = React.useContext(context);
  const value = type != null && state != null && state.hasOwnProperty(type) ? state[type] : state;
  return <p>{`Current state${type != null ? '.' + type : ''}: ${JSON.stringify(value)}`}</p>;
}

function Button({type, payload}: React.PropsWithChildren<{ type: string, payload: any }>) {
  const {dispatch} = React.useContext(context);
  const onClick = () => dispatch({type, payload});
  return <button onClick={onClick}>{`Load into SubState: ${type}`}</button>
}

storiesOf('createStateBuilder()', module)
  .addDecorator(withKnobs)
  .addParameters({
    docs: {
      page: mdx
    }
  })
  .add('onInit and onLoad', () => (
    <Provider>
      <InitialState/>
      <CurrentState type='a'/>
      <CurrentState type='b'/>
      <CurrentState type='c'/>
    </Provider>
  ))
  .add('load without identifier', () => (
    <Provider>
      <CurrentState type='a'/>
      <Button type='a' payload={text('payload', 'Hello World')}/>
    </Provider>
  ))
  .add('load with string identifier', () => (
    <Provider>
      <CurrentState type='b'/>
      <Button type='b' payload={{
        id: text('payload.id', 'Hello World'),
      }}/>
    </Provider>
  ))
  .add('load with array identifier', () => (
    <Provider>
      <CurrentState type='c'/>
      <Button type='c' payload={{
        id: text('payload.id', 'Hello'),
        lang: text('payload.lang', 'World'),
      }}/>
    </Provider>
  ));
