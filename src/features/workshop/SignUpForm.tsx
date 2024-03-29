import React from 'react';
import {Form, useActionData, useNavigation} from 'react-router-dom';
import Button from "./Button.tsx";

interface SignUpFormProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    workshop: string;
    workshop_id?: string;
}


function SignUpForm({setShowModal, workshop, workshop_id}: SignUpFormProps) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const formError = useActionData() as { message: string } | undefined;

    const hiddenValue = {
        id: workshop_id,
        workshop_name: workshop,
    };

    const resetHandler = () => {
        if (formError) {
            formError!.message = '';
        }
        setShowModal(false);
    };

    return (
        <Form
            className="h-auto w-auto bg-stone-100 p-12 lg:w-96 dark:bg-stone-800"
            method="post"
        >
            <div className="mb-4">
                <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="name"
                >
                    <p className="pl-2 text-xl dark:text-stone-200">Name</p>
                </label>
                <input
                    required
                    className="focus:shadow-outline h-[50px] w-full appearance-none rounded-full px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div className="mb-6">
                <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="password"
                >
                    <p className="pl-2 text-xl dark:text-stone-200">Email</p>
                </label>
                <input
                    required
                    className="focus:shadow-outline h-[50px] w-full appearance-none rounded-full px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none mb-2"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="email"
                />

                {formError?.message && (<p className="text-sm italic text-center text-red-500">{formError.message}</p>
                )}
            </div>
            <div className="flex items-center justify-around">
                <input
                    className="hidden"
                    name="workshop"
                    id="workshop"
                    type="hidden"
                    defaultValue={JSON.stringify(hiddenValue)}
                />
                <div className="flex items-center gap-6">
                    <Button disabled={isSubmitting} type="submit" color="bg-yellow-400"
                            text={isSubmitting ? 'Registering...' : 'Register'}/>
                    <Button handler={resetHandler} type="reset" color="bg-stone-300" text="Cancel"/>
                </div>
            </div>
        </Form>
    );
}

export default SignUpForm;
