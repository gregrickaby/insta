import Photo from '@/components/Photo'
import {getFeaturedImage, getPosts} from '@/lib/functions'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export default async function Home() {
  const page = 1
  const posts = await getPosts()

  if (!posts) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-8">
      {posts &&
        posts.map(async (post: any) => {
          const featuredImage = await getFeaturedImage(post.featured_media)

          return (
            <article key={post.id} className="flex flex-col items-center">
              {featuredImage && (
                <Photo
                  alt={post.title.rendered}
                  height={featuredImage.media_details.height}
                  link={post.link}
                  src={featuredImage.source_url}
                  title={post.title.rendered}
                  width={featuredImage.media_details.width}
                />
              )}
            </article>
          )
        })}
      <Link href={`/${page + 1}`}>Load More</Link>
    </main>
  )
}
