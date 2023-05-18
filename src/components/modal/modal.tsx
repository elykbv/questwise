import type { PropsWithChildren } from 'react'

interface Props {
    title: string
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({
    title,
    show,
    setShow,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <>
            {show && (
                <div
                    className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-25"
                    onClick={() => setShow(false)}
                >
                    <div
                        className="relative mx-auto w-8/12 rounded-md bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full border-b-2 border-gray-100 p-4">
                            {title}
                        </div>
                        <div className="p-4">{children}</div>
                    </div>
                </div>
            )}
        </>
    )
}
