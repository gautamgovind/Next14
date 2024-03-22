import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.testContainer}>
        <h1 className={styles.title}>Learn Next Js</h1>
        <p className={styles.desc}>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact me</button>
        </div>
        <div className={styles.brands}>
          <Image src="https://www.datocms-assets.com/48401/1644864897-next-framework.jpeg?fit=max&w=900" height={300} width={500} alt="" className={styles.brandImg} />
        </div>
      </div>
      
      <div className={styles.brands}>
        <Image src="/nextjs14.png" height={500} width={500} alt="" className={styles.brandImg} />
      </div>
    </div>
  );
}
