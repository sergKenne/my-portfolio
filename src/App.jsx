import { useEffect } from 'react';
import './App.scss';
import { setSmoothScrool, getActions } from './utils';

function App() {
    const date = new Date().getFullYear()
  useEffect(() => {
    getActions();
    setSmoothScrool();
  }, []);
  return (
    <>
      <div className="page" id="page">
        <header className="header" id="home">
          <div className="bar-icon" id="barIcon">
            <span className="bar-icon__item"></span>
            <span className="bar-icon__item"></span>
            <span className="bar-icon__item"></span>
          </div>
          <nav className="slide-menu page__slide-menu">
            <div className="slide-menu__content">
              <span className="slide-menu__icon" id="closeIcon">
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
                <li className="slide-menu__item">
                  <a href="#contact" className="slide-menu__link">
                    Контакты
                  </a>
                </li>
              </ul>
              <footer className="footer pt-4">
                <div className="container__">
                  <ul className="footer__nav d-flex justify-content-left">
                    <li className="footer__nav-item footer__nav-item--slide-menu">
                      <a
                        className="footer__nav-link footer__nav-link--slide-menu"
                        href="htpps://wa.me/79119193408">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="footer__nav-item footer__nav-item--slide-menu">
                      <a
                        className="footer__nav-link footer__nav-link--slide-menu"
                        href="https://t.me/sergeKenne">
                        <i className="fab fa-telegram"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="mt-3 text-left text-white">© Кенне Серж {date}</p>
                </div>
              </footer>
            </div>
          </nav>

          <div className="showcase">
            <div className="content">
              <h1 className="content__title">
                Frontend-разработчик (React, Next.js, Vue.js, Typescript and Node.js)
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
                  <img src="img/profile.jpg" alt="portrait" className="about__img" />
                </div>
                <div className="about__item">
                  <h3 className="about__title">
                    {/* I am <span className="about__theme">Serge Kenne</span><br/> */}
                    Я-<span className="about__theme">Frontend-разработчик</span>
                  </h3>

                  <p className="about__description">
                    <span>
                      Ищу не просто работу, а место для долгосрочного роста и развития вместе с
                      коллегами. Ценю эффективность и осознаю ответственность за общие цели, поэтому
                      привык работать на результат, уважая время и задачи команды. Для меня важно
                      видеть, как мой вклад помогает достигать общих успехов.
                    </span><br/><br/>
                    Занимаюсь разработкой сайтов, владею HTML5, CSS3, JavaScript(ES6+) и
                    Препроцессорами Sass/Scss.
                    <br />- Хорошие знания в области: JavaScript(ES6+),Typescript, React, Next.js,
                    Redux/Redux Toolkit,Vue, Vuex and pinia. <br />
                    - Работаю с библиотеками Django, Node js, Express.js, Graphql, mongoDB
                    <br />
                    - Ответственный, инициативный.
                    <br />
                    - Умею разбираться в чужом коде и работать в команде
                    <br />- Хорошие знания HTML, CSS/SCSS (возможно less). Знание методологии БЭМ,
                    кроссбраузерная и адаптивная вёрстка
                  </p>
                  <ul className="about__list">
                    <li className="about__item">
                      <span className="about__name">полное имя</span>: Кенне Серж Симплис
                    </li>
                    <li className="about__item">
                      <span className="about__name">Гражданство</span>: Республика Камерун
                    </li>
                    <li className="about__item">
                      <span className="about__name">Языки</span>: Французский, Русский, Английский
                    </li>
                    <li className="about__item">
                      <span className="about__name">Адрес</span>: Санкт-Петербург
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="resume" className="resume">
            <div className="container"></div>
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
                      <img className="card-img-top" src="img/lunaro.JPG" alt="lunaru" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'React/Context Gatsby Typescript'}</h5>
                      <p className="card-text">( React, Gatsby, Typescript, Graphql)</p>
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
                      <img className="card-img-top" src="img/vimos.JPG" alt="Hair&sky" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'Интернет магазин'}</h5>
                      <p className="card-text">yii2, Vuejs (Nuxt.js)</p>
                      <a
                        href="https://vimos.ru/"
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
                      <img className="card-img-top" src="img/100pichei.JPG" alt="shoppingCart" />
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
                      <img className="card-img-top" src="img/test-page1.JPG" alt="Hair&sky" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'React/Context API/Typescript'}</h5>
                      <p className="card-text">приложения для проведения тестирования.</p>
                      <a
                        href="https://online-test-application.netlify.app/"
                        target="_blank"
                        className="card__link card__link--site">
                        Демо
                      </a>
                      <a
                        href="https://github.com/sergKenne/online-test-app"
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
                      <img className="card-img-top" src="img/foot-shop.JPG" alt="food shop" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'React/Redux/Typescript/Webpack'}</h5>
                      <p className="card-text">Food-Shop React/Redux/Typescript/Webpack</p>
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
                      <img className="card-img-top" src="img/hair-sky.JPG" alt="Hair&sky" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'многостраничный сайт'}</h5>
                      <p className="card-text">HTML SCSS BEM JavaScript Swiper Slider ...</p>
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
                        src="img/green-cars-filter.JPG"
                        alt="green cars"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{'React/Context API/Typescript'}</h5>
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
                      <img className="card-img-top" src="img/mfc-66.JPG" alt="mfc66" />
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
                  <p className="contacts__name">
                    Личная почта :
                    <a className="contacts__link" href="mailto:kenneserge77@gmail.com">
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
                  <img className="social-block__image" src="img/telegram.svg" alt="telegram" />
                  <span className="social-block__text">Свяжитесь со мной</span>
                </a>
                <a className="social-block__link" href="mailto:kenneserge77@gmail.com">
                  <i className="fa fa-envelope-o social-block__image" aria-hidden="true"></i>
                  <span className="social-block__text">kenneserge77@gmail.com</span>
                </a>
              </div>
              <div className="footer__block copyright-block">
                <p className="copyright-block__text">© Кенне Серж </p>
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

export default App;
