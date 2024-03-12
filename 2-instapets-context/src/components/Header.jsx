import { useContext } from "react";
import InstagramContext from "../context/InstagramContext";

const Header = () => {
  const contextValues = useContext(InstagramContext)

  return (
    <header>
      <h1>My Pet Pics</h1>
      <h2>My pictures have been liked {contextValues.totalLikes} times!</h2>
    </header>
  );
};

export default Header;