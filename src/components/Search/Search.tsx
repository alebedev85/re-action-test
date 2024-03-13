import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';
import SearchIcon from '../../assest/icons8-search.svg';
import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <Input
        sx={{ '--Input-decoratorChildHeight': '45px' }}
        placeholder="Поиск"
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
            type="button"
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <img
              className={styles.search__icon}
              src={SearchIcon}
              alt="Search Icon"
            />
          </Button>
        }
      />
    </div>
  );
}
