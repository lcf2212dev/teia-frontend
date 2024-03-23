# TEIA - Desafio Frontend 2

Por Leandro Caetano de Faria (c112568)

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).