import './App.css'
import TextSlider from './TextSlider';

function App() {
  const slides = ["PHASE ONE<br>Launch Website <br>Social Media", "PHASE TWO<br>Launch Website <br>Social Media", "PHASE THREE<br>Launch Website <br>Social Media"]; // Add your slides here
 
  return (
   <div>
      <section className="bg-[url('./assets/bg.png')] w-screen h-screen bg-center bg-cover">
            
            <nav className="flex justify-between items-center p-6 md:p-12 md:mx-8">
              <div className="">

              </div>
                  <div className="hidden">
                    <ul className='flex space-x-12'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Tokenomics</li>
                      <li>Roadmap</li>
                    </ul>
                  </div>
            </nav>

            <div className="flex justify-center text-center items-center md:p-24 md:mx-24">
              <div className='p-36 md:p-0 -mx-32 md:-mx-0'>
                <h1 className='font-head text-shadow-one md:text-[60px] text-white drop-shadow-3xl text-[30px]'>I STAND WITH ISRAEL</h1>
                <p className='text-white font-texts md:text-black md:text-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit explicabo maiores ipsam!
                   Doloremque dolorem molestias recusandae eum quas quae deserunt culpa? Aut, illum at?</p>
                 <div className='my-4'>
                 <a href="" className='bg-transparent border
                  hover:bg-[#274480] transition duration-150 ease-in-out
                 border-white px-8 py-2 rounded-lg text-2xl font-head text-white shadow-blue-50 shadow-sm'>Join Community</a>
                 </div>
              </div>

            </div>
      </section>


      <section className='h-fit bg-blue-50'>
            <div className='p-6 mx-2 h'>
            <div className="flex font-head justify-center text-[25px] items-center">
            About
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 place-items-center">
              <div className="shadow-gray-400 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur natus
                   fuga minima enim ullam consectetur, deleniti soluta nostrum voluptate a voluptatem quo.</p>
              </div>
              <div className="shadow-gray-200 shadow-lg">
                <img className='rounded-2xl object-contain' src="https://www.aljazeera.com/wp-content/uploads/2023/12/AP23290670138826-1703627277.jpg?resize=1170%2C780&quality=80" alt="" />
              </div>
            </div>
            </div>
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-100/80">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[25px] font-head'> Our Goal</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>
     

            <div className="grid grid-cols-3 md:grid-cols-3 p-4  place-items-center">
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
              <div className="grid grid-cols-3 md:grid-cols-3 p-4 place-items-center">
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
                  bg-[#274480] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-blue-50">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[25px] font-head'>Roadmap</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div>
            <TextSlider slides={slides} />

            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-[#274480] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>



      <section className="w-screen bg-contain bg-no-repeat  bg-blue-100/80">
             <div className='p-6 mx-2 h'>
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[25px] font-head'>Tokenomics</h2>
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
            </div>
     

           


     </div>
         
      </section>

   </div>
  )
}

export default App
