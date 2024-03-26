import axios from 'axios';


let URL = "";
if (import.meta.env.MODE === 'production') {
    console.log(URL)
    URL += 'http://server:3000/api/v1';
} else {
    console.log(URL)
    URL += 'http://localhost:3000/api/v1';
}
//
// const URL = 'http://localhost:3000/api/v1';
console.log(URL)
console.log(import.meta.env.MODE);

export const getWorkshops = async () => {
    const response = await axios.get<AxiosResponseDataWorkShops>(
        `${URL}/workshops`,
    );
    return response.data.workshops;
};

export const getWorkshopFromParamID = async (id: string) => {
    try {
        const response = await axios.get<AxiosResponseDataWorkShop>(
            `${URL}/workshops/${id}`,
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
            `${URL}/users/${id}`,
            user,
        );
        return response.data.workshop;
    } catch (error) {
        // @ts-expect-error
        throw new Error(error.response.data.message);
    }
};
