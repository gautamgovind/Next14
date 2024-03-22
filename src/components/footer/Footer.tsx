import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Managed by Gautam</div>
      <div className={styles.text}>Learning and sharing next js</div>
    </div>
  )
}

export default Footer