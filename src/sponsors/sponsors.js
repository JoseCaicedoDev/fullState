import './sponsors.css';

const sponsors = [
  { title: "Image 1", src: "img/sponsors/1.png", url: "#" },
  { title: "Image 2", src: "img/sponsors/2.png", url: "#" },
  { title: "Image 3", src: "img/sponsors/3.png", url: "#" },
  { title: "Image 4", src: "img/sponsors/4.png", url: "#" },
  { title: "Image 5", src: "img/sponsors/5.png", url: "#" },
];

function SponsorsCarousel() {
  const sponsorsHtml = sponsors.map((sponsor, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}" data-bs-interval="10000">
      <a href="${sponsor.url}" class="tooltip_hover" title="Name Sponsor">
        <img src="${sponsor.src}" alt="${sponsor.title}" class="d-block w-100">
      </a>
    </div>
  `).join('');

  return `
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        ${sponsorsHtml}
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
  `;
}

function SponsorsGrid() {
  const sponsorsHtml = sponsors.map(sponsor => `
    <div class="span2">
      <a href="${sponsor.url}" class="tooltip_hover" title="Name Sponsor">
        <img src="${sponsor.src}" alt="${sponsor.title}">
      </a>
    </div>
  `).join('');

  return `
    <div class="container">
      <div class="row-fluid d-flex flex-wrap justify-content-center">
        ${sponsorsHtml}
      </div>
    </div>
  `;
}

export function Sponsors() {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? SponsorsCarousel() : SponsorsGrid();
}