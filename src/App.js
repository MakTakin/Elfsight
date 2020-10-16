import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ListAlbums from "./components/albums/list-albums"
import ListPhotos from "./components/photos/list-photos"
import ListUsers from "./components/users/list-users"
import {Redirect, Route, Switch} from "react-router-dom"
import {SERVER_URL} from "./settings/constants"
import {StyledLink} from "./components/UI/links"
import {Loader} from "./components/UI/loader"

const Container = styled.div`
    max-width:1200px;
    margin: 0 auto;
    padding:0 20px;
`

const Header = styled.header`
    font-size: 1.5rem;
    font-weight: 600;    
`

function App() {
    const [users, setUsers] = useState([])
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
         setLoading(true)
        fetch(`${SERVER_URL}users`)
            .then(require => require.json())
            .then(users => {
                setUsers(users)
            })
        fetch(`${SERVER_URL}photos`)
            .then(require => require.json())
            .then(photos => {
                setPhotos(photos)
                setLoading(false)
            })
    }, [])

        if (loading) {
        return <Loader>...loading</Loader>
    }
    return (
        <Container>
            <Header>
                <StyledLink to='/'>
                   Simple Gallery
                </StyledLink>
            </Header>
            <Switch>
                <Route path='/'
                       render={(props) => <ListUsers {...props} users={users}/>}
                       exact
                />
                <Route path='/:userid/:albumId'
                       render={(props) => <ListPhotos {...props} photos={photos} />}
                />
                <Route path='/:userid'
                       render={(props) => <ListAlbums loading={loading} users={users} photos={photos} {...props} />}
                />
                <Redirect to='/'/>
            </Switch>
        </Container>
    )
}

export default App
