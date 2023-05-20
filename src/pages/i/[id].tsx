import { DayCard, Layout } from '@/components'
import { api } from '@/utils/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Itinerary: NextPage = () => {
    const router = useRouter()

    const { data, isLoading, isError } = api.itineraries.getById.useQuery({
        id: router.query.id as string,
    })

    console.log({ data })

    if (!data) return <div>Loading</div>

    if (isError) return <div>Something went wrong</div>

    return (
        <Layout>
            <div className="m-10">
                <h1>Trip Information</h1>
            </div>
            <div className="mx-10 flex gap-4">
                {data.days.map((day) => (
                    <DayCard key={day.id} date={day.date} id={day.id} />
                ))}
            </div>
        </Layout>
    )
}

export default Itinerary
