import classes from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props => {


   return (
      <>
        <div className={classes.header}>
            {props.links.map((el,i) => <NavLink key={i} to={`/${el==="Men" ? "products/men" : el==="Women" ? "products/women" : el==="kids" ? "products/kids" : ""}`} className ={({isActive})=> isActive ? "text-red-700": " "} end="true">{el}</NavLink>)}
        </div>
      </>
   )
})


export default Header;