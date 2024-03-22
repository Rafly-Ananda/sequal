// libs
import { FC } from 'react';
import Hamburger from 'hamburger-react';

// Assets
import sequalLogo from '../assets/sequal_logo.png';

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
    <nav className="p-6 fixed w-full z-10">
      <div className="bg-[#f4f4f4] h-[64px] p-4 flex items-center justify-between">
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

        <ul className="lg:flex gap-10 font-Jakarta hidden">
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
        </ul>
      </div>
      <div
        className={`h-[158px] bg-[#f4f4f4] p-6 ${
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
