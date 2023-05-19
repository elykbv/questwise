import { type Ref } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
    show: boolean
    dropdownRef: Ref<HTMLDivElement>
}

export const Dropdown = ({ show, dropdownRef }: Props) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    ref={dropdownRef}
                    className="absolute right-4 mt-4 w-56 rounded-md border-2 border-slate-200 border-opacity-50 bg-slate-50"
                >
                    <ul className="px-6">
                        <li>My Trips</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
