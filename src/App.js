import { Fragment } from 'react';
import headlogo from './assets/head-logo.png'
import mainlogo from './assets/main-logo.png'
import banner from './assets/banner.jpg'
import facebook from './assets/fb.png'
import instagram from './assets/ig.png'
import twittter from './assets/twit.png'
import youtube from './assets/yt.png'
import linkedin from './assets/in.png'
import profile from './assets/profile.jpg'

function App() {
  return (
   <Fragment>
    <nav className="bg-gray-700 h-16 w-full">
      <div className="ml-8 md:ml-24 lg:ml-32 pt-3">
        <img src={headlogo}  alt="head-logo" />
      </div>
    </nav>


    <main className="w-full overflow-x-hidden bg-slate-200 pb-10 md:pb-16 lg:pb-10 xl:pb-0">
      <div className="relative">
        {/* bg image */}
        <img className="relative h-72 lg:h-auto w-full" src={banner} alt="banner"/>
        
        {/* image content overlay */}
        <div className="absolute top-24 lg:top-1/3 w-full">

          <div className="bg-black h-14 lg:h-20 w-full  text-white flex justify-center items-center text-2xl lg:text-4xl xl:text-5xl uppercase">
            Become a B.a.n.k Trainer
          </div>

          <div className="hidden xl:flex justify-between items-start text-black text-sm lg:text-base lg:space-x-10 lg:mt-3 xl:mt-28">
            <div className="lg:w-1/2 lg:pl-24 xl:pl-40 lg:pr-6 xl:pr-10">
              <div className="break-words">
                <p className="lg:text-2xl xl:text-4xl font-bold uppercase xl:mb-4">Register for the webinar</p>
                <p className="xl:text-lg">Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
                <p className="xl:text-lg">Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-8">
                <img src={mainlogo} alt="logo" />
              </div>

              <div>
                <button className="bg-red-700 text-white uppercase px-24 rounded-sm py-5 mb-3 text-xl">
                  Register Now
                </button>
              </div>
              <div className="text-sm">
                *See our last live session on demand instantly
              </div>
            </div>
          </div>

        </div>
        {/* end image content overlay */}
  
      </div>

      {/* small viewport */}
      <div className="lg:hidden px-6 md:px-12 md:mt-6">
        <div className="break-words">
          <p className="text-xl font-bold uppercase my-2">Register for the webinar</p>
          <p>Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
          <p>Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
        </div>
      </div>

      <div className="lg:hidden mt-6 px-6 grid justify-center">
        <div className="mb-8">
          <img src={mainlogo} alt="logo" />
        </div>

        <div>
          <button className="bg-red-700 text-white uppercase px-24 rounded-sm py-5 mb-3 text-lg">
            Register Now
          </button>
        </div>
        <div className="text-sm">
          *See our last live session on demand instantly
        </div>
      </div>
      {/* end of small viewport */}

      {/* large viewport */}
      <div className="hidden lg:flex xl:hidden justify-between items-start text-black text-sm lg:text-base lg:space-x-10 lg:mt-12">
        <div className="lg:w-1/2 lg:pl-16 lg:pr-6">
          <div className="break-words">
            <p className="lg:text-3xl font-bold uppercase lg:mb-4">Register for the webinar</p>
            <p className="lg:text-xl mb-4">Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
            <p className="lg:text-xl">Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-10">
          <div className="mb-8">
            <img src={mainlogo} alt="logo" />
          </div>

          <div>
            <button className="bg-red-700 text-white uppercase px-24 rounded-sm py-5 mb-3 text-xl">
              Register Now
            </button>
          </div>
          <div className="text-base">
            *See our last live session on demand instantly
          </div>
        </div>
      </div>
      {/* end of large viewport */}

      <div className="lg:flex items-start justify-center lg:space-x-8 xl:space-x-16 xl:-ml-24 mb-2 mt-16 xl:mt-6">
        <div className="mt-6 grid justify-center">
          <div className="flex justify-center items-start mb-4 text-xl font-semibold">FOLLOW B.A.N.K</div>

          <div className="flex justify-center space-x-2 md:space-x-5 lg:space-x-8 items-center">
            <div><img src={facebook} alt="fb-icon"/></div>
            <div><img src={twittter} alt="twit-icon"/></div>
            <div><img src={linkedin} alt="in-icon"/></div>
            <div><img src={youtube} alt="yt-icon"/></div>
          </div>

          <div className="lg:flex items-center justify-center mt-4">
            <div className="px-6 xl:px-0 text-center">BANKCODE.COM <span className="text-pink-600 mx-1 xl:mx-3">|</span> INFO@BANKCODE.COM <span className="text-pink-600 mx-1 xl:mx-3">|</span>  702-342-0742</div> 
          </div>
        </div>

        <div className="hidden lg:flex mt-4 bg-black h-48 w-1 my-4"></div>

        <div className="mt-12 lg:mt-6">
          <div className="flex justify-center items-start mb-4 lg:ml-6 text-xl font-semibold">CONNECT WITH ME</div>

          <div className="flex justify-center xl:justify-around items-start"> 
            <div className="mr-3 lg:mr-6"><img src={profile} alt="profile" className="rounded-full"/> </div>

            <div>
              <div>
                <p>ESTHER WILDENBERG</p>
                <p>BANKCODE.COM/ESTHER</p>
                <p>ESTERHER@BANKCODE.COM</p>
                <p>702-342-0742</p>
              </div>
              <div className="flex justify-center items-center mt-2 space-x-2 md:space-x-5 lg:space-x-8">
                <div><img src={facebook} alt="fb-icon"/></div>
                <div><img src={twittter} alt="twit-icon"/></div>
                <div><img src={linkedin} alt="in-icon"/></div>
                <div><img src={instagram} alt="yt-icon"/></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </main>

    <footer className="w-full overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="bg-blue-800 w-full h-2 lg:h-3"></div>
        <div className="bg-red-700 w-full h-2 lg:h-3"></div>
        <div className="bg-yellow-600 w-full h-2 lg:h-3"></div>
        <div className="bg-green-700 w-full h-2 lg:h-3"></div>
      </div>

      <div className="text-center flex justify-center items-center h-24 bg-gray-700 text-gray-300">
        <p>&copy; 2018 BANKCODE | Privacy Policy | Terms of Service | System Requirements | All Rights Reserved</p>
      </div>
    </footer>
    
  </Fragment>
  );
}

export default App;
