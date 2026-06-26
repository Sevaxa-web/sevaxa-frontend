import ArrowSVG from "../../assets/icons/right-arrow.svg";
import { useFormModal } from "../../contexts/FormModalContext";

export default function BookDemoButton() {
  const { openModal } = useFormModal();


  
 

  return (
    <button className="" onClick={openModal}>
      <p>Book a demo</p>
      <img src={ArrowSVG} alt="" />
    </button>
  );
}
