import React, { useState } from 'react'
import "../css/publishbook.css"
import { toast } from 'react-toastify';

const PublishBook = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [description, setDescription] = useState("");


  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if(!title){
      toast.warn("Title is required.");
      return;
    };
    
    if(!category){
      toast.warn("Category is required.");
      return;
    };

    if(!author){
      toast.warn("Author is required.");
      return;
    };

    if(!price){
      toast.warn("Price is required.");
      return;
    };

    if(!stock){
      toast.warn("Stock is required.");
      return;
    };

    if(!bookCover){
      toast.warn("Book Cover is required.");
      return;
    };

    if(!description){
      toast.warn("Description is required.");
      return;
    };

    
  };

  return (
    <div>

      <form className="publish-book-form" onSubmit={handleFormSubmit}>
        <div className="form-header">
          <h2>Publish A New Book </h2>
        </div>

        <div className="form-body">

          <div className="form-group">
            <label className="form-label">Book Title :</label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-input" placeholder="Enter Book Title" />
          </div>

          <div class="form-group">
            <label for="bookCategory">Select Book Category :</label>
            <select class="form-control" value={category} onChange={(e)=>{setCategory(e.target.value)}}  id="bookCategory" name="category">
              <option value="">-- Choose a Category --</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="mystery">Mystery & Thriller</option>
              <option value="romance">Romance</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="biography">Biography & Memoir</option>
              <option value="self-help">Self-Help</option>
              <option value="history">History</option>
              <option value="philosophy">Philosophy</option>
              <option value="psychology">Psychology</option>
              <option value="business">Business & Economics</option>
              <option value="education">Education & Learning</option>
              <option value="technology">Technology & Programming</option>
              <option value="health">Health & Fitness</option>
              <option value="travel">Travel & Adventure</option>
              <option value="poetry">Poetry</option>
              <option value="children">Children’s Books</option>
              <option value="young-adult">Young Adult</option>
              <option value="religion">Religion & Spirituality</option>
              <option value="art">Art & Photography</option>
              <option value="cookbook">Cookbooks & Food</option>
              <option value="comics">Comics & Graphic Novels</option>
              <option value="law">Law</option>
              <option value="science">Science & Research</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Author :</label>
            <input value={author} onChange={(e)=>{setAuthor(e.target.value)}} type="text" className="form-input" placeholder="Enter Author Name" />
          </div>

          <div className="form-group">
            <label className="form-label">Price :</label>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-input" placeholder="Enter Book Price" />
          </div>

          <div className="form-group">
            <label className="form-label">Stock :</label>
            <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} className="form-input" placeholder="Enter Book Stock" />
          </div>



          <div className="form-group">
            <label className="form-label">Upload Book Cover :</label>
            <input type="file" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Description :</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="form-input" placeholder="Enter Book Description"></textarea>
          </div>

        </div>

        <div className="form-footer">
          <div className="form-btns">
            <button type='submit'>Publish</button>
          </div>
        </div>
      </form >
    </div >
  )
}

export default PublishBook