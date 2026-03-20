import SearchForm from "@/components/SearchForm"

export default function Page() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        AI Travel Planner
      </h1>
      <SearchForm />
    </main>
  )
}