import { TaskList } from '@/components/TaskList'
import { Button } from '@/components/ui/button'

export default function TasksPage () {
  return (
    <div>
      <Button
        className='pb-3 w-full flex items-center justify-between'
        variant={'outline'}
      >
        <span>Search... </span>
        <span className='material-symbols-outlined'>search</span>
      </Button>
      <div>
        <TaskList />
      </div>
    </div>
  )
}
