import type {Category} from './types';
export function routeIntent(prompt:string):{intent:string;category:Category;model:string;duration:number;resolution:string;estimate:number}{
 const p=prompt.toLowerCase(); const edit=/remove|background|upscale|remov|fundo|\bedit(?:ar|ing|ion)?\b|relight/.test(p); const audio=/music|song|lo-fi|voice|sound|música|voz|áudio|speech|narração/.test(p); const video=/animat|video|vídeo|motion|move|drone|commercial|talking|anime esta|se mover|avatar falar|anúncio/.test(p); const category:Category=edit?'editing':audio?'audio':video?'video':'image';
 return {intent:edit?'IMAGE_EDIT':audio?'TEXT_TO_AUDIO / MUSIC':video?(/photo|image|foto/.test(p)?'IMAGE_TO_VIDEO':'TEXT_TO_VIDEO'):'TEXT_TO_IMAGE',category,model:edit?'runway':audio?'stable-audio':video?'kling':'flux',duration:Number(p.match(/(\d+)\s*(seconds|s\b|segundos)/)?.[1]||10),resolution:'1080p',estimate:video?25:audio?8:4};
}
