# NLW E-SPORTS

<p>Aplicação para conectar gamers de diversos jogos na plataforma TWITCH</p>
<small>Projeto criado durante a semana do NLW E-SPORTS.</small>

## <img width="40" src="https://e7.pngegg.com/pngimages/574/164/png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron.png"> Web

Features:
* [x] Listagem de games, exibindo quantidade de ADS vinculados ao mesmo
* [x] Adicionar AD para um game

Próximos passos:
* [] Criar "slider"
* [] Adicionar tela semelhante ao mobile exibindo os "Ads"
* [] Adicionar autenticação
* [] Adicionar [validação no formulário](https://react-hook-form.com/)

## <img style="vertical-align:middle" width="48" src="https://e7.pngegg.com/pngimages/574/164/png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron.png"> Mobile

Próximos passos:
* Adicionar autenticação, inclusive com Discord e/ou Twitch (Spike)
* Implementar notificação

## <img style="vertical-align:middle" width="48" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"> Server
Diferentemente do que foi feito nas aulas criei o back-end em Java, usando Spring Boot, com o intuito de praticar um pouco mais
essa linguagem e esse framework com os quais já tenho experiência e tenho tido mais contato nos últimos anos.

Próximos passos:
* Criar integração com o Twitch
* Adicionar novos endpoints caso necessário para consumir serviços do twitch

### Próximos passos projeto:

* Autenticação (server, web e mobile)
* Tratamento de erros vindo do servicos (web e mobile)
* Importar models vindos do swagger no back-end
* Listar games vindo do próprio twitch
* Fazer uso do [eventsSub](https://dev.twitch.tv/docs/eventsub) 