import { useFormModal } from "../../contexts/FormModalContext";
import ArrowSVG from "../../assets/icons/right-arrow.svg";
import FormField from "../ui/FormField";
import ThankYouModal from "./ThankYouModal";
import { motion, AnimatePresence } from "motion/react";
export default function FormModal() {
  const { isModalOpen, isSent, markAsSent, closeModal } = useFormModal();


  return (
    <AnimatePresence>
      {isModalOpen && 
        <motion.div
          className="modal-overlay"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{ease: "easeInOut"}}
        >
          <motion.div className="modal-container" onClick={(e) => e.stopPropagation()} initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 100}} transition={{ease: "easeInOut"}}>
            {isSent ? (
              <ThankYouModal />
            ) : (
              <motion.div className="modal" initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 100}} transition={{ ease: "easeInOut"}}>
                <div className="modal-header">
                  <h2>See Sevaxa in action</h2>
                  <p>A 20-minute walkthrough, tailored to your organisation.</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    markAsSent();
                  }}
                >
                  <FormField
                    label="Full Name"
                    name="fullName"
                    placeholder="Dr. Jane Smith"
                  />
                  <FormField
                    label="Company Name"
                    name="companyName"
                    placeholder="Dr. Jane Smith"
                  />
                  <FormField
                    label="Work Email"
                    name="workEmail"
                    placeholder="jane@clinic.org"
                  />
                  <FormField
                    label="Phone (optional)"
                    name="phone"
                    placeholder="jane@clinic.org"
                  />
                  <FormField
                    label="What would you like to see? (optional)"
                    name="message"
                    placeholder="e.g. deviation reporting, risk assessment etc."
                    isMessage={true}
                  />
                  <button type="submit">
                    Book a demo <img src={ArrowSVG} alt="" />
                  </button>
                </form>
                <p className="text-color-secondary text-center">
                  We'll only use your details to arrange the demo
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}
