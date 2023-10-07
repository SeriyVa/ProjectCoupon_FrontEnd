import image2 from '../images/image2.jpg';
import image6 from '../images/image6.jpg';
import vacation from '../images/stars3.jpg';
import food from '../images/image1.jpg';
import restaurant from '../images/image4.jpg'
import fashion from '../images/image8.jpg'
import './Home.css';
import $, { css, event } from 'jquery';
import { log } from 'console';


 
const Home = () => {
    
    //jQuery

    
    const picAndText = {
        foodCategory:{
            picture:food,
            text:"Fresh fruits and vegetables everyday straight from the farmer to you."
        },
        electricityCategory:{
            picture:food,
            text:"You can choose from a wide variety of electrical products from the best in themarket and from different companies."
        },
        restaurantCategory:{
            picture:restaurant,
            text:"If you are a breakfast, lunch or dinner person, or even a cocktail with friends person this is the coupon for you."
        },
        vacationCategory:{
            picture:vacation,
            text:"With us you can find flights, hotels and combined deals at attractive prices to all destinations in the world."
        },
        fashionCategory:{
            picture:fashion,
            text:"It's time to dress up ! Cool clothing items are waiting for you in the stores."
        }

    }

    // let images:any = [food,vacation,restaurant,fashion]
    let firstFocus:boolean = false;
    let currentImage:any=null;
    let expCategoryText:string = "You can choose from 5 diffrents categories"
console.log(expCategoryText)
    

    $(function(){
        


        $('div button').on('mouseover',function(e){

if(firstFocus==false){
            if(this.textContent==='Food'){
                currentImage=picAndText.foodCategory.picture
                expCategoryText= picAndText.foodCategory.text
               }else if(
                this.textContent==='Vacation'){
                    currentImage=picAndText.vacationCategory.picture
                    expCategoryText= picAndText.vacationCategory.text
                }else if(
                    this.textContent==='Restaurant'){
                        currentImage=picAndText.restaurantCategory.picture
                        expCategoryText= picAndText.restaurantCategory.text
                    }else if(
                        this.textContent==='Fashion'){
                            currentImage=picAndText.fashionCategory.picture
                            expCategoryText= picAndText.fashionCategory.text
                        }

                        $('#categoryImg').attr('src',currentImage)
                        $('#expCategoryText').text(expCategoryText)
                        $('#firstImg').fadeOut(500)
                        firstFocus = true;
                
                        

                    } else {
                        if(this.textContent==='Food'){
                            currentImage=picAndText.foodCategory.picture
                            expCategoryText= picAndText.foodCategory.text
                           }else if(
                            this.textContent==='Vacation'){
                                currentImage=picAndText.vacationCategory.picture
                                expCategoryText= picAndText.vacationCategory.text
                            }else if(
                                this.textContent==='Restaurant'){
                                    currentImage=picAndText.restaurantCategory.picture
                                    expCategoryText= picAndText.restaurantCategory.text
                                }else if(
                                    this.textContent==='Fashion'){
                                        currentImage=picAndText.fashionCategory.picture
                                        expCategoryText= picAndText.fashionCategory.text
                                    }
                        $('#categoryImg').animate({
                            'left':'-200vh'
                        },function(){
                              $('#categoryImg').stop(true,true);
                              $('#categoryImg').attr('src',currentImage)
                              $('#expCategoryText').text(expCategoryText)
                              $('#categoryImg').animate({
                               'left':'0'
                              })

                        })
                       
                            
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
                    $('#expCategoryText').text("You can choose from 5 diffrents categories")
                    firstFocus = false;
                    $('#firstImg').fadeIn(500)
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
            

            <div className='box4'>     
            <div className='p_in_box'><p id='expCategoryText' className='p3'>{expCategoryText}</p></div>
               <div className='img_box'>
                <img id='firstImg' className='image_box3_first' src={image6} alt=""></img>
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