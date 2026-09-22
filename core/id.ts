export const createId=()=>typeof crypto.randomUUID==='function'?crypto.randomUUID():`nx-${Date.now()}-${Math.random().toString(36).slice(2,12)}`;
