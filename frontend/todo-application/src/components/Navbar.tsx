import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className='flex gap-3 items-center justify-start bg-primary w-full p-5'>
      <NavLink to='/'>
        <span className='text-white font-bold pr-3'>WuzNext?</span>
      </NavLink>
      <NavLink to='/tasks' className={({ isActive }) => isActive ? "bg-white text-black" : "text-white"}>
        <span>Tasks</span>
      </NavLink>
      <NavLink to='/groups' className={({ isActive }) => isActive ? "bg-white text-black" : "text-white"}>
        <span>Groups</span>
      </NavLink>
    </nav>
  )
}
