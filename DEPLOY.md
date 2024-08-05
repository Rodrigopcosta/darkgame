# Instruções de Deploy

## Visão Geral

Este documento fornece instruções para implantar e executar o projeto usando Docker. A imagem Docker para este projeto está hospedada no Docker Hub.

## Pré-requisitos

- Docker instalado na sua máquina local. Você pode baixar o Docker [aqui](https://www.docker.com/get-started).

## Passos para o Deploy

- 1. Baixar a Imagem Docker

Primeiro, baixe a imagem Docker do Docker Hub usando o seguinte comando:

```bash
docker pull rodrigocosta831/myapp:latest
```

- 2. Executar o Container Docker

Após baixar a imagem, você pode executar um container Docker usando a imagem. Utilize o seguinte comando para iniciar o container:

Primeiro, baixe a imagem Docker do Docker Hub usando o seguinte comando:

```bash
docker run -p 3000:3000 rodrigocosta831/myapp:latest

```
Este comando iniciará o container no modo desacoplado (-d) e mapeará a porta 8080 da sua máquina local para a porta 80 do container.

- 3. Acessar a Aplicação
Uma vez que o container esteja em execução, você pode acessar a aplicação abrindo um navegador web e navegando para:

```bash
http://localhost:3000
```
