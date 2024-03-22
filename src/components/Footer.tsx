// Assets
import blackBox from '../assets/footer_illu_black_box.svg';
import yellowBox from '../assets/footer_illu_yellow.svg';
import ball from '../assets/footer_illu_ball.svg';
import connected from '../assets/footer_illu_connected.svg';
import snowFlake from '../assets/footer_illu_snowflake.svg';
import sequalLogo from '../assets/sequal_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] mt-20 relative h-[348px] flex items-center justify-center flex-col">
      <img
        src={blackBox}
        alt="black box illu"
        className="absolute top-0 left-0"
      />
      <img
        src={yellowBox}
        alt="yellow box illu"
        className="absolute bottom-0 left-0"
      />

      <img
        src={ball}
        alt="blue ball illu"
        className="absolute top-14 right-0"
      />

      <img
        src={connected}
        alt="connected illu"
        className="absolute top-20 right-14"
      />

      <img
        src={snowFlake}
        alt="snowflake illu"
        className="absolute top-16 right-32"
      />

      <div className="h-full p-6 font-Jakarta flex flex-col items-center justify-center lg:w-full relative lg:flex-row lg:items-end  lg:p-10 lg:px-20">
        <div className=" lg:w-full">
          <img
            src={sequalLogo}
            alt="sequal logo footer"
            className="w-[90px] h-[24px]"
          />

          <h5 className="font-bold text-sm mt-4">Address:</h5>
          <p className="text-xs lg:text-sm">
            Jalan Kertha Lestari, Perumahan Bali <br />
            Southerland Regency Nomor 3, Kelurahan <br />
            Sanur, Kecamatan Denpasar Selatan, <br />
            Kota Denpasar, Bali. Indonesia
          </p>
        </div>

        <p className="font-Jakarta text-xs lg:text-sm w-full absolute bottom-4 left-0 ml-6 lg:static lg:m-0 lg:text-right">
          &copy; 2024 SEQUAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
