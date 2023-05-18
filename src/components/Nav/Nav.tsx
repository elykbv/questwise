import { useSession } from 'next-auth/react'
import { UserAvatar } from '@/components'

export const Nav = () => {
    const { data: sessionData } = useSession()
    return (
        <div className="flex justify-between">
            <div>
                <h1>Questwise</h1>
            </div>
            <div className="flex">
                <div>Navigation</div>
                <div>
                    <UserAvatar name={sessionData?.user.name} />
                </div>
            </div>
        </div>
    )
}
