// libs
import { FC } from 'react';
import Hamburger from 'hamburger-react';

// Assets
import sequalLogo from '../assets/sequal_logo.png';
import newFile from '../assets/new_file.svg';

type ComponentProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTop: () => void;
  scrollToElementPorto: () => void;
  scrollToElementMission: () => void;
  scrollToElementFocus: () => void;
};

const Navbar: FC<ComponentProps> = (props) => {
  return (
    <nav className="p-6 lg:px-20 fixed w-full z-10">
      <div className="bg-[#f4f4f4] h-[64px] p-4 px-10 flex items-center justify-between drop-shadow-lg">
        <img
          src={sequalLogo}
          alt="sequal logo"
          className="w-[90px] h-[24px] hover:cursor-pointer"
          onClick={props.scrollToTop}
        />

        <div className="lg:hidden">
          <Hamburger
            toggled={props.isOpen}
            toggle={props.setIsOpen}
            size={25}
          />
        </div>

        <ul className="lg:flex gap-10 font-Jakarta hidden items-center justify-center">
          <li
            className="hover:cursor-pointer hover:font-bold hover:underline transition-all duration-300 ease-in-out"
            onClick={props.scrollToElementPorto}
          >
            Portfolio
          </li>
          <li
            className="hover:cursor-pointer hover:font-bold hover:underline transition-all duration-300 ease-in-out"
            onClick={props.scrollToElementMission}
          >
            Mission
          </li>
          <li
            className="hover:cursor-pointer hover:font-bold hover:underline transition-all duration-300 ease-in-out"
            onClick={props.scrollToElementFocus}
          >
            Our Focus
          </li>
          <li className="bg-[#1f1f1f] p-2 px-[10px] text-[#f4f4f4] font-medium flex gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer">
            {/* <a href="mailto:someone@example.com"></a> */}
            <a href="https://www.elephantunion.com">Get In Touch</a>
            <img src={newFile} alt="new file" />
          </li>
        </ul>
      </div>
      <div
        className={`h-fit bg-[#f4f4f4] p-6 ${
          props.isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-4 font-Jakarta">
          <li
            className="hover:cursor-pointer hover:font-bold"
            onClick={props.scrollToElementPorto}
          >
            Portfolio
          </li>
          <li
            className="hover:cursor-pointer hover:font-bold"
            onClick={props.scrollToElementMission}
          >
            Mission
          </li>
          <li
            className="hover:cursor-pointer hover:font-bold"
            onClick={props.scrollToElementFocus}
          >
            Our Focus
          </li>
          <li className="bg-[#1f1f1f] p-2 px-[10px] text-[#f4f4f4] font-medium flex gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer w-fit">
            {/* <a href="mailto:someone@example.com"></a> */}
            <a href="https://www.elephantunion.com">Get In Touch</a>
            <img src={newFile} alt="new file" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
