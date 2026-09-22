'use client';
import {useEffect,useState} from 'react';
import {toast} from 'sonner';
import type {Asset,Job} from '@/core/types';
import {media} from '@/mocks/data';
export function useStudio(){
 const [assets,setAssets]=useState<Asset[]>(media.map(a=>({...a})));const [jobs,setJobs]=useState<Job[]>([]);const [ready,setReady]=useState(false);
 useEffect(()=>{try{const a=localStorage.getItem('lume-nx-assets');const j=localStorage.getItem('lume-nx-jobs');if(a)setAssets(JSON.parse(a));if(j)setJobs(JSON.parse(j));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready){try{localStorage.setItem('lume-nx-assets',JSON.stringify(assets.filter(a=>!a.image.startsWith('blob:'))));localStorage.setItem('lume-nx-jobs',JSON.stringify(jobs));}catch{toast.error('Local storage is full. This session remains available.')}}},[assets,jobs,ready]);
 useEffect(()=>{const t=setInterval(()=>setJobs(prev=>prev.map(j=>j.status==='queued'?{...j,status:'processing',progress:12}:j.status==='processing'?{...j,progress:Math.min(100,j.progress+18),status:j.progress>=84?(j.prompt.includes('[fail]')?'failed':'succeeded'):'processing'}:j)),1000);return()=>clearInterval(t)},[]);
 useEffect(()=>{jobs.filter(j=>j.status==='succeeded').forEach(j=>setAssets(a=>a.some(x=>x.id===j.id)?a:[{id:j.id,title:j.prompt.slice(0,48),type:j.category,image:j.image,favorite:false,origin:'Generated',adult:j.adult},...a]))},[jobs]);
 return {assets,setAssets,jobs,setJobs};
}
