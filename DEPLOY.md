# Instruções para Rodar a Aplicação Dockerizada

## Requisitos

- Docker instalado no seu sistema.

## Rodando a Aplicação

1. **Puxe a Imagem Docker**:

   ```bash
   docker pull rodrigocosta831/my-app:latest

   ```

2. **Execute o Contêiner**:

   ```bash
   docker run -p 3000:3000 rodrigocosta831/my-app:latest

   ```

3. **Execute o Contêiner**:
   ```bash
   Abra seu navegador e vá para http://localhost:3000.
   ```
   ## Notas Adicionais
   -Certifique-se de que a porta 3000 não está sendo usada por outra aplicação.
   -Consulte a documentação do Docker para obter mais informações sobre o uso -de contêineres.
