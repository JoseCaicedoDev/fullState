(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function r(){return`
  <div class="container">
      <div class="row-fluid">
          <div class="span6">
              <h1>BLOG
                  <span><a href="index.html">Home </a> / Blog</span>
              </h1>
          </div>
      </div>
  </div>
`}const c=[{title:"This is an example of  post",url:"single_post.html",postedBy:"Admin",urlPosted:"#",description:"Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",urlImage:"img/blog/4.jpg",titleImage:"Image",date:"23 - Feb"},{title:"This is an example of  post",url:"single_post.html",postedBy:"Admin",urlPosted:"#",description:"Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",urlImage:"img/blog/4.jpg",titleImage:"Image",date:"23 - Feb"},{title:"This is an example of  post",url:"single_post.html",postedBy:"Admin",urlPosted:"#",description:"Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",urlImage:"img/blog/4.jpg",titleImage:"Image",date:"23 - Feb"},{title:"This is an example of  post",url:"single_post.html",postedBy:"Admin",urlPosted:"#",description:"Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",urlImage:"img/blog/4.jpg",titleImage:"Image",date:"23 - Feb"}],d=[{title:"Blog",url:"#"},{title:"Web Desing",url:"#"},{title:"News",url:"#"},{title:"Internet",url:"#"},{title:"Audio",url:"#"},{title:"Image",url:"#"},{title:"Blog",url:"#"},{title:"Web Desing",url:"#"},{title:"News",url:"#"}];function u(){const o=c.map(i=>`
      <div class="row-fluid post">
          <div class="span7">
              <a href="${i.url}"><h2>${i.title}</h2></a>
              <ul class="meta">
                  <li>Posted by: </li>
                  <li class="author"><a href="${i.urlPosted}">${i.postedBy}</a></li>
                 <li class="comments-numb">
                      <a href="single_post.html">0 comments</a>
                      <i class="icon-comment-alt"></i>
                  </li>
              </ul>
              <p>${i.description}</p>
              <a href="${i.url}" class="button">Read More</a>
          </div>
          <div class="span5 image_post">
              <img src="${i.urlImage}" alt="${i.titleImage}">
              <ul>
                  <li>${i.date}</li>
                  <li><a href="#"><i class="icon-picture"></i></a></li>
              </ul>
          </div>
      </div>
      `).join(""),e=d.map(i=>`
        <li class="" title="${i.title}">
          <a href="${i.url}">${i.title}</a>
        </li>
      `).join("");return`
        <!-- Newsletter Box -->
        <div class="row newsletter_box">
            <div class="col-12 col-sm-8">
                <h3>
                    STAY INFORMED
                    <span>- Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum.</span>
                </h3>
            </div>
            <div class="col-12 col-sm-4">
                <form action="#">
                    <input type="register" placeholder="Your Mail..." required>
                    <button class="register" type="submit"><i class="icon-angle-right"></i></button>
                </form>
            </div>
        </div>
        <!-- End Newsletter Box -->

      <!-- Title-->
      <div class="titles">
          <span>KEEP INFORMED</span>
          <br>
          <h1>LATEST NEWS REAL ESTATE </h1>
      </div>
      <!-- End Title-->

      <div class="row">
            <!-- Blog Post-->
             <div class="col col-sm-9 span9">
                ${o}
                <!-- Pagination-->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item"><a href="#">1</a></li>
                        <li class="page-item"><a href="#">2</a></li>
                        <li class="page-item active"><a href="#">3</a></li>
                        <li class="page-item"><a href="#">4</a></li>
                        <li class="page-item">
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                    </ul>
                </nav>
                <!-- End Pagination-->

             </div>
             <!-- End Blog Post-->

             <!-- Sidebars-->
             <div class="col col-sm-3 span3">

                  <aside>
                      <h4>Blog Categories</h4>
                      <ul class="check">
                          <li><i class="icon-ok"></i><a href="#">Web Marketing</a></li>
                          <li><i class="icon-ok"></i><a href="#">Responsive Desing</a></li>
                          <li><i class="icon-ok"></i><a href="#">Reta Display</a></li>
                          <li><i class="icon-ok"></i><a href="#">HTML5</a></li>
                          <li><i class="icon-ok"></i><a href="#">Css3</a></li>
                      </ul>
                  </aside>
                   <aside>
                      <h4>Text Widget</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </aside>

                  <aside>
                      <h4>Tags</h4>
                      <ul class="tags">
                        ${e}
                      </ul>
                  </aside>

             </div>
             <!-- Sidebars-->
      </div>
    </section>
  `}const m=[{title:"Facebook",iconClass:"icon-facebook",url:"#"},{title:"Twitter",iconClass:"icon-twitter",url:"#"},{title:"Google Plus",iconClass:"icon-google-plus",url:"#"},{title:"Pinterest",iconClass:"icon-pinterest",url:"#"},{title:"Linkedin",iconClass:"icon-linkedin",url:"#"}];function p(){return`
    <div class="container p-0 py-3 text-center">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-2">
        <p class="text-white m-0">&copy; 2013 Realte - Real State Template. All rights reserved.</p>
        <ul class="d-inline-flex justify-content-center m-0 p-0">
          ${m.map(e=>`
    <li class="link_social px-1 mx-2" title="${e.title}">
      <a class="social text-decoration-none" href="${e.url}"><i class="${e.iconClass}"></i></a>
    </li>
  `).join("")}
        </ul>
      </div>
    </div>
  `}const g=[{title:"Blog",url:"#"},{title:"Web Desing",url:"#"},{title:"News",url:"#"},{title:"Internet",url:"#"},{title:"Audio",url:"#"},{title:"Image",url:"#"},{title:"Blog",url:"#"},{title:"Web Desing",url:"#"},{title:"News",url:"#"}];function f(){return`
    <div class="container">
      <div class="row">
        <!-- testimonials -->
        <div class="col-12 col-sm-3">
          <h3>Contact Us</h3>
            <ul class="contact_footer">
              <li>
                  <i class="icon-envelope"></i><a href="#">example@example.com</a>
              </li>
              <li>
                  <i class="icon-headphones"></i><a href="#">55-5698-4589</a>
              </li>
              <li class="location">
                  <i class="icon-home"></i><a href="#"> Av new stret - New York</a>
              </li>
            </ul>
        </div>
        <!-- End testimonials -->

        <!-- newsletter -->
        <div class="col-12 col-sm-3">
          <h3>Useful links</h3>
          <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Our Agents</a></li>
          </ul>
        </div>
        <!-- End newsletter -->

        <!-- Tags -->
        <div class="col-12 col-sm-3">
              <h3>Tag Cloud</h3>
              <ul class="tags">
                  ${g.map(e=>`
        <li class="" title="${e.title}">
          <a href="${e.url}">${e.title}</a>
        </li>
      `).join("")}
              </ul>
        </div>
        <!-- End Tags -->

        <!-- Contact Footer -->
        <div class="col-12 col-sm-3 span3 mt-3">
          <div class="testimonials">
              <p>Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et.!</p>
              <span class="arrow_testimonials"></span>
          </div>
              <h6 class="testimonial_autor">Juan David Rendon - Web Desinger</h6>
        </div>
        <!-- End Contact Footer -->
      </div>
    </div>
  `}function v(){return`
    <div class="container center">
      <h1>Get in touch</h1>
      <p>Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide <br>omnis forensibus.
        Eum cetero imperdiet et.!:</p>
      <a href="#" class="button">Demo</a>
      <br><br>
    </div>
  `}function h(){return`
    <ul>
        <li><i class="icon-headphones"></i> 01800034567</li>
        <li><i class="icon-comment"></i> Live chat</li>
        <li><i class="icon-globe"></i> Language</li>
    </ul>
`}function b(){return`
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
  `}const n=[{title:"Image 1",src:"img/sponsors/1.png",url:"#"},{title:"Image 2",src:"img/sponsors/2.png",url:"#"},{title:"Image 3",src:"img/sponsors/3.png",url:"#"},{title:"Image 4",src:"img/sponsors/4.png",url:"#"},{title:"Image 5",src:"img/sponsors/5.png",url:"#"}];function w(){return`
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        ${n.map((e,i)=>`
    <div class="carousel-item ${i===0?"active":""}" data-bs-interval="10000">
      <a href="${e.url}" class="tooltip_hover" title="Name Sponsor">
        <img src="${e.src}" alt="${e.title}" class="d-block w-100">
      </a>
    </div>
  `).join("")}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `}function y(){return`
    <div class="container">
      <div class="row-fluid d-flex flex-wrap justify-content-center">
        ${n.map(e=>`
    <div class="span2">
      <a href="${e.url}" class="tooltip_hover" title="Name Sponsor">
        <img src="${e.src}" alt="${e.title}">
      </a>
    </div>
  `).join("")}
      </div>
    </div>
  `}function E(){return window.innerWidth<=768?w():y()}const x=[{url:"step_1.html",icon:"icon-check",title:"Register"},{url:"step_2.html",icon:"icon-edit",title:"Publish"},{url:"",icon:"icon-credit-card",title:"Monetize"},{url:"",icon:"icon-plane",title:"Success"}];function T(){return`
    <div class="container">
      <div class="row text-center service-process">
        ${x.map(e=>`
    <a class="col" href="${e.url}">
      <div class="span3">
          <div class="thumbnail">
            <div class="caption-head">
              <em class="caption-icon ${e.icon} icon-big"></em>
                <h2 class="caption-title">${e.title}</h2>
            </div>
          </div>
      </div>
    </a>
  `).join("")}
      </div>
    </div>
  `}document.querySelector("#app").innerHTML=`
  <div class="line"></div>
  <section class="container-fluid info_head"></section>
  <nav id="navigation" class="navbar navbar-expand-lg bg-body-tertiary"
     data-bs-theme="dark"></nav>
  <section class="section_title about"></section>
  <section class="container content_info"></section>
  <section class="sponsors"></section>
  <section class="full_info"></section>
  <footer class="section_area footer_top"></footer>
  <footer class="section_area footer_medium"></footer>
  <footer class="section_area footer_down bg-dark p-0"></footer>
`;const _=document.querySelector(".info_head");_.innerHTML=h();const $=document.getElementById("navigation");$.innerHTML=b();const L=document.querySelector(".section_title");L.innerHTML=r();const H=document.querySelector(".content_info");H.innerHTML=u();const I=document.querySelector(".sponsors");I.innerHTML=E();const P=document.querySelector(".full_info");P.innerHTML=T();const S=document.querySelector(".footer_top");S.innerHTML=v();const q=document.querySelector(".footer_medium");q.innerHTML=f();const M=document.querySelector(".footer_down");M.innerHTML=p();
