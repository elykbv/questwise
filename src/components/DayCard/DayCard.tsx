import { IconPencilPlus } from '@tabler/icons-react'
import { Reorder } from 'framer-motion'
import { useState } from 'react'
import { ActivityCard } from './ActivityCard'
import { api } from '@/utils/api'

interface Props {
    id: string
    date: Date
}

export const DayCard = ({ id, date }: Props) => {
    const { data } = api.activities.getAllByDayId.useQuery({ dayId: id })
    const ctx = api.useContext()
    const { mutate: createActivityMutation } =
        api.activities.create.useMutation({
            onSuccess: () => ctx.activities.getAllByDayId.invalidate(),
        })

    console.log({ data })

    return (
        <div className="w-56 rounded-md bg-gray-300">
            <div className="flex justify-between px-4 pt-2">
                <h3>{date.toDateString()}</h3>
                <IconPencilPlus
                    className="cursor-pointer rounded-full transition duration-300 ease-in-out hover:scale-125 hover:text-slate-900"
                    onClick={() => createActivityMutation({ dayId: id })}
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
                {/* <Reorder.Group
                    axis="y"
                    values={activities}
                    onReorder={setActivities}
                > */}
                {data?.map((activity, index) => (
                    <ActivityCard
                        text={activity.text}
                        key={activity.id}
                        id={activity.id}
                    />
                ))}
                {/* // <Reorder.Item key={activity.id} value={activity}> */}
                {/* // </Reorder.Item> */}
                {/* </Reorder.Group> */}
            </div>
        </div>
    )
}
