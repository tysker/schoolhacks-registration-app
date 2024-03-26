import { useSearchParams } from 'react-router-dom';
import { eachWordUppercase } from '../../utils/helpers.ts';

function Confirmation() {
  const [params] = useSearchParams();
  const nameArray = params.get('name')!.trim()!.split('_');
  const name = eachWordUppercase(nameArray);
  const email = params.get('email')!.trim();
  const workshopArray = params.get('workshop')!.split('_');
  const workshop = eachWordUppercase(workshopArray);

  return (
    <div className="dark:text-white">
      <div className="ml-6">
        <p className="mb-6 text-2xl">
          Thanks <span className="text-rose-600">{name}</span>
        </p>
        <p className="mb-4 font-light">
          You are now signed up for the{' '}
          <span className="font-medium text-rose-600">{workshop}</span>!
        </p>
        <p className="font-light">
          We have sent your confirmation to your e-mail address{' '}
          <span className="mt-1 block font-medium lowercase text-rose-600">
            {email}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
