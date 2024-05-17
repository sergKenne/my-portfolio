import { useEffect } from 'react';
import './App.scss'
import { getActions, setSmoothScrool } from './utils';

function App() {
  
    useEffect(() => {
        getActions()
        setSmoothScrool();
    },[])
  return (
      <>
          <div className="page" id="page">
              <div className="page__wrap-slide-menu" id="slideMenu-js">
                  <div className="slide-menu page__slide-menu">
                      <span className="slide-menu__icon" id="close-js">
                          <i className="fa fa-times" aria-hidden="true"></i>
                      </span>
                      <ul className="slide-menu__list">
                          <li className="slide-menu__item">
                              <a href="#home" className="slide-menu__link">
                                  Главная
                              </a>
                          </li>
                          <li className="slide-menu__item">
                              <a href="#about" className="slide-menu__link">
                                  Обо Мне
                              </a>
                          </li>
                          <li className="slide-menu__item">
                              <a href="#resume" className="slide-menu__link">
                                  Резюме
                              </a>
                          </li>
                          {/* <li className="slide-menu__item">
                              <a href="#portfolio" className="slide-menu__link">
                                  Portfolio
                              </a>
                          </li> */}
                          {/* <!-- <li className="slide-menu__item"><a href="#blog" className="slide-menu__link">Blog</a></li> --> */}
                          <li className="slide-menu__item">
                              <a href="#contact" className="slide-menu__link">
                                  Контакты
                              </a>
                          </li>
                      </ul>
                      <footer className="footer pt-4">
                          <div className="container">
                              <ul className="footer__nav d-flex justify-content-left">
                                  <li className="footer__nav-item footer__nav-item--slide-menu">
                                      <a
                                          className="footer__nav-link footer__nav-link--slide-menu"
                                          href="#">
                                          <i className="fa fa-facebook" aria-hidden="true"></i>
                                      </a>
                                  </li>
                                  <li className="footer__nav-item footer__nav-item--slide-menu">
                                      <a
                                          className="footer__nav-link footer__nav-link--slide-menu"
                                          href="#">
                                          <i className="fab fa-twitter"></i>
                                      </a>
                                  </li>
                                  <li className="footer__nav-item footer__nav-item--slide-menu">
                                      <a
                                          className="footer__nav-link footer__nav-link--slide-menu"
                                          href="#">
                                          <i className="fab fa-instagram"></i>
                                      </a>
                                  </li>
                              </ul>
                              <p className="mt-3 text-left text-white">© Кенне Серж</p>
                          </div>
                      </footer>
                  </div>
              </div>
              <header className="header" id="home">
                  <div className="showcase">
                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainnav">
                          <div className="showcase__navbar">
                              <div className="container container--fixed-menu">
                                  <a className="navbar-brand" href="#"></a>

                                  <button
                                      className="navbar-toggler"
                                      type="button"
                                      data-toggle="collapse"
                                      data-target="#navbarNavAltMarkup"
                                      aria-controls="navbarNavAltMarkup"
                                      aria-expanded="false"
                                      aria-label="Toggle navigation">
                                      <span className="navbar-toggler-icon">
                                          <span className="nav-icon nav-icon_1"></span>
                                          <span className="nav-icon nav-icon_2"></span>
                                          <span className="nav-icon nav-icon_3"></span>
                                      </span>
                                  </button>
                                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                      <div className="navbar-nav ml-auto">
                                          <a className="nav-item nav-link color-js" href="#home">
                                              Главная
                                          </a>
                                          <a className="nav-item nav-link color-js" href="#about">
                                              Обо Мне
                                          </a>
                                          <a className="nav-item nav-link color-js" href="#resume">
                                              Резюме
                                          </a>
                                          {/* <a
                                              className="nav-item nav-link color-js"
                                              href="#portfolio">
                                              Портфолию
                                          </a> */}
                                          <a className="nav-item nav-link color-js" href="#contact">
                                              Контакты
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <span className="showcase__bar-icon barBtn-js" id="open-js">
                                  <i className="fa fa-bars" aria-hidden="true"></i>
                              </span>
                          </div>
                      </nav>
                      <div className="content">
                          {/* <!-- <h1 className="content__title">Frontend-разработчик</h1> --> */}

                          <h1 className="content__title" style={{ padding: '0px 10px' }}>
                              Frontend-разработчик (React, Next js, Vue, Typescript, Node.js,
                              Express.js and MongoDB)
                          </h1>
                          <p className="content__text">Создание высококачественных веб-сайтов</p>
                          <div className="content__view-portofolio">
                              <a href="#portfolio" className="content__view-link js-view-portfolio">
                                  {/* <!-- Портфолио --> */}
                                  <p className="content__portofolio-icon">
                                      <i className="fas fa-angle-double-down"></i>
                                  </p>
                              </a>
                              <span className="box box-1"></span>
                              <span className="box box-2"></span>
                              <span className="box box-3"></span>
                              <span className="box box-4"></span>
                          </div>
                      </div>
                  </div>
                  <svg
                      className="hero-image__svg"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      fill="#10121b"
                      opacity="1"
                      width="100"
                      height="160"
                      viewBox="0 0 4.66666 0.333331"
                      preserveAspectRatio="none">
                      <path
                          className="hero-image__path"
                          d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"></path>
                  </svg>
              </header>
              <main className="main-content">
                  <section id="about" className="about">
                      <div className="container">
                          <div className="portfolio__wrap-title">
                              <h2 className="portfolio__title text-center">обо мне</h2>
                          </div>
                          <div className="about__row">
                              <div className="about__item">
                                  <img
                                      src="img/portrait.jpeg"
                                      alt="portrait"
                                      className="about__img"
                                  />
                              </div>
                              <div className="about__item">
                                  <h3 className="about__title">
                                      I am <span className="about__theme">Serge Kenne</span>
                                  </h3>
                                  {/* <!-- <p className="about__description">
                                    I am a frontend web developer. I can provide clean code and
                                    pixel perfect design. I also make website more & more
                                    interactive with web animations.
                                </p> --> */}
                                  <p className="about__description">
                                      Занимаюсь разработкой сайтов, владею HTML5, CSS3, Bootstrap,
                                      Flex Box, Grid, JavaScript(ES6), Препроцессорами Sass/Scss.
                                      <br />
                                      - Хорошие знание в области: JavaScript(ES6) React, Redux,
                                      Redux-Thunk, Next.js, Typescript, JQuery, Vue, Vuex, <br />
                                      - Работаю с библиотеками Node js, Express.js, Graphql, mongoDB
                                      <br />
                                      - Ответственный, инициативный.
                                      <br />
                                      - Умею разбираться в чужом коде и работать в команде
                                      <br />- Отличные знания HTML, CSS. SCSS/Sass (возможно less).
                                      Знание методологии БЭМ, кроссбраузерная и адаптивная вёрстка
                                  </p>
                                  <ul className="about__list">
                                      <li className="about__item">
                                          <span className="about__name">полное имя</span>: Кенне
                                          Серж Симплис
                                      </li>
                                      {/* <!-- <li className="about__item">
                                        <span className="about__name">возраст</span>: 42 лет
                                    </li> --> */}
                                      <li className="about__item">
                                          <span className="about__name">Гражданство</span>:
                                          Республика Камерун
                                      </li>
                                      <li className="about__item">
                                          <span className="about__name">Языки</span>: Французский,
                                          Русский, Английский
                                      </li>
                                      <li className="about__item">
                                          <span className="about__name">Адрес</span>:
                                          Санкт-Петербург
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section id="resume" className="resume">
                      <div className="container">
                          {/* <!-- <div className="portfolio__wrap-title">
                            <h2 className="portfolio__title text-center">МОИ НАВЫКИ</h2>
                        </div> --> */}
                          {/* <!-- <div className="resume__row" data-aos="fade-right" data-aos-duration="1000">
                            <div className="resume__item">
                                <h5 className="resume__title">HTML5</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">95%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 95%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">CSS</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">90%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 90%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">Javascript</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">85%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 85%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">jQuery</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">90%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 90%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">React, Next.js</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">90%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 90%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">Angular</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">60%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 60%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">VueJS</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">80%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">NodeJS / expressJS</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">80%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume__item">
                                <h5 className="resume__title">PHP</h5>
                                <div className="resume__progress">
                                    <div className="resume__value">55%</div>
                                    <div className="resume__bar">
                                        <div className="resume__pourcent" style="width: 55%"></div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
                      </div>
                  </section>
                  <section className="portfolio" id="portfolio">
                      <div className="container">
                          <div className="portfolio__wrap-title">
                              <h2 className="portfolio__title text-center">Мои работы</h2>
                          </div>
                          <div className="portfolio__content row">
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/lunaro.JPG"
                                              alt="lunaru"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">
                                              {'React/Context Gatsby Typescript'}
                                          </h5>
                                          <p className="card-text">
                                              ( React, Gatsby, Typescript, Graphql)
                                          </p>
                                          <a
                                              href="https://lunaro.ru/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/foot-shop.JPG"
                                              alt="food shop"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">
                                              {'React/Redux/Typescript/Webpack'}
                                          </h5>
                                          <p className="card-text">
                                              Food-Shop React/Redux/Typescript/Webpack
                                          </p>
                                          <a
                                              href=" https://mern-food-shop.netlify.app/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href=" https://github.com/sergKenne/mern-stack-food-shop"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/green-cars-filter.JPG"
                                              alt="green cars"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">
                                              {'React/Context API/Typescript'}
                                          </h5>
                                          <p className="card-text">Green-cars Filter</p>
                                          <a
                                              href=" https://green-cars-filter.netlify.app/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/green-car"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/100pichei.JPG"
                                              alt="shoppingCart"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Интернет магазин'}</h5>
                                          <p className="card-text">html, javascript, synfony</p>
                                          <a
                                              href="https://100pechey.ru/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/hair-sky.JPG"
                                              alt="Hair&sky"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'многостраничный сайт'}</h5>
                                          <p className="card-text">
                                              HTML SCSS BEM JavaScript Swiper Slider ...
                                          </p>
                                          <a
                                              href="https://hsii.ru/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/amazon.JPG"
                                              alt="amazon"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">
                                              {'MERN React/Redux Node.js'}
                                          </h5>
                                          <p className="card-text">
                                              ( React/Redux Node/Express MongoDB) | Registration
                                              Login
                                          </p>
                                          <a
                                              href="https://mern-amazon-clone-app.netlify.app/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/mern_stack_amazon_clone"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/mfc-66.JPG"
                                              alt="mfc66"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'mfc66'}</h5>
                                          <p className="card-text">Новый сайт МФЦ66</p>
                                          <a
                                              href="https://new.mfc66.ru/ads"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/mfc"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/pikacco.JPG"
                                              alt="post"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Fetch Posts RTK Query'}</h5>
                                          <p className="card-text">React, Redux-toolkit Query</p>
                                          <a
                                              href="https://pikacco.netlify.app/posts"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/pikacco"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/domkino_pro.JPG"
                                              alt="domkino"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'domkino'}</h5>
                                          <p className="card-text">
                                              (Многостраничный сайт, jQuery, BEM) | php
                                          </p>
                                          <a
                                              href="https://domkino.pro/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/shopping-cart-vue.JPG"
                                              alt="shoppingCart"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Vue Shopping Cart'}</h5>
                                          <p className="card-text">Vue, Vuex</p>
                                          <a
                                              href="https://shopping-cart-vue-app.netlify.app"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/indev-vue-app"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              {/* <!-- <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <div className="card__image">
                                        <img
                                            className="card-img-top"
                                            src="img/ecommerce-react1.JPG"
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">"SPA ecommerce react.js"</h5>
                                        <p className="card-text">
                                            React | Redux | localStorage | Materialize |sweetalert2
                                        </p>
                                        <a
                                            href="https://ecommerce-react-js.herokuapp.com/"
                                            target="_blank"
                                            className="card__link card__link--site"
                                            >Демо</a
                                        >
                                        <a
                                            href="https://github.com/sergKenne/ecommerce-react"
                                            target="_blank"
                                            className="card__link card__link--source"
                                            >Исходники</a
                                        >
                                    </div>
                                </div>
                            </div> --> */}
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/advance.JPG"
                                              alt="Card image cap"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Landing page'}</h5>
                                          <p className="card-text">
                                              Одностраничный сайт | HTML | CSS | BEM | JS
                                          </p>
                                          <a
                                              href="https://advance-club.ru/webinar/krp-e/"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          {/* <!-- <a href="https://github.com/sergKenne/ecommerce-react" target="_blank" className="card__link card__link--source">Исходники</a> --> */}
                                      </div>
                                  </div>
                              </div>
                              {/* <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <div className="card__image">
                                        <img
                                            className="card-img-top"
                                            src="img/wineStore.JPG"
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">"Wines Store"</h5>
                                        <p className="card-text">
                                            адаптивная верстка | HTML CSS JS | Slider js | БЭМ
                                            методология
                                        </p>
                                        <a
                                            href="/portfolio/winesStore/index.html"
                                            target="_blank"
                                            className="card__link card__link--site"
                                            >Демо</a
                                        >
                                        <a
                                            href="https://github.com/sergKenne/winesStore"
                                            target="_blank"
                                            className="card__link card__link--source"
                                            >Исходники</a
                                        >
                                    </div>
                                </div>
                            </div> */}
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/realState1.JPG"
                                              alt="Card image cap"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">"237realestate.com"</h5>
                                          <p className="card-text">
                                              адаптивная верстка | HTML CSS JS | Bootstrap | БЭМ
                                              методология
                                          </p>
                                          <a
                                              href="/portfolio/RealestateProjet/index.html"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/RealestateProjet"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/xeone.JPG"
                                              alt="Card image cap"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Landing page XeOne'}</h5>
                                          <p className="card-text">
                                              Одностраничный сайт | AOS.css | jQuery | BEM |
                                              Bootstrap
                                          </p>
                                          <a
                                              href="/portfolio/XeOne/index.html"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/XeOne"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                  <div className="card">
                                      <div className="card__image">
                                          <img
                                              className="card-img-top"
                                              src="img/computerStore.JPG"
                                              alt="Card image cap"
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title">{'Computer Store'}</h5>
                                          <p className="card-text">
                                              адаптивная верстка | HTML CSS JS | Slider js | БЭМ
                                              методология
                                          </p>
                                          <a
                                              href="/portfolio/computerStore/index.html"
                                              target="_blank"
                                              className="card__link card__link--site">
                                              Демо
                                          </a>
                                          <a
                                              href="https://github.com/sergKenne/computerStore"
                                              target="_blank"
                                              className="card__link card__link--source">
                                              Исходники
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </main>
              <footer className="footer pt-4" id="contact">
                  <div className="">
                      <section className="contacts">
                          <div className="contacts__container container">
                              <h2 className="contacts__title">Контакты</h2>
                              <div className="contacts__information">
                                  <p className="contacts__name">
                                      Страничка на Github :
                                      <a
                                          className="contacts__link"
                                          href="https://github.com/sergKenne"
                                          target="_blank">
                                          https://github.com/sergKenne
                                      </a>
                                  </p>
                                  {/* <!--  <p className="contacts__name">Социальная сеть :<a className="contacts__link" href=""></a></p> --> */}
                                  <p className="contacts__name">
                                      Личная почта :
                                      <a
                                          className="contacts__link"
                                          href="mailto:kenneserge77@gmail.com">
                                          kenneserge77@gmail.com
                                      </a>
                                  </p>
                                  <p className="contacts__name">
                                      Телефон:
                                      <a className="contacts__link" href="tel:+79119193408">
                                          +7(911)919-34-08
                                      </a>
                                  </p>
                              </div>
                          </div>
                      </section>
                  </div>
                  <div className="container">
                      <div className="footer__blocks">
                          <div className="footer__block social-block">
                              <a className="social-block__link" href="https://t.me/sergeKenne">
                                  <img
                                      className="social-block__image"
                                      src="img/telegram.svg"
                                      alt="telegram"
                                  />
                                  <span className="social-block__text">Свяжитесь со мной</span>
                              </a>
                              <a
                                  className="social-block__link"
                                  href="mailto:kenneserge77@gmail.com">
                                  <i
                                      className="fa fa-envelope-o social-block__image"
                                      aria-hidden="true"></i>
                                  <span className="social-block__text">kenneserge77@gmail.com</span>
                              </a>
                          </div>
                          <div className="footer__block copyright-block">
                              <p className="copyright-block__text">© Кенне Серж</p>
                          </div>
                      </div>
                  </div>
                  <a className="linkToHome" href="#home">
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                  </a>
              </footer>
          </div>
      </>
  );
}

export default App
