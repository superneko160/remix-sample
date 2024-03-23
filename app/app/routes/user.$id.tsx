import { useLoaderData } from '@remix-run/react'

export async function loader({ params }: LoaderFunctionArgs) {
  return params.id
}

// http://localhost:3000/users/xxx
export default function Index() {
  const userId = useLoaderData()

  return <div>Params: {userId}</div>
}
