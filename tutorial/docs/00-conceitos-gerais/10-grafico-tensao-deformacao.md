# Gráfico de Tensão - Deformação

- Um elemento estrutural, sendo tracionado, pode ter seu comportamento de deformação descrito no gráfico Tensão vs Deformação.  

## Elementos do Gráfico
- **Eixo Y da Tensão**
    - **Tensão** que age sobre o elemento analisado.
- **Eixo X da Deformação**
    - **Deformação** sofrida pelo elemento analisado.
- **Tangente** do Ângulo da Curva do Gráfico (**Módulo de Elasticidade** ou **Módulo de Young**)
    - É a **tangente do ângulo da curva de Tensão-Deformação** sobre o Eixo X da deformação.
    - Quanto mais se aumenta a deformação, para um mesmo intervalo de aumento da tensão, tem-se um menor ângulo no gráfico. Ou seja, tem-se "Menor Módulo de Elasticidade", ou seja "Menor Módulo de Young".
    - **Menor Módulo de Elasticidade (Módulo de Young)**
        - **Ángulos menores** na curva tensão-deformacão indicam que o elemento é **menos rígido** e que sofre **muita deformação**, para certo intervalo de crescimento de tensão. 
    - **Maior Módulo de Elasticidade (Módulo de Young)**
        - **Ângulos maiores** na curva de tensão-deformação indicam que o elemento é **mais rígido** e que sofre **menos deformação** diante do mesmo intervalo de crescimento de tensão. 

## Regime Elástico da Deformação
- A primeira fase do gráfico que caracteriza o comportamento elástico da deformação.
- No **Regime Elástico da Deformação**, se ocorrer a diminuição da tensão de tração, o corpo ainda volta para o estado inicial de deformação, sem resquício da deformação anterior.
- No Estudo das Deformações de Estuturas Metálicas, o **alongamento unitário** de uma barra metálica, também chamado de **deformação específica de uma barra metálica**, é definido como:
    - $ \epsilon \, (específica) = \frac{\Delta \, l}{l_0}$
- Comportamento elástico conforme gráfico do primeiro grau:
    - $ y = a \, x + b $ 
    - $ \sigma = a \, x + b $
    - $ \sigma = E \, \epsilon + 0 $
    - $ \sigma = E \, \epsilon $
        - Sendo: 
            - $ \sigma $ := a tensão
            - $ E $ := o módulo de elasticidade
            - $ \epsilon $ : a deformação
- Ponto crítico de final de curva da fase elástica: **O limite de elasticidade**\
    - Também denominado como **Limite de Propocionalidade**.
    - Ponto até o qual a relação entre tensão e deformação é linear e segue a Lei de Hooke. Ou seja, a deformação é diretamente proporcional à tensão aplicada.
    - A fase elástica dura até que se alcance o ponto "**limite de elasticidade**".
    - Logo depois deste ponto, com o aumento da tensão, começa-se a fase plástica da curva do gráfico tensão-deformação.

## Regime Plástico da Deformação
- A segunda fase do gráfico que caracteriza o comportamento plástico da deformação.
- No **Regime Plástico da Deformação**, se ocorrer a diminuição da tensão de tração, o corpo não volta mais para o estado inicial de deformação. Sempre vai haver algum resquício da deformação anterior. O corpo parará de ser alongado e pode voltar um pouco ao estado anterior, **mas não voltará mais para o estado inicial**.
- Ponto crítico de começo de curva da fase plástica: **O limite de escoamento**
    - Ponto a partir do qual a relação entre tensão e deformação não é mais linear e não segue mais a Lei de Hooke.
    - A fase plástica começa no momento em que se alcança o ponto "**limite de escoamento**".
- Há **3 fases no Regime Plástico da Deformação** 
    - **Fase de Escoamento**:
        - Nesta fase, mesmo sem grande aumento de tensão, o corpo se alonga consideravelmente, comportamento denominado como **escoamento**.
        - Deformação plástica sem grande aumento na resistência.
        - A curva pode apresentar um patamar horizontal ou ligeiramente inclinado, indicando que a tensão permanece aproximadamente constante enquanto ocorre a deformação.
    - **Fase de Endurecimento por Deformação (Work Hardening)**
        - O material começa a resistir mais à deformação devido ao endurecimento por deformação.
        - Aumenta-se a resistência contra a deformação, mas o corpo não apresenta ainda encurtamento na sua espessura.
        - A curva sobe mais rapidamente, indicando que a tensão necessária para continuar deformando o material aumenta.
    - **Fase de Encruamento**, 
        - Também chamada de fase de Deformação Instável ou Localizada (Pescoço ou “Necking”)
        - A tensão necessária para aumentar a deformação aumenta ainda mais, e forma-se um encurtamento na espessura do corpo.
        - Depois de certo encruamento (encurtamento na espessura do corpo), inicia-se a **etapa de estrição da fase de encrumamento**. 
            - Nesta última etapa, **de estrição**, o corpo torna-se fino e a tensão necessária para a ruptura torna-se menor do que a tensão anterior à estricção.
            - Na última etapa, **de estrição**, o gráfico muda seu sentido para baixo e dirige-se até o ponto de ruptura.
- **Ponto crítico de Ruptura** no final da fase plástica:
    - A ruptura ocorra no final da fase de encruamento, no final da sua estricção.
    - O material se rompe na região do “pescoço”. 
    - Neste ponto do gráfico, a tensão aplicada não é mais capaz de sustentar o material devido à redução severa da seção transversal e à propagação de trincas internas.
