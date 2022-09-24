import React from "react"
import ContentLoader from "react-content-loader"

const LoaderCharacter = (props: any) => (
    <ContentLoader
        speed={1}
        width={500}
        height={500}
        viewBox="0 0 500 500"
        backgroundColor="#945ec0"
        foregroundColor="#6d6a6a"
        {...props}
    >
        <rect x="0" y="60" rx="10" ry="10" width="252" height="156" />
        <rect x="208" y="607" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
)

export default LoaderCharacter