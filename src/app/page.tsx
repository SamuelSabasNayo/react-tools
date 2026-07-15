import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1
          className="text-blue-800"
        >
          Welcome Home!
        </h1>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/blogs">Blog</Link>
        </div>
        <div>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link href="/products">Products</Link>
        </div>
        <div>
          <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        </div>
        <div>
          <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        </div>
      </div>
    </main>
  )
}