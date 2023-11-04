"use client"

import { addTodo, updateTodo } from '@/apis';
import React, { FormEventHandler, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid" ;
import { ITask } from '@/types/tasks';

type PropType = {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean)=> boolean | void ;
    children: React.ReactNode;
    task?: ITask;
}

const modal = ({isModalOpen, setIsModalOpen, children, task}: PropType ) => {
  const router = useRouter();
  const [inputTask, setInputTask] = useState<string>("")

  useEffect(() => {
    if(task?.id) {
      setInputTask(task.text)
    }
  }, [task?.id])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if(task?.id) {
      e.preventDefault();
      await updateTodo({
          id: task.id,
          text: inputTask
      })
    } else {
      e.preventDefault();
      await addTodo({
          id: uuidv4(),
          text: inputTask
      })
    }
    setIsModalOpen(false)
    router.refresh()
    
  }

  return (
    <dialog id="my_modal_3" className={`modal ${isModalOpen ? "modal-open" : null}`}>
    <div className="modal-box bg-white">
        {children}
        <form method="dialog" onSubmit={handleSubmit} >
            <input 
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-max bg-slate-50 mr-2" />
                <button type='submit' className='btn'>{task?.id ? `Edit` : `Submit`}</button>
            <button 
                onClick={() => setIsModalOpen(false)} 
                className="btn btn-sm btn-circle btn-ghost absolute right-1 top-2 mb-2 ml-2">
                    ✕
            </button>
        </form>
        
    </div>
    </dialog>
  )
}

export default modal
