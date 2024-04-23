import LogoWhite from "../../../components/ui/LogoWhite/LogoWhite";

const Footer = () => {
  return (
    <footer className="bg-[#303846] py-3">
      <div className="container">
        <div className='flex justify-center flex-col items-center gap-y-5'>
          <LogoWhite />
          <div>
            <p className="text-lg text-white text-center">
              &copy; 2024-present Erjan Kydyrov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
