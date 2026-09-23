import {impactVisuals} from './data-v2';

export const premiumVisuals={
 portrait:impactVisuals.neonPortrait,
 portraitAlt:impactVisuals.neonEditorial,
 cinematic:impactVisuals.cyberCar,
 fashion:impactVisuals.neonFashion,
 editorial:impactVisuals.neonEditorial,
 product:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=90',
 architecture:impactVisuals.sunsetVilla,
 automotive:impactVisuals.cyberCar,
 landscape:impactVisuals.sunsetVilla,
 alpine:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=90',
 nature:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90',
 interior:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
 art:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=90',
 music:impactVisuals.neonSinger,
 adultEditorial:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=90',
 adultPortrait:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=90'
} as const;

export const portrait=premiumVisuals.portrait;
export const landscape=premiumVisuals.cinematic;
export const art=premiumVisuals.art;
export const heroVisuals=[premiumVisuals.portrait,premiumVisuals.portraitAlt,premiumVisuals.fashion,premiumVisuals.automotive,premiumVisuals.architecture,premiumVisuals.music] as const;
export const ideaVisuals=[premiumVisuals.portrait,premiumVisuals.automotive,premiumVisuals.fashion,premiumVisuals.architecture,premiumVisuals.music,premiumVisuals.product,premiumVisuals.interior,premiumVisuals.art,premiumVisuals.landscape,premiumVisuals.editorial] as const;

export const media=[
 {id:'a1',title:'Retrato neon',type:'image',image:premiumVisuals.portrait,favorite:false,origin:'Demo',adult:false},
 {id:'a2',title:'Cidade em movimento',type:'video',image:premiumVisuals.cinematic,favorite:true,origin:'Demo',adult:false},
 {id:'a3',title:'Frequências da meia-noite',type:'audio',image:'',favorite:false,origin:'Demo',adult:false},
 {id:'a4',title:'Editorial cyber fashion',type:'image',image:premiumVisuals.fashion,favorite:false,origin:'Demo',adult:false},
 {id:'a5',title:'Villa ao pôr do sol',type:'image',image:premiumVisuals.architecture,favorite:false,origin:'Demo',adult:false},
 {id:'a6',title:'Arquitetura de luz',type:'3d',image:premiumVisuals.architecture,favorite:true,origin:'Demo',adult:false},
 {id:'a7',title:'Campanha de produto',type:'image',image:premiumVisuals.product,favorite:false,origin:'Demo',adult:false},
 {id:'a8',title:'Night drive',type:'video',image:premiumVisuals.automotive,favorite:false,origin:'Demo',adult:false},
 {id:'a9',title:'Refúgio alpino',type:'image',image:premiumVisuals.alpine,favorite:false,origin:'Demo',adult:false},
 {id:'a10',title:'Interiores cinematográficos',type:'image',image:premiumVisuals.interior,favorite:false,origin:'Demo',adult:false},
 {id:'a11',title:'Neon live session',type:'audio',image:premiumVisuals.music,favorite:false,origin:'Demo',adult:false},
 {id:'a12',title:'Retrato editorial',type:'image',image:premiumVisuals.editorial,favorite:true,origin:'Demo',adult:false},
 {id:'a13',title:'Velvet portrait',type:'image',image:premiumVisuals.adultEditorial,favorite:false,origin:'Demo',adult:true},
 {id:'a14',title:'Private editorial',type:'video',image:premiumVisuals.adultPortrait,favorite:true,origin:'Demo',adult:true},
 {id:'a15',title:'After dark',type:'image',image:premiumVisuals.portraitAlt,favorite:false,origin:'Demo',adult:true},
 {id:'a16',title:'Private mood',type:'image',image:premiumVisuals.editorial,favorite:false,origin:'Demo',adult:true}
] as const;

export const suggestions=['Uma mulher na praia ao pôr do sol, estilo cinematográfico','Vídeo cinematográfico de anime com câmera suave','Um carro esportivo em uma cidade neon à noite','Retrato fashion em estúdio com luz violeta','Uma casa moderna com piscina ao entardecer','Anime esta foto em um vídeo cinematográfico','Crie um anúncio premium de produto','Faça esta imagem se mover com câmera lenta','Gere uma narração envolvente','Gere uma música lo-fi relaxante','Crie um interior futurista com luz volumétrica','Transforme a cena em uma peça de arte digital'];
