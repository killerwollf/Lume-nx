'use client';
import {Image,Film,AudioLines,Wand2,Lock,ArrowUpRight,Users,FolderLock} from 'lucide-react';
import {mediaRegistry} from '@/mocks/media-registry';

const cards=[
 {title:'Geração de Imagens',subtitle:'Crie imagens incríveis a partir de texto ou referências.',href:'/create/image',icon:Image,image:mediaRegistry.tools.image,tone:'blue'},
 {title:'Geração de Vídeos',subtitle:'Transforme ideias e imagens em vídeos cinematográficos.',href:'/create/video',icon:Film,image:mediaRegistry.tools.video,tone:'violet'},
 {title:'Áudio e Voz',subtitle:'Músicas, vozes, clones de voz e atmosferas.',href:'/create/audio',icon:AudioLines,image:mediaRegistry.tools.audio,tone:'amber'},
 {title:'Editar e Aprimorar',subtitle:'Aumente qualidade, restaure e transforme.',href:'/edit',icon:Wand2,image:mediaRegistry.tools.edit,tone:'green'},
 {title:'18+ Studio',subtitle:'Seu espaço criativo particular.',href:'/adult',icon:Lock,image:mediaRegistry.tools.adult,tone:'magenta'}
];

export function CreationCards({adult=false}:{adult?:boolean;onIdea?:(p:string)=>void}){
 const items=adult?[
  {...cards[0],title:'Imagem adulta',href:'/adult/image',image:mediaRegistry.adult.cards[0]},
  {...cards[1],title:'Vídeo adulto',href:'/adult/video',image:mediaRegistry.adult.cards[1]},
  {...cards[0],title:'Personagens',subtitle:'Identidade, expressão e consistência.',href:'/adult/image?tool=character',icon:Users,image:mediaRegistry.adult.cards[2]},
  {...cards[3],href:'/adult/image?tool=edit',image:mediaRegistry.adult.cards[3]},
  {...cards[4],title:'Galeria privada',href:'#private-gallery',icon:FolderLock,image:mediaRegistry.adult.cards[4]}
 ]:cards;
 return <div className="creation-deck">{items.map(c=><a key={c.title} className={'visual-create '+c.tone} href={c.href}><div className="creation-cover"><img src={c.image} alt="" loading="lazy"/><span className="creation-icon"><c.icon size={21}/></span><ArrowUpRight className="creation-arrow" size={17}/></div><div className="creation-caption"><h3>{c.title}</h3><p>{c.subtitle}</p></div></a>)}</div>
}
