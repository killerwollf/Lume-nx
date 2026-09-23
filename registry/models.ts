import type {Model,Category} from '@/core/types';
import {premiumVisuals} from '@/mocks/data';
const entries:[string,Category,string][]=[
 ['Flux','image',premiumVisuals.portrait],
 ['Kling','video',premiumVisuals.cinematic],
 ['Stable Audio','audio',''],
 ['Nano Banana','image',premiumVisuals.product],
 ['Seedance','video',premiumVisuals.landscape],
 ['Veo','video',premiumVisuals.architecture],
 ['Wan','video',premiumVisuals.fashion],
 ['Sora','video',premiumVisuals.automotive],
 ['Runway','editing',premiumVisuals.editorial],
 ['ElevenLabs','audio',''],
 ['Luma','3d',premiumVisuals.art]
];
export const models:Model[]=entries.map(([name,category,thumbnail],i)=>({id:name.toLowerCase().replaceAll(' ','-'),name,category,provider:'Future provider',capabilities:category==='video'?['Text to Video','Image to Video','First / Last Frame']:category==='audio'?['Music','Voice','Sound Effects']:['Text to Image','Reference Image'],inputModes:['text','reference'],outputModes:[category],durationOptions:category==='video'?[5,10]:category==='audio'?[15,30,60]:[],aspectRatios:['16:9','1:1','9:16','4:3'],resolutions:['720p','1080p','2K'],supportsAudio:category==='audio',supportsReferenceImage:category!=='audio',supportsFirstLastFrame:category==='video',priceEstimate:category==='video'?25:category==='audio'?8:4,status:i<5?'Available':'Coming soon',thumbnail,speed:'~8 seconds · demo',quality:'High · simulated'}));
