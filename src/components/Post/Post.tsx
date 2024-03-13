import React from 'react';
import { Card, Typography, CardContent } from '@mui/joy';
import styles from './Post.module.scss';

type PostPropsType = {
  id: number;
  title: string;
  body: string;
};

export default function Post({ id, title, body }: PostPropsType) {
  return (
    <div className={styles.post}>
      <Card>
        <Typography level="body-sm">{id}</Typography>
        <Typography level="title-lg">{title}</Typography>
        <CardContent orientation="horizontal">
          <div>
            <Typography fontSize="sm" fontWeight="lg">
              {body}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
