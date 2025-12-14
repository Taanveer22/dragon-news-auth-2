import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  // console.log(categories);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">All Category</h1>
      <div className="flex flex-col gap-2">
        {categories.map((itemCategory) => {
          return (
            <NavLink
              to={`category/${itemCategory.category_id}`}
              key={itemCategory.category_id}
              className="btn"
            >
              {itemCategory.category_name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSide;
