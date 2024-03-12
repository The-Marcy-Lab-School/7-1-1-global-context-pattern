import LikesButton from './LikesButton'

const InstagramPost = ({ picture }) => {
  return (
    <li className="insta-pic">
      <img alt={picture.caption} src={picture.src} />
      <p>{picture.caption}</p>
      <LikesButton />
    </li >
  );
};

export default InstagramPost;