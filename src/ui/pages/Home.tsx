import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="my-20 text-center font-semibold">
      <h1 className="mb-10 text-4xl underline md:text-3xl lg:text-8xl dark:text-stone-300">
        School<span className="text-rose-600">Hacks</span>
      </h1>
      <Link to="/workshops" className="button">
        Workshop List
      </Link>
    </div>
  );
}

export default Home;
