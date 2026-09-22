export type Category = 'image'|'video'|'audio'|'3d'|'editing';
export type JobStatus = 'queued'|'processing'|'succeeded'|'failed'|'canceled';
export interface Model { id:string; name:string; category:Category; provider:string; capabilities:string[]; inputModes:string[]; outputModes:string[]; durationOptions:number[]; aspectRatios:string[]; resolutions:string[]; supportsAudio:boolean; supportsReferenceImage:boolean; supportsFirstLastFrame:boolean; priceEstimate:number; status:'Available'|'Coming soon'; thumbnail:string; speed:string; quality:string }
export interface Job {id:string; prompt:string; model:string; category:Category; status:JobStatus; progress:number; credits:number; date:string; adult:boolean; image:string}
export interface Asset {id:string; title:string; type:Category; image:string; favorite:boolean; origin:'Generated'|'Uploads'|'Demo'; adult:boolean}
export const flags={adultStudio:true,workflowStudio:true,community:true,audio:true,threeD:true,mockGeneration:true};
