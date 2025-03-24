import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { logout } from "@/store/slices/user";

export default function Navbar() {
  const session = useAppSelector((state) => state.user).sessionId
  const dispatch = useAppDispatch()

  function logoutClickHandler() {
    dispatch(logout())
  }
  return (
    <nav className='flex gap-3 items-center justify-start bg-primary w-full p-5'>
      <NavLink to='/' >
        <span className='text-white font-bold pr-3'>WuzNext?</span>
      </NavLink>
      <NavLink to='/tasks' className={({ isActive }) => isActive ? "bg-white text-black" : "text-white"} hidden={session == ""}>
        <span>Tasks</span>
      </NavLink>
      <NavLink to='/groups' className={({ isActive }) => isActive ? "bg-white text-black" : "text-white"} hidden={session == ""}>
        <span>Groups</span>
      </NavLink>
      <Button className="pr-0 grow justify-end" onClick={logoutClickHandler} hidden={session == ""}>
        <span className="material-symbols-outlined">
          logout
        </span>
      </Button>
    </nav>
  )
}
