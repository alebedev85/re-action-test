import React from 'react';
import Post from '../Post/Post';
import { test } from './data';
import styles from './Posts.module.scss';

export default function Posts() {
  return (
    <div className={styles.posts}>
      {test.map((item) => (
        <Post key={item.id} id={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  );
}
