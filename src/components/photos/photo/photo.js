import React from "react"
import styled from 'styled-components'

const DivPhoto = styled.div`
    border-radius:10px;
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
    cursor:pointer;

    img {
        min-width: 100%;
        min-height: 100%;
        max-width: 150%;
        position: absolute;
        top: 0;
        left: 0; 
    }
    :hover {
        transform:scale(1.02) translateY(-3px);
        box-shadow: 0px 0px 11px 3px rgba(255,255,255,1);
    }
`

const Photo = (props) => {
    return (
        <DivPhoto onClick={() => props.setSelectedPhoto(props.photo)}>
            <img src={`${props.photo.thumbnailUrl}`} alt=""/>
        </DivPhoto>
    )
}
export default Photo