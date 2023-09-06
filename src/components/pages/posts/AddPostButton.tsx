import React from 'react';

interface AddPostProps {
  onClick: () => void;
}

const AddBookingPost: React.FC<AddPostProps> = ({ onClick }) => {
  return <button className="blackButton mg20" onClick={onClick}>Add Post</button>;
}

export default AddBookingPost;