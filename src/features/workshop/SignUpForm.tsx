import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

interface SignUpFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  workshop: string;
  workshop_id?: string;
}

function SignUpForm({ setShowModal, workshop, workshop_id }: SignUpFormProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formError = useActionData() as string;

  const hiddenValue = {
    id: workshop_id,
    workshop_name: workshop,
  };

  return (
    <Form
      className="h-auto w-80 bg-stone-100 p-12 lg:w-96 dark:bg-stone-800"
      method="POST"
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
          className="focus:shadow-outline h-[50px] w-full appearance-none rounded-full px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          name="email"
          id="email"
          type="email"
          placeholder="email"
        />
        {formError! && (
          <p className="text-xs italic text-red-500">{formError}</p>
        )}
      </div>
      <div className="flex items-center justify-around">
        <input
          className="hidden"
          name="workshop"
          id="workshop"
          type="text"
          defaultValue={JSON.stringify(hiddenValue)}
        />
        <button
          className="focus:shadow-outline rounded-full bg-yellow-400 px-4 py-2 text-xl font-bold text-stone-800 hover:bg-yellow-300 focus:outline-none"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="focus:shadow-outline rounded-full bg-stone-200 px-4 py-2 text-xl font-bold text-stone-800 hover:bg-stone-300 focus:outline-none"
          type="reset"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

export default SignUpForm;
