import Header from "@/components/feed/header/Header";
import AvailableCars from "@/components/feed/available-cars/AvailableCars";
import LiveRequirements from "@/components/feed/live-requirements/LiveRequirements";
import Footer from "@/components/feed/footer/Footer";
import LayoutObserver from "@/components/LayoutObserver";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }> | undefined;

export default async function Feed({ searchParams }: { searchParams: SearchParams }) {
  // Safe-guard: If searchParams is undefined, fall back to an empty object
  const params = searchParams ? await searchParams : {};
  
  // Use optional chaining to ensure it never reads properties of undefined
  const activeTab = params?.tab === "requirements" ? "requirements" : "cars";

  return (
    <>
      <LayoutObserver />
      <section>
        <Header activeTab={activeTab} />
        {activeTab === "cars" ? <AvailableCars /> : <LiveRequirements />}
        <Footer />
      </section>
    </>
  );
}