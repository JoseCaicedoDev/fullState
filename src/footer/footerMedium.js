import './footerMedium.css'

const tagCloud = [
  { title: "Blog", url: "#" },
  { title: "Web Desing", url: "#" },
  { title: "News", url: "#" },
  { title: "Internet", url: "#" },
  { title: "Audio", url: "#" },
  { title: "Image", url: "#" },
  { title: "Blog", url: "#" },
  { title: "Web Desing", url: "#" },
  { title: "News", url: "#" }
];

export function FooterMedium() {
  const tagCloudHtml = tagCloud.map(link => `
        <li class="" title="${link.title}">
          <a href="${link.url}">${link.title}</a>
        </li>
      `).join('');

  return `
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
                  ${tagCloudHtml}
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
  `
}