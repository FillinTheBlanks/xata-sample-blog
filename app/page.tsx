import { getXataClient } from "@/src/xata";

const xata = getXataClient();

export default async function Home() {
  const posts = await xata.db.Posts.getAll();
  return (
    <>
    <div className="w-full max-w-5xl mt-16">No posts</div>
    </>
  );
}
