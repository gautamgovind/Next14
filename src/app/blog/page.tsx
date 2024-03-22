import Card from "@/components/card/Card"
import styles from "./blog.module.css";
import {getPosts} from "@/lib/data"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "See different blogs",
};

export type PostType = {
  userId: string,
  id: string,
  title: string,
  body: string,
  img?: string,
  slug?: string,
  createdAt?: Date
}
// const fetchData = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
//   if(!res.ok) {
//     throw new Error("Something went wrong, try agian!");
//   }
//   return await res.json();
// }
const BlogPage = async () => {
  // FETCH DATA WITH AN API
  //const posts: PostType[] = await fetchData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post,i)=>(
        <div className={styles.post} key={i}>
          <Card post={post} />
        </div> 
      ))}
        
    </div>
  )
}

export default BlogPage