import axios from 'axios';

const URL = import.meta.env.MODE === 'production' ? 'https://server.schoolhacks.eu/api/v1' : 'http://localhost:3000/api/v1';
// const URL = 'http://localhost:3000/api/v1';
export const getWorkshops = async () => {
    try {
        const response = await axios.get<AxiosResponseDataWorkShops>(
            `${URL}/workshops`,
        );

        return response.data.workshops;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const getWorkshopFromParamID = async (id: string) => {
    try {

        const response = await axios.get<AxiosResponseDataWorkShop>(
            `${URL}/workshops/${id}`,
        );
        return response.data.workshop;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const signUpUserAndAddToWorkshop = async (id: string, user: User) => {

    try {
        user['name'] =
            user.name.substring(0, 1).toUpperCase() +
            user.name.substring(1).toLowerCase();

        const response = await axios.post<AxiosResponseDataWorkShop>(
            `${URL}/users/${id}`,
            user,
        );

        return response.data.workshop;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};