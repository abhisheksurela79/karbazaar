import Feed from "@/app/feed/Feed";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Feed searchParams={searchParams} />
  );
}