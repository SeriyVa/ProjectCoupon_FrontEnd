import './Home.css'
import image1 from '../images/image2.jpg'
import image2 from '../images/image6.jpg'


const Home = () => {


    return (
        <div className='home'>
            <img className="image1" src={image1} alt="" />

            <div className='box'>

                <p className="p1">Hello, this is my new project. Enjoy!</p>
            </div>
            <div className='box2'>
                <li className='li'>
                    <p className='p2'>As an admin you can add new companies or customers. <br />
                        You can create your own coupons as a company and purchase them as a customer.</p>
                </li>
            </div>
            <p className='p3'> You can choose from 5 diffrents categories</p>
            <div className='box3'>
                <img className='image2' src={image2} alt="" />

                <li className='li'>
                    <p>Food</p>
                    <p>Electricity</p>
                    <p>Restaurant</p>
                    <p>Vacation</p>
                    <p>Fashion</p>
                </li>

            </div>



        </div>
    );
}

export default Home;