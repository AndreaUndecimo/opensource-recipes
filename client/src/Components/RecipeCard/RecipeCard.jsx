import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { getAllRecipeImages } from "../../ApiServices/ApiClientService";

const RecipeCard = (props) => {
  const [imageIds, setImageIds] = useState([]);

  useEffect(() => {
    getAllRecipeImages(parseInt(props.id)).then((res) => setImageIds(res.data));
  }, []);

  return (
    <div>
      <h1>Hello, I am recipe {props.id}</h1>
      {imageIds &&
        imageIds.map((imageId, index) => (
          <Image
            key={index}
            cloudName="drf0x6usa"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        ))}
    </div>
  );
};

export default RecipeCard;
