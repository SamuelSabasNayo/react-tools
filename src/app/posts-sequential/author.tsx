type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user: Author = await response.json();

  return (
    <div>
      Written by:{" "}
      <span>
        {user.name}
      </span>
    </div>
  );
}