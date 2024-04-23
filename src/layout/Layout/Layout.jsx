import Footer from "../base/Footer/Footer";
import Header from "../base/Header/Header";
import Main from "../base/Main/Main";
import Wrapper from "../base/Wrapper/Wrapper";

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Layout;
