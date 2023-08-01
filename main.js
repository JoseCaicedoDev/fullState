import { BreadCrumbs } from './src/breadCrumb/breadCrumb';
import { Content } from './src/content/content';
import { FooterDown } from './src/footer/footerDown';
import { FooterMedium } from './src/footer/footerMedium';
import { FooterTop } from './src/footer/footerTop';
import { InfoHead } from './src/infoHead/infoHead';
import { Navigation } from './src/navigation/navigation';
import { Sponsors } from './src/sponsors/sponsors';
import { Step } from './src/step/step';

document.querySelector('#app').innerHTML = `
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
`

const infoHeadElement = document.querySelector('.info_head');
infoHeadElement.innerHTML = InfoHead();

const navigationElement = document.getElementById('navigation');
navigationElement.innerHTML = Navigation();

const breadCrumbsElement = document.querySelector('.section_title');
breadCrumbsElement.innerHTML = BreadCrumbs();

const contentElement = document.querySelector('.content_info');
contentElement.innerHTML = Content();

const sponsorsElement = document.querySelector('.sponsors');
sponsorsElement.innerHTML = Sponsors();

const stepElement = document.querySelector('.full_info');
stepElement.innerHTML = Step();

const footerTopElement = document.querySelector('.footer_top');
footerTopElement.innerHTML = FooterTop();

const footerMediumElement = document.querySelector('.footer_medium');
footerMediumElement.innerHTML = FooterMedium();

const footerDownElement = document.querySelector('.footer_down');
footerDownElement.innerHTML = FooterDown();
