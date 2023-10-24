import reactLogo from "../assets/react.svg";
export const NavBar = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="links">
          <a
            href="https://apisperu.com/servicios/dniruc/"
            target="_blank"
            className="link"
          >
            APIsPERU
          </a>
          <a href="https://github.com/Buddier" target="_blank" className="link">
            GitHub
          </a>
        </div>
      </header>
    </>
  );
};
