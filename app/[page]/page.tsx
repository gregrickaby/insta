import { getFeaturedImage, getPosts } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string };
}

export default async function Page({ params }: PageProps) {
  const page = Number(params.page);
  const posts = await getPosts(page);

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
      <nav className="flex justify-between w-full">
        {page > 1 && <Link href={`/${page - 1}`}>⏪ Previous Page</Link>}
        <Link href={`/${page + 1}`}>Next Page ⏩</Link>
      </nav>
    </main>
  );
}
