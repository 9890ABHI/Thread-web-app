// "use client";

import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const results = await fetchPosts(1, 30);
  // console.log(results);

  const user = await currentUser();

  return (
    <>
      {/* <h1 className="head-text text-left">THREADS</h1> */}
      <section className="flex flex-col gap-10">
        {results.posts.length === 0 ? (
          <>
            <p className="no-result">No Threads Found</p>
          </>
        ) : (
          <>
            {results.posts.map((post, i) => (
              <>
                {console.log("community from root dir : ", post.community)}
                <ThreadCard
                  key={i}
                  id={post._id}
                  currentUserId={user?.id || ""}
                  parentId={post.parentId}
                  content={post.text}
                  author={post.author}
                  community={post.community}
                  createdAt={post.createdAt}
                  comments={post.children}
                />
              </>
            ))}
          </>
        )}
      </section>
    </>
  );
}
