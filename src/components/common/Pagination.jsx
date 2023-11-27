import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return;

  return (
    <ul className="pagination flex-row">
      {pages.map((page) => (
        <li key={page} className="page-item">
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
