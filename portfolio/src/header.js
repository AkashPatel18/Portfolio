import React from "react";

const Header = () => {
  const go = () => {
    var elem = document.getElementById("about");
    elem.scrollIntoView();
  };

  return (
    <>
      <header className="header">
        <div className="header_item" className="header_item">
          <button
            onClick={go}
            className="link"
            href="https://github.com/AkashPatel18"
          >
            About me
          </button>
        </div>
        <div className="header_item">
          <button
            onClick={go}
            className="link"
            href="https://github.com/AkashPatel18"
          >
            Skills
          </button>
        </div>
        <div className="header_item">
          <button
            onClick={go}
            className="link"
            href="https://github.com/AkashPatel18"
          >
            Projects
          </button>
        </div>
        <div className="header_item">
          <button className="link" href="https://github.com/AkashPatel18">
            Education
          </button>
        </div>
        <div className="header_item">
          <button className="link" href="https://github.com/AkashPatel18">
            Blogs
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
