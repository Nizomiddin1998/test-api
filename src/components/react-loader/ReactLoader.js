import React from 'react';
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export default function ReactLoader({ propWidth }) {
    return (
        <ReactLoaderSyled className='react-loader'>
            <ReactLoading type='bars' color='#226A47' width={propWidth? propWidth : 40} />
        </ReactLoaderSyled>
    );
}



const ReactLoaderSyled = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 150px;
    justify-content: center;
`