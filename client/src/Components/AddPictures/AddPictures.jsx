import React, { useContext, useState } from "react";
import { ReactComponent as PlusSign } from "../../assets/plus.svg";
import dotenv from "dotenv";

import "./AddPictures.css";
import { postImageToCloudinary } from "../../ApiServices/ApiClientService";
import { StateContext } from "../../globals/globalStore.reducer";
import Alert from "../Alert/Alert";

dotenv.config();

const AddPictures = () => {
  const { state } = useContext(StateContext);

  const [selectedFile, setSelectedFile] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile([...selectedFile, reader.result]);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (selectedFile.length === 0) return;
    selectedFile.forEach((fileUrl) =>
      uploadImage({ base64EncodedImage: fileUrl, recipe: state.recipe })
    );
  };

  const uploadImage = async ({ base64EncodedImage, recipe }) => {
    try {
      await postImageToCloudinary({ base64EncodedImage, recipe });
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  return (
    <div className="img_wrapper">
      <div className="title">
        <h1>Upload an Image</h1>
      </div>
      <form className="form_images" onSubmit={handleSubmitFile}>
        <ul className="image_grid">
          {selectedFile &&
            selectedFile.length <= 4 &&
            selectedFile.map((fileSrc) => (
              <li className="pics" key={fileSrc}>
                <img src={fileSrc} alt="chosen" className="images_thumbs" />
              </li>
            ))}
          {selectedFile.length < 4 && (
            <>
              <input
                type="file"
                onChange={handleFileInputChange}
                name="extra_files"
                id="extra_files"
                className="extra_files"
                multiple={true}
              />
              <label htmlFor="extra_files">
                <PlusSign />
              </label>
            </>
          )}
        </ul>
        <div className="submit_pic_btn">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPictures;
