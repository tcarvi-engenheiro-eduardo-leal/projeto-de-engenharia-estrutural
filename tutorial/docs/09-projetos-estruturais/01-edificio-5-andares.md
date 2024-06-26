# Projeto de Edificação de 2 andares

### Memorial de Cálculo para Projeto Estrutural com Parâmetro
- Este memorial de cálculo descreve o processo de análise e dimensionamento de uma estrutura de concreto armado.

### Resultados
- parâmetro alfa = 
- parâmetro gamma_z = 1,2 
    - o que indica a necessidade de se considerar os efeitos de segunda ordem devido à amplificação de esforços causada pela deformação sob cargas.
- Parâmetro P Delta

#### Sobre o projeto
- O projeto refere-se à análise estrutural de um edifício de dois andares em concreto armado.
- O objetivo é determinar os esforços internos nas colunas e vigas, considerando a amplificação de momentos fletores e deslocamentos laterais devido aos efeitos de segunda ordem.

#### 1 Configuração Inicial dos Aplicativos de Cálculo
- ** Configuração Projeto SAP2000**:
    - Detalhamento SAP2000:
        - Menu: New Model:
            - Default Units: KN, m, C 
            - Default Materials: Europe
            - Blanck Project

#### 2 Detalhamento dos Materiais
- **2. Material Concreto**:
    - Detalhamento SAP2000:
        - Menu: Define - Materials - Add New Material
        - Add Material Property: 
            - Region: User,
            - Material Type: Concrete
        - Material Property Data:
            - Name: Concrete 20MPa
            - Weight and Mass:
                - Weight per unit volume: 25
            - Isotropic Property Data
                - Modulus Of Elasticity, E = 20.000MPa  = 20.000.000  (na unidade escolhida KPa)
                - Poisson, U: 0,2 (padrão)
                - Coefficiente of Thermal Expansion, A: 9,.... (padrão)
                - Shear Modulus, G: 8333333 (Padrão)
            - Other Properties for Concrete Material:
                - Specified Concrete Compressive Strength, fc = 20mpa = 20000 (na unidade KPa)
                - Expected Concrete Compressive Strength = 20mpa = 20000 (na unidade KPa)

#### 3 Detalhamento Inicial dos elementos estruturais
- **Dimensões Viga 20 x 40 cm**:
    - Detalhamento SAP2000:
        - Menu: Define - Section Properties - Frame Properties
        - Add new Property:
            - Frame Section Property Type: Concrete
            - Concrete Section: Rectangular
        - Rectangular Section:
            - Section Name: Viga 20 x 40 cm
            - Depth: 0,4
            - Width: 0,2
            - Material: Concreto 20MPa
        - Frame Property/Stiffness Modification Factors:
            - Use de dois parâmetros para indicar 40% de fissuração das vigas:
                - Moment of Inertia about 2 axis: 0,4
                - Moment of Inertia about 3 axis: 0,4

- **Dimensões Viga 20 x 50 cm**:
    - Detalhamento SAP2000:
        - Menu: Define - Section Properties - Frame Properties
        - Add new Property:
            - Frame Section Property Type: Concrete
            - Concrete Section: Rectangular
        - Rectangular Section:
            - Section Name: Viga 20 x 50 cm
            - Depth: 0,5
            - Width: 0,2
            - Material: Concreto 20MPa
        - Frame Property/Stiffness Modification Factors:
            - Use de dois parâmetros para indicar 80% de fissuração das vigas:
                - Moment of Inertia about 2 axis: 0,8
                - Moment of Inertia about 3 axis: 0,8

- **Dimensões Pilar 20 x 40 cm**:
    - Detalhamento SAP2000:
        - Menu: Define - Section Properties - Frame Properties
        - Add new Property:
            - Frame Section Property Type: Concrete
            - Concrete Section: Rectangular
        - Rectangular Section:
            - Section Name: Pilar 20 x 40 cm
            - Depth: 0,4
            - Width: 0,2
            - Material: Concreto 20MPa
        - Frame Property/Stiffness Modification Factors:
            - Use de dois parâmetros para indicar 40% de fissuração dos Pilares:
                - Moment of Inertia about 2 axis: 0,4
                - Moment of Inertia about 3 axis: 0,4

