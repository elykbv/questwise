import { useSession } from 'next-auth/react'
import { UserAvatar } from '@/components'

export const Nav = () => {
    const { data: sessionData } = useSession()
    return (
        <div className="flex items-center justify-between border-b-2 border-gray-200">
            <div className="ml-4">
                <h1 className="text-3xl font-bold tracking-tight text-orange-600 ">
                    Questwise
                </h1>
            </div>
            <div className="flex items-center">
                {/* <div>Navigation</div> */}
                <div>
                    <UserAvatar name={sessionData?.user.name} />
                </div>
            </div>
        </div>
    )
}
