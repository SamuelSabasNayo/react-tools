type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  return response.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

  return response.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <div>
          <h2>Posts</h2>
          <div>
            {posts.map((post:Post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Albums</h2>
          <div>
            {albums.map((album: Album) => (
              <div key={album.id}>
                <p>{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};