import React, { useState } from 'react'
import { toast } from 'react-toastify';

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [description, setDescription] = useState("");


  // handle update form submit
  const handleUpdateBookSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      toast.warn("Title is required.");
      return;
    };

    if (!category) {
      toast.warn("Category is required.");
      return;
    };

    if (!author) {
      toast.warn("Author is required.");
      return;
    };

    if (!price) {
      toast.warn("Price is required.");
      return;
    };

    if (!stock) {
      toast.warn("Stock is required.");
      return;
    };

    if(!bookCover){
      toast.warn("Book cover is required.");
      return;
    };

    if(!description){
      toast.warn("Description is required.");
      return;
    }

    console.log("Updated successfully.");
  }
  return (
    <div>UpdateBook</div>
  )
}

export default UpdateBook