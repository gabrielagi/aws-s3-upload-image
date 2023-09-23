import React, { useState } from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();
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
