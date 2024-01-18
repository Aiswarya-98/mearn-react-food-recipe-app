import React from "react"
import "./header.css"

function Header() {
  return (
    <div className="header-Img">
      <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?w=996&t=st=1705172549~exp=1705173149~hmac=e877ea53c16b75129c86b6cf44047b1b2bc586bdbfd78351b6a13c811480f54a" style={{ width: "100%", height: "800px" }} />

      <div className="header-content">
        <h1>
          <b>GOURMET PALATE HAVEN</b>
        </h1>
        <p>Welcome to Gourmet Palate Haven, your culinary sanctuary for gastronomic delights! </p>
      </div>
    </div>
  )
}

export default Header
