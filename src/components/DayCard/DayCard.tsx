import { IconPencilPlus } from '@tabler/icons-react'
import { Reorder } from 'framer-motion'
import { useState } from 'react'
import { ActivityCard } from './ActivityCard'

export const DayCard = () => {
    const [activities, setActivities] = useState<
        { text: string; id: number }[]
    >([])

    const handleDelete = (index: number) => {
        setActivities(activities.splice(index, 1))
    }

    return (
        <div className="w-56 rounded-md bg-gray-300">
            <div className="flex justify-between px-4 pt-2">
                <h3>May 4, 2023</h3>
                <IconPencilPlus
                    className="cursor-pointer rounded-full transition duration-300 ease-in-out hover:scale-125 hover:text-slate-900"
                    onClick={() =>
                        setActivities((prevState) => [
                            ...prevState,
                            { text: '', id: Math.floor(Math.random() * 10000) },
                        ])
                    }
                />
            </div>
            <div
                className="px-4 py-2 text-gray-500"
                contentEditable
                onBlur={(e) => console.log(e.target.outerText)}
                suppressContentEditableWarning
            >
                Subtitle
            </div>
            <div className="border-t border-gray-400 p-4">
                <Reorder.Group
                    axis="y"
                    values={activities}
                    onReorder={setActivities}
                >
                    {activities.map((activity, index) => (
                        <Reorder.Item key={activity.id} value={activity}>
                            <ActivityCard
                                text={activity.text}
                                handleDelete={handleDelete}
                                index={index}
                            />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </div>
    )
}
