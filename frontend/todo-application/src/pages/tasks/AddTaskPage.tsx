'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { TaskSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Popover, PopoverContent } from '@radix-ui/react-popover'
import { PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Link } from 'react-router'
import { useAppDispatch } from '@/store/hooks'
import { addTask } from '@/store/slices/tasks'
import { useState } from 'react'

const TASK_GROUP_LIST_DUMMY = [
  { label: 'Habit', value: 'catergory1' },
  { label: 'Routine', value: 'catergory2' },
  { label: 'Projects', value: 'catergory3' }
]
const AddTaskPage = () => {
  const dispatch = useAppDispatch()
  const [calenderOpen, setCalendarOpen] = useState(false)
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      taskId: 'temp',
      taskTitle: '',
      taskDescription: '',
      taskGroup: '',
      duration: 1,
      dueDate: format(new Date(), 'dd/MM/yyyy'),
      priority: '1',
      status: false
    }
  })

  function handleDateSelect(date: Date | undefined) {
    if (!date) return
    const formattedDate = format(date, 'dd/MM/yyyy')
    form.setValue('dueDate', formattedDate)
    setCalendarOpen(false)
  }
  /// FIX!: Add new task has an issue on adding. Date format problem
  function submitHandler(values: z.infer<typeof TaskSchema>) {
    dispatch(addTask(values))
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField
          control={form.control}
          name='taskTitle'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='taskDescription'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='taskGroup'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Task Group</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? TASK_GROUP_LIST_DUMMY.find(
                          language => language.value === field.value
                        )?.label
                        : 'Select language'}
                      <span className='material-symbols-outlined'>
                        unfold_more
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {TASK_GROUP_LIST_DUMMY.map(language => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            className='w-full'
                            onSelect={() => {
                              form.setValue('taskGroup', language.value)
                            }}
                          >
                            <div className='w-full'>{language.label}</div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='priority'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Set Priority</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dueDate'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <Popover open={calenderOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      className={cn(
                        'w-full pl-3 text-left',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? field.value : 'Pick a date'}
                      <span className='material-symbols-outlined'>
                        calendar_month
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={
                        field.value
                          ? new Date(field.value.split('/').reverse().join('-'))
                          : undefined
                      }
                      onSelect={date => handleDateSelect(date)}
                      disabled={date => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='duration'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Duration</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='pt-3 w-full flex items-center justify-center gap-2'>
          <Button className='w-full' type='submit'>
            Add
          </Button>
          <Link to='/' className='w-full'>
            <Button className='w-full' variant={'destructive'}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default AddTaskPage
