import React, { useState } from 'react';
import './PostStory.css' // Import your CSS file for styling

function CreateStory() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const response = await fetch('http://localhost:8080/createNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to create note');
      }

      // Optionally, handle success response
      console.log('Note created successfully');
    } catch (error) {
      console.error('Error creating note:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container">
      <h1>Create a Note</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isCreating}>
          {isCreating ? 'Creating...' : 'Create Note'}
        </button>
      </form>
    </div>
  );
}

export default CreateStory;
