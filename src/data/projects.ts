import { ProjectType } from "@services/CmsService";

export const projects: ProjectType[] = [
  {
    id: "cotQ4t32RoW1ORKMijBUnA",
    title: "Swift Pokédex",
    slug: "swift-pokedex",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1715115103-simulator-screenshot-iphone-15-2024-05-07-at-17-32-55.png",
    },
    projectType: "Mobile",
    language: "Swift",
    description:
      "Swift Pokédex app has been created to practice independent SwiftUI coding skills, by integrating the app with an external Pokedex API to fetch for pokemon list, details and other informations. By developing this app, some skills could be practiced, such as UI layouting using SwiftUI, networking and asyncronous code, error handling and JSON decoding, multiplatform support, etc.",
    frameworks: ["SwiftUI"],
    packages: undefined,
    github: "https://github.com/lucas-figueiredo-m/swift-pokedex",
    url: "",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      '<ul>\n  <li>Adding authentication</li>\n  <li>Add a "catch" feature, which makes user attempt to catch a pokém, with several levels of difficulties depending on the pokemon</li>\n</ul>',
  },
  {
    id: "152177602",
    title: "Portfolio",
    slug: "portfolio",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1683921446-captura-de-tela-2023-05-08-as-22-03-41-2.png",
    },
    projectType: "Frontend",
    language: "TypeScript",
    description:
      "This project has as its main goal to be my personal webpage where I can share content, display some of the work I did in the past and also some of my personal projects. It also has been a great way to learn more about web development, as most of my professional experience has been mobile field.\n\nThis project was built using NextJS and React frameworks, integrated with a Headless CMS service called Dato CMS to provide flexibility to the project. It is being hosted on Vercel and GraphQL was chosen to request data from DatoCMS.",
    frameworks: ["NextJS", "ReactJS"],
    packages: ["@apollo/client", "react-hook-form", "axios", "firebase"],
    github: "https://github.com/lucas-figueiredo-m/portfolio",
    url: "https://www.figueiredolucas.com.br",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      '<ul>\n  <li class="task-list-item">Migrate e-mail client from a OAuth2 authenticated google account to a Sendgrid client</li>\n  <li><span>Use Zod to validate e-mail sending form</span></li>\n  <li><span>Create a blog section</span></li>\n  <li><span>Create a mailing feature to deliver blog content to this mailing list on every new blog post</span></li>\n  <li><span>Add automated tests</span></li>\n  <li><span>Add Sonarlint check to pipeline</span></li>\n  <li><span>Add feature to download pdf Curriculum</span><span></span></li>\n</ul>',
  },
  {
    id: "152612215",
    title: "Github Clone",
    slug: "githubclone",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1683727207-githubclone_cover.png",
    },
    projectType: "Mobile",
    language: "TypeScript",
    description:
      "This project is ha been created to practice some alternative state management in React Native rather then using Redux",
    frameworks: ["React Native"],
    packages: ["axios"],
    github: "https://github.com/lucas-figueiredo-m/github-clone",
    url: "",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      "<ul>\n  <li>Add a project search screen</li>\n  <li>Add a login screen</li>\n  <li>Add a profile screen</li>\n  <li>Add automated tests</li>\n  <li>Create a CI/CD pipeline</li>\n</ul>",
  },
  {
    id: "152612229",
    title: "Skia Bar Chart",
    slug: "skia-bar-chart",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1683726830-skia_cover.png",
    },
    projectType: "Mobile",
    language: "TypeScript",
    description:
      "This app was developed first to study the Skia package for React Native and learn how to use it. But after the bar chart was completed the idea ha grown to turn this project into a npm package to provide multiple charts so other developers and companies can use it on their own projects.",
    frameworks: ["React Native"],
    packages: ["@shopify/react-native-skia"],
    github: "https://github.com/lucas-figueiredo-m/rn-skia-barchart",
    url: "",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      "<ul>\n  <li>Turn this repository into a npm package for multiple charts using <code>@shopify/react-native-skia</code></li>\n  <li>Add automated tests</li>\n  <li>Create a CI/CD pipeline for releasing new versions of the package</li>\n</ul>",
  },
  {
    id: "152612227",
    title: "Gitlab Client",
    slug: "gitlab-client",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1683728009-gitlabclient_cover.png",
    },
    projectType: "Mobile",
    language: "TypeScript",
    description:
      "This app has been created to provide a Gitlab client for users just like Github App provides acces to Github through mobile. Therefore, thi app consumes a lot of endpoint from Gitlab API to provide such client for users ",
    frameworks: ["React Native"],
    packages: undefined,
    github: "https://github.com/lucas-figueiredo-m/gitlab-app-rn",
    url: "",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      "<ul>\n  <li>Apply Clean Code principles</li>\n  <li>Add automated tests</li>\n  <li>Create a CI/CD pipeline</li>\n  <li>Update React and React Native version</li>\n</ul>",
  },
  {
    id: "152612232",
    title: "Spectacle App",
    slug: "spectacle-app",
    coverImage: {
      url: "https://www.datocms-assets.com/99299/1683729001-spectacleapp_cover.png",
    },
    projectType: "Mobile",
    language: "TypeScript",
    description:
      "This app has been created o I could practice a bit more some of the services provided by Firebase, and manage multiple API srevices a well. Therefore, this app allows you to login using Firebase auth and access spotify music list and add it to a list to be stores on Firebae Firestore. Also, you can can for movies using TMDB API undeneath, create preffered categories and add your favorite movies to it.\n\nThe app also uses Analytic and crahlytics to monitor app events and crashes.",
    frameworks: ["React Native"],
    packages: [
      "@react-native-firebase/app",
      "@react-native-firebase/analytics",
      "@react-native-firebase/auth",
      "@react-native-firebase/firestore",
      "@reduxjs/toolkit",
      "react-native-config",
      "react-native-app-auth",
      "react-i18n-next",
    ],
    github: "https://github.com/lucas-figueiredo-m/spectacle-app-rn",
    url: "",
    appStoreUrl: "",
    playStoreUrl: "",
    isPublic: true,
    futureReleases:
      "<ul>\n  <li>Apply Clean Code principles</li>\n  <li>Add automated tests</li>\n  <li>Create a CI/CD pipeline</li>\n</ul>",
  },
];
