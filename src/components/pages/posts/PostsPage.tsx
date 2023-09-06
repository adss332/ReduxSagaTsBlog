import React, { useState } from 'react';
import PostsList from "./PostsList";
import AddBookingPost from './AddPostButton';
import PostPopup from './PostPopup';
import { PostType } from "interfaces/posts/PostType";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const PostsPage: React.FC = () => {

  const [ isPopupVisible, setIsPopupVisible ] = useState(false);
  const [ selectedPost, setSelectedPost ] = useState<PostType | null>(null);
  const [ isEditing, setIsEditing ] = useState(true);

  const successMessage = useSelector((state: RootState) => state.posts.successMessage);
  const error = useSelector((state: RootState) => state.posts.error);

  const onClose = () => {
    setIsEditing(true);
    setSelectedPost(null);
    setIsPopupVisible(false);
  }

  React.useEffect(() => {
    if (!error && successMessage) {
      toast.success(successMessage);
      onClose();
    } else if (error && !successMessage) {
      toast.error(error);
      onClose();
    }
  }, [ error, successMessage ]);

  return (
    <div>
      <div className="container adminPanelContainer">
        <div className="postsArea flexDirColumn container">
          <AddBookingPost onClick={ () => {
            setIsEditing(false);
            setIsPopupVisible(true);
          } }/>
          <PostsList
            setSelectedPost={ setSelectedPost }
            setIsPopupVisible={ setIsPopupVisible }
          />
          {
            isPopupVisible &&
              <PostPopup
                  isEditing={ isEditing }
                  onClose={ onClose }
                  post={ selectedPost }
              />
          }
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;