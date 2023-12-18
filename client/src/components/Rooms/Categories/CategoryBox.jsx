import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = (label) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };

      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }

    // console.log('clicked',label)
  };

  params.get("category");

  return (
    <div
      onClick={() => handleClick(label)}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <h2 className="text-sm font-medium">{label}</h2>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
  selected: PropTypes.bool,
};

export default CategoryBox;

/**
 *
 * Stay vista
 * part-04
 * 12:19
 *
 */
