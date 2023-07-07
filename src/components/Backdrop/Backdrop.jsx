import { motion} from "framer-motion";

const Backdrop = ({ children, onClick}) => {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}

export default Backdrop;