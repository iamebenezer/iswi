import './App.css'

function App() {

  return (
   <div>
      <section className="bg-[url('./assets/bg.png')] w-screen h-screen bg-center bg-cover">
            
            <nav className="flex justify-between items-center p-6 md:p-12 md:mx-8">
              <div className="">
                <h1 className='font-head'>ISWI</h1>
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


      <section className='-fit bg-blue-50'>
            <div className='p-6 mx-2 h'>
            <div className="flex font-head justify-center text-[25px] items-center">
            About
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
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

      <section className="w-screen h-screen bg-contain bg-no-repeat bg-[url('https://ia.tmgrup.com.tr/b2792e/806/378/0/137/800/512?u=https://i.tmgrup.com.tr/anews/v1/2022/08/16/israel-admits-to-killing-5-palestinian-children-in-gaza-in-recent-offensive-1660641757178.jpg')]">
           
        
              <div className="shadow-gray-200 shadow-lg">
                <img className='object-cover' src="" alt="" />
              </div>
         
      </section>

   </div>
  )
}

export default App
