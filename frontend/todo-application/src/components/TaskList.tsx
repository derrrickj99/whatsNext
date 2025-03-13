import { TaskItem } from './TaskItem'
import { useAppSelector } from '../store/hooks'

export const TaskList = () => {
  const tasks = useAppSelector(state => state.tasks)

  return (
    <div className='w-full mt-5'>
      {tasks.length < 1 ? (
        <div>
          <h1>No tasks</h1>
        </div>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.taskId}
              title={task.taskTitle}
              description={task.taskDescription}
              taskId={task.taskId}
              status={task.status}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
