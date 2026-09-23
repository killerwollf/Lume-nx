'use client';
import {useEffect,useState,useRef} from 'react';
import {ArrowRight,Play,ChevronLeft,ChevronRight,Layers,ShieldCheck,Pause,Infinity as InfinityIcon} from 'lucide-react';
import {heroVisuals,premiumVisuals} from '@/mocks/data';
import {VideoPreview} from './VideoPreview';

const slides=[
 ['IMAGINAÇÃO SEM LIMITES','Transforme fantasias','em realidade.',heroVisuals[0],'Imagem · Retrato neon'],
 ['VÍDEOS QUE PRENDEM O OLHAR','Dê movimento','às suas ideias.',heroVisuals[1],'Vídeo · Cidade neon'],
 ['PERSONAGENS COM IDENTIDADE','Crie presenças','inesquecíveis.',heroVisuals[2],'Personagens · Cyber fashion'],
 ['CAMPANHAS COM IMPACTO','Visual de campanha','em poucos passos.',heroVisuals[3],'Campanha · Night drive'],
 ['MUNDOS PARA EXPLORAR','Construa cenários','extraordinários.',heroVisuals[4],'Cenários · Arquitetura'],
 ['SOM QUE COMPLETA A CENA','Dê uma trilha','à sua imaginação.',heroVisuals[5],'Áudio · Live session']
] as const;

export function Hero({onCreate,onDemo}:{onCreate:()=>void;onDemo:()=>void}){
 const [index,setIndex]=useState(0);const [paused,setPaused]=useState(false);const [manual,setManual]=useState(false);const [visible,setVisible]=useState(true);const ref=useRef<HTMLElement>(null);const touch=useRef(0);
 useEffect(()=>{const ob=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{threshold:.2});if(ref.current)ob.observe(ref.current);return()=>ob.disconnect()},[]);
 useEffect(()=>{if(paused||manual||!visible||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const t=setInterval(()=>setIndex(i=>(i+1)%slides.length),6200);return()=>clearInterval(t)},[paused,manual,visible]);
 const change=(i:number)=>{setIndex((i+slides.length)%slides.length);setManual(true)};const s=slides[index];
 return <section ref={ref} className="hero" aria-roledescription="carrossel" aria-label="Possibilidades de criação" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)} onTouchStart={e=>{touch.current=e.touches[0].clientX;setManual(true)}} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-touch.current;if(Math.abs(d)>45)change(index+(d<0?1:-1))}}>
  <div className="hero-picture" key={index}>{index===1||index===3?<VideoPreview poster={s[3]} auto={!paused&&!manual}/>:<img src={s[3]} alt={s[4]}/>}</div>
  <div className="hero-scrim"/>
  <div className="hero-copy"><span className="eyebrow"><i/>{s[0]}</span><h1>{s[1]}<br/><em>{s[2]}</em></h1><p>Gere imagens, vídeos, áudio e muito mais.<br/>Tudo começa com a sua imaginação.</p><div className="hero-actions"><button className="primary" onClick={onCreate}>Começar a criar <ArrowRight size={17}/></button><button className="glass" onClick={onDemo}><Play size={15}/>Assistir demonstração</button></div><div className="hero-stats"><span><Layers/><b>11 modelos demo</b><small>Imagem · Vídeo · Áudio · 3D</small></span><span><InfinityIcon/><b>Liberdade criativa</b><small>Um só studio, muitos caminhos</small></span><span><ShieldCheck/><b>Privado por padrão</b><small>Seus dados, suas regras</small></span></div></div>
  <button className="hero-floating" onClick={onDemo}><img src={premiumVisuals.fashion} alt=""/><span><Play size={14}/>Dream scene<small>Uma ideia. Muitos caminhos.</small></span></button>
  <div className="hero-bottom"><span>{s[4]}</span><div className="dots">{slides.map((_,i)=><button key={i} aria-label={'Slide '+(i+1)} aria-pressed={i===index} onClick={()=>change(i)} className={i===index?'current':''}/>)}</div><div className="hero-arrows"><button aria-label={manual?'Reproduzir carrossel':'Pausar carrossel'} onClick={()=>setManual(!manual)}>{manual?<Play size={14}/>:<Pause size={14}/>}</button><button aria-label="Slide anterior" onClick={()=>change(index-1)}><ChevronLeft size={16}/></button><button aria-label="Próximo slide" onClick={()=>change(index+1)}><ChevronRight size={16}/></button></div></div>
 </section>
}
