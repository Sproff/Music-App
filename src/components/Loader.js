import React from 'react'
import styled from 'styled-components';
import LoaderStyle from '../images/loader.gif'

function Loader() {

    const DivLoader = styled.div`
    position: fixed;
    background-color: rgba(0, 0 , 0, 1);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    `

    return (
        <DivLoader>
            <img src={LoaderStyle} alt=""/>
        </DivLoader>
    )
}

export default Loader
