import React from "react"
import styled from 'styled-components'

const DivAlbum = styled.div`
    border: 1px solid #696969;
    border-radius: 10px;
    overflow: hidden;
    font-size:14px;
    height: 0;
    padding: 50% 0;
    position: relative;
    box-shadow: 2px 0px 10px 0px #000000;
    >div {
        display: flex;
        padding:10px;
        flex-direction:column;
        box-sizing:border-box;
        position: absolute; 
        background: rgba(0, 0, 0, 0.5); 
        color: #f1f1f1; 
        height: 35%;
        width: 100%;
        border-top-radius: 8px;
        justify-content: space-between;
        bottom:0;
        >div {
            align-self:flex-end;
        }
    }
    
    img{
        min-width: 100%;
        min-height: 100%;
        max-width: 150%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    :hover {
        transform:scale(1.02) translateY(-2px);
        box-shadow: 0px 1px 8px 3px #ffffff96;
    }
    
    @media screen and (max-width: 1200px) {
        font-size:14px;
    }
    @media screen and (max-width: 700px) {
        h3{
           font-size:16px;
        }
    }
    
    @media screen and (max-width: 470px) {
        h3{
           font-size:14px;
        }
    }
`

const Album = (props) => {
    return (
        <DivAlbum>
            <img src={props.coverAlbums[0].thumbnailUrl} alt=""/>
            <div>
                <h3>{props.album.title}</h3>
                <div>Photos: {props.coverAlbums.length}</div>
            </div>
        </DivAlbum>
    )
}
export default Album