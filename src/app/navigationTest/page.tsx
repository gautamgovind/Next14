"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const pathNmae = usePathname(); // gives path name
    const searchParams = useSearchParams() // give the query 

    const query = searchParams.get("q")

    const handleClick = ()=>{
        console.log("clicked");
        router.push("/about"); // navigate to about page
        router.refresh() // refresh the current page
        router.back() // open up the previous page
        router.forward() // open up the next page
    }
  return (
    <div>
        {/* By default it pre-fetch this link for faster navigation */}
        {/* If you want to not prefetch link use prefetch={false} */}
        <Link href="/" prefetch={false}>CHeck click</Link>
        <button onClick={handleClick}>Click and redirect</button>
    </div>
  )
}

export default NavigationTest