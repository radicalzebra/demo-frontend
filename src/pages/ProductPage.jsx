import MultiImages from '../UI/MultiImages';
import ProductDesc from '../UI/ProductDesc';
import ReviewCard from '../UI/ReviewCard';
import BuyForms from '../forms/BuyForms';
import shoe from '../images/shoe.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';
import shoe4 from '../images/shoe4.jpg';
import { CommentsAndOtherCard , Card} from '../utilities/Cards';
import Scrollbar from '../utilities/scrollbar';
import ProductCard from './../UI/ProductCard';







const ProductPage = (props) => {
  
   return (

      <Card className="flex flex-col justify-between gap-12 mb-16">

         <Card className="p-24 px-16 grid grid-cols-2 gap-x-4 row-start-1 row-span-1">



            <Card className="row-start-1 row-span-1 gap-4">
                    <Card className="relative font-dosis font-medium tracking-wide h-3/4" cardTitle="Product Name">
                       <MultiImages parentWidth="100%" parentHeight="100%" images={[shoe,shoe2,shoe3,shoe4]}/>
                    </Card>        
            </Card>
               
            
            <Card className="flex flex-col col-start-2 col-span-1 row-start-1  row-span-1 gap-8">
                     <Card className="px-4 py-4 bg-orange-300 rounded-md h-1/4">
                            <BuyForms/>
                     </Card> 

                        
                     <Card className="bg-gray-100 shadow-gray-500  shadow-md px-8 py-4 h-3/4 rounded-md relative">
                         <ProductDesc seller="Arshad" brand="adidas" about="lorem dcbcudcbuw cuwcucu ddhcd jnnniniinc oojojojoj  oj ojojojo opj ojojojopj  joj ojojo ojo j oj oopjoj ojojojo o joj ojojojoj  pjojopjo[j[ojo[ pjojo  jojojojojjp jbjbjoj i iiuiuiuhihihihihiohhouih ohihihihoih pjiioiohio  ohiohoihihiohhioh oi jihiohiohiojh ihioohiohio ]]] ihiccdic dchidcid ijcjci iqjciqdj iq0000000 0qd j9989989898989898 qdichdicdi"/>
                     </Card> 
            </Card>  
         </Card>

         
            <Card className="relative mx-16 rounded-lg bg-blue-600"  cardTitle="Reviews" numReview="4">
                           <Scrollbar className=" flex flex-col w-full bg-gray-100 "  parentClassName="h-1/2 shadow-rose-700 shadow-md " >
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                                 <ReviewCard stars="4"/>
                           </Scrollbar>
            </Card> 


         <Card className="mx-20 font-dosis font-semibold">
            <Card className="w-fit flex flex-wrap  gap-12 relative" cardTitle="Similar">
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            </Card> 
         </Card>


      
      </Card>
     
   )
}

export default ProductPage;