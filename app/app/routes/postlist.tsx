import { json } from '@remix-run/node'
import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import { Header } from '../components/header'
import { getPostings } from '../utils/getdata'

export async function loader() {
  const postings = await getPostings()
  return json({ postings })
}

// http://localhost:3000/postlist
export default function Index() {
  const { postings } = useLoaderData<typeof loader>()

  return (
    <div>
      <Header />
      <div className='flex justify-between mx-5 my-5'>
        {/* 記事一覧 */}
        <div className='w-2/5'>
          {postings.map(posting => (
            <NavLink
              key={posting.id}
              preventScrollReset
              to={`/postlist/${posting.id}`}
              className={({ isActive }) =>
                `hover:shadow-lg cursor-pointer p-8 mb-3 w-full rounded-md bg-white block
            ${
              isActive ? 'border-2 border-blue-500' : 'border border-gray-300'
            } `
              }
            >
              <h2>{posting.title}</h2>
            </NavLink>
          ))}
        </div>

        {/* 記事詳細 */}
        <div className='w-7/12'>
          <div className='sticky top-5 pb-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
