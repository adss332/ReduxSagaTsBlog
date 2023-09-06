import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostType } from "interfaces/posts/PostType";
import { createPostRequest, updatePostRequest } from 'redux/actions/postsActions';
import { CreatePostRequestInterface, UpdatePostRequestInterface } from "interfaces/posts/PostsCrudRequests";

interface Props {
  isEditing: boolean;
  onClose: () => void;
  post: PostType | null;
}

const PostPopup: React.FC<Props> = ({ isEditing, onClose, post }) => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState(post ? post.title : 'Unknown');
  const [ body, setBody ] = useState(post ? post.body : 'Unknown');
  const userId = 3;

  const handleSave = () => {
    if (isEditing && post) {
      const data: UpdatePostRequestInterface = {
        postId: post.id,
        title,
        body,
        userId,
      };
      dispatch(updatePostRequest(data));
    } else {
      const data: CreatePostRequestInterface = {
        title,
        body,
        userId
      };
      dispatch(createPostRequest(data));
    }
  };

  return (
    <div>
      <div className="popupOverlay"></div>
      <div className="bookingPopup popup">
        <div className="popupContent">
          <h2 className="popupHeading">{ isEditing ? "Edit Post" : "New Post" }</h2>
          <div className="container popupRow flexDirColumn">
            <div className="mg20">
              <label>Title:</label>
              <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) }/>
            </div>
            <div className="mg20">
              <label>Post Body:</label>
              <textarea value={ body } onChange={ (e) => setBody(e.target.value) }/>
            </div>
          </div>
        </div>
        <div className="popupActions">
          <button className="blackBorderButton" onClick={ onClose }>Cancel</button>
          <button className="blackButton" onClick={ handleSave }>Save</button>
        </div>
      </div>
    </div>
  );
}

export default PostPopup;
