import * as React from 'react'
import {storiesOf} from '@storybook/react';
import createStateBuilder, {onLoadAction, OnLoadActionType, StateType} from "../src";

async function onInit(): Promise<StateType> {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json());
  return {
    posts: {
      identifier: 'id',
      items: posts
    },
  }
}

async function onLoad({property, payload, bulk}: OnLoadActionType): Promise<any> {
  if (property === 'posts') {
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
    const posts = state != null && state.hasOwnProperty('posts') ? state['posts'] : {};
    const count = posts.items != null ? posts.items.length : 0;
    const loading = posts.loading != null ? posts.loading : false;
    return <p>{`Loading posts: ${loading}`}<br/>{`Number of posts in state: ${count}`}</p>
  }
}

storiesOf('default', module)
  .add('basic', () => {
    const [context, Provider] = createStateBuilder({onInit});
    const ChildWhatAccessesState = DisplayStateCount(context);

    function ChildWhatAddsToState() {
      const {dispatch} = React.useContext(context);
      const onClickSingle = () => dispatch(onLoadAction('posts', ['foo']));
      const onClickMultiple = () => dispatch(onLoadAction('posts', ['foo', 'bar'], true));
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
      const onClickSingle = () => dispatch(onLoadAction('posts', 11));
      const onClickMultiple = () => dispatch(onLoadAction('posts', null, true));
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
