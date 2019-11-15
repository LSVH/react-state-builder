import * as React from 'react'
import {storiesOf} from '@storybook/react';
import createStateBuilder, {ActionType} from "../src";

async function onInit() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json());
  return {
    posts: {
      identifier: 'id',
      items: posts
    },
  }
}

async function onLoad({type, payload, bulk}: ActionType) {
  if (type === 'posts') {
    const id = payload != null && payload.hasOwnProperty('id') ? payload['id'] : payload;
    if (bulk) {
      return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`).then(r => r.json());
    } else {
      return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r => r.json());
    }
  }
}

function DisplayStateCount(context: React.Context<any>) {
  return () => {
    const {state} = React.useContext(context);
    const count = state != null && state.hasOwnProperty('posts') && state['posts'].items != null
      ? state['posts'].items.length : 0;
    return <p>Number of posts in state: {count}</p>
  }
}

storiesOf('default', module)
  .add('basic', () => {
    const [context, Provider] = createStateBuilder({onInit});
    const ChildWhatAccessesState = DisplayStateCount(context);

    function ChildWhatAddsToState() {
      const {dispatch} = React.useContext(context);
      const onClickSingle = () => dispatch({type: 'posts', payload: ['foo']});
      const onClickMultiple = () => dispatch({type: 'posts', payload: ['foo', 'bar'], bulk: true});
      return (
        <>
          <button onClick={onClickSingle}>Add a single post</button>
          <button onClick={onClickMultiple}>Add multiple posts</button>
        </>
      );

    }

    return (
      <Provider>
        <ChildWhatAccessesState/>
        <ChildWhatAddsToState/>
      </Provider>
    );
  })
  .add('using onLoad', () => {
    const [context, Provider] = createStateBuilder({onInit, onLoad});
    const ChildWhatAccessesState = DisplayStateCount(context);

    function ChildWhatAddsToState() {
      const {dispatch} = React.useContext(context);
      const onClickSingle = () => dispatch({type: 'posts', payload: 11});
      const onClickMultiple = () => dispatch({type: 'posts', bulk: true});
      return (
        <>
          <button onClick={onClickSingle}>Add a single post</button>
          <button onClick={onClickMultiple}>Add multiple posts</button>
        </>
      );

    }

    return (
      <Provider>
        <ChildWhatAccessesState/>
        <ChildWhatAddsToState/>
      </Provider>
    );
  });
