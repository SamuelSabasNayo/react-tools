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
        <Link href="/blogs">Blog</Link>
        <Link href="/products">Products</Link>
      </div>
    </main>
  )
}