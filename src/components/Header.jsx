function Header() {
  return (
    <header>
      <a href="/react-portfolio"><img src="react-portfolio/assets/images/fern.jpg" alt="Fern" /></a>
      <nav>
        <a href="/react-portfolio"><h1>Fernando Valle</h1></a>
        <ul>
          <li>
            <a href="/react-portfolio/about"><i className="fa fa-circle-info"/> About Me</a>
          </li>
          <li>
            <a href="/react-portfolio/projects"><i className="fa fa-briefcase"/> Projects</a>
          </li>
          <li>
            <a href="/react-portfolio/contact"><i className="fa fa-address-card"/> Contact Me</a>
          </li>
          <li>
            <a href="#resume"><i className="fa fa-file"/> Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;