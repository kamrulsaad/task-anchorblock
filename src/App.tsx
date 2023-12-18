import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='flex justify-center items-center h-screen mx-auto'>
      <Outlet />
    </div>
  )
}

export default Main
