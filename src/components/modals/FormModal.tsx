import { useFormModal } from "../../contexts/FormModalContext";
import ArrowSVG from "../../assets/icons/right-arrow.svg";
import FormField from "../ui/FormField";
import ThankYouModal from "./ThankYouModal";
export default function FormModal() {
  const { isModalOpen, isSent, markAsSent, closeModal} = useFormModal();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {isSent ? (
          <ThankYouModal />
        ) : (
          <>
            <h2>See Sevaxa in action</h2>
            <p>A 20-minute walkthrough, tailored to your organisation.</p>
            <form onSubmit={(e) => { e.preventDefault(); markAsSent(); }}>
              <FormField
                label="Full Name"
                name="fullName"
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
                label="Your message"
                name="message"
                placeholder="e.g. deviation reporting, risk assessment etc."
                isMessage={true}
              />
              <button type="submit">
                Book a demo <img src={ArrowSVG} alt="" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
