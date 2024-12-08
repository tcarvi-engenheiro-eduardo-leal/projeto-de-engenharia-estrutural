# Gráfico de Tensão - Deformação

- Um elemento estrutural, sendo tracionado, pode ter seu comportamento de deformação descrito no gráfico Tensão vs Deformação.  

## Elementos do Gráfico
- **Eixo Y da Tensão**
    - **Tensão de Tração** que age sobre o elemento analisado.
- **Eixo X da Deformação**
    - **Deformação** sofrida pelo elemento analisado.
    - Não tem unidade de medida dimensional pois representa **divisão** do **intervalo de alongamento** pela **posição inicial**.
    - Conceituação da Deformação ($\epsilon$)
        - $\epsilon = \frac{\Delta \, l}{l_0}$
            - Sendo: 
                - $ \epsilon $ := deformação, considerada aqui como adimensional
                - $ \Delta $ := $l - l_0$
                - $ l_0 $ : a posição inicial da deformação
- **Tangente** do Ângulo da Curva do Gráfico (**Módulo de Elasticidade** ou **Módulo de Young**)
    - É a **tangente** do **ângulo** da **curva de Tensão-Deformação** sobre o Eixo X da deformação.
    - **Interpretação**:
        - Quanto mais se aumenta a deformação, para um mesmo intervalo de aumento de tensão, tem-se um menor ângulo no gráfico e também se tem menor tangente do ângulo. Ou seja, tem-se "Menor Módulo de Elasticidade (Módulo de Young)".
        - **Menor Módulo de Elasticidade (Módulo de Young)**
            - **Ángulos menores** na curva tensão-deformacão indicam que o elemento é **menos rígido** e que sofre **muita deformação**, para certo intervalo de crescimento de tensão. 
        - **Maior Módulo de Elasticidade (Módulo de Young)**
            - **Ângulos maiores** na curva de tensão-deformação indicam que o elemento é **mais rígido** e que sofre **menos deformação** diante do mesmo intervalo de crescimento de tensão. 

## Regime Elástico da Deformação
- Primeira fase do gráfico da **curva Tensão-Deformação**:
    - Fase que caracteriza o comportamento elástico da deformação.
- No **Regime Elástico da Deformação**, se ocorrer a diminuição da tensão de tração, o corpo ainda volta para o estado inicial de deformação, sem assimilar resquícios da deformação anterior.
- No Estudo das Deformações de Estuturas Metálicas, a deformação ($ \epsilon $) é denominada como:
    - **alongamento unitário** de uma barra metálica, ou como
    - **deformação específica de uma barra metálica**
- Comportamento elástico conforme gráfico do primeiro grau:
    - $ y = a \, x + b $ 
    - $ \sigma = a \, x + b $
    - $ \sigma = E \, x + 0 $
    - $ \sigma = E \, \epsilon $
        - Sendo: 
            - $ \sigma $ := a tensão
            - $ E $ := o módulo de elasticidade (Módulo de Young)
            - $ \epsilon $ := a deformação
- **Ponto crítico no final da fase elástica do gráfico**: 
    - Ponto denominado como **Limite de Elasticidade**.
    - Ponto também denominado como **Limite de Propocionalidade**.
    - Ponto até o qual a relação entre tensão e deformação é linear e segue a Lei de Hooke. Ou seja, a deformação é diretamente proporcional à tensão aplicada.
    - A fase elástica dura até que se alcance o ponto "**Limite de Elasticidade**".
    - Logo depois deste ponto, com o aumento da tensão, começa-se a fase plástica da curva do gráfico tensão-deformação.

## Regime Plástico da Deformação
- A segunda e última fase do gráfico tensão-deformação.
- Caracteriza o comportamento plástico da deformação.
- No **Regime Plástico da Deformação**, se ocorrer a diminuição da tensão de tração, o corpo não volta mais para o estado inicial de deformação, sem ter sido gerado algum resquício da deformação anterior. 
    - O corpo parará de ser alongado e pode voltar um pouco ao estado anterior, **mas não voltará mais para o estado inicial**.
- **Ponto crítico do começo da fase plástica do gráfico**:
    - Ponto denominado como **Limite de Escoamento**
    - Ponto a partir do qual a relação entre tensão e deformação não é mais linear e não segue mais a Lei de Hooke.
    - A fase plástica começa no momento em que se alcança o ponto "**Limite de Escoamento**".
- Há **3 fases internas à fase mais geral do Regime Plástico da Deformação**:
    - **Fase de Escoamento**
        - Nesta fase, mesmo sem grande aumento de tensão, o corpo se alonga consideravelmente: comportamento denominado como **escoamento**.
        - Deformação plástica sem grande aumento na resistência.
        - O início da parte desta curva pode apresentar um patamar horizontal ou ligeiramente inclinado.
            - A tensão permanece aproximadamente constante enquanto ocorre a deformação.
    - **Fase de Endurecimento por Deformação** ***(Work Hardening)***
        - O material começa a resistir mais à deformação devido ao endurecimento por deformação.
        - Aumenta-se a resistência contra a deformação, mas o corpo não apresenta ainda encurtamento na sua espessura.
        - A curva sobe mais rapidamente, indicando que a tensão necessária para continuar deformando o material aumenta.
             A curva agora apresenta a forma da parte ascendente de uma parábola de concavidade voltada para baixo.
    - **Fase de Encruamento** ***(Pescoço ou “Necking”)***
        - Também chamada de **fase de Deformação Instável ou Localizada**.
        - A tensão necessária para aumentar a deformação aumenta ainda mais, e forma-se um encurtamento na espessura do corpo.
        - Depois de certo encruamento (encurtamento na espessura do corpo), inicia-se a **etapa de estricção da fase de encrumamento**. 
            - Nesta última etapa, **de estrição**, o corpo torna-se fino e a tensão necessária para a ruptura torna-se menor do que a tensão anterior à estricção.
            - Na última etapa, **de estrição**, o gráfico muda seu sentido para baixo e dirige-se até o ponto de ruptura.
- **Ponto crítico de Ruptura** no final da fase plástica:
    - A ruptura ocorra no final da fase de encruamento, no final da sua estricção.
    - O material se rompe na região do “pescoço”. 
    - Neste ponto do gráfico, a tensão aplicada não é mais capaz de sustentar o material devido à redução severa da seção transversal e à propagação de trincas internas.
