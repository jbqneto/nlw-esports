# NLW E-SPORTS

<p>Aplicação para conectar gamers de diversos jogos na plataforma TWITCH</p>
<small>Projeto criado durante a semana do NLW E-SPORTS.</small>

## <img width="40" src="https://e7.pngegg.com/pngimages/574/164/png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron.png"> Web

Aplicação web, desenvolvida usando *React*. Para iniciar a aplicação é necessário ter o NodeJS instalado. Execute:
```
npm start
```

Features:
* [x] Listagem de games, exibindo quantidade de ADS vinculados ao mesmo
* [x] Adicionar AD para um game

## <img style="vertical-align:middle" width="48" src="https://e7.pngegg.com/pngimages/574/164/png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron.png"> Mobile

Aplicação mobile, desenvolvida usando *React-Native*. Para iniciar a aplicação é necessário ter o NodeJS e o expo instalados. Execute:
```
expo start
```

Features:
* [x] Listagem de games, exibindo quantidade de ADS vinculados
* [x] Tela interna do game, exibindo detalhes dos ADS vinculados

## <img style="vertical-align:middle" width="48" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"> Server
Diferentemente do que foi feito nas aulas o back-end foi feito em *Java*, usando *Spring Boot*. Para rodar o servidor é necessário ter ao menos o MAVEN instalado.

Usando o maven:
```
mvn clean sprint-boot:run
```

### Próximas features:

* [ ] Criar Docker para rodar o projeto (Pelo menos servidor e web)
* [ ] Tratamento de erros vindo do servicos (web e mobile)
* [ ] Importar models vindos do swagger no back-end (Web e Mobile)
* [ ] Reaproveitamento de código entre web e mobile (web e mobile)
* [ ] Criar "slider" (web)
* [ ] Adicionar tela semelhante ao mobile exibindo os "Ads" (web)
* [ ] Adicionar [validação no formulário](https://react-hook-form.com/) (web)
* [ ] Autenticação (server, web e mobile)
* [ ] Autenticação via Discord e/ou Twitch (Web e Mobile - Spike)
* [ ] Criar integração com o Twitch
* [ ] Listar games vindo do próprio twitch
* [ ] Implementar [notificação](https://expo.dev/notifications)
* [ ] Fazer uso do [eventsSub](https://dev.twitch.tv/docs/eventsub) 