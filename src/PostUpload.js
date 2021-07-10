import React, { useState } from "react";
import { getFirebase } from "./firebase";
import Navbar from "./Navbar";


const labelStyles = {
  display: "block",
  marginBottom: 4
};

const inputStyles = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem"
};

const Create = ({ history }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [secondaryImage, setSecondaryImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");

  const [coverImageAlt, setCoverImageAlt] = useState("");
  const [content, setContent] = useState("");
  const [shortDescription,setShortDescription] = useState("");


  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
  
    const year = now.getFullYear();
  
    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`; // prepend with a 0
    }
  
    const day = now.getDate();
    // if (day < 10) {
    //   day = `0${day}`; // prepend with a 0
    // }
  
    return {
      formatted: `${year}-${month}-${day}`,             // used for sorting
      pretty: now.toLocaleDateString("en-US", options)  // used for displaying
    };
  };
  
  const createPost = () => {
    const date = generateDate();
    const newPost = {
      title,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      slug,
      coverImage,
      coverImageAlt,
      secondaryImage,
      thirdImage,
      shortDescription,
      content
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .set(newPost)
      .then(() => history.push(`/`));
  };
  

  return (
    <div>
       <div className="sticky top-0">
                <Navbar />
            </div>
 <div className=" justify-start ml-20 w-1/2 bg-gray-900 rounded-2xl p20">
      <h1 className="justify-center text-4xl border-b border-white-500">Create a new post here</h1>
      <section style={{ margin: "2rem 0" }}>
        <label style={labelStyles} htmlFor="title-field">
          Title
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="text"
          value={title}
          className="text-black"
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
        />

        <label style={labelStyles}  htmlFor="slug-field">
          Slug
        </label>
        <input
          style={inputStyles}
          id="slug-field"
          type="text"
          value={slug}
          className="text-black"
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-field">
          Cover image URL
        </label>
        <input
          style={inputStyles}
          id="cover-image-field"
          type="text"
          className="text-black"
          value={coverImage}
          onChange={({ target: { value } }) => {
            setCoverImage(value);
          }}
        />

    <label style={labelStyles} htmlFor="cover-image-field-1">
          Secondary image URL
        </label>
        <input
          style={inputStyles}
          id="cover-image-field-1"
          type="text"
          className="text-black"
          value={secondaryImage}
          onChange={({ target: { value } }) => {
            setSecondaryImage(value);
          }}
        />

<label style={labelStyles} htmlFor="cover-image-field-2">
          Third(iary) image URL
        </label>
        <input
          style={inputStyles}
          id="cover-image-field-2"
          type="text"
          className="text-black"
          value={thirdImage}
          onChange={({ target: { value } }) => {
            setThirdImage(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-alt-field-3">
          Cover image alt
        </label>
        <input
          style={inputStyles}
          id="cover-image-alt-field-3"
          type="text"
          value={coverImageAlt}
          className="text-black"
          onChange={({ target: { value } }) => {
            setCoverImageAlt(value);
          }}
        />

        <label style={labelStyles} htmlFor="short-description">
          Brief description
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="short-description"
          type="text"
          value={shortDescription}
          className="text-black"
          onChange={({ target: { value } }) => {
            setShortDescription(value);
          }}
        />

<label style={labelStyles} htmlFor="content-field">
          Content
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={content}
          className="text-black"
          onChange={({ target: { value } }) => {
            setContent(value);
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem"
            }}
            onClick={createPost}
          >
            Create
          </button>
        </div>
      </section>
    </div>
    </div>
   
  );
};

export default Create;
