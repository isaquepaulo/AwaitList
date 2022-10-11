import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import ReactPaginate from "react-paginate";

type Props = {
    forcePage?: number;
    pageCount: number;
    range: number;
    onChange?: (pageNumber: number) => void;
};

const Pagination = ({ pageCount, range, onChange, forcePage }: Props) => {
    return (
        <ReactPaginate
            forcePage={forcePage}
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName="pagination-container"
            pageLinkClassName="pagination-item"
            breakClassName="pagination-item"
            previousClassName="arrow-previous"
            nextClassName="arrow-next"
            activeLinkClassName="pagination-link-active"
            disabledClassName="arrow-inactive"
            onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
            previousLabel={
                <div className="pagination-arrow-container">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            }
            nextLabel={
                <div className="pagination-arrow-container">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            }
        />
    );
};

export default Pagination;
