import { useState } from 'react'
import { IconTrash } from '@tabler/icons-react'

export const ActivityCard = ({
    text,
    handleDelete,
    index,
}: {
    text: string
    handleDelete: any
    index: number
}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleClick = () => {
        setEditMode(true)
    }

    const handleBlur = () => {
        setEditMode(false)
    }

    return (
        <div
            className="my-2 flex justify-between rounded-md bg-gray-200 p-2"
            contentEditable={editMode}
            onClick={handleClick}
            onBlur={handleBlur}
            suppressContentEditableWarning
        >
            <div>{text}</div>
            <div>
                <IconTrash onClick={() => handleDelete(index)} />
            </div>
        </div>
    )
}
