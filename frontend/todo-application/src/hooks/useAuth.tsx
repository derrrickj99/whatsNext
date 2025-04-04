import { useEffect, useState } from "react"
import { useAppSelector } from "@/store/hooks"
import { useNavigate } from "react-router"
import { Task } from "@/typing";
import { TASKLIST } from "@/dummy";
export default function useAuth() {

  const [data, setData] = useState<Task[]>();
  const [loading, setLoading] = useState(false);
  const session = useAppSelector((state) => state.user).sessionId != ""

  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    if (!session)
      navigate('/login')
    else {
      const timer = setTimeout(() => {
        console.log('timer triggered')
        setData(TASKLIST)
      }, 2000)
      clearTimeout(timer)
    }
    setLoading(false)
  }, [data, session])
  return [data, loading]
}
