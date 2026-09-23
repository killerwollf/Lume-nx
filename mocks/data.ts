export const premiumVisuals={
 portrait:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=90',
 portraitAlt:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=90',
 cinematic:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=90',
 fashion:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90',
 editorial:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=90',
 product:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=90',
 architecture:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=90',
 automotive:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=90',
 landscape:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=90',
 alpine:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=90',
 nature:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90',
 interior:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
 art:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=90',
 adultEditorial:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=90',
 adultPortrait:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=90'
} as const;

export const portrait=premiumVisuals.portrait;
export const landscape=premiumVisuals.cinematic;
export const art=premiumVisuals.art;
export const heroVisuals=[premiumVisuals.portrait,premiumVisuals.cinematic,premiumVisuals.fashion,premiumVisuals.product,premiumVisuals.landscape,''] as const;
export const ideaVisuals=[premiumVisuals.cinematic,premiumVisuals.product,premiumVisuals.fashion,premiumVisuals.interior,premiumVisuals.automotive,premiumVisuals.portraitAlt,premiumVisuals.landscape,premiumVisuals.art,premiumVisuals.architecture,premiumVisuals.editorial] as const;

export const media=[
 {id:'a1',title:'Retrato violeta',type:'image',image:premiumVisuals.portrait,favorite:false,origin:'Demo',adult:false},
 {id:'a2',title:'Cidade em movimento',type:'video',image:premiumVisuals.cinematic,favorite:true,origin:'Demo',adult:false},
 {id:'a3',title:'Frequências da meia-noite',type:'audio',image:'',favorite:false,origin:'Demo',adult:false},
 {id:'a4',title:'Editorial de moda',type:'image',image:premiumVisuals.fashion,favorite:false,origin:'Demo',adult:false},
 {id:'a5',title:'Horizonte dourado',type:'image',image:premiumVisuals.landscape,favorite:false,origin:'Demo',adult:false},
 {id:'a6',title:'Estudo arquitetônico',type:'3d',image:premiumVisuals.architecture,favorite:true,origin:'Demo',adult:false},
 {id:'a7',title:'Campanha de produto',type:'image',image:premiumVisuals.product,favorite:false,origin:'Demo',adult:false},
 {id:'a8',title:'Ritmo automotivo',type:'video',image:premiumVisuals.automotive,favorite:false,origin:'Demo',adult:false},
 {id:'a9',title:'Refúgio alpino',type:'image',image:premiumVisuals.alpine,favorite:false,origin:'Demo',adult:false},
 {id:'a10',title:'Interiores cinematográficos',type:'image',image:premiumVisuals.interior,favorite:false,origin:'Demo',adult:false},
 {id:'a11',title:'Matéria e cor',type:'3d',image:premiumVisuals.art,favorite:false,origin:'Demo',adult:false},
 {id:'a12',title:'Retrato editorial',type:'image',image:premiumVisuals.editorial,favorite:true,origin:'Demo',adult:false},
 {id:'a13',title:'Velvet portrait',type:'image',image:premiumVisuals.adultEditorial,favorite:false,origin:'Demo',adult:true},
 {id:'a14',title:'Private editorial',type:'video',image:premiumVisuals.adultPortrait,favorite:true,origin:'Demo',adult:true},
 {id:'a15',title:'After dark',type:'image',image:premiumVisuals.portraitAlt,favorite:false,origin:'Demo',adult:true},
 {id:'a16',title:'Private mood',type:'image',image:premiumVisuals.editorial,favorite:false,origin:'Demo',adult:true}
] as const;

export const suggestions=['Anime esta foto em um vídeo cinematográfico','Crie um anúncio premium de produto','Transforme esta foto em um editorial de moda','Gere uma música lo-fi relaxante','Crie uma tomada cinematográfica de drone','Faça um avatar falar com naturalidade','Faça esta imagem se mover com câmera lenta','Gere uma narração envolvente','Crie um vídeo de campanha automotiva','Gere um retrato editorial sofisticado','Crie um interior futurista com luz volumétrica','Transforme a cena em uma peça de arte digital'];
