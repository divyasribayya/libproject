import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategories = () => {
  const { subCategory } = useParams(); // Get the subCategory param from the URL

  return (
    <div>
      <h1>SubCategory: {subCategory}</h1>
      {/* Render the content for the subCategory */}
      <p>Content for the {subCategory} subcategory.</p>
    </div>
  );
};

export default SubCategories;
