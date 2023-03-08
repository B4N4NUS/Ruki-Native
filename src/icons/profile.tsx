import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIcon = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M12 11a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM3 22v-4a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v4a1 1 0 0 1-2 0Z" />
  </Svg>
)

export default ProfileIcon