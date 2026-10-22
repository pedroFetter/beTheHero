import {useMemo,useState} from 'react';
import {Award,Check,ChevronDown,Heart,Handshake,MapPin,RotateCcw,ShieldCheck,Sparkles,X,ArrowRight} from 'lucide-react';
import {athletes,formatCurrency} from './data/athletes.js';

const filters=['Todos','Dinheiro','Produto','Serviço'];
export default function App(){
 const [filter,setFilter]=useState('Todos');
 const [saved,setSaved]=useState([]);
 const [passed,setPassed]=useState([]);
 const [selected,setSelected]=useState(null);
 const [toast,setToast]=useState('');
 const visible=useMemo(()=>athletes.filter(a=>!saved.includes(a.id)&&!passed.includes(a.id)&&(filter==='Todos'||a.need.type===filter)),[filter,saved,passed]);
 const athlete=visible[0];
 function respond(action){
  if(!athlete)return;
  if(action==='save'){setSaved(v=>[...v,athlete.id]);setSelected(athlete);}
  else {setPassed(v=>[...v,athlete.id]);setToast('Perfil pulado. Você pode continuar conhecendo outros atletas.');}
 }
 function notify(message){setToast(message);window.setTimeout(()=>setToast(''),2600);}
 function reset(){setSaved([]);setPassed([]);setSelected(null);}
 return <div className="app-shell">
  <aside className="sidebar">
   <a className="brand" href="#inicio"><span className="brand-mark"><span/></span><span>be<span className="brand-light">the</span>hero</span></a>
   <div className="sidebar-intro"><span className="eyebrow">JUNTOS NO TATAME</span><h2>Talento merece oportunidade.</h2><p>Conheça atletas, descubra suas metas e ajude a levar o esporte mais longe.</p></div>
   <nav className="side-nav" aria-label="Navegação principal"><a className="nav-item active" href="#descobrir"><Sparkles size={18}/>Descobrir atletas</a><button className="nav-item" onClick={()=>notify('A área de apoios será implementada na próxima etapa.')}><Heart size={18}/>Meus apoios <span className="nav-count">{saved.length}</span></button><button className="nav-item" onClick={()=>notify('A área de conexões será implementada após o fluxo de apoio.')}><Handshake size={18}/>Conexões</button></nav>
   <div className="sidebar-bottom"><div className="trust-icon"><ShieldCheck size={19}/></div><div><strong>Apoio com transparência</strong><p>Conheça a necessidade antes de decidir como ajudar.</p></div></div>
   <div className="sidebar-foot">PROTÓTIPO · DADOS ILUSTRATIVOS</div>
  </aside>
  <main className="main-content" id="inicio">
   <header className="topbar"><div><p className="topbar-kicker">REDE DE APOIO AO JIU-JÍTSU</p><h1>Descubra quem você pode apoiar</h1></div><button className="profile-button" onClick={()=>notify('O cadastro de apoiador será incluído na etapa de autenticação.')}><span className="profile-avatar">A</span><span className="profile-label"><strong>Apoiador</strong><small>Modo demonstração</small></span><ChevronDown size={16}/></button></header>
   <section className="intro-row" id="descobrir"><div><p className="section-overline">ESCOLHA SUA PRÓXIMA CONEXÃO</p><h2>Pequenos apoios. Grandes conquistas.</h2><p className="section-description">Explore perfis de demonstração e o fluxo de descoberta. Os dados ainda não são reais.</p></div><div className="deck-counter"><span>{athlete?'01':'✓'}</span><i>/</i>{String(athletes.length).padStart(2,'0')} <span className="counter-label">perfis</span></div></section>
   <div className="filter-row" role="group" aria-label="Filtrar tipo de apoio"><span className="filter-label">Quero apoiar:</span>{filters.map(f=><button key={f} className={filter===f?'filter-chip selected':'filter-chip'} onClick={()=>setFilter(f)}>{f}</button>)}<button className="reset-button" onClick={reset}><RotateCcw size={14}/> Reiniciar</button></div>
   <section className="discovery-layout"><div className="card-column">{athlete?<article className="athlete-card">
    <div className="athlete-photo-wrap"><img className="athlete-photo" src={athlete.photo} alt="Imagem ilustrativa do perfil"/><div className="photo-shade"/><span className="verified-pill"><ShieldCheck size={14}/> Perfil demonstrativo</span><div className="photo-heading"><span className="belt-pill">{athlete.belt}</span><h3>{athlete.name}, {athlete.age}</h3><p><MapPin size={15}/>{athlete.city}</p></div></div>
    <div className="athlete-details"><div className="athlete-meta"><span>{athlete.category}</span><span className="dot"/><span>{athlete.academy}</span></div><p className="athlete-bio">{athlete.bio}</p><div className="achievement-list">{athlete.achievements.map(a=><span key={a}><Award size={14}/>{a}</span>)}</div>
     <div className="need-panel"><div className="need-header"><div><span className="need-label">NECESSIDADE ATUAL</span><h4>{athlete.need.title}</h4></div><span className="need-type">{athlete.need.type}</span></div><p>{athlete.need.description}</p>{athlete.need.amount!==null&&<div className="funding-block"><div className="funding-values"><strong>{formatCurrency(athlete.need.progress)}</strong><span>de {formatCurrency(athlete.need.amount)}</span></div><div className="progress-track"><span style={{width:`${Math.min(100,athlete.need.progress/athlete.need.amount*100)}%`}}/></div></div>}<div className="need-footer"><span><Sparkles size={14}/>{athlete.need.urgency}</span><button onClick={()=>setSelected(athlete)}>Ver detalhes <ArrowRight size={14}/></button></div></div>
    </div><div className="card-actions"><button className="action-button pass" onClick={()=>respond('pass')} aria-label="Pular perfil"><X size={22}/><span>Agora não</span></button><button className="action-button support" onClick={()=>respond('save')}><Heart size={20}/><span>Quero apoiar</span></button></div>
   </article>:<div className="empty-state"><div className="empty-icon"><Check size={26}/></div><h3>Você viu todos os perfis deste filtro.</h3><p>Troque o filtro ou reinicie para explorar os perfis demonstrativos.</p><button className="primary-button" onClick={reset}><RotateCcw size={16}/>Ver novamente</button></div>}<div className="deck-hint">Explore os perfis e escolha como quer se conectar</div></div>
   <aside className="right-rail"><div className="impact-card"><div className="impact-icon"><Heart size={19}/></div><p className="rail-overline">SEU IMPACTO COMEÇA AQUI</p><h3>Uma oportunidade pode mudar uma trajetória.</h3><p>Você pode contribuir com recursos, equipamentos ou serviços profissionais.</p><div className="impact-types"><span>R$ Apoio financeiro</span><span>＋ Equipamentos</span><span>✦ Serviços</span></div></div><div className="steps-card"><h3>Como funciona</h3>{[['1','Conheça o atleta','Veja sua história e objetivo atual.'],['2','Mostre interesse','Escolha um perfil que queira apoiar.'],['3','Combine o apoio','Detalhes e confirmação com transparência.']].map(s=><div className="step-item" key={s[0]}><span>{s[0]}</span><div><strong>{s[1]}</strong><p>{s[2]}</p></div></div>)}</div><div className="saved-card"><div className="saved-icon"><Heart size={17}/></div><div><strong>{saved.length} {saved.length===1?'perfil salvo':'perfis salvos'}</strong><p>Perfis em que você demonstrou interesse nesta demonstração.</p></div></div></aside></section>
   <footer className="page-footer"><span>BeTheHero · Apoie quem luta.</span><span>Protótipo visual — sem cadastro ou transações reais.</span></footer>
  </main>
  {toast&&<div className="toast" role="status">{toast}<button onClick={()=>setToast('')} aria-label="Fechar aviso"><X size={14}/></button></div>}
  {selected&&<div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Fechar"><X size={20}/></button><img src={selected.photo} alt="" className="modal-photo"/><div className="modal-content"><span className="section-overline">DETALHES DO APOIO</span><h2 id="detail-title">{selected.need.title}</h2><p>{selected.name} · {selected.academy}</p><div className="modal-need"><span>Tipo de apoio</span><strong>{selected.need.type}</strong></div>{selected.need.amount!==null&&<div className="modal-need"><span>Meta demonstrativa</span><strong>{formatCurrency(selected.need.amount)}</strong></div>}<p className="modal-description">{selected.need.description}</p><div className="demo-notice"><ShieldCheck size={17}/><span>Demonstração apenas. Nenhuma contribuição será cobrada ou registrada.</span></div><button className="primary-button full-width" onClick={()=>{setSelected(null);notify('Na próxima etapa, conectaremos este interesse ao backend e ao processo de contato.')}}>Entendi <ArrowRight size={16}/></button></div></section></div>}
 </div>
}