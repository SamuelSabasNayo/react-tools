import SkeletonCard from "@/components/skeletonCard";

export default function loading() {
  return (
    // <main className="">
    <div className="max-w-6xl">
      <div 
      className="grid grid-cols-3 gap-8"
      >
        {"abcdefghi".split('').map(i => (
          <SkeletonCard key={i} />
          
        ))}
      </div>
    </div>
    // </main>
  )
}
