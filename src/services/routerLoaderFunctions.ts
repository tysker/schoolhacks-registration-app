import { getWorkshopFromParamID, getWorkshops } from './apiWorkshop.ts';

export async function workshopLoader(id: string) {
  return await getWorkshopFromParamID(id);
}

export async function workshopsLoader() {
  return await getWorkshops();
}
