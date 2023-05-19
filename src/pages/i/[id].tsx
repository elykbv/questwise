import { DayCard, Layout } from '@/components'
import { api } from '@/utils/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Itinerary: NextPage = () => {
    const router = useRouter()

    const { data, isLoading, isError } = api.itinerary.getById.useQuery({
        id: router.query.id as string,
    })

    console.log({ data })

    if (!data) return <div>Loading</div>

    if (isError) return <div>Something went wrong</div>

    return (
        <Layout>
            <div className="flex">
                {data.days.map((day, index) => (
                    <DayCard key={index} />
                ))}
            </div>
        </Layout>
    )
}

export default Itinerary
