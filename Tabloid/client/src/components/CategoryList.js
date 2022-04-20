import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../modules/categoryManager";
import { Link, useHistory } from "react-router-dom";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then((categories) => setCategories(categories));
  };

  const history = useHistory();

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id)
      .then(getCategories())
      .then((c) => {
        history.push("/category");
      });
  };

  const deleteConfirmation = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        handleDelete(id);
    } else {
        history.push("/category")
    }
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Categories</th>
          </tr>
        </thead>
        {categories.map((category) => {
          return (
            <tr>
              <td>{category.name} </td>
              <td>
                <Link to={`/category/${category.id}`}>
                  <button id={category.id} key={category.id}>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => deleteConfirmation(category.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      <br />
      <Link to="/category/add">Create Category</Link>
    </div>
  );
};