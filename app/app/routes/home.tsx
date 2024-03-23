import { Outlet } from '@remix-run/react'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Outlet />
    </>
  )
}
