import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';
import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <Input
        sx={{ '--Input-decoratorChildHeight': '45px' }}
        placeholder="mail@mui.com"
        type="email"
        required
        // value={data.email}
        // onChange={(event) =>
        //   setData({ email: event.target.value, status: 'initial' })
        // }
        // error={data.status === 'failure'}
        endDecorator={
          <Button
            variant="solid"
            color="primary"
            // loading={data.status === 'loading'}
            type="submit"
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Subscribe
          </Button>
        }
      />
    </div>
  );
}
