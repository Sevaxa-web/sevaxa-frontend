import { useFormModal } from "../../contexts/FormModalContext";
export default function ThankYouModal(){

  const { closeModal } = useFormModal();

  return (
      <div className="modal">
        <h2>Thank you, we're on it</h2>
        <p className="text-body text-center">A member of the Sevaxa team will reach out within one working day to schedule your walkthrough.</p>
        <button onClick={closeModal} type="button">Close</button>
      </div>  
    );
}