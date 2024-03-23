# TEIA - Desafio Frontend 2

Por Leandro Caetano de Faria (c112568)

## Funcionalidades do Sistema

### Página de Todas as Fotos
Página que exibe todas as fotos carregadas, de forma paginada, com opção para ordenar alfabeticamente.

### Página de Detalhes da Foto
Ao clicar em uma foto, o sistema direciona para uma página de detalhamento da foto. Nessa página o usuário pode adicionar a foto às favoritas, ou remover caso já tenha adicionado.

### Página de Fotos Favoritas
Exibe as fotos favoritadas pelo usuário, com funcionalidades semelhantes às da página de vizualização de fotos.

## Estrutura do Código

### Estilo
- Arquivos de estilos específicos são armazenados em src/styles.

- O arquivo principal styles.scss importa os estilos específicos.

- Fonte utilizada: Lato

- Ícones utilizados: Material Icons

### Pastas do App

#### /layout
Contém os componentes que definem o layout principal da aplicação.

#### /models
Contém as interfaces que definem a estrutura dos dados da aplicação.

#### /pages
Contém os componentes que representam as diferentes páginas da aplicação que são chamadas via roteamento.

#### /services
Contém os serviços.

#### /shared/componentes
Contém os componentes que são usados em diferentes partes da aplicação.

#### /store
Contém o estado global da aplicação e as ações que o modificam.

## Decisões Arquiteturais

### Versão Angular
v17.2

### NgRx
O NgRx foi utilizado para gerenciar o estado global da aplicação, facilitando assim o compartilhamento de dados entre diferentes componentes e garantindo a consistência do estado.

### ChangeDetection.OnPush
A estratégia de detecção de mudanças OnPush foi utilizada de forma a garantir que os componentes sejam atualizados apenas quando necessário para otimizar a performance da aplicação.

### Ausência bibliotecas externas
O projeto foi desenvolvido sem a utilização de bibliotecas externas para demonstrar a habilidade do desenvolvedor em criar componentes personalizados.

### Feature Preview (signals)
Utilizada para explorar recursos futuros do Angular.

### Standalone components
Os componentes autônomos ("standalone components") foram utilizados para tornar o código mais limpo e facilitar a manutenção do código - caso fosse existir.

### LocalStorage
Foi utilizado para guardar a lista de fotos favoritadas pelo usuário.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
