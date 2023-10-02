import ProductCard from '../UI/ProductCard';
import ReviewCard from '../UI/ReviewCard'
import { CommentsAndOtherCard , Card} from '../utilities/Cards';
import MultiImages from '../UI/MultiImages';
import brandBanner from '../images/banners/brandBanner.svg';
import bannerImg1 from '../images/banners/bannerImg1.png';
import bannerImg2 from '../images/banners/bannerImg2.png';
import bannerImg3 from '../images/banners/bannerImg3.png';
import bannerImg4 from '../images/banners/bannerImg4.png';


const HomePage = (props) => {


   return (
      <>

         <Card style={{padding:"3rem"}}>
            <CommentsAndOtherCard>
               <MultiImages parentWidth = "100%"  parentHeight = "700px"  images={[bannerImg1,bannerImg2,bannerImg3,bannerImg4]}/>
            </CommentsAndOtherCard>
         </Card>

         <Card style={{display:"flex",alignContent:"start",gap:"2.5rem", padding:"3rem"}}>
              <Card style={{}}>
                <CommentsAndOtherCard style={{flexDirection:"column",display:"flex",overflowY: "scroll",maxWidth:"481px"}} cardTitle="Review" numReview="4" >
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                </CommentsAndOtherCard>
              </Card>

               <Card style={{display:"flex",gap:"1.3rem",justifyContent:"flex-end",flexBasis:"50%"}} cardTitle="Most Loved">
                    <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
                    <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
                    <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               </Card>

         </Card>

         <Card style={{padding:"1rem"}}>
            <figure>
                <img src={brandBanner} style={{width:"100%"}}/>
            </figure>
         </Card>


         <Card style={{padding:"0.4rem", margin:"3rem 2rem",borderRadius:"8px"}}>
             <CommentsAndOtherCard style={{display:"flex",justifyContent:"space-between",backgroundColor:"transparent"}} cardTitle="Random Picks">
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
             </CommentsAndOtherCard> 
         </Card>

        


       

         {/* <Card padding="3px 7px">
            <CommentsAndOtherCard cardTitle="Similar" flexDirection="rows" gap="7px">
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            </CommentsAndOtherCard>
         </Card> */}


         {/* //product  */}
         {/* <Card style={{ display:"flex", gap:"3rem", padding:"3% 9%" }}>
            <CommentsAndOtherCard cardTitle="Product Name">
                  <MultiImages images={[shoe,shoe2,shoe3,shoe4]}/>
            </CommentsAndOtherCard>

            <div>

               <Card style={{marginBottom : "13%"}}>
                  <BuyForms/>
               </Card>

               <CommentsAndOtherCard flexDirection="column" cardTitle="Review" numReview="123" backColor="#e8e7e6" maxWidth="481px" height="364px">
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
               </CommentsAndOtherCard>
            </div>
            
         </Card> */}

         {/* <CommentsAndOtherCard cardTitle="Description" backColor="#e8e7e6" maxWidth="548px" height="185px" padding="7px">
               <ProductDesc seller="Arshad" brand="adidas" about="jgccgcjcjcccchccadbfjdqbjqdjdvjdbcjbcjd  qljlwdjlbdjlcbdjkcb ljwhff qfqehfkckadhcidwhfs wh ckqdhciwiwhciadnkdshidsh  pqeyfiwckdid fwdcoqeif iqhckqdhipqefb8qef qehckq  qe fqeiqeidi8 f8qeqilehiwehiqkas db9qed qwdqwooqeu oqec; iewf8iewodj ewbwri ciqeh 8 wfiopjclqh[oqeufqe[ojqelhiqepfqep qo  qe foqehoqeh foqe coqehqe[fjqe'lj q9bfe9 oqefo[qe 9fu["/>
         </CommentsAndOtherCard> */}

      </>
   )
}


export default HomePage;