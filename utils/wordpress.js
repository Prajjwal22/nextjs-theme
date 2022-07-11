const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed&per_page=20");
  const posts = await postsRes.json();
  // console.log(posts)
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getCategories() {
  const categoriesRes = await fetch(BASE_URL + "/categories?_embed&per_page=100");
  const categories = await categoriesRes.json();
  console.log(categories)
  return categories;
}

export async function getCategory(slug) {
  const categories = await getCategories();
  const categoryArray = categories.filter((category) => category.slug == slug);
  const category = categoryArray.length > 0 ? categoryArray[0] : null;
  return category;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}