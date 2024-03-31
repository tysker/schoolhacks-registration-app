import Button from "../features/workshop/Button.tsx";

function Pagination({containerLength, page, end, changePage}: {containerLength: number, page: number, end: number, changePage: (page: number) => void}) {


    return (
        <div className="my-4">
            {page > 1 && (
                <Button handler={() => changePage(page - 1)} text="Previous" color="bg-yellow-400"/>
            )}
            {containerLength > end && (<Button handler={ () => changePage(page + 1)} text="Next" color="bg-yellow-400"/>)}
        </div>
    );
}

export default Pagination;