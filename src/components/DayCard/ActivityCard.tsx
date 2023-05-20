import { useState } from 'react'
import { IconTrash } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { api } from '@/utils/api'

interface Props {
    id: string
    text: string
}

export const ActivityCard = ({ id, text }: Props) => {
    const ctx = api.useContext()
    const { mutate } = api.activities.deleteById.useMutation({
        onSuccess: () => ctx.activities.getAllByDayId.invalidate(),
    })
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleClick = () => {
        setEditMode(true)
    }

    const handleBlur = () => {
        setEditMode(false)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="my-2 flex justify-between rounded-md bg-gray-200 p-2"
                contentEditable={editMode}
                onClick={handleClick}
                onBlur={handleBlur}
                suppressContentEditableWarning
            >
                <div>{text}</div>
                <div>
                    <IconTrash onClick={() => mutate({ id: id })} />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
