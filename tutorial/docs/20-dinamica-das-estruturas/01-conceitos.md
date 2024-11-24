# Conceitos

## Autovalores e Autovetores na Engenharia Civil
- Conceitos Iniciais
- Notações
    - $ \R $ -> Conjunto dos números reais
    - $ \Complex $ -> Conjunto dos números complexos
    - $ \R^n $ -> Espaço de todos os vetores coluna, onde cada vetor possui apenas elementos reais.
    - $ \Complex^n $ -> Espaço de todos os vetores coluna, onde cada vetor possui apenas elementos complexos.
    - $ \R^{mxn} $ -> Conjunto de todas as matrizes mxn, onde cada componente $ a_{ij} $ é real.
    - $ \Complex^{mxn} $ -> Conjunto de todas as matrizes onde cada componente $ a_{ij} $ é complexo.
    - Identificador de **vetores**: letra minúscula do alfabeto romano.
    - Identificador de **matrizes**: letra maiúscula do alfabeto romano.
    - **$ a_{ij} $** componente de uma matriz que se localiza **na linha i e na coluna j**.
    - **Matriz nula, vetor nulo ou escalar zero**, todos representados por **$0$**.
    - **Matriz Identidade representado por $ I $ ou $ I_n $, sendo n a ordem da matriz identidade.**
    - **$ A^T $ Matriz transposta de A.** 
    - **$ \bar{A} $ Matriz Conjugada de A.**
    - **$ A^T $ Matriz transposta de A.**
    - **$ A^H $ Matriz Conjugada transposta de A. $ A^H = \bar{A}^T$**  
    - **$ A^{-1} $ Matriz inversa de A.**
    - **$ A^{-T} $ Matriz inversa da Transposta de A.**
    - **$ A^{-H} $ Matriz inversa da Conjugada Transposta de A.** 
    - **$ detA $ Determinante da Matriz A.**
    - **$ tr $ Traço da Matriz A.**
    - **Seja $ { x_1, x_2, ... , x_n } $ m conjunto de vetores, o espaço gerado por estes vetores é denotado por $ span{ x_1, x_2, ... , x_n } $**

## Definição informal de autovetor
- Dado uma matriz quadrada $A_2$,
- Uma autovetor de A, denominado como V, é um vetor que não muda sua direção, quando multiplicado pela Matriz A.
- Também denominado como:
    - **Vetor próprio da matriz A**
    - **Vetor característico da matriz A**

## Definição Informal de autovalor
- Dado uma matriz quadrada $A_2$,
- Sendo um autovetor de A, denominado como V, que é um vetor que não muda sua direção, quando multiplicado pela Matriz A.
- O autovalor da matriz A, denominado pela letra grega minúscula "lambda", é o tamanho da expansão ou da contração que sobre a matriz.
- Também denominado como:
    - **Valor próprio da matriz A**
    - **Valor característico da matriz A**

## Sobre múltiplos do autovetor
- Verifica-se para todo vetor w
    - $ A w = A (\alpha v) = \alpha A (v) = \alpha (\lambda v) = \lambda (\alpha v) = \lambda w $
    - Isto é, qualquer múltiplo escalar não nulo de v também é um autovetor de A associdos com $\lambda$  
    

## Etapas de Resolução dos problemas de autovalores e autovetores
1. Identificação da Matriz
2. Identificação da Equação Característica da Matriz
3. Resolução da Equação Característica para encontrar os autovalores da matriz.
4. Identificação e resolução de sistema de equações homogêneas para cada autovalor, para encontrar o autovetor associado ao autovalor considerado.

- Aplicação destas resoluções nos problemas voltados à engenharia civil

## Teorema 1
Os autovalores de uma matriz triangular (superior ou inferior) são os elementos de sua diagonal principal.

## Teorema 2
Uma matriz A de ordem n tem autovalor igual a zero se e somente se A é uma matriz não-inversível.

## Teorema 3
Se lambda é um autovalor de uma matriz A, então lambada^k é autovalor da matriz A^k para todo K e N^*.

## Teorema 4
Se v1, v2, ..., vk autovetores de uma matriz A, associados ao autovalores distintos l1, l2, ..., lk, respectivamente. Então, o conjunto ${ v1, v2, ..., vk}$ é linearmente independente. 

## Sistemas com um grau de liberdade

## Sistemas com 2 graus de liberdade
- Usa o conceito de autovalores e autovetores no cálculo da ortogonalidade.

## Equação do Movimento e a solução da equação do movimento para S1GL e S2GL.

## Análise dinâmica de sistemas contínuos

## Movimento, vigas, placas e cascas.
- O conceito de movimento, com 2 ou mais graus de liberdade, relaciona-se com os conceitos de Autovar e Autovetor.

## Análise dinâmica de vigas e pórticos.

## Sistemas com vários graus de liberdade: elementos finitos.


