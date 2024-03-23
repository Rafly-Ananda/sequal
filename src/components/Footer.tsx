// Assets
import blackBox from '../assets/footer_illu_black_box.svg';
import yellowBox from '../assets/footer_illu_yellow.svg';
import ball from '../assets/footer_illu_ball.svg';
import connected from '../assets/footer_illu_connected.svg';
import snowFlake from '../assets/footer_illu_snowflake.svg';
import sequalLogo from '../assets/sequal_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] mt-20 relative h-[230px] lg:h-[300px] flex items-center justify-center flex-col overflow-hidden">
      <img
        src={blackBox}
        alt="black box illu"
        className="absolute top-0 left-0 lg:w-[100px] lg:h-[100px]"
      />
      <img
        src={yellowBox}
        alt="yellow box illu"
        className="absolute bottom-0 right-0 lg:left-0 lg:rotate-180 lg:scale-15`0"
      />

      <img
        src={ball}
        alt="blue ball illu"
        className="absolute top-14 right-0 lg:-right-10 lg:w-[100px] lg:h-[100px]"
      />

      <img
        src={connected}
        alt="connected illu"
        className="absolute top-20 right-14 lg:right-40 lg:w-[60px] lg:h-[60px] blue-box-spin"
      />

      <img
        src={snowFlake}
        alt="snowflake illu"
        className="absolute top-16 right-32 lg:right-80 lg:w-[20px] lg:h-[20px] blue-box-spin"
      />

      <div className="h-full p-6 font-Jakarta flex flex-col items-center justify-center lg:w-full relative lg:flex-row lg:items-end lg:p-10 lg:px-20 w-full">
        <div className="w-full">
          <img
            src={sequalLogo}
            alt="sequal logo footer"
            className="w-[90px] h-[24px]"
          />

          {/* <h5 className="font-bold text-sm mt-4">Address:</h5> */}
          <p className="font-bold text-sm mt-4 underline">Bali, Indonesia</p>
          {/* <p className="text-xs lg:text-sm">
            Jalan Kertha Lestari, Perumahan Bali <br className="lg:hidden" />
            Southerland <br className="hidden lg:block" /> Regency Nomor 3,
            Kelurahan <br className="lg:hidden" />
            Sanur, Kecamatan <br className="hidden lg:block" /> Denpasar
            Selatan, <br className="lg:hidden" />
            Kota Denpasar, Bali. Indonesia
          </p> */}

          <p className="font-Jakarta text-xs lg:text-sm w-full mt-10">
            &copy; 2024 SEQUAL. All rights reserved.
          </p>
        </div>

        <ul className="w-full flex flex-col justify-end items-end gap-2">
          <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            X
          </li>
          <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            LINKEDIN
          </li>
          <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            INSTAGRAM
          </li>
        </ul>

        {/* <p className="font-Jakarta text-xs lg:text-sm w-full absolute bottom-4 left-0 ml-6 lg:static lg:m-0 lg:text-right">
          &copy; 2024 SEQUAL. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
