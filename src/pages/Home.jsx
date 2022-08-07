import { useEffect, useState } from "react";
import { logoutUser, userObserver } from "../helpers/firebase";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <div className="home border-2 border-red-700 ">
      <button onClick={() => logoutUser()}>LOGOUT</button>
    </div>
  );
};

export default Home;