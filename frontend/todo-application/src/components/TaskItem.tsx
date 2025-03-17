import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { removeTask } from '../store/slices/tasks'

type Props = {
  taskId: string
  title: string
  description: string
  status: boolean
}
export const TaskItem = ({ taskId, title, description, status }: Props) => {
  const [checked, setChecked] = useState(status)
  const dispatch = useAppDispatch()

  function checkedHandler () {
    setChecked(!checked)
  }

  function deleteClickHandler () {
    dispatch(removeTask(taskId))
  }
  return (
    <li className='flex items-center justify-between mb-2.5'>
      <div
        className={
          'flex flex-col items-start justify-center ' +
          (checked ? 'line-through' : '')
        }
      >
        <h2 className='text-sm md:text-lg lg:text-xl'>{title}</h2>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='flex gap-2.5 items-center justify-center'>
        <input
          type='checkbox'
          className='size-5'
          onChange={checkedHandler}
        ></input>
        <button
          className='border border-red-600 rounded-full py-2 px-5 hover:bg-red-600 hover:text-white'
          onClick={deleteClickHandler}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
