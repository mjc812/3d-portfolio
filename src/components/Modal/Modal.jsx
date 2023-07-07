import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop";
import './Modal.css';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }

    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const Modal = ({ handleClose, text}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="modal"
                // className="z-50 bg-blue-500 w-[50%] min-w-[700px] max-w-[90%] h-[50%] min-h-[300px] max-h-[50%] mx-auto p-8 rounded-md flex flex-col items-center  opacity-80"
            >
                <div className="modal-text">
                    <h3>flip</h3>
                    <h5>Eius laboriosam labore, totam expedita voluptates tempore asperiores sequi</h5>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal