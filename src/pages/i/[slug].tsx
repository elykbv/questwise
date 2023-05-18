import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Itinerary: NextPage = () => {
    const router = useRouter()
    return <div>{router.query.slug}</div>
}

export default Itinerary
