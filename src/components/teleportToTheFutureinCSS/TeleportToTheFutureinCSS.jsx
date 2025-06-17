import React from "react"
import "./TeleportToTheFutureinCSS.css"

const TeleportToTheFutureinCSS = () => {
  return (
    <div className="slider">
      <ul
        style="
          --time:  9s;
          --quantity: 9;"
      >
        <li style="--index: 1">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 2">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 3">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 4">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 5">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 6">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 7">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 8">
          <img src="/assets/slider.jpg" alt="" />
        </li>
        <li style="--index: 9">
          <img src="/assets/slider.jpg" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default TeleportToTheFutureinCSS
