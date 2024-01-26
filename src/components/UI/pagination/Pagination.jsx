import { usePagination } from "../../../hooks/usePagination";

function Pagination({totalPage, page, changePage}) {
    let pagesArray = usePagination(totalPage);

    return (
        <div className='page_wrapper'>
            {pagesArray.map((p) => {
            return  <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p
                            ? "page_current "
                            : "page"}
                    >
                        {p}
                    </span>
            })}
        </div>
    );
}

export default Pagination;