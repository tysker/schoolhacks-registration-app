import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import SignUpModal from '../../features/workshop/SignUpModal.tsx';
import SignUpForm from '../../features/workshop/SignUpForm.tsx';
import Button from '../../features/workshop/Button.tsx';

function Workshop() {
  const container: WorkshopItem = useLoaderData() as WorkshopItem;
  const [showModal, setShowModal] = useState(false);

  const { _id, title, description, date, weekday, time, location, image } =
    container;
  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex w-full flex-col gap-4 dark:text-stone-200">
      <img
        src={image}
        alt={title}
        className="mx-4 mb-6 h-[240px] w-[350px] self-center rounded-2xl border-4 border-stone-500"
      />
      <div className="mb-6 ml-4 text-2xl font-black leading-relaxed tracking-wide underline lg:text-4xl">
        {title}
      </div>
      <div className="mb-2 ml-4 text-lg font-bold lg:text-xl">
        Date and time{' '}
        <span className="block text-sm font-semibold lg:pt-2 lg:text-xl">
          {weekday}, {date} | {time}
        </span>
      </div>
      <div className="mb-2 ml-4 text-lg font-bold lg:text-xl">
        Location{' '}
        <span className="block text-sm font-semibold lg:pt-2 lg:text-xl">
          {location}
        </span>
      </div>
      <div className="mb-4 ml-4 font-medium leading-loose lg:pt-2 lg:text-xl">
        {description}
      </div>
      <div className="self-center">
        <SignUpModal show={showModal}>
          <SignUpForm
            setShowModal={setShowModal}
            workshop={title}
            workshop_id={_id}
          />
        </SignUpModal>
        <Button handler={handleClose} color="bg-yellow-400" text="Sign Up" />
      </div>
    </div>
  );
}

export default Workshop;
