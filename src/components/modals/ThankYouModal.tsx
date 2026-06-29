import { useFormModal } from "../../contexts/FormModalContext";
import { motion } from "motion/react";
export default function ThankYouModal(){

  const { closeModal } = useFormModal();

  return (
      <motion.div className="modal" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeInOut"}}>
        <h2>Thank you, we're on it</h2>
        <p className="text-body text-center">A member of the Sevaxa team will reach out within one working day to schedule your walkthrough.</p>
        <button onClick={closeModal} type="button">Close</button>
      </motion.div>  
    );
}