import './step.css'

const steps = [
  {
    url: "step_1.html",
    icon: "icon-check",
    title: "Register"
  },
  {
    url: "step_2.html",
    icon: "icon-edit",
    title: "Publish"
  },
  {
    url: "",
    icon: "icon-credit-card",
    title: "Monetize"
  },
  {
    url: "",
    icon: "icon-plane",
    title: "Success"
  },
]

export function Step() {
  const stepHtml = steps.map(step => `
    <a class="col" href="${step.url}">
      <div class="span3">
          <div class="thumbnail">
            <div class="caption-head">
              <em class="caption-icon ${step.icon} icon-big"></em>
                <h2 class="caption-title">${step.title}</h2>
            </div>
          </div>
      </div>
    </a>
  `).join('');

  return `
    <div class="container">
      <div class="row text-center service-process">
        ${stepHtml}
      </div>
    </div>
  `
}