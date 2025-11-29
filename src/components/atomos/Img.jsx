import styled from "styled-components";

export const ImgContainer = styled.img`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    border-radius: 16px;
    object-fit: ${(props) => props.objectFit || "cover"};
    box-shadow: "none";
`