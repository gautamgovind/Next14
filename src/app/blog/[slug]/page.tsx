import Image from "next/image";
import styles from "./singlePost.module.css";
import User from "@/components/user/User";
import { PostType } from "../page";
import { Suspense } from "react";
import {getPost} from "@/lib/data"

export const generateMetaData = async({params}: {params: {slug: string}})=>{
    const {slug} = params;
    const post: PostType = await getPost(slug);
    console.log("single client post", post, post.title);
    return {
        title: post.title,
        description: post.body
    }
}


//FETCH DATA WITH AN API
// const fetchData = async(slug: number)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//     if(!res.ok) {
//         throw new Error("SOmething went wrong, try agian!");
//     }
//     return await res.json();
// }

const SinglePost = async ({params, searchParams}: {params: {slug: string}; searchParams: {}}) => {
    const {slug} = params;
    //FETCH DATA WITH AN API
    //const post: PostType = await fetchData(slug);

    //FETCH DATA WITHOUT AN API    
    const post: PostType = await getPost(slug);
    const blogImg = post?.img ? post.img : "/Blog1.jpg";
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image  className={styles.img} src={blogImg} fill alt="" />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{post?.title}</h1>
            <div className={styles.detail}>
                {post?.userId &&  
                    <Suspense fallback={<div>Loading...</div>}>
                        <User userId = {post.userId} />
                    </Suspense>
                }
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published:</span>
                    <span className={styles.detailValue}>{post?.createdAt?.toDateString() ?? new Date().toDateString()}</span>
                </div>
            </div>
            <div className={styles.detailText}>
                {post?.body}
            </div>
        </div>
    </div>
  )
}

export default SinglePost