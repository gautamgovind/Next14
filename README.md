

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Learning about Next js


## What is Next JS?
Next.js is a React framework for building full-stack web applications
A framework  for building fast, scalable and search engine friendly application.
It is build on top of the react

1. Building on Steroids:
    Dynamic & Import Magic: Effortlessly create both static and dynamic content, seamlessly integrating dynamic imports for ultimate flexibility.
    Server-Side Rendering: Leverage getServerSideProps to deliver blazing-fast, fully rendered React apps that love search engines and users alike.

2. Speed that Impresses:
    Automatic Code Splitting & Prefetching: Say goodbye to bloated bundles! Next.js intelligently chunks your code and prefetches key resources, ensuring lightning-fast page loads. ⚡️
    Automatic Compilation & Bundling: No more manual configuration headaches! Next.js handles it all, freeing you to focus on what matters most - building amazing things. 🪄

## Next JS libs and tools: 
# Next JS Framework = lib + tools + convention 
next js comes with complier for transforming and minifying JS code.
next js include its own router unlike react where you have to include npm package react router
command line interface (CLI) for building and start application.
# node js runtime - execute JS code
There are two ways to execute JS 
    1. web browser (with in a browser on client side)
    2. node.js runtime (with in a node js runtime on the server)
can build full-stack application with FE and BE
This node JS run time allows us to render our components on the server ans send it to client. 

# Date rendering:
    By default next JS caches the api responses and it increases performances. when you switch the pages it will much faster.
    If you don't want to cache, you can pass second parameter in fetch {cache: "no-store}
    If you want to refetch new data in certain interval use second parameter as next {next: {revalidate: 3600}}
# Server Side data fetching- get data instantly and render it without any delay  

## Next.js supports rendering
    1. Dynamic Rendering - Render at request time.
    2. Static Rendering - Render at build time.
# To convert server side component to client-side, just add "use-client" on top of the file

## Static site generation
With next js we can pre-render certain pages and components which has static data. We just render them once and server them whenever needed.
# other advantages:
    server-side-rendering,
    pre-rendering for static data called STATIC SITE GENERATION.

4. API & Routing Powerhouse:

    API Middleware: Take control of your API routes with custom middleware functions, unlocking a world of possibilities for data manipulation and authorization. ️
    Routing Made Easy: Next.js's intuitive routing system makes navigation a breeze, allowing you to create complex UIs with elegant simplicity. ️

5. Accessibility & SEO Champion:

    Accessibility-First: Build inclusive web experiences that everyone can enjoy, thanks to Next.js's commitment to accessibility standards.
    SEO Hero: Improve your website's search engine ranking with pre-generated HTML content that search engines adore. 


## Data Fetching
    Client side data fetching e.g. [useState, useEffect], react-query
    Client side rendering cause
        Large bundle,
        Resource intensive,
        No SEO,
        Less Secure
        Extra round trip to server  


## Routing 
    app folder (also called app router) container for routing system based on the file system.
    Next JS routing is based on convention not configuration. 

# App folder - It contains all the routers of the pages 
    If you have dynamic routes - use [slug/id/name/etc] and then under that folder create page.jsx/page.tsx 
    To group multiple page we can use (name) to combine them at one place and it won't be part of route. 
# New app router is different from old one
    Now, other file won't be accessible through browser (publically)
    You can created nested route by just creating nested folder (files)


## Hyderation issue: 
# even if you use "use client", initial render would be on the server-side. 
Next JS checks your component on the server first and then on the client, and this leads to a HYDERATION problem
such as if you are using math.random() on the client sider page and using that value somewhere in your applicaiton
it won't match with server-rendered HTML
# to prevent this, we have few solutions:
1. use useEffect hook - control by state and fetch value on the client side and use that variable conditionally
2. Disable server side rendering on specific components - suppressHydrationWarning
3. use dynamic imported client side component

# client side and server side component do not affect each other.



app directory should include only routes for simplicity and better readibility but ofcourse you can add components as well.


Rendering:
1. Server-side rendering (SSR): send user request to server and after getting request our server sends page to the browser and user can see the page immediately but this page won't be interactive as it would have only HTML.
    + The initial page load is faster
    + Better with old devices and slow internet connections
    + Better SEO
    + More secure (like api token on server)
    - Less interaction: Use effect such as Server component can't have interactivity. 
        Hence, adding any effect will cause error. They can't handle click, change etc.
    - Increase server load
    - Slower subsequent page loads
    - Hard to manage states
    - Listen to browser events
    - Access browser APIs (like local storage, session storage etc.)

