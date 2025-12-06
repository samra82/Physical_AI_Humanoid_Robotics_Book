import type {ReactNode} from 'react';
import Lottie from "lottie-react";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
  <div className={styles.heroContainer}>

    {/* LEFT COLUMN */}
    <div className={styles.heroText}>
      <div>
      <Heading as="h1" className={styles.title}>
        {siteConfig.title}
      </Heading>

      <p className={styles.tagline}>
        {siteConfig.tagline}
      </p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro/introduction"
        >
          Start Reading 
        </Link>
      </div>
    </div>

    {/* RIGHT COLUMN (Lottie Animation) */}
    <div className={styles.heroImageWrapper}>
      <Lottie
        animationData={require("@site/static/lottie/robot-animated.json")}
        className={styles.heroLottie}
        loop
      />
    </div>

  </div>
</header>

  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
