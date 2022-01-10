import { Fragment } from 'react';
import headlogo from './assets/head-logo.png'
import mainlogo from './assets/main-logo.png'
import banner from './assets/banner.jpg'
import facebook from './assets/fb.png'
import instagram from './assets/ig.png'
import twitter from './assets/twit.png'
import youtube from './assets/yt.png'
import linkedin from './assets/in.png'
import profile from './assets/profile.jpg'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import RegisterForm from './components/RegisterForm';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (
   <Fragment>
    <nav className="bg-gray-700 h-16 w-full">
      <div className="ml-8 md:ml-24 lg:ml-32 pt-3">
        <img src={headlogo}  alt="head-logo" className="cursor-pointer" />
      </div>
    </nav>


    <main className="w-full overflow-x-hidden bg-slate-200 pb-10 md:pb-16 lg:pb-10 xl:pb-0">
      <div className="relative">
        {/* bg image */}
        <img className="relative h-72 lg:h-auto w-full" src={banner} alt="banner"/>
        
        {/* image content overlay */}
        <div className="absolute top-24 lg:top-1/3 w-full">

          <div className="bg-black h-14 lg:h-20 w-full font-bold text-white flex justify-center items-center text-2xl lg:text-4xl xl:text-5xl uppercase">
            Become a B.a.n.k Trainer
          </div>

          <div className="hidden xl:flex justify-between items-start text-black text-sm lg:text-base lg:space-x-10 lg:mt-3 xl:mt-28">
            <div className="lg:w-1/2 lg:pl-24 xl:pl-40 lg:pr-6 xl:pr-10">
              <div className="break-words">
                <p className="lg:text-2xl xl:text-4xl font-bold uppercase xl:mb-4">Register for the webinar</p>
                <p className="xl:text-lg font-semibold">Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
                <p className="xl:text-lg font-semibold">Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-8">
                <img src={mainlogo} alt="logo" />
              </div>

              <div>
                <Button onClick={onOpen} colorScheme='blue-700' borderRadius='3px' px={20} py={6}  className="bg-red-700 text-white uppercase mb-3 text-xl">
                  Register Now
                </Button>
              </div>

              <div className="text-sm font-semibold">
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
          <p className="mb-2">Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
          <p className="">Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
        </div>
      </div>

      <div className="lg:hidden mt-6 px-6 grid justify-center">
        <div className="mb-8">
          <img src={mainlogo} alt="logo" />
        </div>

        <div className="grid justify-center">
          <Button onClick={onOpen} colorScheme='red-700' borderRadius='3px' px={20} py={6}  className="bg-red-700 text-white uppercase mb-3 text-xl">
            Register Now
          </Button>
        </div>
        <div className="text-sm grid justify-center">
          *See our last live session on demand instantly
        </div>
      </div>
      {/* end of small viewport */}

      {/* large viewport */}
      <div className="hidden lg:flex xl:hidden justify-between items-start text-black text-sm lg:text-base lg:space-x-10 lg:mt-12">
        <div className="lg:w-1/2 lg:pl-16 lg:pr-6">
          <div className="break-words">
            <p className="lg:text-3xl font-bold uppercase lg:mb-4">Register for the webinar</p>
            <p className="lg:text-xl">Learn how to launch your own B.A.N.K business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K Trainer during our webinar.</p>
            <br/>
            <p className="lg:text-xl">Register today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K</p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-10">
          <div className="mb-8">
            <img src={mainlogo} alt="logo" />
          </div>

          <div>
            <Button onClick={onOpen} colorScheme='red-700' borderRadius='3px' px={20} py={6}  className="bg-red-700 text-white uppercase mb-3 text-xl">
              Register Now
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
              <ModalContent>

                <ModalHeader>Register Now</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <RegisterForm />
                </ModalBody>

              </ModalContent>
            </Modal>
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
            <div><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="fb-icon"/></a></div>
            <div><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="twit-icon"/></a></div>
            <div><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="in-icon"/></a></div>
            <div><a href="https://youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="yt-icon"/></a></div>
          </div>

          <div className="lg:flex items-center justify-center mt-4">
            <div className="px-6 xl:px-0 text-center"><a href="https://my.bankcode.com/" target="_blank" rel="noreferrer">BANKCODE.COM</a> <span className="text-pink-600 mx-1 xl:mx-3">|</span><a href="mailto: esther@bankcode.com">INFO@BANKCODE.COM</a> <span className="text-pink-600 mx-1 xl:mx-3">|</span><a href="tel:702-342-0742">702-342-0742</a></div> 
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
                <p><a href="https://my.bankcode.com/esther" target="_blank" rel="noreferrer">BANKCODE.COM/ESTHER</a></p>
                <p><a href="mailto: esther@bankcode.com">ESTERHER@BANKCODE.COM</a></p>
                <p><a href="tel:702-342-0742">702-342-0742</a></p>
              </div>
              <div className="flex justify-center items-center mt-2 space-x-2 md:space-x-5 lg:space-x-8">
              <div><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="fb-icon"/></a></div>
            <div><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="twit-icon"/></a></div>
            <div><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="in-icon"/></a></div>
            <div><a href="https://instagrams.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="ig-icon"/></a></div>
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
