import Link from "next/link"
import { Links } from "./links/Links"
import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>Learn Next.Js</Link>
        <div><Links /></div>
    </div>
  )
}
