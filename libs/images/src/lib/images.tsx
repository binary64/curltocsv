import styles from './images.module.css';

/* eslint-disable-next-line */
export interface ImagesProps {}

export function Images(props: ImagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Images!</h1>
    </div>
  );
}

export default Images;
