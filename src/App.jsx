import './App.css'
import TextSlider from './TextSlider';
import logo from './assets/logo.png'
import video from './assets/video.mp4'

function App() {
  const slides = ["PHASE ONE<br>Launch Website <br>Social Media", "PHASE TWO<br>Launch Website <br>Social Media", "PHASE THREE<br>Launch Website <br>Social Media"]; // Add your slides here
 
  return (
   <div>
        
      <section className="bg-[url('./assets/bg.png')] text-white w-screen h-screen bg-center bg-cover">
        <div className="overlay"></div>
      <video src={video} loop autoPlay muted className='h-screen w-screen object-cover'></video>
            <nav className="absolute top-0 right-0 left-0 flex justify-between items-center p-6 md:p-12 md:mx-8">
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
            </nav>

            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center text-center items-center md:p-24 md:mx-24">
              <div className='p-36 md:p-0 -mx-32 md:-mx-0'>
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
                        I STAND WITH ISRAEL
                    </div>
                </marquee>
            </div>
        </section>
      <section className='h-fit bg-blue-50 p-6'>
            <div className='p-6 mx-2 h'>
            <div className="flex font-head justify-center text-[25px] items-center">
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
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h1 className='text-[25px] font-head'> Our Goal</h1>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
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
                 border-white border-2 px-8 py-2 rounded-lg text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-50 p-6">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[25px] font-head'>Roadmap</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div>
            <TextSlider slides={slides} />

            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>



      <section className="w-screen bg-contain bg-no-repeat  bg-blue-100/80 p-6">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head'>Tokenomics</h2>
            {/* <div className="min-h-screen flex justify-center items-cente">
           <div class="min-h-screen flex justify-center items-center">
  <div class="slider-container">
    <div class="slider">
      <div class="slider-item">
        <img src="https://cdn.vanguardngr.com/wp-content/uploads/2023/10/image-222.png" alt="Slide 1" class="w-full" />
      </div>
      <div class="slider-item">
        <img src="https://www.amnesty.org/en/wp-content/uploads/2023/10/294021-scaled.jpg" alt="Slide 2" class="w-full" />
      </div>
      <div class="slider-item">
        <img src="https://static.standard.co.uk/2023/10/12/11/1715983389.jpg?crop=8:5,smart&quality=75&auto=webp&width=1024" alt="Slide 3" class="w-full" />
      </div>
    </div>
  </div>
</div>

    </div>  */}

                  <img src={logo} className='w-32 floating' alt="" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
            <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-400 shadow-lg w-80 md:fit p-4 rounded-lg">
              <h3 className='font-head text-[20px]'>10,000,000</h3>
                <p className='text-center font-texts'>lorem</p>
              </div>
            </div>
            </div>
     

           


     </div>
         
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-50 p-6">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[25px] font-head'>JOIN  ISWI COMMUNITY</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>


              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#202b8f] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-2xl 
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
                  <ul className='font-texts  w-screen border border-b-gray-300'>
                    <li>HOME</li>
                    <li>About</li>
                    <li>Tokenomics</li>
                    <li>Whitepaper</li>
                  </ul>
                </div>
                <div>
                  <h2 className='font-head'>BUY/SWAP</h2>
                  <ul className='font-texts w-screen border border-b-gray-300'>
                    <li>Dextools</li>
                    <li>Pancakeswap</li>
                    <li>Poocoin</li>
                    
                  </ul>
                </div>

                <div>
                  <h2 className='font-head'>SOCIALS</h2>
                  <ul className='font-texts text'>
                  
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
