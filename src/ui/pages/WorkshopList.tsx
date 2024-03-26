import ContainerSmall from '../../features/workshop/ContainerSmall.tsx';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

function WorkshopList() {
  const containers: WorkshopItem[] = useLoaderData() as WorkshopItem[];
  const [page, setPage] = useState(1);

  const sortByIsEnded = (a: WorkshopItem, b: WorkshopItem) => {
    if (a.isEnded && !b.isEnded) return 1;
    if (!a.isEnded && b.isEnded) return -1;
    return 0;
  };

  containers.sort(sortByIsEnded);

  const pagination = 4;
  const start = (page - 1) * pagination;
  const end = start + pagination;
  const paginatedContainers: WorkshopItem[] = containers.slice(start, end);

  return (
    <div className="mt-5 flex w-full flex-col items-center gap-5">
      {paginatedContainers.map((container) => (
        <ContainerSmall key={container._id} container={container} />
      ))}
      <div className="fixed bottom-24 flex gap-2 md:right-10">
        {page > 1 && (
          <button
            onClick={() => {
              setPage(1);
            }}
            className="rounded-md bg-stone-500 p-2 text-white"
          >
            Previous
          </button>
        )}
        {containers.length > end && (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="rounded-md bg-stone-500 p-2 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default WorkshopList;
