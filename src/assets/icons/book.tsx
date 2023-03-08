import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BookIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 17V5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v13m14-2H7a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h12v-4Zm-9-9h4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BookIcon