# Frontend Mentor - Solução do formulário interativo de detalhes do cartão

Esta é a solução para o [desafio do formulário interativo de detalhes do cartão no Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação ao criar projetos realistas.

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias usadas](#tecnologias-usadas)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

**Nota: Apague esta nota e atualize o índice com base nas seções que você manteve.**

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Preencher o formulário e ver os detalhes do cartão atualizados em tempo real
- Receber mensagens de erro quando o formulário for enviado, se:
  - Qualquer campo de entrada estiver vazio
  - Os campos do número do cartão, data de validade ou CVC estiverem no formato errado
- Ver o layout otimizado dependendo do tamanho da tela de seu dispositivo
- Ver os estados de hover, ativo e foco para elementos interativos na página

### Captura de tela

![](./screenshot.jpg)

Adicione uma captura de tela da sua solução. A maneira mais fácil de fazer isso é usar o Firefox para visualizar seu projeto, clicar com o botão direito na página e selecionar "Tirar uma captura de tela". Você pode escolher uma captura de tela de altura total ou uma recortada, dependendo do comprimento da página. Se for muito longa, pode ser melhor recortá-la.

Alternativamente, você pode usar uma ferramenta como o [FireShot](https://getfireshot.com/) para tirar a captura de tela. O FireShot tem uma opção gratuita, então você não precisa comprá-lo.

Em seguida, corte/otimize/edite sua imagem como preferir, adicione-a ao seu projeto e atualize o caminho do arquivo na imagem acima.

**Nota: Apague esta nota e os parágrafos acima quando adicionar sua captura de tela. Se preferir não adicionar uma captura de tela, fique à vontade para excluir toda esta seção.**

### Links

- URL da solução: [Adicione a URL da solução aqui](https://sua-url-da-solucao.com)
- URL do site ao vivo: [Adicione a URL do site ao vivo aqui](https://seu-site-ao-vivo.com)

## Meu processo

### Tecnologias usadas

- Marcação semântica em HTML5
- Propriedades personalizadas do CSS
- Flexbox
- CSS Grid
- Fluxo de trabalho Mobile-first
- [React](https://reactjs.org/) - Biblioteca JS
- [Next.js](https://nextjs.org/) - Framework React
- [Styled Components](https://styled-components.com/) - Para estilos

**Nota: Esses são apenas exemplos. Apague esta nota e substitua a lista acima pelas suas próprias escolhas.**

### O que aprendi

Neste projeto, aprendi a validar um formulário interativo de maneira eficiente, utilizando JavaScript para validar os campos em tempo real, bem como como manipular estados de erro e sucesso. Um dos principais desafios foi fazer com que a visualização do cartão fosse atualizada de acordo com a entrada do usuário.

Aqui está um exemplo de como validei a entrada do número do cartão:

```js
const validateCardNumber = (cardNumber) => {
  const regex = /^[0-9]{16}$/;
  return regex.test(cardNumber);
}
```

Além disso, aprendi a usar a biblioteca Styled Components para manter os estilos organizados e reutilizáveis, o que facilitou a criação de um layout responsivo.

### Desenvolvimento contínuo

Continuarei praticando a validação de formulários em tempo real, além de explorar mais sobre o uso de React e Next.js. Quero melhorar minhas habilidades na criação de interfaces de usuário interativas, especialmente com validação dinâmica e atualizações em tempo real, além de aprender a otimizar ainda mais o desempenho do site.

### Recursos úteis

- [Exemplo de recurso 1](https://www.exemplo.com) - Isso me ajudou a entender como validar os campos de um formulário de maneira eficiente. Adorei esse padrão e pretendo utilizá-lo em meus próximos projetos.
- [Exemplo de recurso 2](https://www.exemplo.com) - Este artigo incrível me ajudou a entender como usar o Flexbox e o Grid no CSS para criar layouts responsivos. Eu recomendaria a qualquer pessoa que ainda esteja aprendendo esses conceitos.

**Nota: Apague esta nota e substitua a lista acima por recursos que o ajudaram durante o desafio. Eles podem ser úteis para quem visualizar sua solução ou para você mesmo quando olhar para este projeto no futuro.**

## Autor

- Website - [Adicione seu nome aqui](https://www.seu-site.com)
- Frontend Mentor - [@seunome](https://www.frontendmentor.io/profile/seunome)
- Twitter - [@seunome](https://www.twitter.com/seunome)

**Nota: Apague esta nota e adicione/remova/edite as linhas acima com base nos links que você gostaria de compartilhar.**

## Agradecimentos

Gostaria de agradecer à comunidade do Frontend Mentor por sempre fornecer feedback útil e motivação. Além disso, agradeço a [nome da pessoa ou recurso] por ajudar a entender [algum conceito ou ferramenta]. Agradeço também ao suporte técnico, que sempre está disponível para tirar dúvidas.

**Nota: Apague esta nota e edite o conteúdo desta seção conforme necessário. Se você concluiu este desafio sozinho, fique à vontade para excluir esta seção completamente.**