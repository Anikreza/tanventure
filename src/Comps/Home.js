import React from 'react'
import '../Style/home.css'
import DivCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as  Navlink, Link } from 'react-router-dom'; 
import a from '../Img/3.jpeg'
import c from '../Img/d15.jpg'
import d from '../Img/c16.jpg'
import video from '../Img/fb.mp4'
import ReactPlayer from 'react-player'
import Footer from './Footer';
import SliderData from './SliderData';

const Home = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

      
    return (
        <div className='home'>
            
            <div className='home-center'>
                 
                    <h2 className='infoanim'> LET ME TELL YOU A STORY</h2>
                    <div className='home-data'>
                    <p> #AdventureIsOutThere </p>
                    <p1 color='rgb(17, 36, 2)'> _______________________</p1>
                    <br></br> 
                    
                    <p> I Am Anik </p>
                    <p> But You Can Call Me Tan, & Thats Another Story </p>
                    <p> I Have Lots Of Them </p>
                    <p> I'm Planning On Riding  </p>
                    <p> Whole Of The World With My Bike </p>
                </div>
            </div>       
            <div className='stylediv'></div>

            <div className='home-hr'>
                
                <br/><br/><br/><br/>
                <h2 className='opacityanim' style={{textAlign:'center', color:'#05210d', fontWeight:'lighter', fontSize:'30px'}}> Featured Articles</h2>
                <hr/><br/>
                
            <DivCarousel
                        className='carousel'
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={600}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        deviceType={'desktop'}
                        
                        >
                        <div>
                           <SliderData link={'/nagaland'} image={a} header={'সাত বোনেদের রাজ্যে'} caption={'নাগাল্যান্ডের উত্তর ঘেঁষা দিগন্তবিস্তৃত সমভুমি ধরে,দক্ষিন-পুর্বের পাহাড়সারি বেয়ে, আসামের গহীন অরন্য ভেদ করে, মেঘালয়ের শানিত হাওয়ার দাপট ভেঙে, আমি চড়েছিলাম মোহনীয় সাত বোনেদের রাজ্যে'}/>
                        </div>
                        <div>
                        <SliderData  link={'/coastline'} image={c} header={'বাংলাদেশের তটরেখা'} caption={'সুন্দরবনের শ্যামনগর রেঞ্জ থেকে এক কষ্টসাধ্য যাত্রায় বাংলাদেশের তটরেখা ধরে সাইকেল চালিয়ে, এবং নদীর পর নদীতে ভেসে আমি পৌঁছে গিয়েছিলাম বাংলার লিজেন্ডারি জনপদ, নাফ নদীর তীরে'}/>
                        </div>
                        <div>
                          <SliderData link={'/hillroute'}  image={d} header={'পাহাড়ে হৃদয়ে হতোদ্যম'} caption={'আমাদের দেশটা কত বিচিত্র! দিগন্তবিস্তৃত সমতলভূমি থেকে শুরু করে পাহাড়চুড়া,ম্যানগ্রোভ ফরেস্ট আর সমুদ্রের মালিক সে,তার কাছে সবচেয়ে বেশী আছে নদী,নদী এবং নদী'}/>
                        </div>
                        </DivCarousel>                   
            </div>
           
            <div className='home-others'>
            
          
            <div className='home-im'>
            <Link to='/book'></Link>           
            </div>
               <div className='video'> 
               <Link to='/book'>
                 <h2>ট্যান...</h2>
                 <hr/> <br/>
                     <p>ট্যানকে যেবার প্রথম দেখেছিলাম, ওর সারা গায়ে ধুলো, কাদার ছোপ, ছন্নছাড়া এক ভংগি যেনো তার চেহারায় গিল্টি করে দেয়া হয়েছে, ওর সাইকেলটা ঠেলে নিয়ে আফতাবনগরের একটা সাকো পার হচ্ছে, মুখে লেগে আছে বোকার মত এক টুকরো হাসি, সর্বক্ষণ, চোখদুটোতে কি যেনো একটা অনুভুতি ফুটে আছে। ওই চোখে কেউ ভালো করে তাকালে বুঝতে পারবে, আকাশপাতাল সব ভাবনারা তার মাথায় ঘোরে সারাক্ষণ, যা অনেকের কাছেই বোধগম্য হবেনা, মনে হবে নিতান্ত কিশোরসুলভ বেয়াড়া ভাবনার দল বলে। আর ও সেসব ভাবনা সবাইকে শোনাতেও খুব পছন্দ করতো। ওর সাথে কোনো এক উপলক্ষে কথা হয়েছিলো। ওই একবারই। তার বেশ কিছুদিন পর জানতে পেরেছিলাম, বিশ বছর বয়েসী সেই যুবক তার ওই সাইকেলটা, যার নাম সে দিয়েছিলো 'আশা', তাকে নিয়েই কোথায় যেনো হারিয়ে গেছে, বলে যায়নি সে কাউকেই, কিছু। পরিবারের একমাত্র ছেলে সে, সবে বিশ্ববিদ্যালয়ের  প্রথম বর্ষের ছাত্র। কি হয়েছিলো ট্যানের?
                      আজ অবধি আমি ছাড়া আর কেউ জানতে পারেনি তার কথা। ট্যানের সাথে আমার বন্ধুত্বটা অমন এক পর্যায়ে এসে দাড়িয়েছে গত তিন মাসে, সেদিন বিকেলের পর থেকে, যেদিন আমি একটা উড়োচিঠি পেয়েছিলাম- উড়ো ইমেইল আসলে- যে ও আমাকে ভাই বলে ডেকেছে। ট্যান যাকে ভাই সম্বোধন করে, তার সাথে ওর আত্মার সম্পর্ক, কখনোই তা ছিন্ন হবার নয়। আমি সে কথা জানি। ট্যানকে আমি বাধ্য করেছি, ওর নিরন্তর যাত্রার সকল বর্ননা আমাকে লিখে পাঠাতে। ও রাজীও হয়েছে। কিন্তু অদ্ভুত ছেলেটা ঠিক করেছে, কোনো ক্রমের ধার ধারবেনা সে, যখন যা ইচ্ছে করে, লিখে পাঠাবে। আর হ্যা, ঠিক, আমি, তানভীর রেজা অনিক, মিস্টার ট্যানের অকৃত্তিম বন্ধু, ঠিক করেছি ওর যাত্রার ইতিবৃত্ত জোড়াতালি দিয়ে একটা 'উপন্যাস' তৈরী করে ফেলবো। উপন্যাস শব্দের উপর আমার টান। উপন্যাস শব্দের উপর আমার অনেক দুর্বলতা। দেখা ই যাক, কি ঘটতে চলেছে!</p>
                  </Link>
              </div>
          </div>
            
            <video hidden autoPlay loop playsInline muted> 
            <source src={video} type="video/mp4"/>
            </video> 
            <div>
              <Footer/>
            </div>
        </div>
    )
}

export default Home
