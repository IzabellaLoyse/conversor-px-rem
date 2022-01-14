# Simple Boilerplate

## 💡 Guia de instalação

## 📌 Pré-requesitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

## ⚙️ Instalação

Clone o projeto e acesse a sua pasta

```
# Clone o repositório
$ git clone <projeto>

# Acesse a pasta do projeto no terminal
$ cd pasta
```

Verifique se a instalação do Node.js foi executada corretamente:

```
# Verifica a versão atual do Node.js instalada
$ node -v

# Verifica a versão atual do NPM instalada
$ npm -v
```

## 🔮 Instalação das Dependências

- Para instalar as dependências necessárias do projeto

Usando npm:

```
npm install
```

Usando Yarn:

```
yarn install
```


## 🔮 Compilando o CSS do projeto

- Após a instalação das dependências do projeto
- Vamos compilar o **SCSS** utilizando o script `dev` do arquivo `packjage.json`.

Usando o Yarn para compilar:

```js
yarn dev
```

Usando o Npm para compilar:

```js
npm run dev
```

## 🔗 Compilando o TypeScript do projeto

- Para transpirar o arquivo **TypeScript** do projeto
- Utilize o script `tsc` do arquivo `packjage.json`.

Utilizando o Yarn

```js
yarn tsc

```

Utilizando o Npm

```js
npm run tsc
```

## 🌐 Utilizando o Eslint

- Para que os arquivos tenham a formatação do **Eslint**.
- Utilize o script `lint:fix` do arquivo `packjage.json`.

Utilizando o Yarn

```js
yarn lint:fix
```

Utilizando o Npm

```js
npm run lint:fix
```
