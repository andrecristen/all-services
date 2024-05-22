# Projeto de Microserviços com Docker

Este projeto contém quatro microserviços distintos, cada um com sua própria funcionalidade, configurados para rodar em contêineres Docker e orquestrados utilizando Docker Compose.

## Repositórios

Clone os repositórios necessários:

1. [fastapi-auth](https://github.com/Lucaslgbr/fastapi-auth)
2. [spreadsheet-importer](https://github.com/Lucaslgbr/spreadsheet-importer)
3. [notification-service](https://github.com/andrecristen/notification-service)
4. [planilha-frontend](https://github.com/andrecristen/planilha-frontend)

Para clonar todos os repositórios, utilize os comandos abaixo:

```bash
git clone https://github.com/Lucaslgbr/fastapi-auth.git
git clone https://github.com/Lucaslgbr/spreadsheet-importer.git
git clone https://github.com/andrecristen/notification-service.git
git clone https://github.com/andrecristen/planilha-frontend.git
```

Criar network:

````bash
docker network create rabbitmq-network
````

Build:

````bash
docker-compose up -d
````

