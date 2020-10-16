import styled from 'styled-components'
import {Link} from "react-router-dom"

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
    
    &:visited {
        color: white;
    }
`

export const StyledLinkBack = styled(StyledLink)`
    margin:20px 0;
    font-size:16px;
    font-weight:600;
    display:flex;
    align-items:center;
   
    :hover{
       text-decoration:underline;
    }
`