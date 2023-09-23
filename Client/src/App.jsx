import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  const handleTitleChange = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const handlePhotoChange = (event) => {
    setPost({ ...post, photo: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", post.photo);
    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={handleTitleChange}
        />

        <input type="file" name="photo" onChange={handlePhotoChange} />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;
