import Image from "next/image";
import styles from "./user.module.css";
import {getUser} from "@/lib/data";

//FETCH DATA WITH AN API
// const fetchData = async(userId: number)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
//     if(!res.ok) {
//         throw new Error("SOmething went wrong, try agian!");
//     }
//     return await res.json();
// }
type Props = {
    userId: string
}
type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    img?: string,
    isAdmin?: boolean
}
const User = async ({userId}: Props) => {
    //FETCH DATA WITH AN API
    //const user = await fetchData(userId);

    //FETCH DATA WITHOUT AN API
    const user: User = await getUser(userId);
console.log(user.img)
  return (
    <div className={styles.container}>
        <Image className={styles.avatar} src={user.img ? user.img : "/noavatar.png"} alt="" width={50} height={50} />
        <span className={styles.title}>Author: {user.name}</span>
        <span className={styles.username}>{user.name ?? "Gautam Govind"}</span>        
    </div>
  )
}

export default User