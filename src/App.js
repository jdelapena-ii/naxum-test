import { Fragment } from 'react';
import headlogo from './assets/head-logo.png'
import banner from './assets/banner.jpg'

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
        <img className="relative w-full" src={banner} alt="banner"/>
        
        {/* image content overlay */}
        <div className="absolute top-1/2 w-full">

          <div className="bg-black h-20 w-full  text-white flex justify-center items-center xl:text-5xl uppercase">
            Become a B.a.n.k Trainer
          </div>

          <div className="lg:flex justify-between items-center xl:space-x-10 xl:mt-20">
            <div className="lg:w-1/2 xl:pl-32 xl:pr-16">
              <div className="break-all">
                <p className="xl:text-3xl font-bold">Register for the webinar</p>
                <p>Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
                <p>Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div>
                <img src={headlogo} alt="logo" />

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



    <footer className="h-24 w-full"></footer>
  </Fragment>
  );
}

export default App;
