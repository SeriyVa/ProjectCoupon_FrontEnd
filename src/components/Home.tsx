import image2 from '../images/image2.jpg';
import image6 from '../images/image6.jpg';
import vacation from '../images/stars3.jpg';
import food from '../images/image1.jpg';
import restaurant from '../images/image4.jpg'
import fashion from '../images/image8.jpg'
import './Home.css';
import $, { css, event } from 'jquery';




 
const Home = () => {
    
    //jQuery
    var images:any = [food,vacation,restaurant,fashion]
    var slideImage:any;
    var currentImage:any=null;
    $(function(){
        
        $('div button').on('mouseover',function(e){
        
           if(currentImage===null){
            if(this.textContent==='Food'){
                currentImage=images[0]
               }else if(
                this.textContent==='Vacation'){
                    currentImage=images[1]
                }else if(
                    this.textContent==='Restaurant'){
                        currentImage=images[2]
                    }else if(
                        this.textContent==='Fashion'){
                            currentImage=images[3]
                        }
                        $('#categoryImg').attr('src',currentImage)
                        $('#firstImg').fadeOut(500)
                       
                
           }else{
            if(this.textContent==='Food'){
                slideImage=images[0]
           }else if(
            this.textContent==='Vacation'){
                slideImage=images[1]
            }else if(
                this.textContent==='Restaurant'){
                    slideImage=images[2]
                }else if(
                    this.textContent==='Fashion'){
                        slideImage=images[3]
                    }
                    $('#categoryImg').fadeOut(500);
                    // $('#slideImg').attr('src',slideImage)
                    $('#slideImg').fadeIn(600)
                                }

           
                   
                $(this).css({
                    'background-color': 'yellow',
                    'border-left':'solid',
                    'border-color':'black',
                    'border-width':'5px'
                    
                })
                $(this).animate({
                    'font-size':'30px',
                    'padding-right':'50%'
                },500
                )

            
            
        }).on('mouseout',function(e){
            $(this).stop(true,true);
            $('#firstImg').stop(true,true);
            $(this).css({
                'background-color': 'orange',
                'border':'none'
    
            })
            $(this).animate({
                'font-size':'20px',
                'padding-right':'0%'
                
            },500)

           
                });
                
                $('#categoryDiv').on('mouseleave',function(e){
                    
                    $('#firstImg').fadeIn(1000)
                    currentImage=null;
                })
    })
         

    
    return (
        <div className='home'>
            

            <div className='box'>
            <img className="image1" src={image2} alt="" />

                <p className="p1">Hello, this is my new project. Enjoy!</p>
            </div>
            <div className='box2'>
                <li className='li1'>
                    <p className='p2'>As an admin you can add new companies or customers. <br />
                        You can create your own coupons as a company and purchase them as a customer.</p>

                        
                </li>
            </div>
            <p className='p3'> You can choose from 5 diffrents categories</p>

            <div className='box4'>     
                
                <div className='img_box'>
                <img id='firstImg' className='image_box3_first' src={image6} alt=""></img>
                <img id= 'slideImg' className='image_box3_category' src={slideImage} alt="" />
                 <img id='categoryImg' className='image_box3_category' src={currentImage} alt="" />
            </div>   
            <div id='categoryDiv' className='boxMenu_in_box3'>
                
                
                    <button>Food</button>
                    <button>Electricity</button>
                    <button>Restaurant</button>
                    <button>Vacation</button>
                    <button>Fashion</button> 
                    
</div>

</div>
      
            
                    
                   

            
        </div>
    );
}

export default Home;