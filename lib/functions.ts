export async function getPosts(page: number = 1) {
  try {
    const posts = await fetch(
      `https://gregrickaby.com/wp-json/wp/v2/posts?categories=3&context=embed&page=${page}`
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
      `https://gregrickaby.com/wp-json/wp/v2/media/${id}`
    );

    if (!featuredImage.ok) {
      throw Error(featuredImage.statusText);
    }

    return await featuredImage.json();
  } catch (error) {
    console.error(error);
  }
}
