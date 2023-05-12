# Portfolio

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/lucas-figueiredo-m/portfolio?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/lucas-figueiredo-m/portfolio?style=for-the-badge)

<img src="https://www.datocms-assets.com/99299/1683921446-captura-de-tela-2023-05-08-as-22-03-41-2.png" alt="exemplo imagem">

> This is a personal webpage I develop for myself so I could present some of the work I did in the past, demonstrate the skills I have and also post content on as tech blog

### Fixes and future releases

This project is still under development and next updates will target the following tasks

- [ ] Migrate e-mail client from a OAuth2 authenticated google account to a Sendgrid client
- [ ] Use Zod to validate e-mail sending form
- [ ] Create a blog section
- [ ] Add automated tests
- [ ] Add Sonarlint check to pipeline

## 💻 Requirements

Before starting, make sure you have the following requirements:

<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* You have PC runnning a macOS, Linux or Windows.
* You have Node.js installed on version 14.18.0 or higher

> Tip: run `node -v` on your terminal to check your Node version

## 🚀 Running the project (all OS)

1. Clone the repository on your device, using your preferred method
2. Run `npm install` to install dependencies
3. Create a new file called `.env.local` inside the project you cloned
4. Copy the content from `.env.example` to `.env.local`
5. Go to Firebase webpage and create a new web project
6. Copy all data provided by your firebase project and fill the values on your `.env.local`
7. Go to DatoCMS, create your account or login into an existing one and create a new project
8. Generate a new token, copy it and paste on the correspondent env entry on `.env.local`, with the GraphQL endpoint as well
9. Open this Blog post and follow all steps to create a google project and a OAuth2 key. You'll need a Gmail account
10. Fill the `.env.local` file your your e-mail address and the generated `CLIENT_ID`, `CLIENT_SECREET` and `REFRESH_TOKEN` by the process from the Blog post.
11. Run `npm run dev` to start the development client
12. Open a browser and access the project on http://localhost:3000

## ‼️ Troubleshooting
If the browser don't display the project, check the terminal to see if the project started on a different port. Port 3000 is the default for NextJS applications.

Any other errors, please report an issue

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#nome-do-projeto)<br>
