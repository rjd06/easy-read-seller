import React from 'react'
import "../css/publishbook.css"

const PublishBook = () => {
  return (
    <div>

      <form className="publish-book-form">
        <div className="form-header">
          <h3>Publish A New Book </h3>
        </div>

        <div className="form-body">

          <div className="form-group">
            <label className="form-label">Book Title :</label>
            <input type="text" className="form-input" placeholder="Enter Book Title" />
          </div>

          <div class="form-group">
            <label for="bookCategory">Select Book Category :</label>
            <select class="form-control" id="bookCategory" name="category">
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
            <input type="text" className="form-input" placeholder="Enter Author Name" />
          </div>

          <div className="form-group">
            <label className="form-label">Price :</label>
            <input type="text" className="form-input" placeholder="Enter Book Price" />
          </div>
          <div className="form-group">
            <label className="form-label">Stock :</label>
            <input type="text" className="form-input" placeholder="Enter Book Stock" />
          </div>



          <div className="form-group">
            <label className="form-label">Upload Book Cover :</label>
            <input type="file" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Description :</label>
            <textarea className="form-input" placeholder="Enter Book Description"></textarea>
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