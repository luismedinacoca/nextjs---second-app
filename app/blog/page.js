import Link from "next/link";

export default function BlogPage(){
  return (
    <main>
      <h1>The Blog</h1>
      <p><Link href="/blog/first-post">First Post</Link></p>
      <p><Link href="/blog/second-post">Second Post</Link></p>
    </main>
  )
}