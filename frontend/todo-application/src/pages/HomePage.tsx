import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Link } from 'react-router'

export default function HomePage () {
  return (
    <div className='flex flex-col gap-3 items-center justify-start p-3'>
      <div className='p-2 w-full flex item-center justify-start border border-purple-500 rounded-lg'>
        <div className='grow h-24'>Completion - 80%</div>
        <div>Rewards</div>
      </div>
      <div className='flex w-full items-center justify-between'>
        <Button asChild>
          <Link to='/tasks'>All Tasks</Link>
        </Button>
        <Button asChild>
          <Link to='/tasks/add'>Add Task</Link>
        </Button>
      </div>
      <Card className='flex flex-row items-center justify-between w-full'>
        <CardHeader>
          <CardTitle>Task Group Title</CardTitle>
          <CardDescription>Task Title</CardDescription>
        </CardHeader>
        <CardContent>
          <input type='checkbox'></input>
        </CardContent>
      </Card>
    </div>
  )
}
