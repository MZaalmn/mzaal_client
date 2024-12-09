//hnthytdhymjgfmhfytyuguigh567
//--------------------AddNewsPage.js-----------------------
/*import React, { useState } from "react";
import "./AddNewsPage.css";

const AddNewsPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [mainDescription, setMainDescription] = useState("");
  const [additionalFields, setAdditionalFields] = useState([]); // Store additional fields dynamically

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMainImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageField = () => {
    setAdditionalFields((prevFields) => [
      ...prevFields,
      { type: "image", value: null },
    ]);
  };

  const handleAddDescriptionField = () => {
    setAdditionalFields((prevFields) => [
      ...prevFields,
      { type: "description", value: "" },
    ]);
  };

  const handleFieldChange = (index, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].value = value;
    setAdditionalFields(updatedFields);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        handleFieldChange(index, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", {
      title,
      date,
      mainImage,
      mainDescription,
      additionalFields,
    });
    alert("News has been added (mock)");
    // Reset form
    setTitle("");
    setDate("");
    setMainImage(null);
    setMainDescription("");
    setAdditionalFields([]);
  };

  return (
    <div className="add-news-page">
      <h1>Add News</h1>
      <form onSubmit={handleSubmit} className="add-news-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="main-image">Main Image</label>
          <input
            type="file"
            id="main-image"
            accept="image/*"
            onChange={handleMainImageChange}
            required
          />
          {mainImage && (
            <div className="image-preview">
              <p>Preview:</p>
              <img src={mainImage} alt="Main Preview" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="main-description">Main Description</label>
          <textarea
            id="main-description"
            value={mainDescription}
            onChange={(e) => setMainDescription(e.target.value)}
            placeholder="Enter main description"
            required
          ></textarea>
        </div>

        <div className="additional-fields">
          {additionalFields.map((field, index) => (
            <div key={index} className="form-group">
              {field.type === "image" ? (
                <>
                  <label htmlFor={`image-${index}`}>Additional Image</label>
                  <input
                    type="file"
                    id={`image-${index}`}
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    required
                  />
                  {field.value && (
                    <div className="image-preview">
                      <p>Preview:</p>
                      <img src={field.value} alt={`Preview ${index}`} />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <label htmlFor={`description-${index}`}>
                    Additional Description
                  </label>
                  <textarea
                    id={`description-${index}`}
                    value={field.value}
                    onChange={(e) =>
                      handleFieldChange(index, e.target.value)
                    }
                    placeholder="Enter additional description"
                    required
                  ></textarea>
                </>
              )}
            </div>
          ))}
        </div>

        <div class="from-buttons">
          <button
            type="button"
            className="add-button"
            onClick={handleAddImageField}
          >
            Add Image
          </button>
          <button
            type="button"
            className="add-button"
            onClick={handleAddDescriptionField}
          >
            Add Description
          </button>
        </div>
        <button type="submit" className="submit-button">
          Submit News
        </button>
      </form>
    </div>
  );
};

export default AddNewsPage;


-----------------AddNewsPage.css-----------------------------
/* AddNewsPage.css 
.add-news-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .add-news-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  
  input[type="text"],
  input[type="date"],
  textarea,
  input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    height: 120px;
    resize: vertical;
  }
  
  input[type="file"] {
    padding: 5px;
  }
  
  .image-preview {
    margin-top: 10px;
  }
  
  .image-preview img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .additional-fields {
    margin-top: 20px;
  }
  
  .from-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: space-between;
  }
  
  .add-button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  
  .submit-button {
    padding: 12px 20px;
    background-color: #28a745;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #218838;
  }
  
  .add-news-page .form-group {
    margin-bottom: 1.5rem;
  }
  
  .add-news-page input[type="text"],
  .add-news-page input[type="date"],
  .add-news-page textarea {
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .add-news-page input[type="file"] {
    font-size: 1rem;
  }
  
  .add-news-page .form-group label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .add-news-page .additional-fields {
    margin-top: 30px;
  }
  */
 //54g65h5h5h5gghe,h[15h]hy5export.js rfnu5t2iqfo4fpqub4obf9q za manaihaan goy shvv amjilt guys heduule chadnaa bolgonoo buteenee ardana garnaa6
  