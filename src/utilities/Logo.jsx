import { useNavigate } from "react-router-dom";
import juteiLogo from "../images/weblogo/Jutei.svg" 

const Logo = (props) => {

   const navigate = useNavigate();

   const navigateHandler = (e) => {
      navigate("/"); 
   };

   return (
      <figure onClick = {navigateHandler} className={props.className} >
         <img src={juteiLogo} alt="Brand logo" className="hover:cursor-pointer" />
      </figure>
   )
}

export default Logo;