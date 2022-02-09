import React, { FC } from 'react'

interface Props {
  percent?: number
}

const BatteryIcon: FC<Props> = ({ percent = 100 }) => {
  const calcWidth = 292.63 * (percent / 100)
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <rect
        width="400"
        height="224"
        x="32"
        y="144"
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="45.7"
        ry="45.7"
      ></rect>
      <rect
        width={calcWidth > 0 ? calcWidth : 0}
        height="114.14"
        x="85.69"
        y="198.93"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="4"
        ry="4"
      ></rect>
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M480 218.67v74.66"
      ></path>
    </svg>
  )
}

export default BatteryIcon
