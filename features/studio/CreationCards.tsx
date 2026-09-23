'use client';
import {Image,Film,AudioLines,Wand2,Lock,ArrowUpRight,Users,FolderLock} from 'lucide-react';
import {premiumVisuals} from '@/mocks/data';

const cards=[
 {title:'Geração de Imagens',subtitle:'Crie imagens incríveis a partir de texto ou referências.',href:'/create/image',icon:Image,image:premiumVisuals.portrait,tone:'blue'},
 {title:'Geração de Vídeos',subtitle:'Transforme ideias e imagens em vídeos cinematográficos.',href:'/create/video',icon:Film,image:premiumVisuals.cinematic,tone:'violet'},
 {title:'Áudio e Voz',subtitle:'Músicas, vozes, clones de voz e atmosferas.',href:'/create/audio',icon:AudioLines,image:premiumVisuals.music,tone:'amber'},
 {title:'Editar e Aprimorar',subtitle:'Aumente qualidade, restaure e transforme.',href:'/edit',icon:Wand2,image:premiumVisuals.product,tone:'green'},
 {title:'18+ Studio',subtitle:'Seu espaço criativo particular.',href:'/adult',icon:Lock,image:premiumVisuals.adultEditorial,tone:'magenta'}
];

export function CreationCards({adult=false,onIdea}:{adult?:boolean;onIdea?:(p:string)=>void}){
 const items=adult?[
  {...cards[0],title:'Imagem adulta',href:'/adult/image',image:premiumVisuals.adultEditorial},
  {...cards[1],title:'Vídeo adulto',href:'/adult/video',image:premiumVisuals.adultPortrait},
  {...cards[0],title:'Personagens',subtitle:'Identidade, expressão e consistência.',href:'/adult/image?tool=character',icon:Users,image:premiumVisuals.editorial},
  {...cards[3],href:'/adult/image?tool=edit',image:premiumVisuals.fashion},
  {...cards[4],title:'Galeria privada',href:'#private-gallery',icon:FolderLock,image:premiumVisuals.portraitAlt}
 ]:cards;
 return <div className="creation-deck">{items.map(c=><a key={c.title} className={'visual-create '+c.tone} href={c.href}><div className="creation-cover"><img src={c.image} alt="" loading="lazy"/><span className="creation-icon"><c.icon size={21}/></span><ArrowUpRight className="creation-arrow" size={17}/></div><div className="creation-caption"><h3>{c.title}</h3><p>{c.subtitle}</p></div></a>)}</div>
}
