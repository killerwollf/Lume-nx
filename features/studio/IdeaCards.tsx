'use client';
import {Shuffle} from 'lucide-react';
import {suggestions} from '@/mocks/data';
export function IdeaCards({offset,onShuffle,onSelect}:{offset:number;onShuffle:()=>void;onSelect:(p:string)=>void}){return <section className="idea-section idea-pills"><span className="idea-label">Experimente estas ideias:</span><div className="idea-track">{Array.from({length:5},(_,i)=>{const n=(offset+i)%suggestions.length;return <button key={n} className="idea-card" onClick={()=>onSelect(suggestions[n])}><span>{suggestions[n]}</span></button>})}</div><button className="idea-shuffle" onClick={onShuffle} aria-label="Embaralhar ideias"><Shuffle size={16}/></button></section>}
