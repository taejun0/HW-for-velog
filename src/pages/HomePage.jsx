import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Link to="detail/1">1번 페이지</Link>
      <Link to="detail/3">2번 페이지</Link>
      <Link to="detail/3">3번 페이지</Link>
    </div>
  );
}

export default HomePage;
