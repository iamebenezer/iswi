import './App.css'
import TextSlider from './TextSlider';
import logo from './assets/logo.png'
import video from './assets/video.mp4'
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Navbar from './Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const slides = ["PHASE ONE<br>Launch Website <br>Social Media", "PHASE TWO<br>Launch Website <br>Social Media", "PHASE THREE<br>Launch Website <br>Social Media"]; // Add your slides here
    
  return (
   <div>
        
      <section className="bg-[url('./assets/bg.png')] text-white w-screen h-screen bg-center bg-cover">
        {/* <div className="overlay"></div> */}
      {/* <video src={video} controls={true} playsInline loop={true} muted={true} autoPlay={true} className='h-screen w-screen object-cover'></video>
         */}
               <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
          class="h-screen w-screen object-cover"
          
        />,
      ` }}></div>

            {/* <nav className="absolute top-0 right-0 left-0 flex justify-between items-center p-6 md:p-12 md:mx-8">
              <div className="">
                <img src={logo} className='w-16' alt="" />
              </div>
                  <div className="hidden md:flex">
                    <ul className='flex space-x-12 font-head'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Tokenomics</li>
                      <li>Roadmap</li>
                    </ul>
                  </div>
            </nav> */}
              <Navbar/>
              
            <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
            className="absolute left-0 bottom-0 right-0 flex justify-center py-60 text-center items-center md:p-24 md:mx-24"
            >
              <div className=''>
                <h1 className='font-hero text-shadow-one md:text-[60px] text-white drop-shadow-3xl text-[30px]'>I STAND WITH ISRAEL</h1>
                <p className='text-white font-texts md:text-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit explicabo maiores ipsam!
                   Doloremque dolorem molestias recusandae eum quas quae deserunt culpa? Aut, illum at?</p>
                 <div className='my-4'>
                 <a href="" className='bg-transparent border
                  hover:bg-[#1c2152] transition duration-150 ease-in-out
                 border-white px-8 py-2 rounded-lg text-2xl whitespace-nowrap font-head text-white shadow-blue-50 shadow-sm'>Join Community</a>
                 </div>
              </div>

            </div>
      </section>

      <section className="strips">
            <div className="strip-1"></div>
            <div className="strip-2">
                <marquee behavior="scroll" direction="right" scrollamount="15">
                    <div className="sub-strip2 text-white font-head">
                        I STAND WITH ISRAEL, 
                        I STAND WITH ISRAEL, 
                        I STAND WITH ISRAEL
                    </div>
                </marquee>
            </div>
        </section>
      <section className='h-fit bg-blue-50 p-6'>
            <div className='p-6 mx-2'   data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            <div className="flex font-head justify-center text-[30px] items-center">
            About
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 place-items-center">
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg w-80 md:w-fit">
                <p className='text-center font-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur natus
                   fuga minima enim ullam consectetur, deleniti soluta nostrum voluptate a voluptatem quo.</p>
              </div>
              <div className="shadow-gray-200 shadow-lg w-80 md:w-fit">
                <img className='rounded-2xl object-contain' src="https://www.aljazeera.com/wp-content/uploads/2023/12/AP23290670138826-1703627277.jpg?resize=1170%2C780&quality=80" alt="" />
              </div>
            </div>
            </div>
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-100/80 p-6">
             <div className='p-6 mx-2' data-aos="fade-up"
            data-aos-easing="linear">
            <div className="flex flex-col text-center justify-center items-center">
           <h1 className='text-[30px] font-head'> Our Goal</h1>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>
     

            <div className="grid grid-cols-3 md:grid-cols-3 p-4 gap-12 place-items-center">
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 p-4 gap-10 place-items-center">
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-50 p-6">
             <div className='p-6 mx-2 '  data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head'>Roadmap</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div className='my-8'>
            <TextSlider slides={slides} />

            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>



      <section className="w-screen bg-contain bg-no-repeat  bg-blue-100/80 p-6">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head' data-aos="fade-up"
            data-aos-easing="linear">Tokenomics</h2>
          

                  <img src={logo} data-aos="fade-up"
            data-aos-easing="linear" className='w-32 floating' alt="" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
            <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg " data-aos="fade-left"
            data-aos-easing="linear" data-aos-duration="1500" >
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg" data-aos="fade-left"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
            </div>
            </div>
     

           


     </div>
         
      </section>


      <section className="w-screen bg-contain bg-no-repeat  bg-blue-50 p-6">
             <div className='p-6 mx-2 ' data-aos="fade-up"
            data-aos-easing="linear"  data-aos-duration="1500">
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head'>Team</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  p-8 place-items-center">
              <div className="shadow-gray-400 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
                  <img src={logo} className='w-24 rounded-xl' alt="" />
                    <div className="text-center">
                      <h2 className='font-head'>Name</h2>
                      <p className='font-texts'>Lorem, ipsum.</p>
                      <a href="" className='flex justify-center my-1'
                  ><FaTelegram size={25}/></a>
                    </div>

              </div>
              <div className="shadow-gray-400 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
          <img src={logo} className='w-24 rounded-xl' alt="" />
            <div className="text-center">
              <h2 className='font-head'>Name</h2>
              <p className='font-texts'>Lorem, ipsum.</p>
              <a href="" className='flex justify-center my-1'
          ><FaTelegram size={25}/></a>
            </div>

      </div>
      <div className="shadow-gray-400 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
          <img src={logo} className='w-24 rounded-xl' alt="" />
            <div className="text-center">
              <h2 className='font-head'>Name</h2>
              <p className='font-texts'>Lorem, ipsum.</p>
              <a href="" className='flex justify-center my-1'
          ><FaTelegram size={25}/></a>
            </div>

      </div>
            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'><FaTelegram/></a>
                 </div>

     </div>
         
      </section>

      <section className="w-screen bg-[url('./assets/ni.jpg')] bg-cover bg-no-repeat p-6">
      
             <div className='p-6 mx-2' data-aos="zoom-in"  data-aos-easing="linear"  data-aos-duration="1500">
        
            <div className="flex flex-col text-center text-white justify-center items-center">
           <h2 className='text-[30px] font-head'>JOIN  ISWI COMMUNITY</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>


              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Join </a>
                 </div>

     </div>
         
      </section>

      <footer className="w-screen bg-contain bg-no-repeat  bg-blue-100/80 p-6">
              <div className="flex flex-col text-center md:text-start md:flex-row justify-between items-center">
                <div>
                  <img src={logo} className='w-16 spin' alt="" />
                </div>
                <div>
                  <h2 className='font-head'>Quick Links</h2>
                  <ul className='font-texts  w-screen md:w-fit  border-b-gray-300'>
                    <li>HOME</li>
                    <li>About</li>
                    <li>Tokenomics</li>
                    <li>Whitepaper</li>
                  </ul>
                </div>
                <div>
                  <h2 className='font-head'>BUY/SWAP</h2>
                  <ul className='font-texts w-screen md:w-fit  border-b-gray-300'>
                    <li>Dextools</li>
                    <li>Pancakeswap</li>
                    <li>Poocoin</li>
                    
                  </ul>
                </div>

                <div className='justify-center flex flex-col items-center md:items-start'>
                  <h2 className='font-head'>SOCIALS</h2>
                  <ul className='font-texts text-center flex space-x-4'>
                  <FaXTwitter/>
                  <FaTelegram/>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <p className='font-texts'>All Rights Reserved 2024</p>
              </div>
      </footer>

   </div>
  )
}

export default App
