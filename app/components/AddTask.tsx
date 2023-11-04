"use client"
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./modal"
import { useState } from "react"

const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary w-full">
                Add new task <AiOutlinePlus className="ml-2" size={18} />
            </button>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
                Add New Task
            </Modal>
        </div>
    )
}

export default AddTask
