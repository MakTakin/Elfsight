import React from "react"
import styled from 'styled-components'
import User from "./user/user";
import {StyledLink} from "../UI/links";


const Users = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding:10px;
    justify-content:center;
    
`

const ListUsers = (props) => {
    const usersRender = props.users.map(user=> {
        return(
            <StyledLink to={`/${user.id}`} key={user.id}>
            <User  user={user} />
            </StyledLink>
        )
    })


    return (
        <Users>
            {usersRender}
        </Users>
    )
}
export default ListUsers