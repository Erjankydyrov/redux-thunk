import Logo from "../../../components/ui/Logo/Logo";
import Nav from "../Nav/Nav";

const Toolbar = () => {
  return (
    <nav className="bg-[#242526] py-2">
      <div className="container">
        <div className='flex justify-between items-center'>
          <Logo />
          <Nav />
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
