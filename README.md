# Projeto Web com Apache e Docker Compose 🐳

Este projeto demonstra como servir uma aplicação web estática (HTML, CSS e JavaScript) utilizando um servidor Apache (httpd) rodando dentro de um contêiner Docker, com toda a configuração orquestrada pelo Docker Compose.

Este é um projeto de portfólio desenvolvido para praticar e demonstrar habilidades em containerização de aplicações web.

## 📂 Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```
docker-projeto1-dio/
├── compose.yml     # Arquivo de orquestração dos serviços
└── website/           # Diretório raiz dos arquivos web
    ├── index.html         # Estrutura principal da página
    ├── css/
    │   └── style.css      # Folha de estilos
    └── js/
        └── script.js      # Lógica e interatividade
```

O arquivo `compose.yml` mapeia a pasta `website` para o diretório `/usr/local/apache2/htdocs/` dentro do contêiner, que é o diretório padrão onde o Apache serve os arquivos.
