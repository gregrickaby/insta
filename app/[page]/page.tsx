import Photo from '@/components/Photo'
import {getFeaturedImage, getPosts} from '@/lib/functions'
import Link from 'next/link'
import {notFound} from 'next/navigation'

interface PageProps {
  params: {page: string}
}

export default async function Page({params}: PageProps) {
  const page = Number(params.page)
  const posts = await getPosts(page)

  if (!posts) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <nav className="flex w-full justify-between">
        {page > 1 && <Link href={`/${page - 1}`}>⏪ Previous Page</Link>}
        <Link href={`/${page + 1}`}>Next Page ⏩</Link>
      </nav>
    </main>
  )
}
