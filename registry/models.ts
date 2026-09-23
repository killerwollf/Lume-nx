import type {Model,Category} from '@/core/types';
import {mediaRegistry} from '@/mocks/media-registry';
const entries:[string,Category,string][]=[
 ['Flux','image',mediaRegistry.models.flux],
 ['Kling','video',mediaRegistry.models.kling],
 ['Stable Audio','audio',mediaRegistry.models.stableAudio],
 ['Nano Banana','image',mediaRegistry.models.nanoBanana],
 ['Seedance','video',mediaRegistry.models.seedance],
 ['Veo','video',mediaRegistry.models.veo],
 ['Wan','video',mediaRegistry.models.wan],
 ['Sora','video',mediaRegistry.models.sora],
 ['Runway','editing',mediaRegistry.models.runway],
 ['ElevenLabs','audio',mediaRegistry.models.elevenLabs],
 ['Luma','3d',mediaRegistry.models.luma]
];
export const models:Model[]=entries.map(([name,category,thumbnail],i)=>({id:name.toLowerCase().replaceAll(' ','-'),name,category,provider:'Future provider',capabilities:category==='video'?['Text to Video','Image to Video','First / Last Frame']:category==='audio'?['Music','Voice','Sound Effects']:['Text to Image','Reference Image'],inputModes:['text','reference'],outputModes:[category],durationOptions:category==='video'?[5,10]:category==='audio'?[15,30,60]:[],aspectRatios:['16:9','1:1','9:16','4:3'],resolutions:['720p','1080p','2K'],supportsAudio:category==='audio',supportsReferenceImage:category!=='audio',supportsFirstLastFrame:category==='video',priceEstimate:category==='video'?25:category==='audio'?8:4,status:i<5?'Available':'Coming soon',thumbnail,speed:'~8 seconds · demo',quality:'High · simulated'}));
