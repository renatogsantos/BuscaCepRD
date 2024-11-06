# Busca CEP Rede IDeia

Este pacote permite realizar buscas de CEP utilizando a API de consulta da Rede IDeia.

## Instalação

Para instalar o pacote, utilize o comando abaixo com o npm:

```bash
npm install @renatogsantos/buscaceprd@1.0.2
```
## Configuração de Autenticação

Para acessar o repositório do pacote no GitHub Packages, é necessário criar um arquivo `.npmrc` na raiz do projeto com o seguinte conteúdo:

```plaintext
@renatogsantos:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<SEU_TOKEN>
```

Substitua `<SEU_TOKEN>` pelo seu token de autenticação do GitHub. Esse token pode ser gerado nas Configurações do GitHub com as permissões necessárias para acessar pacotes.

## Utilização

Após a instalação e configuração, você poderá importar o pacote em seu projeto e utilizá-lo para realizar buscas de CEP.

```javascript
import { buscarCep } from '@renatogsantos/buscaceprd';

const buscaMeuCep = async (cep) => {
    const data = await buscarCEP(cep)
    console.log(data)
}
```

Essa função buscarCep recebe um CEP como parâmetro e retorna os dados de endereço associados a ele.
