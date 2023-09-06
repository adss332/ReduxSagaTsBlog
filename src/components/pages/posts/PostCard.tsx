import React from 'react';
import { PostType } from "interfaces/posts/PostType";

interface PostRowProps {
  post: PostType;
  openPopupWithPost: (post: PostType) => void;
  onDeletePost: (postId: number) => void;
}

const PostCard: React.FC<PostRowProps> = (
  {
    post,
    openPopupWithPost,
    onDeletePost
  }) => {

  const truncateString = (description: string, maxLength: number = 80): string => {
    if (description.length <= maxLength) {
      return description;
    }

    return `${ description.substring(0, maxLength) }...`;
  }

  return (
    <div className={ "container postRow flexAlignCenter" }>
      <div className={ "col title" }>{ truncateString(post.title, 10) }</div>
      <div className={ "col description" }>{ truncateString(post.body) }</div>
      <div className={ "col author" }>by { post.userId % 2 === 0 ? 'Donald' : 'Alex' }</div>
      <div className={ "container optionsCol col flexAlignCenter flexJustEnd" }>
        <img src={ `${ process.env.PUBLIC_URL }/icons/menu.png` }/>
        <div className={ 'container postDropdownMenu flexDirColumn' }>
          <div className={ 'menuItem container flexAlignCenter' } onClick={ () => {
            openPopupWithPost(post);
          } }>
            <img src={ `${ process.env.PUBLIC_URL }/icons/edit.svg` }/>
            Edit
          </div>
          <div className={ 'menuItem container flexAlignCenter' } onClick={ () => {
            onDeletePost(post.id);
          } }>
            <img src={ `${ process.env.PUBLIC_URL }/icons/remove.svg` }/>
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;