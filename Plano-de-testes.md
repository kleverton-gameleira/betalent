# Plano de testes - SAUCE DEMO

| Responsável  | Versão | Data |
|--- |---|---|
| Kleverton Gameleira | 1.0 | 24/11/2024 |


## Introdução

Este plano de testes tem como objetivo garantir que os principais fluxos da loja SAUCE DEMO estejam em conformidade com o esperando, tanto em termos de funcionalidade. Serão abordados os principais cenários e casos de uso, além de testes em situações de exceção.

## Objetivo

Validar e garantir o funcionamento correto do sistema de loja virtual SAUCE DEMO, assegurando que o mesmo atenda aos requisitos especificados, permitindo que o usuario possa realizar os fluxos principais dentro do sistema como: login, ordenação de produtos, adicionar e remover produtos do carrinho de compras, paginação dentro do sistema, compra e logout 

## Escopo de testes

### Caso de Teste: Login de Usuário - campo usuario sem preenchimento

- **Objetivo**: Validar a mensagem de campo obrigatorio é exibida quando o campo usuario e deixado sem preenchimento.
- **Pré-condição**: O usuário deve fornecer como entrada um usuario que nao esteja cadastrado no sistema.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir no campo Username um usuario que não esteja cadastrado no sistema.
  3. Inserir no campo Password uma senha válida.
  4. Clicar em "Login".
- **Resultado Esperado**: O sistema deve exibir na tela uma mensagem informando que o preenchimento do campo usuario obrigatorio.
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Login de Usuário - campo senha sem preenchimento

- **Objetivo**: Validar a mensagem de campo obrigatorio é exibida quando o campo senha e deixado sem preenchimento.
- **Pré-condição**: O usuário deve fornecer como entrada um usuario que nao esteja cadastrado no sistema.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir no campo Username um usuario que não esteja cadastrado no sistema.
  3. Inserir no campo Password uma senha válida.
  4. Clicar em "Login".
- **Resultado Esperado**: O sistema deve exibir na tela uma mensagem informando que o preenchimento do campo usuario obrigatorio.
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]

### Caso de Teste: Login de Usuário - usuario não cadastrado

- **Objetivo**: Validar a mensagem de retorno de usuario não cadastrado.
- **Pré-condição**: O usuário deve fornecer como entrada um usuario que nao esteja cadastrado no sistema.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir no campo Username um usuario que não esteja cadastrado no sistema.
  3. Inserir no campo Password uma senha válida.
  4. Clicar em "Login".
- **Resultado Esperado**: O sistema deve exibir na tela uma mensagem informando que o usuario fornecido não esta cadastrado.
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Login de Usuário - senha inválida

- **Objetivo**: Validar a mensagem de retorno de senha inválida.
- **Pré-condição**: O usuário deve fornecer como entrada uma senha inválida.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir no campo Username um usuario válido.
  3. Inserir no campo Password uma senha inválida.
  4. Clicar em "Login".
- **Resultado Esperado**: O sistema deve exibir na tela uma mensagem informando que a senha inserida no campo Password é uma senha inválida.
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Login de Usuário

- **Objetivo**: Validar o login de um usuário com credenciais corretas.
- **Pré-condição**: O usuário deve ter uma conta válida no sistema.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir um nome de usuário e senha válidos.
  3. Clicar no botão "Entrar".
- **Resultado Esperado**: O sistema deve redirecionar o usuário para a página inicial.
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]



### Caso de Teste: Logout do sistema
- **Objetivo**: Validar se o usuario é redirecionado para a tela de login do sistema.
- **Pré-condição**: Estar logado no sistema.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no menu hanburguer no canto superior esquerdo.
  3. Clicar em Logout
- **Resultado Esperado**: O sistema deve redirecionar o usuario para a pagina de login do sistema
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Visualizar detalhes do produto

- **Objetivo**: Validar se os detalhes do produto selecionado são exibidos na tela.
- **Pré-condição**: Estar logado no sistema, ter pelo menos um produto cadastrado.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar em um dos produtos exibidos no grid.
- **Resultado Esperado**: O sistema deve exibir na tela as informações de cadastro do produto selecionado
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Ordenar produtos por nome 

