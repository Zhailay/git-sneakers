import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="211" rx="0" ry="0" width="280" height="31" /> 
    <rect x="1" y="253" rx="0" ry="0" width="280" height="75" /> 
    <rect x="5" y="347" rx="0" ry="0" width="113" height="30" /> 
    <rect x="173" y="339" rx="0" ry="0" width="106" height="42" /> 
    <rect x="6" y="17" rx="0" ry="0" width="267" height="178" />
  </ContentLoader>
)

export default Skeleton