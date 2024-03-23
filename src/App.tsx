// Libs
import { useState, useEffect, useRef } from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

// Assets
import blueBox from './assets/blue_box.svg';
import arrowDown from './assets/arrow_down.svg';
import portfolioIllu from './assets/potfolion_illustration.svg';
import boxesIllu1 from './assets/boxes_illu_1.svg';
import boxesIllu2 from './assets/boxes_illu_2.svg';
import ringIllu from './assets/ring_illu.svg';
import worldIllu from './assets/world_illu.svg';
import focusTech from './assets/focus_technology.svg';
import focusSolution from './assets/focus_solution.svg';
import focusArt from './assets/focus_art.svg';
import focusCulture from './assets/focus_culture.svg';
import focusMedia from './assets/focus_media.svg';
import focusFashion from './assets/focus_fashion.svg';
import focusAR from './assets/focus_ar.svg';
import focusVR from './assets/focus_vr.svg';
import focusBrainstorm from './assets/focus_brainstorm.svg';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isMNavOpen, setIsMNavOpen] = useState<boolean>(false);
  const topOfPageRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const ourFocusRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    const { current } = topOfPageRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMNavOpen(false);
  };

  const scrollToElementPorto = () => {
    const { current } = portfolioRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMNavOpen(false);
  };

  const scrollToElementMission = () => {
    const { current } = missionRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMNavOpen(false);
  };

  const scrollToElementFocus = () => {
    const { current } = ourFocusRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMNavOpen(false);
  };

  useEffect(() => {
    setIsMNavOpen(false);
  }, []);

  return (
    <>
      <section ref={topOfPageRef}></section>
      <Navbar
        isOpen={isMNavOpen}
        setIsOpen={setIsMNavOpen}
        scrollToTop={scrollToTop}
        scrollToElementPorto={scrollToElementPorto}
        scrollToElementMission={scrollToElementMission}
        scrollToElementFocus={scrollToElementFocus}
      />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="px-6 lg:px-20 h-[90vh] flex flex-col justify-center  relative">
          <ul className=" background w-full h-full absolute left-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="relative w-fit mt-24">
            <h1 className="font-bold text-5xl text-[#f4f4f4] font-Inter lg:text-8xl lg:leading-[105px] ">
              We're{' '}
              <span className="underline">
                <span className="bg-gradient-to-r from-cyan-500 to-[#2f55ff] text-transparent bg-clip-text background-animate">
                  capital engine
                </span>
              </span>
              <br className="hidden lg:block" /> for Community & Business
              <br className="hidden lg:block" /> in
              <span className="bg-gradient-to-r from-cyan-500 to-[#2f55ff] text-transparent bg-clip-text background-animate">
                {' '}
                Web3, NFT and Blockchain.
              </span>
            </h1>

            <div className="flex items-center justify-center mt-10 lg:w-fit lg:absolute -top-40 right-20">
              <img
                src={blueBox}
                alt="blue box hero"
                className="lg:w-[230px] lg:h-[230px] blue-box-spin"
              />
            </div>
          </div>
        </section>

        {/* Also The Largest */}
        <section className="bg-[#f4f4f4] flex flex-col items-center justify-center p-12 gap-4">
          <Fade>
            <img
              src={arrowDown}
              alt="arrow down"
              className="animate-bounce hover:cursor-pointer"
              onClick={scrollToElementPorto}
            />
            <h1 className="font-bold text-2xl text-[#1f1f1f] text-center lg:text-5xl mt-6 font-Inter">
              Also The
              <span className="text-[#2f55ff]"> Largest Web3</span> <br />
              Venture Capital in Indonesia
            </h1>
          </Fade>

          <div className="h-[1px] w-full bg-[#1f1f1f] lg:w-[40%] lg:h-[2px]"></div>

          <Fade>
            <p className="font-Jakarta text-center text-sm font-medium lg:text-base">
              Founded in 2022, We have a mission to accelerate
              <br className="hidden lg:block" /> the development of a better
              financial system & <br className="hidden lg:block" /> real world
              impact.
            </p>
          </Fade>
        </section>

        {/* Portfolio */}
        <section className="px-6 lg:px-20 mt-10" ref={portfolioRef}>
          <Fade>
            <div className="flex">
              <div className="bg-[#ffe82f]  w-[32px]"></div>
              <div className="bg-[#f4f4f4] w-fit flex items-center justify-center px-4 py-2">
                <h1 className="text-[#1f1f1f] text-4xl font-Inter font-bold lg:text-6xl">
                  Portfolio
                </h1>
              </div>
            </div>
            <div className="bg-[#f4f4f4] lg:w-fit px-10">
              <p className="font-Jakarta text-sm p-2 lg:text-base">
                <span className="font-bold">//</span> Become the partner of
                choice for communities, business and funding networks who want
                to
                <br className="hidden lg:block" />
                participate in the dynamic growth of Web3 and Blockchain in
                Southeast Asia.
              </p>
            </div>
          </Fade>

          <Fade>
            <div className="lg:flex items-center justify-center ">
              <div className="grid grid-cols-2 grid-rows-6 border border-[#9f9f9f] mt-10 rounded-xl lg:grid-cols-4 lg:grid-rows-3 lg:w-[80%]">
                <div className="text-white border-r borde-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  01
                </div>
                <div className="text-white border-b lg:border-r border-[#9f9f9f] p-6 flex items-center justify-center">
                  02
                </div>
                <div className="text-white border-t lg:border-t-0 border-r border-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  03
                </div>
                <div className="text-white border-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  04
                </div>
                <div className="text-white border-t border-r border-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  05
                </div>
                <div className="text-white border-b lg:border-r border-[#9f9f9f] p-6 flex items-center justify-center">
                  06
                </div>
                <div className="text-white border-t border-r border-b lg:border-t-0 border-[#9f9f9f] p-6 flex items-center justify-center">
                  07
                </div>
                <div className="text-white border-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  08
                </div>
                <div className="text-white border-t border-r border-b border-[#9f9f9f] p-6 flex items-center justify-center">
                  09
                </div>
                <div className="text-white border-b lg:border-b-0 lg:border-r border-[#9f9f9f] p-6 flex items-center justify-center">
                  10
                </div>
                <div className="text-white border-t border-r lg:border-t-0 border-[#9f9f9f] p-6 flex items-center justify-center">
                  11
                </div>
                <div className="text-white  border-[#9f9f9f] p-6 flex items-center justify-center">
                  12
                </div>
              </div>
            </div>
          </Fade>

          <Slide direction="right">
            <div className="flex items-center justify-center lg:justify-end mt-10">
              <img src={portfolioIllu} alt="potfolio illu" />
            </div>
          </Slide>

          <Slide>
            <div className="bg-[#2f55ff] mt-10 p-10 relative lg:px-28 lg:py-24">
              <img
                src={boxesIllu1}
                alt="illustration 1"
                className="absolute top-0 right-0 lg:w-[90px] lg:h-[90px]"
              />
              <img
                src={boxesIllu2}
                alt="illustration 2"
                className="absolute lg:-bottom-1 bottom-0 left-0 lg:w-[150px] lg:h-[150px]"
              />

              <p className="text-[#f4f4f4] font-Jakarta text-right text-xl lg:text-[53px] leading-tight">
                A world-class active
                <br className="lg:hidden" /> Accelerator and
                <br className="lg:hidden" /> Funding
                <br className="hidden lg:block" /> Company that{' '}
                <br className="lg:hidden" />
                prioritizes the character <br className="lg:hidden" /> of
                <br className="hidden lg:block" />
                decentralization, <br className="lg:hidden" />
                equality and strong <br /> independent
                <br className="lg:hidden" /> community
              </p>

              <p className="text-[#f4f4f4] font-Jakarta text-xs text-right mt-[48px] lg:text-xl">
                Fundamentals to create value for the benefit of the Web3 and
                Blockchain <br className="hidden lg:block" /> world, especially
                in the
                <span className="text-[#FFE82F]"> Southeast Asia Region</span>
              </p>
            </div>
          </Slide>
        </section>

        {/* Mission */}
        <section className="px-6 lg:px-20" ref={missionRef}>
          <Fade>
            <div className="h-[1px] w-full bg-[#9f9f9f] mt-10 lg:mt-20"></div>
            <div className="lg:flex lg:pt-10 lg:h-[369px]">
              <div className="lg:flex-1">
                <h1 className="text-[#f4f4f4] font-Inter text-4xl font-bold mt-10 lg:text-6xl">
                  Mission
                </h1>

                <p className="text-[#f4f4f4] font-Jakarta mt-6">
                  Become the partner of choice for communities,
                  <br className="lg:hidden" /> business and
                  <br className="hidden lg:block" /> funding networks who want
                  to
                  <br className="lg:hidden" /> participate in the dynamic
                  <br className="hidden lg:block" /> growth of Web3 and
                  <br className="lg:hidden" /> Blockchain in Southeast Asia.
                </p>
              </div>

              <div className="lg:flex items-center justify-center lg:flex-1">
                <div className="bg-[#f4f4f4] p-6 h-[270px] flex flex-col items-start justify-end gap-4 mt-10 lg:h-full lg:w-full">
                  <img src={ringIllu} alt="ring illu" />
                  <p className="lg:text-lg font-Jakarta">
                    Connecting the Web2-Web3 <br /> world, adhering to the
                    principles <br />
                    of Sustainability.
                  </p>
                </div>

                <div className="bg-[#2F55FF] lg:h-full lg:w-full p-6 h-[270px] flex flex-col items-start justify-end gap-4 lg:mt-10">
                  <img src={worldIllu} alt="world illu" />
                  <p className="text-[#f4f4f4] lg:text-lg font-Jakarta">
                    Focusing on Real World <br /> Impact on the business
                    <br />
                    being carried out.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* Our Focus */}
        <section className="px-6 lg:px-20" ref={ourFocusRef}>
          <div className="h-[1px] w-full bg-[#9f9f9f] mt-10 lg:mt-20"></div>

          <Fade>
            <div className=" lg:flex lg:pt-10 items-center justify-between ">
              <div>
                <h1 className="text-[#f4f4f4] font-Inter text-4xl font-bold mt-10 lg:text-6xl lg:mt-0">
                  Our Focus
                </h1>

                <p className="text-[#f4f4f4] font-Jakarta mt-6">
                  Over the past two years, our team has been
                  <br className="lg:hidden" /> actively driving the
                  <br className="hidden lg:block" /> advancement of various
                  <br className="lg:hidden" /> projects in the realms of Web3,
                  NFTs, and
                  <br /> Blockchain.
                </p>
              </div>

              <div className="flex items-center justify-center mt-10 lg:mt-0 ">
                <img
                  src={blueBox}
                  alt="blue box hero"
                  className="lg:w-[250px] lg:h-[250px] blue-box-spin"
                />
              </div>
            </div>
          </Fade>

          {/* Focus Items Start */}
          <Fade>
            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:p-10">
              <div className="hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full lg:border-r border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img src={focusTech} alt="focus tech" className="w-10" />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold mt-6">
                    technology
                  </h4>
                  <p className="font-Jakarta text-sm mt-4">
                    Innovation in the realm of technology <br />
                    driving advancements withing the Web3 <br />
                    landscape.
                  </p>
                </div>
              </div>
              <div className="hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full lg:border-r border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img
                      src={focusSolution}
                      alt="focus creative"
                      className="w-10"
                    />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    creative (ip)
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    The realm of Web3 offers fertile ground <br />
                    for the development and protection of <br />
                    creative intellectual property (IP).
                  </p>
                </div>
              </div>
              <div className="hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img src={focusArt} alt="focus art" className="w-10" />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    art
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    Web3 provides a platform for the <br />
                    flourishing of artistry across various <br />
                    mediums.
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full lg:border-r border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img
                      src={focusCulture}
                      alt="focus culture"
                      className="w-10"
                    />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    culture
                  </h4>
                  <p className="font-Jakarta text-sm mt-4 text-[#f4f4f4]">
                    Within Web3, cultural diversity and <br />
                    heritage find new avenues for expression <br />
                    and preservation.
                  </p>
                </div>
              </div>
              <div className="hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4]  ">
                <div className="border-t lg:h-full lg:border-r border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img
                      src={focusMedia}
                      alt="focus creative"
                      className="w-10"
                    />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    media
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    Web3 platforms are reshaping the <br />
                    landscape of media consumption and <br />
                    distribution.
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img
                      src={focusFashion}
                      alt="focus fashion"
                      className="w-10"
                    />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    digital fashion
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    The convergence of digital technology <br />
                    and fashion is creating exciting <br />
                    opportunities within the Web3. <br />
                    ecosystem
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full lg:border-b lg:border-r  border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img src={focusAR} alt="focus ar" className="w-10" />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    augmented reality (AR)
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    Augmented Reality (AR) experiences are <br />
                    being revolutionized by the capabilities <br />
                    of Web3 platforms.
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full lg:border-b lg:border-r  border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img src={focusVR} alt="focus vr" className="w-10" />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    virtual reality (vr)
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    Virtual Reality (VR) is poised to redefine <br />
                    immersive experiences within the Web3 <br />
                    domain.
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#2F55FF] transition-all duration-300 ease-in-out text-[#f4f4f4] ">
                <div className="border-t lg:h-full border-b border-[#9f9f9f] p-6 lg:p-10">
                  <div className="w-full flex items-center justify-end">
                    <img
                      src={focusBrainstorm}
                      alt="focus digital art"
                      className="w-10"
                    />
                  </div>

                  <h4 className="uppercase font-Jakarta font-bold text-[#f4f4f4] mt-6">
                    digital art sectors
                  </h4>
                  <p className="font-Jakarta text-sm mt-4  text-[#f4f4f4]">
                    The digital art sector is experiencing a <br />
                    renaissance within the decentralized <br />
                    environment of Web3
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
