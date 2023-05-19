import { type PropsWithChildren } from 'react'
import { Nav } from '@/components'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-center">
                {children}
            </main>
        </>
    )
}
