import React from 'react'
import { ITask } from '@/types/tasks'
import Task from './Task'

type Tasks = {
    tasks: ITask[]
}

const TodoList = ({tasks} : Tasks) => {
    
  return (
    <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr className='bg-base-100'>
                <th>Task </th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    tasks?.map(task => <Task key={task.id} task={task} />)
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoList
