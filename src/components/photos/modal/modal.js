import React from "react"
import styled from 'styled-components'
import {Button} from "../../UI/buttons"
import prev from '../../../images/arrow_back.png'
import next from '../../../images/arrow_forward.png'

const ModalWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    div {
        display: flex;
        padding:10px 5px;
        background:rgba(0,0,0,0.5);
        flex:1;
        justify-content: space-between;
        align-items:center;
        margin: 30px auto;
        max-width: 70%;
        max-height: 95%;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
        border: 3px solid white;
        > img {
            max-width: 80%;
            max-height: 90%;
            border-radius:10px;
        }
    }
    
    @media screen and (max-width: 1200px) {
        div {
            max-width:80%;
        }
    }
    @media screen and (max-width: 1020px) {
        div {
            margin:90px auto;
            > button {
                padding:0;
            }
        }
    }
    
    @media screen and (max-width: 760px) {
        div {
            max-width:90%;
            margin:120px auto;
        }
    }
    
    @media screen and (max-width: 470px) {
        div {
            max-width:100%;
            > img {
                max-width: 70%;    
            }
        }
    }
`


const Modal = (props) => {
    const closeModal = (event) => {
        if (event.target.id) {
            props.setSelectedPhoto(null)
        }
    }

    return (
        <ModalWindow id='close' onClick={closeModal}>
            <div >
                <Button onClick={() => props.changePhoto(props.selectedPhoto.id, 'prev')}>
                    <img src={prev} alt=""/>
                </Button>
                <img src={props.selectedPhoto.url} alt=""/>
                <Button onClick={() => props.changePhoto(props.selectedPhoto.id, 'next')}>
                    <img src={next} alt=""/>
                </Button>
            </div>
        </ModalWindow>
    )
}
export default Modal