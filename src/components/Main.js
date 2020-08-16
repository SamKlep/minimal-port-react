import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const toggle = () => {
    var sec = document.getElementById("sec");
    var nav = document.getElementById("navigation");
    sec.classList.toggle("active");
    nav.classList.toggle("active");
  };

  return (
    <section class='banner' id='sec'>
      <div className='box'></div>
      <header>
        <Link to='/' class='logo'>
          Sk
        </Link>
        <div id='toggle' onClick={toggle}></div>
      </header>

      <div class='content'>
        <h2>
          Welcome!
          <br />
          I'm <span>Samuel Klepper</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          molestie magna. Nunc eleifend laoreet turpis, at porttitor elit
          pellentesque at. Proin dictum viverra lectus id ultricies. Curabitur
          malesuada condimentum ante vitae rutrum. Pellentesque maximus lacus
          justo, vel ornare dui egestas a. Sed pellentesque commodo mauris, vel
          euismod enim consectetur vitae. Etiam venenatis elementum porttitor.
          In sit amet diam nisl. Sed dignissim urna et felis pharetra pharetra.
          Morbi blandit consequat risus sed mattis. Pellentesque at feugiat
          dolor. Integer sagittis quis tortor ut dignissim. Morbi interdum
          dignissim nisl tempus efficitur. Aenean lectus nulla, malesuada id
          nisl ut, suscipit viverra elit. Sed sit amet nunc et ligula tristique
          tristique et nec urna. Nam non nunc vel lacus vehicula vehicula non
          quis lorem. Nullam at convallis nisi. Nam interdum orci risus.
          Suspendisse pulvinar, massa eget hendrerit hendrerit, quam tortor
          finibus augue, et elementum sapien erat convallis neque. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus quis nulla
          quis tortor finibus vulputate nec sed sem. Aliquam sed laoreet purus,
          ut ullamcorper nunc. Nullam iaculis hendrerit felis non commodo. Nunc
          euismod eget dolor nec bibendum. Praesent mollis accumsan magna, et
          vestibulum felis consequat at. Donec auctor metus ut elit mollis, sed
          placerat nisl vestibulum. Vestibulum malesuada elementum metus, vitae
          consequat sapien ornare ac. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer vel turpis in mi pellentesque tincidunt.
          Fusce at semper ligula, et placerat elit. Aenean eu ultricies felis.
          Nunc vitae nibh nec arcu ullamcorper maximus. Quisque finibus et metus
          vel ornare. Sed ac neque tristique quam suscipit aliquam in a odio.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nulla tristique mauris eros, ac varius felis
          elementum non. Suspendisse potenti. Praesent finibus luctus augue at
          lacinia. Donec in velit a purus aliquam ornare. Fusce varius lacus
          diam, pharetra placerat tortor rutrum sit amet. In quis tincidunt
          sapien. Mauris quis neque vel enim pulvinar commodo eu a ante.
          Vestibulum a dolor id urna tempor finibus vel nec mauris. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer vel turpis in mi
          pellentesque tincidunt. Fusce at semper ligula, et placerat elit.
          Aenean eu ultricies felis. Nunc vitae nibh nec arcu ullamcorper
          maximus. Quisque finibus et metus vel ornare. Sed ac neque tristique
          quam suscipit aliquam in a odio. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          tristique mauris eros, ac varius felis elementum non. Suspendisse
          potenti. Praesent finibus luctus augue at lacinia. Donec in velit a
          purus aliquam ornare. Fusce varius lacus diam, pharetra placerat
          tortor rutrum sit amet. In quis tincidunt sapien. Mauris quis neque
          vel enim pulvinar commodo eu a ante. Vestibulum a dolor id urna tempor
          finibus vel nec mauris.
        </p>

        <a id='button-style' href='#'>
          Learn more
        </a>
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
