import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { fetchPostsRequest, deletePostRequest } from 'redux/actions/postsActions';
import PostCard from "./PostCard";
import { PostType } from "interfaces/posts/PostType";

interface PostsTableProps {
  setSelectedPost: React.Dispatch<React.SetStateAction<PostType | null>>;
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostsList: React.FC<PostsTableProps> = ({ setSelectedPost, setIsPopupVisible }) => {

  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const handleDeletePost = (postId: number) => {
    dispatch(deletePostRequest({ id: postId }));
  }

  React.useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [ dispatch ]);

  return (
    <div className="wdth100">
      <div className="container postsTable flexDirColumn">
        { posts.map((offer, index) => (
          <PostCard
            key={ index }
            post={ offer }
            openPopupWithPost={ (post) => {
              setSelectedPost(post);
              setIsPopupVisible(true);
            } }
            onDeletePost={ handleDeletePost }
          />
        )) }
      </div>
    </div>
  )
}

export default PostsList;
