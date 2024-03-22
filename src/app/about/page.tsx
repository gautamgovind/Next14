import Image from "next/image"
import styles from "./about.module.css";

const aboutPage = () => {
    console.log("first load"); // you won't see in browser as it rendered on the server side
  return (

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Next JS</h2>
        <h1 className={styles.title}>
        Next.js is a React framework for building full-stack web applications
        </h1>
        <div className={styles.desc}>
          A framework  for building fast, scalable and search engine friendly application.
          It is build on top of the react

          <p><i>Jsconfig - provides default path and <strong>@</strong> is used to refer the root folder like <strong>src</strong>. </i></p>
        </div>
        <details>
          <summary>Learn more about Next.js</summary>
          <div>
            <h3>By default, Next.js applications use React Server Components. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:</h3>
            <ul>
              <li>
              Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use async/await syntax without reaching out for useEffect, useState or data fetching libraries.
              </li>
              <li>Server Components execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.</li>
              <li>As mentioned before, since Server Components execute on the server, you can query the database directly without an additional API layer.</li>
            </ul>
          </div>
        </details>
        
      </div>
      <div className={styles.imgContainer}>
        <Image 
          src="/about.jpg" 
          fill alt=""
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default aboutPage