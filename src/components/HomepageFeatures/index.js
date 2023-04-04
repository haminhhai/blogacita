import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dễ dùng',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Tạo bài viết bằng markdown.
      </>
    ),
  },
  {
    title: 'Nhanh gọn',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Commit file lên git là đã tạo xong bài viết.
      </>
    ),
  },
  {
    title: 'Tha hồ chia sẻ',
    Svg: require('@site/static/img/every-topic.svg').default,
    description: (
      <>
        Chia sẻ mọi lĩnh vực.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
