"use client"
import Link from "next/link";
import styles from "./navlinks.module.css";
import { LinkType } from "../Links";
import { usePathname } from "next/navigation";


type Props = {
  navItem: LinkType
}

const NavLink = ({navItem}:Props) => {
  const pathName = usePathname();
  return (    
      <Link href={navItem.path} className={`${styles.container} ${pathName === navItem.path && styles.active}`}>{navItem.title}</Link>    
  )
}

export default NavLink