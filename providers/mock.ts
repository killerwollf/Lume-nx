import {createId} from '@/core/id';
import type {Job,JobStatus} from '@/core/types';
export interface ProviderAdapter {submit(input:Omit<Job,'id'|'status'|'progress'|'date'>):Promise<Job>;getStatus(job:Job):JobStatus;cancel(job:Job):Job;estimate(category:string,count:number):number}
export const mockProvider:ProviderAdapter={async submit(input){return {...input,id:createId(),status:'queued',progress:0,date:new Date().toISOString()}},getStatus(job){return job.status},cancel(job){return {...job,status:'canceled'}},estimate(category,count){return (category==='video'?25:category==='audio'?8:4)*count}};
