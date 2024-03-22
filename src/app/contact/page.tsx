import Image from "next/image";
import styles from "./contact.module.css";

import dynamic from "next/dynamic";
import { Metadata } from "next";

const HyderationTestNoSSR = dynamic(()=>import("@/components/HyderationTest"), {ssr: false})

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact me to learn more about Next JS",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
        <div  className={styles.imgContainer}>
            <Image src="https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg" fill alt="" />
        </div>
        <div  className={styles.formContainer}>
            <HyderationTestNoSSR />
            <form action=""  className={styles.form}>
                <input type="" placeholder="Full Name" />
                <input type="" placeholder="Email Address" />
                <input type="" placeholder="Phone Number (Optional)" />
                <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage