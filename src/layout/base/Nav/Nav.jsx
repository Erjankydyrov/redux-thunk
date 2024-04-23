import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const paths = [
    { id: 1, url: "/", name: "Home" },
    { id: 2, url: "/about", name: "About" },
  ];
  return (
    <ul className='flex justify-center items-center gap-4'>
      {paths.map((path) => (
        <NavItem key={path.id} path={path.url}>{path.name}</NavItem>
      ))}
    </ul>
  );
};

export default Nav;
