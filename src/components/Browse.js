import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const userD = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (userD === null) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