- **Inclusão dos Elementos Estruturais no Modelo 3D**:
    - Detalhamento SAP2000:
        - Menu: Edit - Add to Model from Template - 3D Frames
        - 3D Frames
            - Open Frame Building Dimensions:
                - Number of stories (andares) = 5
                - Number of Bays, X: (vãos em X): 3
                - Number of Bays, Y: vãos em Y: 1
                - Story Height: (Altura do pé direito de 1 andar): 3
                - Bay Width, X: (comprimento de cada vão em X): 6
                - Bay Width, Y: (comprimento de cada vão em Y): 4
            - Beams (Elemento estrutural viga):  Viga 20 x 40 cm
            - Columns (Elemento estrutural Pilar): Pilar 20 x 40 cm
    - Apenas 1 tipo de viga foi indicada. A Ajustar, se necessário...
    - Definir Tipo de Joint com fundaçåõ:
        - Selecionar todos os 8 nós de ligação com fundação
            - Menu Assign - Assign Joint - Restraints
            - Selecionar Engaste que trava todas as opcões
      
#### 4 Detalhamento inicial das Cargas
- **4. Cargas**:
    - Detalhamento SAP2000:
        - Menu: Define - Load Pattterns
    - Define Load Patterns:
        - Carga 1:
            - Load Pattern Name: Vento Lateral
            - Type: Live
            - Self Witght Multiplier: 0
        - Carga 2:
            - Load Pattern Name: Vento Frontal
            - Type: Live
            - Self Witght Multiplier: 0
        - Carga 3:
            - Load Pattern Name: Carga Vertical
            - Type: Live
            - Self Witght Multiplier: 0         
        - DEAD: Peso proprio 
            - Load Pattern Name: DEAD
            - Type: DEAD
            - Self Witght Multiplier: 1

#### Ajuste no Padrão Internacional das Cargas:
    - Detalhamento SAP2000:
        - Menu: Design -> Concrete Frame Design > View/Revise Preferences
            - Design Code: Eurocode 2-2004
            - GammaC (concrete): 1,4  para ser igual à norma brasileira

#### Aplicar carregamento de Vento Lateral
 - Detalhamento SAP2000:
        - Selecionar nós da força -> Assign -> Joint Loads (cargas) -> Forces
- Carregamento Andar 1 - Lateral:
        - Selecionar nós da força -> 
            - Load Pattern - Vento Lateral
            - Force Global X: 1,3
            - Options: Replace
            - Apply
- Carregamento Andar 2 - Lateral:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global X: 1,6
            - Options: Replace
            - Apply
- Carregamento Andar 3 - Lateral:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global X: 1,8
            - Options: Replace
            - Apply
- Carregamento Andar 4 - Lateral:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global X: 2,0
            - Options: Replace
            - Apply
- Carregamento Andar 5 - Lateral:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global X: 1,1
            - Options: Replace
            - Apply

#### Aplicar carregamento de Vento Frontal
 - Detalhamento SAP2000:
        - Selecionar nós da força -> Assign -> Joint Loads (cargas) -> Forces
- Carregamento Andar 1 - Frontal:
        - Selecionar nós da força -> 
            - Load Pattern - Vento Lateral
            - Force Global Y: 5,3
            - Options: Replace
            - Apply
- Carregamento Andar 2 - Frontal:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global Y: 6,5
            - Options: Replace
            - Apply
- Carregamento Andar 3 - Frontal:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global Y: 7,3
            - Options: Replace
            - Apply
- Carregamento Andar 4 - Frontal:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global Y: 8
            - Options: Replace
            - Apply
- Carregamento Andar 5 - Frontal:
    - Detalhamento SAP2000:
        - Selecionar nó da força
            - Load Pattern - Vento Lateral
            - Force Global Y: 4,3
            - Options: Replace
            - Apply

#### Aplicar carregamento Vertical
 - Detalhamento SAP2000:
        - Selecionar nós da força -> Assign -> Joint Loads (cargas) -> Forces
- Carregamento em todos os Andare:
        - Selecionar nós da força -> 
            - Load Pattern - Carga Vertical
            - Force Global X: 0
            - Force Global Y: 0
            - Force Global Z: -90
            - Options: Replace
            - Apply

## Detalhar Ações de Carregamento
 - Detalhamento SAP2000:
        - Menu Define - load Cases 
        - Delete de Ações a Não serem consideradas
            - Apgar DEAD e MOdal (análise dinâmica) se a licensa não permitir muitos Load Cases
    - Incluir novos Load Cases
    - Load Case Data Para Vento Lateral
        - Lad Case name: Vento Lateral - Incremento Delta
        - Static
        - Non-Linear
        - Geometric P-Delta
        - Adicionar as duas cargas relevantes: 
            - Vento Lateral
            - Carga Vertical
    - Load Case Data para Vento Frontal
        - Load Case name: Vento Frontal - Incremento Delta
        - Static
        - Non-Linear
        - Geometric P-Delta
        - Adicionar as duas cargas relevantes: 
            - Vento Frontal
            - Carga Vertical

## Executar Ações de Carregamento e Gerar Relatórios
Run Now