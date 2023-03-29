
# Boas vindas ao repositório context-filters

Se trata de uma aplicação criada para estudar context e aninhar filtros de busca.




## Demonstração

![Vídeo-sem-título-‐-Feito-com-o-Clipchamp](https://user-images.githubusercontent.com/102391652/228384193-e716f9a8-6dee-4967-b0b9-b23626a1777d.gif)


## Instalação

Requisitos para subir a aplicação com Docker
 - Docker
 - Docker Compose 

<details>
    <summary>Instalando e executando</summary>
    <br />

### 1 - Clone o repositório:

```
git clone git@github.com:Paludio/context-filters.git
```

### 2 - Apos ter o repositório clonado em sua maquina, execute este comando para acessar a pasta do projeto:

```sh
cd context-filters
```

### 3 - Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências do projeto:
## Obs.: o comando npm install é chamado automaticamente caso utilize o Docker.
Se optar pelo docker não a necessidade de instalar as dependências.

# Caso queira utilizar o docker
```sh
docker-compose up -d
```

## Se não utilizar o docker é necessário instalar as dependências

# npm install:
```sh
npm install && npm start
```

### 4 - Acesse a aplicação:

Abrindo na porta padrão que o React usa: <http://localhost:3000/> em seu navegador.

  </details>
<br />
    
## ⚙️ Tecnologias

- React.JS
- React.Router
- JavaScript
- Tailwind

## ⚙️ Dependências

- React-icons
- React-toastify

## Melhorias

- Fazer uma API para de fato realizar requisições
- Criar um CRUD para adicionar, atualizar, remover e ler os celulares
- Melhorar as validações dos inputs
- Melhorar o css dos erros

