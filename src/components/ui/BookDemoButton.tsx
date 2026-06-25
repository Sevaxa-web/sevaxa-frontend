import ArrowSVG from '../../assets/icons/right-arrow.svg'


export default function BookDemoButton(){
    return(
        <button className="">
          <p>
            Book a demo 
          </p>
          <img src={ArrowSVG} alt="" />
        </button>
    );
}