import {mediaRegistry} from './media-registry';

export const premiumVisuals={
 portrait:mediaRegistry.tools.image,
 portraitAlt:mediaRegistry.extras[0],
 cinematic:mediaRegistry.tools.video,
 fashion:mediaRegistry.extras[1],
 editorial:mediaRegistry.extras[2],
 product:mediaRegistry.tools.edit,
 architecture:mediaRegistry.extras[3],
 automotive:mediaRegistry.trending[2],
 landscape:mediaRegistry.rail.video,
 alpine:mediaRegistry.trending[8],
 nature:mediaRegistry.trending[0],
 interior:mediaRegistry.trending[5],
 art:mediaRegistry.models.luma,
 music:mediaRegistry.tools.audio,
 adultEditorial:mediaRegistry.tools.adult,
 adultPortrait:mediaRegistry.adult.cards[1]
} as const;

export const portrait=premiumVisuals.portrait;
export const landscape=premiumVisuals.landscape;
export const art=premiumVisuals.art;
export const heroVisuals=mediaRegistry.hero;
export const ideaVisuals=[
 mediaRegistry.trending[0],mediaRegistry.trending[1],mediaRegistry.trending[2],mediaRegistry.trending[3],
 mediaRegistry.trending[4],mediaRegistry.trending[5],mediaRegistry.trending[6],mediaRegistry.trending[7],
 mediaRegistry.trending[8],mediaRegistry.trending[9]
] as const;

export const media=[
 {id:'a1',title:'Pôr do sol cinematográfico',type:'image',image:mediaRegistry.trending[0],favorite:false,origin:'Demo',adult:false},
 {id:'a2',title:'Villa mediterrânea',type:'video',image:mediaRegistry.trending[1],favorite:true,origin:'Demo',adult:false},
 {id:'a3',title:'Night drive azul',type:'video',image:mediaRegistry.trending[2],favorite:false,origin:'Demo',adult:false},
 {id:'a4',title:'Retrato cyber party',type:'image',image:mediaRegistry.trending[3],favorite:false,origin:'Demo',adult:false},
 {id:'a5',title:'Retro future portrait',type:'image',image:mediaRegistry.trending[4],favorite:false,origin:'Demo',adult:false},
 {id:'a6',title:'Fashion neon',type:'image',image:mediaRegistry.trending[5],favorite:true,origin:'Demo',adult:false},
 {id:'a7',title:'Arquitetura twilight',type:'image',image:mediaRegistry.trending[6],favorite:false,origin:'Demo',adult:false},
 {id:'a8',title:'Neon beats',type:'audio',image:mediaRegistry.trending[7],favorite:false,origin:'Demo',adult:false},
 {id:'a9',title:'Cidade do futuro',type:'3d',image:mediaRegistry.trending[8],favorite:false,origin:'Demo',adult:false},
 {id:'a10',title:'Luxury sunset',type:'image',image:mediaRegistry.trending[9],favorite:false,origin:'Demo',adult:false},
 {id:'a11',title:'Cyber creator',type:'image',image:mediaRegistry.trending[10],favorite:false,origin:'Demo',adult:false},
 {id:'a12',title:'Nightclub energy',type:'video',image:mediaRegistry.trending[11],favorite:true,origin:'Demo',adult:false},
 {id:'a13',title:'Private violet',type:'image',image:mediaRegistry.adult.gallery[0],favorite:false,origin:'Demo',adult:true},
 {id:'a14',title:'After dark portrait',type:'video',image:mediaRegistry.adult.gallery[1],favorite:true,origin:'Demo',adult:true},
 {id:'a15',title:'Private neon mood',type:'image',image:mediaRegistry.adult.gallery[2],favorite:false,origin:'Demo',adult:true},
 {id:'a16',title:'Night studio',type:'image',image:mediaRegistry.adult.gallery[3],favorite:false,origin:'Demo',adult:true}
] as const;

export const suggestions=[
 'Uma mulher na praia ao pôr do sol, estilo cinematográfico',
 'Vídeo cinematográfico de anime com câmera suave',
 'Um carro esportivo em uma cidade neon à noite',
 'Retrato fashion em estúdio com luz violeta',
 'Uma casa moderna com piscina ao entardecer',
 'Anime esta foto em um vídeo cinematográfico',
 'Crie um anúncio premium de produto',
 'Faça esta imagem se mover com câmera lenta',
 'Gere uma narração envolvente',
 'Gere uma música lo-fi relaxante',
 'Crie um interior futurista com luz volumétrica',
 'Transforme a cena em uma peça de arte digital'
];
