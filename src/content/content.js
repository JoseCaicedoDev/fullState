import './content.css'

const posts = [
    {
        title: "This is an example of  post",
        url: "single_post.html",
        postedBy: "Admin",
        urlPosted: "#",
        description: "Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",
        urlImage: "img/blog/4.jpg",
        titleImage: "Image",
        date: "23 - Feb"
    },
    {
        title: "This is an example of  post",
        url: "single_post.html",
        postedBy: "Admin",
        urlPosted: "#",
        description: "Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",
        urlImage: "img/blog/4.jpg",
        titleImage: "Image",
        date: "23 - Feb"
    },
    {
        title: "This is an example of  post",
        url: "single_post.html",
        postedBy: "Admin",
        urlPosted: "#",
        description: "Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",
        urlImage: "img/blog/4.jpg",
        titleImage: "Image",
        date: "23 - Feb"
    },
    {
        title: "This is an example of  post",
        url: "single_post.html",
        postedBy: "Admin",
        urlPosted: "#",
        description: "Lorem ipsum ea cum congue bonorum, pri no natum clita. His ne vide omnis forensibus. Eum cetero imperdiet et. Id mutat mazim quo, recusabo consequat scribentur te pro.",
        urlImage: "img/blog/4.jpg",
        titleImage: "Image",
        date: "23 - Feb"
    }
]

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

export function Content() {
    const postsdHtml = posts.map(post => `
      <div class="row-fluid post">
          <div class="span7">
              <a href="${post.url}"><h2>${post.title}</h2></a>
              <ul class="meta">
                  <li>Posted by: </li>
                  <li class="author"><a href="${post.urlPosted}">${post.postedBy}</a></li>
                 <li class="comments-numb">
                      <a href="single_post.html">0 comments</a>
                      <i class="icon-comment-alt"></i>
                  </li>
              </ul>
              <p>${post.description}</p>
              <a href="${post.url}" class="button">Read More</a>
          </div>
          <div class="span5 image_post">
              <img src="${post.urlImage}" alt="${post.titleImage}">
              <ul>
                  <li>${post.date}</li>
                  <li><a href="#"><i class="icon-picture"></i></a></li>
              </ul>
          </div>
      </div>
      `).join('');

    const tagCloudHtml = tagCloud.map(link => `
        <li class="" title="${link.title}">
          <a href="${link.url}">${link.title}</a>
        </li>
      `).join('');

    return `
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
                ${postsdHtml}
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
                        ${tagCloudHtml}
                      </ul>
                  </aside>

             </div>
             <!-- Sidebars-->
      </div>
    </section>
  `}