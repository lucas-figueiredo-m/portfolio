import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const analytics = getAnalytics(app);
  }, []);
  return (
    <main>
      <Head>
        <>
          <title>Lucas Figueiredo</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          {/* <link rel="stylesheet" href="assets/css/main.css" />
          <noscript>
            <link rel="stylesheet" href="assets/css/noscript.css" />
          </noscript> */}
        </>
      </Head>

      <div id="page-wrapper">
        {/* Header */}
        <header id="header" className="alt">
          <h1>
            <a href="index.html">Lucas Figueiredo</a>
          </h1>
          {/* <nav id="nav">
							<ul>
								<li class="special">
									<a href="#menu" class="menuToggle"><span>Menu</span></a>
									<div id="menu">
										<ul>
											<li><a href="index.html">Home</a></li>
											<li><a href="generic.html">Generic</a></li>
											<li><a href="elements.html">Elements</a></li>
											<li><a href="#">Sign Up</a></li>
											<li><a href="#">Log In</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</nav> */}
        </header>
        {/* Banner */}
        <section id="banner">
          <div className="inner">
            <h2>Lucas Figueiredo</h2>
            <p>Mobile apps development</p>
            {/* <ul class="actions special">
								<li><a href="#" class="button primary">Activate</a></li>
							</ul> */}
          </div>
          <a href="#one" className="more scrolly">
            See More
          </a>
        </section>
        {/* One */}
        <section id="one" className="wrapper style1 special">
          <div className="inner">
            <header className="major">
              <h2>
                {"Hello! I'm Lucas"}
                <br />A Mobile engineer focused on developing apps using React
                Native Framework.
              </h2>
              <p>
                Down below I present you some of the work I did in the past
                <br />
                Next, I you can see some of my soft &amp; hard skills.
                <br />I hope you enjoy it. :D.
              </p>
            </header>
            <ul className="icons major">
              <li>
                <span className="icon brands fa-react major style3" />
              </li>
              <li>
                <span className="icon solid fa-code major style2" />
              </li>
              <li>
                <span className="icon brands fa-node-js major style1" />
              </li>
            </ul>
          </div>
        </section>
        {/* Two */}
        <section id="two" className="wrapper alt style2">
          <section className="spotlight">
            <div className="image">
              <Image
                width={2000}
                height={2000}
                src="/images/seuvale-estabelecimento.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Description</h4>
              <h2>
                SeuVale Estabelecimento
                <br />
              </h2>
              <p>
                Born to offer fair fees in food, transport and other benefits,
                SeuVale is a Brazilian Fintech that connects establishments,
                companies and their employees through the digital world. This is
                the establishment app made for receiving the voucher payments,
                and was done through <a href="http://smarti9.com.br">Smarti9</a>
                . Yout can know more by{" "}
                <a href="https://site.seuvale.com">clicking here</a>
              </p>
              <h4>Responsabilities</h4>
              <p>As the main mobile developer, I was responsible for:</p>
              <ul>
                <li>
                  Develop the app from scratch (User Interfaces, API
                  integration, functional and non-functional requirements)
                </li>
                <li>Deliver the new features to App and Play stores</li>
                <li>Ensuring the highest code quality as possible</li>
                <li>
                  Provide technical requirements and assist on the development
                  of new features on the backend
                </li>
                <li>
                  Coordinate other mobile developer within Smarti9 on the tasks
                </li>
              </ul>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <Image
                width={2000}
                height={2000}
                src="/images/seuvale-consumidor.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Description</h4>
              <h2>
                SeuVale Consumidor
                <br />
              </h2>
              <p>
                Also part of the SeuVale environment, this is the costumer app,
                used to pay meals, heath insurance, bus tickets, and other,
                using the vouchers given by the company that decided to give the
                vouchers to their employees. This app was also done in
                partnetship with
                <a href="http://smarti9.com.br">Smarti9</a> and you can know
                more about the product
                <a href="https://site.seuvale.com">clicking here</a>
              </p>
              <h4>Responsabilities</h4>
              <p>As the main mobile developer, I was responsible for:</p>
              <ul>
                <li>
                  Develop the app from scratch (User Interfaces, API
                  integration, functional and non-functional requirements)
                </li>
                <li>Deliver the new features to App and Play stores</li>
                <li>Ensuring the highest code quality as possible</li>
                <li>
                  Provide technical requirements and assist on the development
                  of new features on the backend
                </li>
                <li>
                  Coordinate other mobile developer within Smarti9 on the tasks
                </li>
              </ul>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <Image
                width={2000}
                height={2000}
                src="/images/gestorazul.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>
                Gestor Azul
                <br />
              </h2>
              <h4>Description</h4>
              <p>
                Gestor Azul is a company with banking tools for business,
                focused on some finantial services, such as conciliation for PIX
                wire transfers, generation of online and conventional bank
                slips, and so on. The app allows the user to manage, generate
                and send bank slips, while monitoring their statuses (paid,
                expired, etc).
              </p>
              <h4>Responsabilities</h4>
              <p>As a freelance mobile developer, I was responsible for:</p>
              <ul>
                <li>
                  Develop the app from scratch (UI development, API integration,
                  functional and non-functional requisites)
                </li>
                <li>Ensure the highest code quality as possible</li>
                <li>
                  Implement automated tests and CI/CD pipelines using Gitlab-CI
                </li>
                <li>
                  Communicate with the backend developer to ensure that the app
                  has the proper data and APIs to implement the screens
                </li>
              </ul>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <Image width={2000} height={2000} src="/images/quiq.png" alt="" />
            </div>
            <div className="content">
              <h2>
                Quiq
                <br />
              </h2>
              <h4>Description</h4>
              <p>
                Quiq is a startup that introduces the idea of
                Delivery-as-a-Service (Daas). In general terms, the platform
                from Quiq allows their clients (anyone related to the food
                service) to operate many delivery platforms on a single screen,
                intead of operating in many screens at the same time. The
                startup also operates on a Smart POS who runs an Embedded
                Android OS, with the same features from the web page. Check them
                out
                <a href="https://somosquiq.com">clicking here</a>
              </p>
              <h4>Responsabilities</h4>
              <p>As the main mobile developer, I was responsible for:</p>
              <ul>
                <li>
                  Develop the app from scratch and deliver the new features to
                  the store
                </li>
                <li>Ensuring the highest code quality as possible</li>
                <li>
                  Implement automated tests and CI/CD pipelines using Gitlab-CI
                </li>
                <li>
                  {
                    "Communicate with the Smart POS vendor's when new features were"
                  }
                  delivered to their app store
                </li>
              </ul>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <Image
                width={2000}
                height={2000}
                src="/images/apollo podcasts.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>
                Apollo Podcasts
                <br />
              </h2>
              <h4>Description</h4>
              <p>
                Apollo Podcasts is an app developed for hosting the best
                ficctional podcasts around the world. The app is free and you
                can download it for android and iOS devices to start listening
                to ficctional podcasts about all categories and genres. If you
                got curious and want to know more about the company,
                <a href="https://www.apollopods.com">visit Apollo webpage</a>
              </p>
              <h4>Responsabilities</h4>
              <p>As the main mobile developer, I was responsible for:</p>
              <ul>
                <li>
                  Define project architecture and folder structure to ensure a
                  organized and consistent project
                </li>
                <li>
                  Review and approve Pull Requests from other developers, making
                  sure they were following the best code standands
                </li>
                <li>
                  Configure Developer coding tools, such as ESlint, Prettier,
                  Flipper (and other debugging tools) CI/CD pipelines, etc, to
                  provide them the best developer experience possible
                </li>
                <li>
                  Discuss API structure (mostly endpoints and Data Tranfer
                  Objects) with the backend developers to ensure it fills all
                  mobile development needs
                </li>
                <li>Deploy apps to the Appstore and Google Play Store</li>
              </ul>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <Image
                width={2000}
                height={2000}
                src="/images/comingsoon.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h2>
                Coming soon ...
                <br />
              </h2>
              <p>Maybe your app could be the next here :D</p>
            </div>
          </section>
        </section>
        {/* Three */}
        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Hard &amp; Soft Skills</h2>
              {/* <p>On the left, you can see some of my hard skills. On the right, the soft skills.</p> */}
            </header>
            <ul className="features">
              <li className="icon brands fa-react">
                <h3>React Native</h3>
                <p>
                  Experienced on development of applications using React Native
                  CLI, solving conflicts and issues on native code
                </p>
              </li>
              <li className="icon brands fa-js">
                <h3>Excellent JS knowledge</h3>
                <p>Not only on Javascript, but also on typescript.</p>
              </li>
              <li className="icon solid fa-code">
                <h3>Excellent code quality</h3>
                <p>
                  {
                    "Clean code, reusable components, eslint configuration, \
                  typescript, ... Coding it's not about just development. It's \
                  also about making it understandable."
                  }
                </p>
              </li>
              <li className="icon brands fa-git">
                <h3>Git knowledge</h3>
                <p>
                  Not only code versioning using git, but also CI/CD pipeline
                  experience using Gitlab-ci and implementing git hooks with
                  Husky. Always following the Git Flow prototype.
                </p>
              </li>
              <li className="icon solid fa-shipping-fast">
                <h3>Fast delivery apps</h3>
                <p>
                  Used to Agile Management methods such as Scrum, I have
                  experience on management tools: Jira, Trello, Asana and Gitlab
                  boards.
                </p>
              </li>
              <li className="icon fa-heart">
                <h3>Tech lover</h3>
                <p>
                  {
                    "I have knowledge in many parts of what we call technology: \
                  from hardware development, real-time embedded operating \
                  systems, mobile application, and so on! I'm passionate about \
                  everything tech-related."
                  }
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* CTA */}
        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>{"Let's have a talk"}</h2>
              <p>{"I'm always open to help you solve your problems"}</p>
              <h3>
                lucasfigueiredo285@gmail.com
                <p />
              </h3>
            </header>
            {/* <ul class="actions stacked">
								<li><a href="#" class="button fit primary">Activate</a></li>
								<li><a href="#" class="button fit">Learn More</a></li>
							</ul> */}
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-figueiredo-m"
                className="icon brands fa-linkedin-in"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/lucas-figueiredo-m"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:lucasfigueiredo285@gmail.com?subject=Job quote"
                className="icon solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {/* <ul class="copyright">
							<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul> */}
        </footer>
      </div>
    </main>
  );
}
