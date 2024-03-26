interface WorkshopItem {
  _id?: string;
  title: string;
  description: string;
  date: string;
  weekday: string;
  time: string;
  location: string;
  price: string;
  image: string;
  isEnded?: boolean;
  users: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AxiosResponseDataWorkShop {
  workshop: WorkshopItem;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AxiosResponseDataWorkShops {
  workshops: WorkshopItem[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface User {
  _id?: string;
  name: string;
  email: string;
}
