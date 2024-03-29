import WorkshopContainer from '../../features/workshop/WorkshopContainer.tsx';
import {useLoaderData} from 'react-router-dom';
import {useState} from 'react';
import Pagination from "../Pagination.tsx";

function WorkshopList() {
    const containers: WorkshopItem[] = useLoaderData() as WorkshopItem[];
    const [page, setPage] = useState(1);

    const sortByIsEnded = (a: WorkshopItem, b: WorkshopItem) => {
        if (a.isEnded && !b.isEnded) return 1;
        if (!a.isEnded && b.isEnded) return -1;
        return 0;
    };

    containers.sort(sortByIsEnded);

    const pagination = 6;
    const start = (page - 1) * pagination;
    const end = start + pagination;
    const paginatedContainers: WorkshopItem[] = containers.slice(start, end);

    return (
        <div className="mt-5 flex w-full flex-col items-center gap-5">
            {paginatedContainers.map((container) => (

                    <WorkshopContainer key={container._id} container={container}/>

            ))}
            <Pagination containerLength={containers.length} page={page} end={end} changePage={setPage}/>
        </div>
    );
}

export default WorkshopList;
