import { Card } from "../utilities/Cards";
import CartAndHeart from "../utilities/CartAndHeart";
import UserPic from "../utilities/UserPic";
import Logo from "../utilities/Logo";
import Header from "./Header";
import cart from "../images/cart.svg";
import heart from "../images/heart.svg";


export const DefaultNavigation = (props) => {

    return (

      <Card  className="pt-4 flex gap-36 items-center justify-between  w-full px-24">
            <Logo className="ml-8 "/>
            <Header links={["Categories", "Men", "Women", "kids"]}/>

         
            
            <Card className="flex gap-52 ml-2.5 ">
              <CartAndHeart cartImg={cart} heartImg={heart} parentStyle={{width:"2rem", display:"flex", gap:"3rem"}} imagesWidth={{width:"100%"}}/>
              <UserPic picOf="user" polygonBorder={{borderWidth: "2px",borderStyle: "dashed",borderColor: "red"}}/>
            </Card>
            
      </Card>
    )
}


 