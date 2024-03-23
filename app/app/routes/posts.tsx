import { useLoaderData } from '@remix-run/react'

export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return posts
}

// http://localhost:3000/posts
export default function Index() {
  const posts = useLoaderData()

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
