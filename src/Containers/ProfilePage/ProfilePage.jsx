import  { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    profilePicture: '',
    name: '',
    email: '',
    location: '',
    education: {
      highSchool: '',
      college: '',
    },
    experience: [
      { jobTitle: '', company: '', years: '' },
    ],
    resume: null, // for file upload
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/user-profile')
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: files[0]
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...user.experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setUser(prevUser => ({
      ...prevUser,
      experience: updatedExperience
    }));
  };

  const addExperience = () => {
    setUser(prevUser => ({
      ...prevUser,
      experience: [...prevUser.experience, { jobTitle: '', company: '', years: '' }]
    }));
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('profilePicture', user.profilePicture);
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('location', user.location);
    formData.append('education', JSON.stringify(user.education));
    formData.append('experience', JSON.stringify(user.experience));
    formData.append('resume', user.resume);

    axios.put('/api/user-profile', formData)
      .then(response => {
        setEditing(false);
      })
      .catch(error => {
        setError(error);
      });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-picture-container">
          {user.profilePicture && (
            <img
              src={URL.createObjectURL(user.profilePicture) || user.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
          )}
        </div>
        <h1>{user.name}</h1>
        <button className="btn" onClick={() => setEditing(!editing)}>
          {editing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </header>

      <section className="section">
        <h2>Personal Details</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div>
          <label>High School:</label>
          <input
            type="text"
            name="highSchool"
            value={user.education.highSchool}
            onChange={e => handleChange(e)}
            disabled={!editing}
          />
        </div>
        <div>
          <label>College:</label>
          <input
            type="text"
            name="college"
            value={user.education.college}
            onChange={e => handleChange(e)}
            disabled={!editing}
          />
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        {user.experience.map((exp, index) => (
          <div key={index} className="experience-entry">
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={exp.jobTitle}
              onChange={e => handleExperienceChange(index, e)}
              disabled={!editing}
            />
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={e => handleExperienceChange(index, e)}
              disabled={!editing}
            />
            <label>Years:</label>
            <input
              type="text"
              name="years"
              value={exp.years}
              onChange={e => handleExperienceChange(index, e)}
              disabled={!editing}
            />
          </div>
        ))}
        {editing && <button className="btn" onClick={addExperience}>Add Experience</button>}
      </section>

      <section className="section">
        <h2>Resume</h2>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          disabled={!editing}
        />
      </section>

      {editing && <button className="btn" onClick={handleSave}>Save Changes</button>}
    </div>
  );
};

export default ProfilePage;

*/

