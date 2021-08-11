import React from 'react'
import '../Style/home.css'
import DivCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as  Navlink, Link } from 'react-router-dom'; 
import a from '../Img/3.jpeg'
import c from '../Img/1.jpeg'
import d from '../Img/5.jpg'
import v from '../Img/nagaland/zain.mp4'
import ReactPlayer from 'react-player'
import Footer from './Footer';

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
                <hr/>
                <br/><br/>
                <h2 className='opacityanim' style={{textAlign:'center', color:'#05210d', fontWeight:'lighter'}}> Featured Stories</h2>
                <hr className='opacityanim'style={{width:'300px', float:'left', marginLeft:'38%'}}/>
            <DivCarousel
                        className='carousel'
                        swipeable={false}
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
                        <div> <Link to='/about'> <img src={a}/> </Link> </div>
                        <div><Link to='/about'> <img src={d}/> </Link></div>
                        <div><Link to='/about'> <img src={c}/> </Link></div>
                        <div><Link to='/about'> <img src={d}/> </Link></div>
                        </DivCarousel>                   
            </div>
            <hr/>
            <div className='home-others'>
 
            <div className='video'>
            <ReactPlayer url='https://www.youtube.com/watch?v=fkvHIUD3_HE'/>
             <p>aaas asd  jd hwsf sdfj sdhg  fgjhds ghdhjg dfg fdg fdgjbv dfj hgfdbjv fdbvb dfbnv fdbnv sfhb sdhf dshbfv dsbv bnsdfvf bdsfbvn dsnv nbsdfv bnsdvf nbfwsdjfn bsdjknfbshijfdbsdkbf ijhsdg jfdgnf djhgjfhsde djg fdnjgvjlmngj knfgl jng ljmgfnd lvnfdg vnfsdlnkgv fdjkn vjkfnds gvnjfds gnfdsg njdfg </p>
            </div>
            </div>

            <div>
              <Footer/>
            </div>
        </div>
    )
}

export default Home
