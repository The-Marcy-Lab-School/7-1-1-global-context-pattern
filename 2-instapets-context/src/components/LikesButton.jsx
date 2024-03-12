import { useState, useContext } from 'react';
import InstagramContext from "../context/InstagramContext";

const LikesButton = () => {
  const [likes, setLikes] = useState(0);

  const contextValues = useContext(InstagramContext);

  const handleClick = () => {
    contextValues.incrementTotalLikes();
    setLikes(likes + 1)
  }

  return (
    <div className="likes-container">
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  )
}

export default LikesButton;