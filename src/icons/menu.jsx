import * as React from "react"

function MenuIcon(props) {
  return (
    <svg 
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>{"Menu"}</title>
      <g id="Menu">
        <path d="m2 7h28a2 2 0 0 0 0-4h-28a2 2 0 0 0 0 4z"
        />
        <path d="m30 14h-28a2 2 0 0 0 0 4h28a2 2 0 0 0 0-4z"
        />
        <path d="m30 25h-28a2 2 0 0 0 0 4h28a2 2 0 0 0 0-4z"
        />
      </g>
    </svg>
  )
}

export default MenuIcon