- **Objetivo**: Validar se o sistema ordena os produtos no grid pelo letra inicial do produto.
- **Pré-condição**: Estar logado no sistema, ter mais de um produto cadastrado na loja.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no menu de seleção no canto superior direito.
  3. Selecionar a opção Name (Z to A)
  4. Selecionar a opção Name (A to Z)
- **Resultado Esperado**: O sistema deve exibir os produtos no grid em ordem alfabatica descrescente e crescente
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]



### Caso de Teste: Ordenar produtos por preco

- **Objetivo**: Validar se o sistema ordena os produtos no grid pelo preco.
- **Pré-condição**: .
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no menu de seleção no canto superior direito.
  3. Selecionar a opção Price (high to low).
  4. Selecionar a opção Price (low to high).
- **Resultado Esperado**: O sistema deve exibir os produtos no grid em ordenando do maior valor para o menor e menor valor pelo maior valor
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Adicionar produto ao carrinho pelo card

- **Objetivo**: Validar se o produto é adicionado ao carrinho de compra quando o usuario clicar no botão Add to cart no card do produto no grid.
- **Pré-condição**: Estar logado no sistema, ter pelo menos um produto cadastrado no sistema.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no botão Add to card.
- **Resultado Esperado**: O produto é adicionado no carrinho de compras na loja e o botão remove é exibido no lugar do botão Add to cart 
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: Adicionar produto ao carrinho pela pagina de detalhes do produto

- **Objetivo**: Validar se o produto é adicionado ao carrinho de compra quando o usuario clicar no botão Add to card na pagina de detalhes do produto.
- **Pré-condição**: .
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no card do produto no grid.
  3. Clicar no botão Add to card na pagina de detalhes do produto
- **Resultado Esperado**: O produto é adicionado no carrinho de compras na loja e o botão remove é exibido no lugar do botão Add to cart 
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: remover produto do carrinho pelo card

- **Objetivo**: Validar se o produto pode ser removido do carrinho de comprar clicando no botão remove no card do produto no grid.
- **Pré-condição**: Estar logado, ter pelo menos um produto selecionado no card.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no botão remove no card do produto.
- **Resultado Esperado**: O produto é removido do carrinho de compras da loja e o botão remove é substituido pelo botão Add to cart
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: remover produto do carrinho pela pagina de detalhes do produto

- **Objetivo**: Validar se o produto é removido do carrinho de compras do sistema.
- **Pré-condição**: .
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no produto.
  3. Clicar no botão Add to cart
  4. 
- **Resultado Esperado**: O produto é removido do carrinho de compras da loja e o botão remove é substituido pelo botão Add to cart
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: remover produto pelo carrinho de compras
- **Objetivo**: Validar se o produto é removido do carrinho de compras do sistema.
- **Pré-condição**: .
- **Passos**:
  1. Acessar o sistema.
  2. Estar no carrinho de compras do sistema.
  3. Clicar no botão remove
  4. 
- **Resultado Esperado**: O produto é removido do carrinho de compras do sistema
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]



### Caso de Teste: checkout -first name obrigatorio 
- **Objetivo**: Validar se a mensagem de campo obrigatorio é exibida na tela quando o usuario deixar o campo first name sem preenchimento.
- **Pré-condição**: estar na pagina de checkout do sistema.
- **Passos**:
  1. Acessar o sistema.
  2. clicar no botão Add to cart do produto desejado
  3. Navegar para o carrinho de compras
  4. Clicar no botão checkout
  5. Preencher o formulario de checkout deixando o campo first name sem preenchimento
- **Resultado Esperado**: O sistema deve exibir na tela a mensagem de campo obrigatorio 
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: checkout -last name obrigatorio 
- **Objetivo**: Validar se a mensagem de campo obrigatorio é exibida na tela quando o usuario deixar o campo last name sem preenchimento.
- **Pré-condição**: estar na pagina de checkout do sistema.
- **Passos**:
  1. Acessar o sistema.
  2. clicar no botão Add to cart do produto desejado
  3. Navegar para o carrinho de compras
  4. Clicar no botão checkout
  5. Preencher o formulario de checkout deixando o campo last name sem preenchimento
