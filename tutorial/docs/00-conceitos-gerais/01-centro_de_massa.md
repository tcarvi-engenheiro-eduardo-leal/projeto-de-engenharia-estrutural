# Centro de Massa
- O centro de massa de uma estrutura é o ponto em que o peso do sistema pode ser considerado concentrado, para fins de análise estática e dinâmica.
- No caso de uma distribuição uniforme de massa, o centro de massa coincidirá com o centro geométrico. 
- Quando a distribuição de massa não é uniforme, o centro de massa tende a se localizar próximo às regiões mais pesadas.

## Centro de massa para 2 partículas, no espaço de 3 dimensões:
- Fórmula:
    - $ x_{c \, m} = \frac{x_{1} \, massa_{1} + x_{2} \, massa_{2}}{massa_{1} + massa_{2} } $
    - $ y_{c \, m} = \frac{y_{1} \, massa_{1} + y_{2} \, massa_{2}}{massa_{1} + massa_{2} } $ 
    - $ z_{c \, m} = \frac{z_{1} \, massa_{1} + z_{2} \, massa_{2}}{massa_{1} + massa_{2} } $ 
    - $ CM = ( x_{c \, m}, y_{c \, m}, z_{c \, m} ) $
    
## Centro de massa para muitas partículas, no espaço de 3 dimensões:
- Fórmula:
    - $ x_{c \, m} = \frac{x_{1} \, massa_{1} + x_{2} \, massa_{2} + x_{3} \, massa_{3} \, ... \, + x_{n} \, massa_{n}}{massa_{1} + massa_{2} + massa_{3} + ... + massa_{n}} $
    - $ y_{c \, m} = \frac{y_{1} \, massa_{1} + y_{2} \, massa_{2} + y_{3} \, massa_{3} \, ... \, + y_{n} \, massa_{n}}{massa_{1} + massa_{2} + massa_{3} + ... + massa_{n}} $
    - $ z_{c \, m} = \frac{z_{1} \, massa_{1} + z_{2} \, massa_{2} + z_{3} \, massa_{3} \, ... \, + z_{n} \, massa_{n}}{massa_{1} + massa_{2} + massa_{3} + ... + massa_{n}} $
    - $ CM = ( x_{c \, m}, y_{c \, m}, z_{c \, m} ) $

## Centro de massa no espaço de 3 dimensões, usando vetores:
- Fórmula:
    - $ \vec{x}_{c \, m} = \frac{\sum_{i=0}^{n}{x_i \times m_i}}{m_1 + ... + m_n} $
    - $ \vec{y}_{c \, m} = \frac{\sum_{i=0}^{n}{y_i \times m_i}}{m_1 + ... + m_n} $
    - $ \vec{z}_{c \, m} = \frac{\sum_{i=0}^{n}{z_i \times m_i}}{m_1 + ... + m_n} $
    - $ \vec{r}_{c \, m} = \vec{x}_{c \, m} + \vec{y}_{c \, m} + \vec{z}_{c \, m} $

## Dificuldades para a precisão do cálculo do Centro de Massa
- Em situações reais, as fórmulas anteriores representam apenas aproximações pois normalmente:
    - Lidamos com sistemas de muitos corpos sólidos diferentes,
    - Cada um destes corpos diferentes possuem densidade diferentes, inclusive entre suas partes internas,
    - Não temos a posição exata dos Centro de Massa destes diferentes corpos.
- Logo, acabamos por errar quando multiplicamos a posição e a massa de cada corpo. (usamos medidas equivocadas)
- Apenas se o corpo for simétrico, se a densidade é sempre a mesma e se nós temos realmente o ponto central da geometria (também igual, neste caso, ao centro de massa), nossos cálculos estariam certos.
- Para contornar estas dificuldades de cálculo, devemos tentar usar figuras geométricas simples para as quais podemos calcular o centro geométrico. E devemos usar materiais que náo apresentam considerável diferença de densidade, entre suas partes. Náo devemos utilizar estruturas muitos complexas, pois os cálculos se tornarão muito imprecisos.

## Centro de massa de um corpo considerado como sólido de infinitos pontos
- Para encontrar o centro de massa $ x_{cm} $ de um corpo unidimensional ao longo de uma linha ou eixo, consideramos que o corpo é dividido em pequenos segmentos infinitesimais, cada um com massa  $ \Delta m $ localizada em uma posição x . 
- Matematicamente, temos:
    - $ x_{c \, m} = \frac{\int x \, dm}{\int dm} $ 
    - Pensamos da seguinte forma:
        - Podemos pegar todas as possibilidade de valores de massa e multiplicá-los pela massa de sua posição. Teremos assim, a somatória de massas, mas considerando a ponderação da posição de cada massa, para o resultado final.
            - O valor da massa serve como ponderação para o valor de x. 
            - Valor que desejamos medir é x, mas um X ponderado pelas massas.
            - Eu não posso reduzir o valor de x para um infinitesimal, pois eu desejo idenficar um X ponderado.
            - $ somatória = \frac{x \, dm}{M} $
            - $ somatória =  \frac{1}{M} \, \int x \, dm $
            - Depois de somar todas as massas, nossa fórmula de Centro de Massa exige que dividamos a resposta pela massa total.
            - Temos assim a somatória;
                - $  x_{c \, m} = \frac{1}{M} \, \int x \, dm $
                - $  y_{c \, m} = \frac{1}{M} \, \int y \, dm $
                - $  z_{c \, m} = \frac{1}{M} \, \int z \, dm $
            - Considerando o vetor no espaco de 3 dimensões:
                - $ \vec{r}_{c \, m} = \vec{x}_{c \, m} + \vec{y}_{c \, m} + \vec{z}_{c \, m} $

    - Esta é a única fórmula correta para encontrarmos, com bom nível de precisão, o Centro de Massa de elementos irregulares.

## Centro de massa de um corpo pelo volume do corpo, considerado sua densidade como uniforme
- Consideramos apenas corpos uniformes que possuem densidade uniforme. 
- A densidade se mantem por todo o corpo.
- Cada parte do corpo tem uma massa (dm) e também um volume (dV).
- Como consideramos que o corpo é uniforme no que se considera a sua densidade, podemos afirmar que, assim como a massa pode ser considerada como uma distribuição contímnua de pequenas unidades de massa, também podemos dizer que o volume total se apresenta como uma distribuição contínua de volume.
- Da mesma forma que fizemos para a característica massa, também podemos fazer para a característica volume:
    - $  x_{c \, v} = \frac{1}{V} \, \int x \, dv $
    - $  y_{c \, v} = \frac{1}{V} \, \int y \, dv $
    - $  z_{c \, v} = \frac{1}{V} \, \int z \, dv $
