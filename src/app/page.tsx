import SearchForm from "@/components/SearchForm";
import { HomeStaticContent } from "@/components/HomeStaticContent";

export default function Page() {
  return (
    <main className="min-h-screen">
      <SearchForm />
      <HomeStaticContent />
    </main>
  );
}