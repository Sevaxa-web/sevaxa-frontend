import ArrowSVG from "../../assets/icons/right-arrow.svg";
import { useFormModal } from "../../contexts/FormModalContext";

export default function BookDemoButton() {
  const { openModal } = useFormModal();

  return (
    <button className="" onClick={openModal}>
      Book a demo
      <img src={ArrowSVG} alt="" />
    </button>
  );
}
