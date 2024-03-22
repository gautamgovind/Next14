import { PropsWithChildren } from "react"



const BlogLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <h3 style={{padding: "1rem 0"}}>Blog Layout</h3>
        {children}
    </div>
  )
}

export default BlogLayout