2. Client-side rendering(CSR): After receiving request from user our server sends an empty page(HTML), and whole JS bundle and user browser has to render this page not the server. Initial load is slower then SSR.
However, as soon as your page is available it will be interactive as well.
+ Better performance after intial load
    + Less server Load
    + Best for the user interactivity
    - May affect SEO
    - Slower initial load
    - Dependency on client resources
    - Less secure 

# So, in real-world scenario we use mixture of server side rendering and client side rendering
    All component inside "app folder" is by default a "server component" and render on the server

# Next Js uses server side rendering, when you create a component or page it would be server-rendered by default.
    In real world - Mostly we use hybrid of CSR and SSR

# Look and Feel

    1. Layouts: Create reusable layouts: Develop central layout components that define the overall structure of your pages.

    2. Image Optimization and replacing <img> elements with next/image components



    Automatic optimization: Next.js automatically optimizes images for different devices and screen sizes, improving website performance.
    Lazy loading: Images are only loaded when they come into view, further enhancing page load speed.
    Improved user experience: Faster loading times lead to a smoother and more enjoyable user experience.

## Caching
    Store data somewhere that is faster to accesss.
# Data source
    1. Memory (fastest)
    2. File system (faster)
    3. Network 

# Next.js comes with built in data-cache
    Whenever we use fetch in next.js, it store the result automatically in its data-cache
        which is based on a file-system.
    However, we have full control on this data-caching behaviour, if data changes frequently,
        cahing can be disable or treat data-in-cache for certain period of time.
# Note:
    This caching behavior is only implemented in the FETCH function and not avialble for third party
        like axios etc.
# Next Js does not show our images directly instead it cached those images and load in UI after optimization.
automatically responsive image
by default you can use 
<Image
    loader={imageLoader} // to optimize your image seperately and add your own loader
    alt=""
    src={"/"}
    fill
    sizes="100vw"
    style{{objectfit: cover}}
    placeholder={blur}

/>
You can mention the protocol inside nextConfig for accessing external image 
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }]}}





## .module.css Files:
.module.css files are often used in conjunction with CSS Modules in React development. CSS Modules provide a mechanism for local scoping of styles within specific components, making them more modular and reducing the risk of conflicts. Each .module.css file is associated with a particular component, and the styles defined within it only apply to the elements within that component. This scoping mechanism greatly improves the maintainability and reusability of styles.

Benefits of .module.css:
1. Local Scoping: By using .module.css files, styles are confined to the component they are associated with, preventing unintended style clashes. This is particularly useful in larger projects with multiple developers working simultaneously.

2. Encapsulation: CSS Modules encourage encapsulation of styles within components, leading to better modularity. Each component becomes self-contained, making it easier to understand, modify, and maintain.

3. Unique Class Names: CSS Modules automatically generate unique class names for styles defined within a .module.css file. This ensures that styles are applied correctly and avoids class name collisions across components.

4. Improved Organization: By using a specific naming convention (e.g., .module.css), it becomes easier to differentiate between regular CSS files and CSS Modules. This organization helps in managing and updating styles efficiently.

## SEO
- Next js gives an option (metadata) to add title and description to everypage to improve seo.
    export const metadata: Metadata = {
    title: {
        default: "Learn Next Js",
        template:" %s | Next.js 14"
    },
    description: "Learning next js",
    };
- You can dynamically add common title in each pages by adding template in main layout's metadat.
- Dynamically you can fetch title and description to provide meta-data to the dynamic pages
    export const generateMetaData = async({params}: {params: {slug: string}})=>{
        const {slug} = params;
        const post = await getPost(slug);
        console.log("single client post", post, post.body);
        return {
            title: post.title,
            description: post.body
        }
    }

    
## React 19 

# React compiler - Manual memoization is reasonable compromise.
can get rid of memo, useMemo, useCallback, forwardRef
const ComponentName(props, ref)=>{} - ref can be passed as second parameter in any components
no need of {lazy}/react.lazy
{use} = asynchornously load things (JS file, promioses)

action {search} - action will take all of the form data and can run on the server

"use client", "use server" are used to make 

now can run on client and server both with the help of hooks like useFormStatus, useFormState (to access the current state and response of the form action).
useOptimistic - managing optimistic state updates

<title>, <meta>, <link> - can be used anywhere in the application

