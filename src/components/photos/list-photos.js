import React, {useState} from "react"
import styled from 'styled-components'
import Photo from "./photo/photo"
import Modal from "./modal/modal"
import back from "../../images/back.png"
import {StyledLinkBack} from "../UI/links"

const DivPhotos = styled.div`
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  
    @media screen and (max-width: 1020px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    }
    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 5px;
    }
    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 470px) {
        grid-template-columns: 1fr 1fr;
    }
`

const ListPhotos = (props) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const filterPhoto = props.photos.filter(photo => photo.albumId == props.match.params.albumId)

    const changePhoto = (id, side) => {
        let photo
        side == 'next' ?
            photo = filterPhoto.find(photo=> photo.id == id + 1) :
            photo = filterPhoto.find(photo=> photo.id == id - 1)

        setSelectedPhoto(photo)
    }

    const renderPhoto = filterPhoto.map(photo => {
        return (
            <div key={photo.id}>
                <Photo photo={photo}  setSelectedPhoto={setSelectedPhoto}/>
            </div>
        )
    })

    return (
        <div>
            <StyledLinkBack to={`/${props.match.params.userid}`}>
                <img src={back} alt=""/>
                <span>Вернуться к списку альбомов</span>
            </StyledLinkBack>
            <DivPhotos>
                {renderPhoto}
            </DivPhotos>
            { selectedPhoto && (
                    <Modal selectedPhoto={selectedPhoto} changePhoto={changePhoto} setSelectedPhoto={setSelectedPhoto}/>
                )
            }
        </div>
    )
}
export default ListPhotos