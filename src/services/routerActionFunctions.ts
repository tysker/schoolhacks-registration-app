import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { signUpUserAndAddToWorkshop } from './apiWorkshop.ts';
import { eachWordUppercase } from '../utils/helpers.ts';

export const signUpUser = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { name, email, workshop } = data;
  const { id, workshop_name } = JSON.parse(workshop as string);
  const user = { name, email } as User;
  user['name'] = eachWordUppercase(user['name'].split(' '));

  try {
    await signUpUserAndAddToWorkshop(id as string, user);
  } catch (e) {
    return 'You are already signed up for this workshop.';
  }

  return redirect(
    `/confirmation?name=${replaceWhitespace(user.name)}&email=${email}&workshop=${replaceWhitespace(workshop_name)}`,
  );
};

const replaceWhitespace = (str: string) =>
  str.replaceAll(' ', '_').toLowerCase();
