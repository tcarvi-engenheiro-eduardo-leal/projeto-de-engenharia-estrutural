# Centro de Massa
- O centro de massa de uma estrutura é o ponto em que o peso do sistema pode ser considerado concentrado, para fins de análise estática e dinâmica.
- No caso de uma distribuição uniforme de massa, o centro de massa coincidirá com o centro geométrico. 
- Quando a distribuição de massa não é uniforme, ele será deslocado em direção às regiões mais pesadas.

## Centro de massa para 2 partículas, no espaço de 3 dimensões:
- Fórmula:
    - $ x_{c \, m} = \frac{x_{massa1} + x_{massa2}}{massa1 + massa2} $
    - $ y_{c \, m} = \frac{y_{massa1} + y_{massa2}}{massa1 + massa2} $ 
    - $ z_{c \, m} = \frac{z_{massa1} + z_{massa2}}{massa1 + massa2} $ 

## Centro de massa para muitas partículas, no espaço de 3 dimensões:
- Fórmula:
    - $ x_{c \, m} = \frac{x_{massa1} + x_{massa2} + x_{massa3} \, ... \, + x_{massaN}}{massa1 + massa2 + massa3 + ... + massaN} $
    - $ y_{c \, m} = \frac{y_{massa1} + y_{massa2} + y_{massa3} \, ... \, + y_{massaN}}{massa1 + massa2 + massa3 + ... + massaN} $
    - $ z_{c \, m} = \frac{z_{massa1} + z_{massa2} + z_{massa3} \, ... \, + z_{massaN}}{massa1 + massa2 + massa3 + ... + massaN} $

## Centro de massa no espaço de 3 dimensões, usando vetores:
- Fórmula:
    - $ \vec{x}_{c \, m} = \frac{\sum_{i=0}^{n}{i \times m_i}}{m_1 + ... + m_N} $
    - $ \vec{y}_{c \, m} = \frac{\sum_{i=0}^{n}{i \times m_i}}{m_1 + ... + m_N} $
    - $ \vec{z}_{c \, m} = \frac{\sum_{i=0}^{n}{i \times m_i}}{m_1 + ... + m_N} $
    - $ \vec{r}_{c \, m} = \vec{x}_{c \, m} + \vec{y}_{c \, m} + \vec{z}_{c \, m} $

## Centro de massa de um corpo considerado como sólido de infinitos pontos
- Em situações reais, as fórmulas anteriores representam apenas aproximações pois normalmente lidamos com sistemas de muitos corpos sólidos diferentes, sem nunca termos a posição exata de cada massa do sistema.
- Logo, acabamos por errar quando multiplicamos a posição e a massa de cada corpo. (usamos medidas equivocadas)
- Apenas se o corpo for simétrico e se nós temos realmente o ponto central da geometria (também igual, neste caso, ao centro de massa), nossos cálculos estariam certos.
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
