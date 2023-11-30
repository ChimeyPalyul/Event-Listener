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
   <div className='home'>
     <h1>Home</h1>
     <button className='toggle-button' onClick={toggleForm}>Create an Account</button>
     {showForm && (
       <form className='toggle-create-account' key={formKey} onSubmit={handleSubmit}>
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
     <div className='homeP'>
       <p>
         Welcome to Event Listener
       </p>
       <p>

         Step into the world of meaningful connections and community engagement with Event Listener, your gateway to volunteer opportunities that resonate with your passions and skills.
       </p>

       <p>
         Why Join Event Listener?
       </p>

      <p>
         Event Listener is more than just a volunteer platform; it's a community of changemakers, a hub for personal growth, and a catalyst for positive impact. Here's why you should join:
      </p>
      <p>
         Amplify Your Impact: Discover a vast array of volunteer opportunities aligned with your interests, allowing you to make a tangible difference in your community.
      </p>
      <p>
         Embrace Personal Growth: Embark on a journey of continuous learning and skill development as you engage in diverse volunteer experiences.
      </p>
      <p>
         Forge Meaningful Connections: Connect with like-minded individuals, build lasting relationships, and strengthen your community bonds through shared experiences.
      </p>
      <p>
         Experience Personal Fulfillment: Volunteerism is a source of profound satisfaction and purpose. Immerse yourself in the joy of making a difference and enriching your own life.
       </p>

       <p> 
         Become an Event Listener
       </p>
       <p>
         Getting started as an Event Listener is simple:
       </p>
       <p>
         Explore Opportunities: Browse our extensive database of volunteer opportunities to find those that match your passions and skills.
        </p>

        <p>
         Create Your Profile: Craft a compelling volunteer profile that highlights your skills, experiences, and interests. This will attract organizations seeking your expertise.

         Connect with Organizations: Reach out to organizations directly to express your interest in volunteering. Most organizations have easily accessible contact information and online forms.
       </p>

       <p>
         Join the Movement of Change
       </p>
       <p>
         We invite you to take the first step and become an Event Listener. Your contributions, no matter how big or small, can create a ripple effect of positive change. Together, we can transform our communities and make a lasting impact on the world.
      </p>
      <p>
         Embrace the Spirit of Volunteering
      </p>
      <p>
         Volunteering isn't just about giving back; it's about enriching your own life. Embrace the spirit of volunteering, open your heart, and discover the joy of making a difference.
       </p>
     </div>
   </div>
 )
}

export default Home;

