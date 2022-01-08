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
    <nav className="bg-gray-600 h-10 w-full">
      <div>
        <img src={headlogo}  alt="head-logo" />
      </div>
    </nav>


    <main className="w-full">
      <div className="relative">
        {/* bg image */}
        <img className="relative h-96 lg:h-auto w-full" src={banner} alt="banner"/>
        
        {/* image content overlay */}
        <div className="absolute top-10 lg:top-1/2 w-full">

          <div className="bg-black h-8 lg:h-20 w-full  text-white flex justify-center items-center xl:text-5xl uppercase">
            Become a B.a.n.k Trainer
          </div>

          <div className="lg:flex justify-between items-center text-sm lg:text-base xl:space-x-10 xl:mt-20">
            <div className="lg:w-1/2 xl:pl-32 xl:pr-16">
              <div className="break-all">
                <p className="xl:text-3xl font-bold">Register for the webinar</p>
                <p>Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
                <p>Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div>
                <img src={mainlogo} alt="logo" />

              </div>

              <div>
                <button className="bg-red-700 text-white uppercase px-16 rounded-sm py-4">
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
    </main>



    <footer className="w-full">
      <div className="lg:flex items-center justify-evenly">
        <div>
          <div>FOLLOW B.A.N.K</div>

          <div className="flex justify-evenly items-center">
            <div><img src={facebook} alt="fb-icon"/></div>
            <div><img src={twittter} alt="twit-icon"/></div>
            <div><img src={linkedin} alt="in-icon"/></div>
            <div><img src={youtube} alt="yt-icon"/></div>
          </div>

          <div className="lg:flex">
            <div>BANKCODE.COM <span className="text-pink-600 mx-3">|</span> </div> 
            <div>INFO@BANKCODE.COM <span className="text-pink-600 mx-3">|</span> </div>
            <div>702-342-0742</div>
          </div>
        </div>

        <div className="hidden lg:flex bg-black h-32 w-1 my-3"></div>

        <div>
          <div>CONNECT WITH ME</div>
          <div className="flex justify-around items-center"> 
            <div className="mr-6"><img src={profile} alt="profile"/> </div>

            <div>
              <div>
                <p>ESTHER WILDENBERG</p>
                <p>BANKCODE.COM/ESTHER</p>
                <p>ESTERHER@BANKCODE.COM</p>
                <p>702-342-0742</p>
              </div>
              <div className="flex justify-evenly items-center">
                <div><img src={facebook} alt="fb-icon"/></div>
                <div><img src={twittter} alt="twit-icon"/></div>
                <div><img src={linkedin} alt="in-icon"/></div>
                <div><img src={instagram} alt="yt-icon"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="bg-blue-800 w-full h-2 lg:h-3"></div>
        <div className="bg-red-700 w-full h-2 lg:h-3"></div>
        <div className="bg-yellow-400 w-full h-2 lg:h-3"></div>
        <div className="bg-green-700 w-full h-2 lg:h-3"></div>
      </div>

      <div className="lg:flex bg-gray-700 text-white">
        <p>&copy; BANKCODE | Privacy Policy | Terms of Service | System Requirements | All Rights Reserved</p>
      </div>
    </footer>
  </Fragment>
  );
}

export default App;
