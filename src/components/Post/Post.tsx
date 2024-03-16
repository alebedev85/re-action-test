import { Card, Typography, CardContent } from '@mui/joy';
import { HighlightedText } from '../HighlightedText/HighlightedText';
import { useAppSelector } from '../../redux/store';
import { selectParams } from '../../redux/slices/postsSlice';
import styles from './Post.module.scss';

type PostPropsType = {
  id: number;
  title: string;
  body: string;
};

export default function Post({ id, title, body }: PostPropsType) {
  const { query } = useAppSelector(selectParams);
  return (
    <div className={styles.post}>
      <Card>
        <Typography level="body-sm">
          <HighlightedText text={`${id}`} search={query} />
        </Typography>
        <Typography level="title-lg">
          <HighlightedText text={title} search={query} />
        </Typography>
        <CardContent orientation="horizontal">
          <div>
            <Typography fontSize="sm" fontWeight="lg">
              <HighlightedText text={body} search={query} />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
