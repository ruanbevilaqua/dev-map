# dev-map
## english
Application developed on Omnistack Week 10 that works has a developers index. You can register has a dev using your location, your tech stack and you Github profile.

This application is made with Node.js and MongoDB on backend, ReactJS on web version and React Native + Expo on mobile version.

Has an extra I build a web version with a preview of Google Maps. (Must update the Google Cloud API Key on the frontend/src/components/MapContainer).  

# dev-map
## portuguese
Aplicação desenvolvida durante a Semana Omnistack 10 que permite o cadastro de desenvolvedores e a busca por região e techs utilizadas.
O projeto utiliza Node.js e MongoDB no backend, ReactJS no front e React Native com Expo no mobile.

O sistema funciona como um indexador no qual os devs podem se cadastrar, marcando sua região geográfica e tecnologias utilizadas, além do seu perfil do github.

No projeto inicial da RocketSeat não foi implementado visualização de mapas no front entd para web, apenas na versão mobile. 
Nesse projeto eu fiz uma implemetação utilizando o google maps na versão web, mas para usa-la você precisa utilizar sua Google Cloud Api Key em frontend/src/components/MapContainer. A chave deve ser gerada em https://console.cloud.google.com/ procurando por Maps Javascript API.
