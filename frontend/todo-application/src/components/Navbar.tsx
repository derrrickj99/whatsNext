import { Link } from 'react-router'

export default function Navbar () {
  return (
    <div className='flex items-center justify-start bg-primary w-full p-5'>
      <Link to='/'>
        <span className='text-white'>WuzNext?</span>
      </Link>{' '}
    </div>
  )
}
