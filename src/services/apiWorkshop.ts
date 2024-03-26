import axios from 'axios';

export const getWorkshops = async () => {
  const response = await axios.get<AxiosResponseDataWorkShops>(
    'http://localhost:3000/api/v1/workshops',
  );
  return response.data.workshops;
};

export const getWorkshopFromParamID = async (id: string) => {
  try {
    const response = await axios.get<AxiosResponseDataWorkShop>(
      `http://localhost:3000/api/v1/workshops/${id}`,
    );
    return response.data.workshop;
  } catch (error: unknown) {
    throw new Error('ContainerLarge not found');
  }
};

export const signUpUserAndAddToWorkshop = async (id: string, user: User) => {
  try {
    user['name'] =
      user.name.substring(0, 1).toUpperCase() +
      user.name.substring(1).toLowerCase();

    const response = await axios.post<AxiosResponseDataWorkShop>(
      `http://localhost:3000/api/v1/users/${id}`,
      user,
    );
    return response.data.workshop;
  } catch (error) {
    // @ts-expect-error
    throw new Error(error.response.data.message);
  }
};
