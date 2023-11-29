import React, { useState } from 'react';

const Home = () => {
 const [showForm, setShowForm] = useState(false);
 const [formData, setFormData] = useState({
  username: '',
  password: '',
  name: '',
  email: '',
  role: ''
 });
 const [formKey, setFormKey] = useState(Date.now());

 const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
 }

 const toggleForm = () => {
  setShowForm(!showForm);
 }

 const handleSubmit = (event) => {
  event.preventDefault();
  fetch('/volunteers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(() => {
    setFormKey(Date.now());
  })
  .then(() => toggleForm())
  .catch(error => {
    console.error('Error:', error);
  });
 }

 return (
 <div>
   <h1>Home</h1>
   <button onClick={toggleForm}>Create an Account</button>
   {showForm && (
     <form key={formKey} onSubmit={handleSubmit}>
       <label>
         Username:
         <input type="text" name="username" onChange={handleChange} />
       </label>
       <label>
         Password:
         <input type="password" name="password" onChange={handleChange} />
       </label>
       <label>
         Name:
         <input type="text" name="name" onChange={handleChange} />
       </label>
       <label>
         Email:
         <input type="email" name="email" onChange={handleChange} />
       </label>
       <label>
         Role:
         <select name="role" onChange={handleChange}>
           <option value="">Select a role</option>
           <option value="Admin">Admin</option>
           <option value="Volunteer">Volunteer</option>
         </select>
       </label>
       <input type="submit" value="Submit" />
     </form>
   )}
 </div>
 )
}

export default Home;
