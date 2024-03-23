import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getPostings } from '../utils/getdata'

export async function loader({ params }: LoaderFunctionArgs) {
  const posting = await getPostings(params.id)

  if (!posting) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ posting })
}

// http://localhost:3000/postlist/xxx
export default function Index() {
  const posting = useLoaderData<typeof loader>()

  return (
    <div className='p-8 mb-3 w-full rounded-md bg-white border-2 border-blue-500'>
      <h2 className='mb-3'>{posting.posting.title}</h2>
      <div>{posting.posting.body}</div>
    </div>
  )
}
