import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }: IBaseTemplate) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
