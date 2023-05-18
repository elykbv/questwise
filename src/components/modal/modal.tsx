interface Props {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ show, setShow }: Props) => {
    return (
        <>
            {show && (
                <div
                    className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-25"
                    onClick={() => setShow(false)}
                >
                    <div
                        className="relative mx-auto rounded-md bg-white p-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>Title</div>
                        <div>Content</div>
                    </div>
                </div>
            )}
        </>
    )
}
