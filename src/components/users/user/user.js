import React from "react"
import styled from 'styled-components'


const StyledUser = styled.div`
    border: 2px solid white;
    border-radius: 10px; 
    margin:10px;
    padding:20px 0;
    align-items:center;
    text-align:center;
    background:darkmagenta;
    width:300px;
    :hover {
     background:#77d620;
     transform:scale(1.02) translateY(-2px);
    }
    
`

const User = ({user}) => {
    return (
        <StyledUser>
            <h3>{user.name}</h3>
            <div>Examples of my work</div>
        </StyledUser>
    )
}
export default User