// If you are adding any user interaction, your component should be a client component
"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/NavLink";
import Image from "next/image";

export type LinkType = {title:string, path: string}

const links: LinkType[] = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

const session = true;
const isAdmin = true;



export const Links = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link,index) =>(
                <NavLink navItem={link} key={index} />
            ))}
            {
                session ? 
                (<>
                    {isAdmin && <NavLink navItem={{title:"Admin", path:"/admin"}} />}
                    <button className={styles.logout}>Logout</button>
                </> ) : (<NavLink navItem={{title:"Login", path:"/login"}} />)
            }
        </div>
        <Image src="/menu.png" height={30} width={30} alt="" className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)} />
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link,index) =>(
                <NavLink navItem={link} key={index} />
            ))}
            </div>
        }
    </div>
    
  )
}
