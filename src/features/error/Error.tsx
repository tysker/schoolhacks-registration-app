import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton.tsx';

function Error() {

  const error = useRouteError() as {
    data?: string;
    message?: string;
  };

  const { data, message } = error;

  return (
    <div className="mt-20 text-center text-sm font-bold uppercase tracking-wide text-rose-800 lg:text-xl">
      <h1 style={{ padding: '10px 0 0 0' }}>Something went wrong!</h1>
      <p>{data || message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
