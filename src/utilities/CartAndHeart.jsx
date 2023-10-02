const CartAndHeart = (props) => {

   return (
      <figure style={props.parentStyle}>
         <img src={props.cartImg} style={props.imagesWidth} alt="cart" />
         <img src={props.heartImg} style={props.imagesWidth} alt="heart" />
      </figure>
   )
}

export default CartAndHeart;