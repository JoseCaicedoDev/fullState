import './footerDown.css'

const socialMediaLinks = [
  { title: "Facebook", iconClass: "icon-facebook", url: "#" },
  { title: "Twitter", iconClass: "icon-twitter", url: "#" },
  { title: "Google Plus", iconClass: "icon-google-plus", url: "#" },
  { title: "Pinterest", iconClass: "icon-pinterest", url: "#" },
  { title: "Linkedin", iconClass: "icon-linkedin", url: "#" }
];

export function FooterDown() {
  const socialLinksHtml = socialMediaLinks.map(link => `
    <li class="link_social px-1 mx-2" title="${link.title}">
      <a class="social text-decoration-none" href="${link.url}"><i class="${link.iconClass}"></i></a>
    </li>
  `).join('');

  return `
    <div class="container p-0 py-3 text-center">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-2">
        <p class="text-white m-0">&copy; 2013 Realte - Real State Template. All rights reserved.</p>
        <ul class="d-inline-flex justify-content-center m-0 p-0">
          ${socialLinksHtml}
        </ul>
      </div>
    </div>
  `;
}
