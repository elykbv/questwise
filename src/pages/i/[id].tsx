import { api } from '@/utils/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Itinerary: NextPage = () => {
    const router = useRouter()
    const { data, isLoading } = api.itinerary.getById.useQuery({
        id: router.query.id as string,
    })

    console.log(data)

    return <div>{router.query.id}</div>
}

export default Itinerary
