export const athletes = [
  {
    id:'athlete-ana', name:'Ana Martins', age:19, belt:'Faixa roxa',
    academy:'Equipe Horizonte', city:'Porto Alegre, RS',
    category:'Adulto · até 64 kg',
    bio:'Treino há 8 anos e quero levar meu jiu-jitsu para o próximo nível no circuito brasileiro.',
    achievements:['Campeã estadual 2025','2º lugar Sul-Brasileiro'],
    photo:'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    need:{title:'Inscrição no Sul-Brasileiro',type:'Dinheiro',amount:28000,progress:12000,description:'Ajuda para cobrir a inscrição e garantir a participação na próxima etapa.',urgency:'Inscrição até 15 nov.'}
  },
  {
    id:'athlete-lucas', name:'Lucas Ferreira', age:22, belt:'Faixa marrom',
    academy:'Equipe Horizonte', city:'Taquara, RS',
    category:'Adulto · até 82 kg',
    bio:'Atleta dedicado à competição e à formação de novos alunos. Meu objetivo é competir no Brasileiro.',
    achievements:['Campeão regional 2024','3º lugar estadual 2025'],
    photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85',
    need:{title:'Kimono de competição',type:'Produto',amount:65000,progress:0,description:'Um kimono aprovado para competição, tamanho A2, para treinar e competir com segurança.',urgency:'Meta para este mês'}
  },
  {
    id:'athlete-marina', name:'Marina Costa', age:17, belt:'Faixa azul',
    academy:'Projeto Tatame Aberto', city:'Novo Hamburgo, RS',
    category:'Juvenil · até 57 kg',
    bio:'O esporte mudou minha rotina e quero representar meu projeto em campeonatos nacionais.',
    achievements:['Campeã da Copa Regional','Atleta destaque do projeto'],
    photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    need:{title:'Transporte e alimentação',type:'Serviço',amount:null,progress:0,description:'Buscamos uma empresa parceira para apoiar o deslocamento e a alimentação durante o campeonato.',urgency:'Campeonato em dezembro'}
  }
];
export const formatCurrency = cents => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
