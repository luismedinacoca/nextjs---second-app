import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
      <p>
        <Link href="/awesome">Awesome</Link>
      </p>
      <p>
        <Link href="/blog">Blogs</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share a Meal</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
