/* eslint-disable react/jsx-no-useless-fragment */
import styles from './HighlightedText.module.scss';

type HighlightedTextPropsType = {
  search: string;
  text: string;
};

export function HighlightedText({ search, text }: HighlightedTextPropsType) {
  if (!search) return <>{text}</>;
  const regExp = new RegExp(`${search}`, 'ig');
  const matchValues = text.match(regExp);
  if (!matchValues) {
    return <>{text}</>;
  }
  return (
    <>
      {text.split(regExp).map((str, index, array) => {
        if (index > array.length) {
          return <>{str}</>;
        }
        const matchStr = matchValues.shift();
        return (
          <>
            {str}
            <span className={styles.highlighted}>{matchStr}</span>
          </>
        );
      })}
    </>
  );
}
