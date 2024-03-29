import { useNavigate } from 'react-router-dom';

function WorkshopContainer({ container }: { container: WorkshopItem }) {
  const { _id, image, title, weekday, time, location, price, isEnded, users } =
    container;

  const navigate = useNavigate();

  const clickHandler = () => {
    if (isEnded) return;
    navigate(`/${_id}`);
  };

  return (
    <div
      onClick={clickHandler}
      className={`flex w-full ${isEnded ? 'cursor-pointer:none' : 'cursor-pointer'} ${isEnded && 'bg-rose-400'} rounded-2xl shadow-md transition-colors duration-500 hover:bg-yellow-300 dark:text-stone-200 dark:hover:bg-stone-700`}
    >
      <img
        className="m-4 h-[100px] w-[100px] rounded-2xl border-4 border-stone-500"
        src={image}
        alt={title}
      />
      <div className="relative right-[40px] top-[25px] text-sm font-light text-stone-100">
        {users.length}
      </div>
      <div className="mt-2 flex flex-col">
        <div className={`mb-2 text-lg font-bold̈́ ${isEnded && "line-through"}`}>
          {title.length > 25 ? title.slice(0, 24) + '...' : title}
        </div>
        <div className="mb-1 text-sm font-light">
          {weekday} | {time}
        </div>
        <div className="mb-2 text-sm font-light">{location}</div>
        <div className={`mb-1 text-sm font-bold ${isEnded && "text-rose-800"}`}>
          {isEnded ? 'ended' : `price: ${price}`}
        </div>
      </div>
    </div>
  );
}

export default WorkshopContainer;
