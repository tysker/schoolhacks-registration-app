
function Pagination({containerLength, page, end, changePage}: {containerLength: number, page: number, end: number, changePage: (page: number) => void}) {


    return (
        <div className="fixed bottom-24 flex gap-2 md:right-10">
            {page > 1 && (
                <button
                    onClick={() => {
                        changePage(1);
                    }}
                    className="rounded-md bg-stone-500 p-2 text-white"
                >
                    Previous
                </button>
            )}
            {containerLength > end && (
                <button
                    onClick={() => {
                        changePage(page + 1);
                    }}
                    className="rounded-md bg-stone-500 p-2 text-white"
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination;