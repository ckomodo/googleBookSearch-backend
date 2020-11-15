import React, { useEffect } from "react";
import API from "../../Utils/API.js";
import Container from "../../components/container";
import Savedcontainer from "../../components/Savedcontainer";

export default function Saved() {
  useEffect(() => {
    API.getBooks().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Container />
      <Savedcontainer />
    </div>
  );
}
