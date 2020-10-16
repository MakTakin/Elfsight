import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import Album from "./album/album"
import {SERVER_URL} from "../../settings/constants"
import {StyledLink, StyledLinkBack} from "../UI/links"
import {Loader} from "../UI/loader"
import back from '../../images/back.png'

const DivAlbums = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  
    @media screen and (max-width: 1020px) {
        grid-template-columns: 1fr 1fr;   
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`


const ListAlbums = (props) => {
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`${SERVER_URL}albums?userId=${props.match.params.userid}`)
            .then(require => require.json())
            .then(albums => {
                setAlbums(albums)
                setLoading(false)
            })
    }, [])

    if (loading || props.loading) {
        return <Loader>...loading</Loader>
    }

    const renderAlbums = albums.map(album => {
        let coverAlbums = props.photos.filter(photo => photo.albumId == album.id)
        return (
            <StyledLink to={`/${props.match.params.userid}/${album.id}`} key={album.id}>
                <Album album={album} coverAlbums={coverAlbums}/>
            </StyledLink>
        )
    })

    return (
        <>
            <StyledLinkBack to='/'> <img src={back} alt=""/><span>Вернуться к списку авторов</span></StyledLinkBack>
            <DivAlbums>
                {renderAlbums}
            </DivAlbums>
        </>
    )
}
export default ListAlbums