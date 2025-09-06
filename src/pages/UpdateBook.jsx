import React, { useState } from 'react'

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>UpdateBook</div>
  )
}

export default UpdateBook