- **Resultado Esperado**: O sistema deve exibir na tela a mensagem de campo obrigatorio 
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: checkout - Zip/postal code obrigatorio 
- **Objetivo**: Validar se a mensagem de campo obrigatorio é exibida na tela quando o usuario deixar o campo Zip/postal sem preenchimento.
- **Pré-condição**: estar na pagina de checkout do sistema.
- **Passos**:
  1. Acessar o sistema.
  2. clicar no botão Add to cart do produto desejado
  3. Navegar para o carrinho de compras
  4. Clicar no botão checkout
  5. Preencher o formulario de checkout deixando o campo Zip/postal sem preenchimento
- **Resultado Esperado**: O sistema deve exibir na tela a mensagem de campo obrigatorio 
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: checkout produto -cancelar 
- **Objetivo**: Validar se o usuario consegue cancelar a comprar antes de finalizar a compra.
- **Pré-condição**: Ter adicionar um ou mais produtos no carrinho de compras, ter preenchido corretamente o formulario de checkout.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no botao Add to cart do produto desejado
  3. Clicar no icone de carrinho no canto superior direito
  4. Clicar no botão Checkout
  5. Preencher os dados do formulario de checkout
  6. Clicar no botão cancelar na pagina de finalização da compra
- **Resultado Esperado**: O sistema deve redirecionar o usuario para a tela de produtos do sistema
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]


### Caso de Teste: checkout produto
- **Objetivo**:Validar se o usuario consegue finalizar a compra de um ou mais produto na loja.
- **Pré-condição**: Ter adicionar um ou mais produtos no carrinho de compras, ter preenchido corretamente o formulario de checkout.
- **Passos**:
  1. Acessar o sistema.
  2. Clicar no botao Add to cart do produto desejado
  3. Clicar no icone de carrinho no canto superior direito
  4. Clicar no botão Checkout
  5. Preencher os dados do formulario de checkout
  6. Clicar no botão Finish 
- **Resultado Esperado**: O sistema deve exibir na tela a mensagem de confirmação de compra
- **Resultado Obtido**: [A ser preenchido após execução]
- **Status**: [Passou/Falhou]



## Resultados dos Testes Executados

| Caso de Teste               | Resultado Esperado         | Resultado Obtido          | Status     |
|-----------------------------|----------------------------|---------------------------|------------|
| Login de Usuário - usuario não cadastrado | O sistema deve exibir na tela uma mensagem informando que o usuario fornecido não esta cadastrado.| Mensagem de usuario não cadastrado exibida na tela | [Passou] |
| Login de Usuário - senha inválida| O sistema deve exibir na tela uma mensagem informando que a senha inserida no campo Password é uma senha inválida. | Mensagem de senha inválida exibida da tela | [Passou] |
| Login de Usuário |  O sistema deve redirecionar o usuário para a página inicial. | Tela inicial do sistema aprensentada ao usuario | [Passou] |
| Logout do sistema | O sistema deve redirecionar o usuario para a pagina de login do sistema | O usuario é redirecionado para a tela de login do sistema | [Passou] |
| Visualizar detalhes do produto | O sistema deve exibir na tela as informações de cadastro do produto selecionado | O sistema exibe os detalhes do produto selecionado na tela | [Passou] |
| Ordenar produtos por nome | O sistema deve exibir os produtos no grid em ordem alfabatica descrescente e crescente | O sistema esta realizando o ordenamento dos produtos| [Passou] |
| Ordenar produtos por preco | O sistema deve exibir os produtos no grid em ordenando do maior valor para o menor e menor valor pelo maior valor | O sistema esta ordenando os produtos de maior para o menor preco | [Passou] |
| Adicionar produto ao carrinho pelo card | O produto é adicionado no carrinho de compras na loja e o botão remove é exibido no lugar do botão Add to cart | O produto foi adicionado ao carrinho de compras e o botão remove foi adicionado | [Passou] |
| Adicionar produto ao carrinho pela pagina de detalhes do produto | O produto é adicionado no carrinho de compras na loja e o botão remove é exibido no lugar do botão Add to cart  | O produto foi adicionado ao carrinho de compras e o botão remove foi adicionado | [Passou] |
|  remover produto do carrinho pelo card | O produto é removido do carrinho de compras da loja e o botão remove é substituido pelo botão Add to cart | O produto foi removido com carrinho de compras do sistema e o botão remove foi subtituido pelo botão Add to cart| [Passou] |
| remover produto do carrinho pela pagina de detalhes do produto | O produto é removido do carrinho de compras da loja e o botão remove é substituido pelo botão Add to cart | O produto foi removido do carrinho de compras do sistema e o botão remove foi substituido pelo botão Add to cart | [Passou] |
| remover produto pelo carrinho de compras | O produto é removido do carrinho de compras do sistema | O produto foi removido do carrinho do compra do sistema | [Passou] |
| checkout -first name obrigatorio | O sistema deve exibir na tela a mensagem de campo obrigatorio  | A mensagem de campo obrigatorio foi exibida na tela | [Passou] |
| checkout -last name obrigatorio | O sistema deve exibir na tela a mensagem de campo obrigatorio  | A mensagem de campo obrigatorio foi exibida na tela | [Passou] | 
| Zip/postal code obrigatorio | O sistema deve exibir na tela a mensagem de campo obrigatorio  | A mensagem de campo obrigatorio foi exibida na tela | [Passou] |
| checkout produto -cancelar | O sistema deve redirecionar o usuario para a tela de produtos do sistema | O usuario é redirecionado para a tela de produtos do sistema | [Passou] |
| checkout produto | O sistema deve exibir na tela a mensagem de confirmação de compra | Mensagem de comfirmação de compra exibida na tela | [Passou] |



