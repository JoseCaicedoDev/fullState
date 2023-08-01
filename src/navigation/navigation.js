import './navigation.css'

export function Navigation() {
  return `
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="Logo" class="d-inline-block align-text-top">
      </a>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul id="menu" class="navbar-nav gap-3 span9 sf-menu">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">ABOUT</a>
              </li>
             <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">FEATURES</a>
                <ul class="dropdown-menu">

                  <li class="nav-item dropdown">
                    <a class="dropdown-item nav-link dropdown-toggle" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="step_1.html">Register Agent</a></li>
                        <li><a class="dropdown-item" href="step_2.html">Register Property</a></li>
                    </ul>
                  </li>

                  <li><a class="dropdown-item" href="tables_princing.html">Princing Tables</a></li>
                  <li><a class="dropdown-item" href="grid.html">Grind System</a></li>
                  <li><a class="dropdown-item" href="typograpy.html">Tipograpy</a></li>
                  <li><a class="dropdown-item" href="icons.html">Icons</a></li>
                  <li><a class="dropdown-item" href="elements.html">Elements</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">PROPERTIES</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="properties.html">Properties</a></li>
                    <li><a class="dropdown-item" href="properties_two.html">Properties Two</a></li>
                    <li><a class="dropdown-item" href="details_properties.html">Details Properties</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">BLOG</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="blog.html">Post</a></li>
                    <li><a class="dropdown-item" href="single_post.html">Single Post</a></li>
                </ul>
            </li>
            <li class="nav-item">
              <a  class="nav-link" href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
    </div>
  `;
}

