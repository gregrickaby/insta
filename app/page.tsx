import Image from "next/image";
import { getPosts, getFeaturedImage } from "@/lib/functions";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const page = 1;
  const posts = await getPosts();

  if (!posts) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts &&
        posts.map(async (post: any) => {
          const featuredImage = await getFeaturedImage(post.featured_media);

          return (
            <article key={post.id} className="flex flex-col items-center">
              {featuredImage && (
                <a
                  href={post.link}
                  rel="noreferrer"
                  target="_blank"
                  title={post.title.rendered}
                >
                  <Image
                    alt={featuredImage.alt_text}
                    height={featuredImage.media_details.sizes.medium.height}
                    src={featuredImage.media_details.sizes.medium.source_url}
                    width={featuredImage.media_details.sizes.medium.width}
                  />
                </a>
              )}

              <a
                href={post.link}
                rel="noreferrer"
                target="_blank"
                title={post.title.rendered}
              >
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </a>
            </article>
          );
        })}
      <Link href={`/${page + 1}`}>Load More</Link>
    </main>
  );
}
