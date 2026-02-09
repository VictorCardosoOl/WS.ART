# Documentação: Componente Testimonials (Depoimentos)

**Caminho do Arquivo:** `components/sections/Testimonials.tsx`

## 1. Visão Geral

A seção `Testimonials` é um componente de **tela cheia (100vh)** projetado para criar uma experiência de leitura imersiva. Diferente de carrosséis tradicionais que exigem cliques, este componente utiliza o próprio movimento de rolagem (scroll) do usuário para navegar entre os depoimentos.

Visualmente, a seção adota uma estética "Dark/Noir" (`bg-[#1c1917]`), contrastando com o restante do site que é predominantemente claro, sinalizando uma mudança de atmosfera para um momento de reflexão e prova social.

## 2. Comportamento e UX

### Mobile (Telas < 768px)
*   **Layout:** As colunas são empilhadas (Stacked).
*   **Comportamento:** O texto aparece primeiro, seguido pela imagem correspondente. A rolagem é natural e padrão do navegador.
*   **Decoração:** Elementos complexos (círculos centrais, animação de pin) são desativados para garantir performance e legibilidade.

### Desktop (Telas >= 768px)
*   **Layout:** Dividido em duas colunas de 50% de largura cada.
    *   **Esquerda:** Textos dos depoimentos.
    *   **Direita:** Imagens dos projetos/clientes.
*   **Scroll Jacking (Pinning):** Ao atingir o topo da seção, a tela "trava" (`pin: true`), e o scroll do usuário passa a controlar a animação interna das colunas, em vez de mover a página para baixo.
*   **Animação Sincronizada (Split Scroll):**
    *   A **Coluna da Direita (Imagens)** move-se para **CIMA**.
    *   A **Coluna da Esquerda (Textos)** move-se para **BAIXO**.
    *   Isso cria um efeito de "elevador" onde o texto e a imagem correspondentes se encontram perfeitamente no centro da tela durante a rolagem.

## 3. Implementação Técnica (GSAP)

O componente utiliza intensamente a biblioteca **GSAP (GreenSock)** e o plugin **ScrollTrigger**.

### Lógica de Animação

```typescript
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,     // Fixa a seção na viewport
        start: "top top", // Começa quando o topo da seção toca o topo da tela
        end: "+=" + (itemsCount * 100) + "%", // A duração é baseada na altura * número de itens
        scrub: 1,      // Suaviza a animação (inércia)
    }
});
```

### O Truque das Colunas Invertidas

Para que o efeito visual funcione (Texto descendo e Imagem subindo), a lógica de renderização e animação precisa ser espelhada:

1.  **Imagens (Direita):** Renderizadas na ordem normal `[1, 2, 3, 4]`.
    *   Animação: `y` vai de `0` para `-300vh`. (Sobe, revelando 2, 3, 4).
2.  **Textos (Esquerda):** Renderizados na ordem **invertida** `[4, 3, 2, 1]` via variável `reversedTextItems`.
    *   Animação: `y` começa em `-300vh` (escondido lá em cima) e vai para `0`.
    *   **Por que inverter?** Como a coluna da esquerda "desce", o item que está visualmente "em baixo" no container é o primeiro a entrar em cena. Invertendo o array, garantimos que o Texto #1 esteja na base do container para aparecer junto com a Imagem #1.

## 4. Estrutura de Dados

Os dados são estáticos dentro do componente (array `testimonials`), contendo:
*   `id`: Identificador único.
*   `client`: Nome do cliente.
*   `role`: Profissão (adiciona credibilidade).
*   `text`: O depoimento em si.
*   `image`: URL da foto do resultado.
*   `project`: Tipo do serviço realizado (ex: "Cobertura Floral").

## 5. Elementos Visuais Chave

*   **Filtros de Imagem:** As imagens possuem `grayscale` e `contrast` aumentados por padrão, ganhando cores apenas no `:hover` (efeito sutil de foco).
*   **Decoração Geométrica:** Círculos centrais com bordas finas e tracejadas giram lentamente (`animate-[spin_60s_linear_infinite]`) para adicionar dinamismo sem distrair a leitura.
*   **Indicador de Scroll:** Um pequeno guia visual na parte inferior instrui o usuário a continuar rolando para ver mais conteúdo.

## 6. Como Manter/Editar

1.  **Adicionar Depoimentos:** Basta adicionar um novo objeto ao array `testimonials`. A lógica do GSAP calcula automaticamente a nova altura necessária baseada no `.length` do array.
2.  **Alterar Cores:** O componente usa classes Tailwind hardcoded (`bg-[#1c1917]`, `text-white`). Para mudar o tema, altere as classes no elemento pai `<section>` e nas divs internas.
3.  **Ajustar Velocidade:** Altere a propriedade `end` no `ScrollTrigger`. Valores maiores (ex: `itemsCount * 150`) farão a rolagem parecer mais lenta/longa.
