import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';
import { useForm } from 'react-hook-form';
import SearchIcon from '../../assests/icons8-search.svg';
import { SearchPropsType, FormData } from './types';
import styles from './Search.module.scss';

export default function Search({ setText }: SearchPropsType) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { text: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    setText(data.text);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
      <Input
        sx={{ '--Input-decoratorChildHeight': '45px' }}
        placeholder="Поиск"
        type="text"
        required
        {...register('text')}
        endDecorator={
          <Button
            variant="solid"
            color="primary"
            type="submit"
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
    </form>
  );
}
