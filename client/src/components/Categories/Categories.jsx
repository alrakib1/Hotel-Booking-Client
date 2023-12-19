import { useSearchParams } from "react-router-dom";

import { categoriesData } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import Container from "../Shared/Container";

const Categories = () => {
  // const [params, setParams] = useSearchParams();

  const arr = useSearchParams();

  const params = arr[0];    
  const category = params.get("category");


  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categoriesData.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
