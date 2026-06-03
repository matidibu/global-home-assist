import SearchForm from "@/components/SearchForm";
import { HomeStaticContent } from "@/components/HomeStaticContent";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";

export default function Page() {
  return (
    <main className="min-h-screen">
      <SearchForm />
      <div className="container mx-auto px-4">
        <AdSenseUnit
          slot={ADSENSE_SLOTS.homepage}
          format="auto"
          className="my-8"
        />
      </div>
      <HomeStaticContent />
    </main>
  );
}