## Lista de Bugs Encontrados

| ID do Bug | Descrição do Bug | Gravidade  | Status   | Data de Descoberta | Responsável   |
|-----------|------------------|------------|----------|---------------------|---------------|
| BUG-01  | No primeiro card do grid de produtos de todos os usuarios a chamada de uma função javascript esta sendo exibida na descrição do produto  | Média  | Aberto | 24/11/2024  | Kleverton Gameleira  |
| BUG-02  | No ultimo card do grid de produtos de todos os usuarios a chamada de uma função javascript esta sendo exibida no titulo do produto | Alta | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-03   | Ao logar na loja com o usuario problem_user as fotos exibidas no grid de produtos da loja estao erradas, estão sendo exibidas fotos de um cachorro invez da foto do produto | Alta      | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-04   | Ao logar na loja com os usuarios problem_user e error_user quando um produto é adicionado ao carrinho o botão de remove do card do produto não esta funcionando | Alta | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-05   | Ao logar no sistema com o usuario performance_glitch_user o sistema apresenta perda de performance com travamentos e lentidao em açõs com retorno do carrinho de compras | Alta | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-06   | Ao logar no sistema com o usuario de visual_user o icone de carrinho de compras esta posicionado errado | Média | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-07   | Ao logar no sistema com o usuario de visual_user o menu hanburguer esta desalinhado | Baixa | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-08   | Ao logar no sistema com o usuario error_user a funcionalidade de ordenamento não esta funcionando, quando acionada dispara um popup informando que o erro ja foi informando | Alta | Aberto  | 24/11/2024  | Kleverton Gameleira  |
| BUG-09   | o logar no sistema com o usuario problem_user a funcionalidade de ordenamento não esta funcionando e não dispara nenhuma mensagem de feedback ao usuario | Alta | Aberto  | 24/11/2024  | Kleverton Gameleira  |



## Sugestões de Melhorias de UX/UI

1. **Adicionar um botão para seleção de quantidade de itens**:
   - Esta faltando adicionar um botão para a seleção de quantidade de itens a serem comprando.


## Análise de Riscos da Aplicação

1. **Risco 1: **  
   - **Probabilidade**: Alta  
   - **Impacto**: Alto  
   - **Mitigação**: 


---

Este plano de testes oferece uma visão geral da execução de testes em uma aplicação, com resultados, sugestões de melhorias de UX/UI, identificação de bugs encontrados e análise de riscos. Certifique-se de ajustar as informações conforme o contexto do seu projeto.
