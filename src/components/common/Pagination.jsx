import { range } from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = range(1, pagesCount + 1);

  if (pagesCount === 1) return;

  return (
    <ul className="pagination flex-row">
      {pages.map((page) => (
        <li
          key={page}
          className={"page-item " + (currentPage === page ? "active" : "")}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
