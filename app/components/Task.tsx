"use client"
import { ITask } from '@/types/tasks'
import React, { useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './modal'
import { deleteTodo } from '@/apis'
import { useRouter } from 'next/navigation'

type PropType = {
    task: ITask
}

const Task = ({task} : PropType ) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleDelete = () => {
    deleteTodo(task)
    router?.refresh()
  }

  return (
    <tr>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-5 '>
            <FiEdit onClick={() =>setIsModalOpen(true)} className="text-blue-500 cursor-pointer" />
            <Modal task={task} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
                Edit Task
            </Modal>
            <FiTrash2 onClick={handleDelete} className="text-red-500 cursor-pointer" />
        </td>
    </tr>
  )
}

export default Task
