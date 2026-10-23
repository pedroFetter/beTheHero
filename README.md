# BeTheHero — plataforma de apoio a atletas

Evolução do projeto original BeTheHero para conectar atletas de jiu-jítsu a pessoas e empresas que possam apoiar sua trajetória.

## Visão do produto
- Perfis de atletas e suas academias.
- Necessidades de apoio financeiro, equipamentos e serviços.
- Descoberta de atletas por cartões, com manifestação de interesse.
- Processo transparente para combinar, acompanhar e confirmar apoios.

## Estado atual
O backend original é uma API Express com Knex e SQLite, criada em 2020, com entidades de ONGs e ocorrências. O frontend original está referenciado como submódulo Git sem URL recuperável na árvore atual. A branch `feat/jiu-jitsu-support-mvp` inicia uma nova interface de demonstração em `frontend/`.

## Executar o protótipo de frontend
```bash
cd frontend
npm install
npm run dev
```

## Limitações da demonstração
A interface usa perfis e necessidades fictícias locais. Ela não está conectada ao backend e não realiza cadastro, autenticação, pagamento ou transferência de recursos. O banco SQLite existente não deve ser removido até que seu conteúdo seja verificado localmente.

## Próximas etapas
1. Inspecionar o banco SQLite e testar a API original.
2. Definir e implementar o modelo de dados de atletas, necessidades, apoiadores e apoios.
3. Implementar autenticação e autorização antes de disponibilizar operações de escrita.
4. Integrar o frontend com a API e adicionar testes automatizados.
5. Documentar como executar e publicar a aplicação.
