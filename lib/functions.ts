export async function getPosts() {
  try {
    const posts = await fetch(
      `https://gregrickaby.com/wp-json/wp/v2/posts?categories=3&per_page=20`,
      { next: { revalidate: 60 } }
    );

    if (!posts.ok) {
      throw Error(posts.statusText);
    }

    return await posts.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getFeaturedImage(id: number) {
  try {
    const featuredImage = await fetch(
      `https://gregrickaby.com/wp-json/wp/v2/media/${id}`,
      { next: { revalidate: 120 } }
    );

    if (!featuredImage.ok) {
      throw Error(featuredImage.statusText);
    }

    return await featuredImage.json();
  } catch (error) {
    console.error(error);
  }
}
