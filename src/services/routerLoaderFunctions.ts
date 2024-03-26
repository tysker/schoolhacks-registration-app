import { getWorkshopFromParamID, getWorkshops } from './apiWorkshop.ts';

export async function workshopLoader(id: string) {
  console.log('workshopLoader', id)
  return await getWorkshopFromParamID(id);
}

export async function workshopsLoader() {
    console.log('workshopsLoader')
  return await getWorkshops();
}
