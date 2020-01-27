# semana-10-omnistack
Projeto React, React Native Back-End e Front-ENd

* https://chocolatey.org/install
- Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

* choco install nodejs-lts

*Yarn https://legacy.yarnpkg.com/lang/en/
- choco install yarn

- mkdir backend
- cd backend
- yarn init -y

- yarn add express

* primeira execucão
  node .\src\index.js

  * extensao Json Viewer
  https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR

  * dependencia para atualizacao automatica da pagina NODEMON e modo de Desenvolvimento -D
  yarn add nodemon -D
  
  * criando um script para rodar o monitor em modo de Desenvolvimento no package.json criar.

    "scripts" : {
        "dev": "nodemon ./src/index.js" 
    },

   * executando o script
    yarn dev