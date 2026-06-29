import { useFormModal } from "../../contexts/FormModalContext";
import ArrowSVG from "../../assets/icons/right-arrow.svg";
import FormField from "../ui/FormField";
import ThankYouModal from "./ThankYouModal";
export default function FormModal() {
  const { isModalOpen, isSent, markAsSent, closeModal } = useFormModal();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {isSent ? (
          <ThankYouModal />
        ) : (
          <div className="modal">
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
          </div>
        )}
      </div>
    </div>
  );
}
