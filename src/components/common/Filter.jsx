import filterItems from "../../services/filterItems";

const Filter = ({ filterKeyword, onFilter }) => {
  return (
    <ul className="filter-list flex-row">
      {filterItems.map((f) => (
        <li
          onClick={() => onFilter(f.keyword)}
          key={f.keyword}
          className={
            "filter-item " + (f.keyword === filterKeyword ? "active" : "")
          }
          data-filter-item={f.keyword}
        >
          {f.label}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
