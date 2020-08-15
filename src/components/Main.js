import React from "react";

const Main = () => {
  const toggle = () => {
    var sec = document.getElementById("sec");
    var nav = document.getElementById("navigation");
    sec.classList.toggle("active");
    nav.classList.toggle("active");
  };

  return (
    <section class='banner' id='sec'>
      <header>
        <a href='#' class='logo'>
          Sk
        </a>
        <div id='toggle' onClick={toggle}></div>
      </header>
      <div class='content'>
        <h2>
          Jello World,
          <br />
          I'm <span>Samuel Klepper</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          turpis in mi pellentesque tincidunt. Fusce at semper ligula, et
          placerat elit. Aenean eu ultricies felis. Nunc vitae nibh nec arcu
          ullamcorper maximus. Quisque finibus et metus vel ornare. Sed ac neque
          tristique quam suscipit aliquam in a odio. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla tristique mauris eros, ac varius felis elementum non.
          Suspendisse potenti. Praesent finibus luctus augue at lacinia. Donec
          in velit a purus aliquam ornare. Fusce varius lacus diam, pharetra
          placerat tortor rutrum sit amet. In quis tincidunt sapien. Mauris quis
          neque vel enim pulvinar commodo eu a ante. Vestibulum a dolor id urna
          tempor finibus vel nec mauris.
        </p>
        <a href='#'>Know more</a>
      </div>
      <ul class='sci'>
        <li>
          <a href='#'>
            <img src='img/google.jpg' alt='facebook' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='img/github.svg' alt='twitter' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='img/linkedin.png' alt='linkedin' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Main;
