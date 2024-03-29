import {redirect} from 'react-router-dom';
import {signUpUserAndAddToWorkshop} from './apiWorkshop.ts';
import {eachWordUppercase} from '../utils/helpers.ts';

export const signUpUser = async ({request}: any) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const {name, email, workshop} = data;
    const {id, workshop_name} = JSON.parse(workshop);
    const user: User = {name, email};
    user['name'] = eachWordUppercase(user['name'].split(' '));

    const errors: { message: string } = {message: ''};

    try {
        await signUpUserAndAddToWorkshop(id, user);
    } catch (error: any) {
        errors.message = error.message;
    }

    if (errors.message) {
        return errors;
    }

    return redirect(
        `/confirmation?name=${replaceWhitespace(user.name)}&email=${email}&workshop=${replaceWhitespace(workshop_name)}`,
    );
};

const replaceWhitespace = (str: string) =>
    str.replaceAll(' ', '_').toLowerCase();
