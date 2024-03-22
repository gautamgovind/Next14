"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { PostType } from "@/app/blog/page";


type Props = {
    post: PostType
}
const Card = ({post}: Props) => {
    const [imageError, setImageError] = useState(false);
  return (
    <div  className={styles.container}>
        <div  className={styles.top}>
            <div  className={styles.imgContainer}>
                {post.img ? 
                    <Image src={post.img}
                    alt="" fill  className={styles.img} 
                /> : <Image src={imageError ? "/Blog1.jpg" : `/blog${post.id}.jpg`}  alt="" fill className={styles.img} onError={() => setImageError(true)} />
                }
            </div>
            <span  className={styles.date}>02/05/2023</span>
        </div>
        <div className={styles.bottom}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post.userId}`}>Read More</Link>
        </div>
    </div>
  )
}

export default Card