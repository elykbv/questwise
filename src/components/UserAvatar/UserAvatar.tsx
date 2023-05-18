import { useState, useRef, useEffect, createRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dropdown } from '../Dropdown/Dropdown'

interface Props {
    name: string | null | undefined
}

export const UserAvatar = ({ name }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const avatarRef = useRef<HTMLDivElement>(null)
    const dropdownRef = createRef<HTMLDivElement>()

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (
                dropdownRef.current &&
                avatarRef.current &&
                showDropdown &&
                !dropdownRef.current.contains(event.target as Node) &&
                !avatarRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', (e) => handleOutsideClick(e))
        return () =>
            document.removeEventListener('mousedown', (e) =>
                handleOutsideClick(e)
            )
    }, [dropdownRef, showDropdown])

    return (
        <div className="relative">
            <div
                onClick={() => setShowDropdown((prevState) => !prevState)}
                ref={avatarRef}
                className="m-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-teal-700 to-teal-500 font-medium text-white"
            >
                {name?.charAt(0).toUpperCase()}
            </div>
            <Dropdown show={showDropdown} dropdownRef={dropdownRef} />
        </div>
    )
}
