import React, { useContext, useState } from "react";
import { ReactComponent as PlusSign } from "../../assets/plus.svg";
import dotenv from "dotenv";

import "./AddPictures.css";
import { postImageToCloudinary } from "../../ApiServices/ApiClientService";
import { StateContext } from "../../globals/globalStore.reducer";

dotenv.config();

const AddPictures = () => {
  const { state } = useContext(StateContext);

  const [fileInputState, setFileInputState] = useState("");
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
    // setFileInputState(e.target.value);
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    console.log("hey");
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage({ base64EncodedImage: reader.result, title: state.title });
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async ({ base64EncodedImage, title }) => {
    try {
      await postImageToCloudinary({ base64EncodedImage, title });
      setFileInputState("");
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
              <li className="pics">
                <img src={fileSrc} alt="chosen" style={{ height: "250px" }} />
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
        {/* <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
          disabled={selectedFile.length >= 4}
          multiple={true}
        /> */}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPictures;
