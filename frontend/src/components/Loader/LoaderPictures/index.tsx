import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPictures = (props: any) => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#945ec0"
        foregroundColor="#6d6a6a"
        {...props}
    >
        <rect x="27" y="41" rx="10" ry="10" width="156" height="156" />
        <rect x="208" y="607" rx="0" ry="0" width="1" height="1" />
        <rect x="411" y="120" rx="0" ry="0" width="0" height="13" />
    </ContentLoader>
)

export default LoaderPictures