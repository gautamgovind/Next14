import { PostType } from "@/app/blog/page";
import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

//TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];
// const posts: PostType[] = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];


// DB URL: mongodb+srv://GautamMongoDbTest:<password>@cluster0.dyhqep4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
export const getPosts = async (): Promise<PostType[]>=>{
    try {
      connectToDb();
      const posts = await Post.find();
      return posts;
    } catch(err) {
      console.log(err);
      throw new Error("Failed to fetch Posts!")
    }
}

export const getPost = async (userId: string):Promise<PostType> =>{
  try {
    connectToDb();
    const post = await Post.findOne({userId});
    return post;
  } catch(err) {
    console.log(err);
    throw new Error("Failed to fetch Post!")
  }
}

export const getUser = async (userId: string) => {
noStore();
  try {
    connectToDb();
    const user = await User.findOne({userId});
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

// export const getUsers = async () => {
//   try {
//     connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch users!");
//   }
// };