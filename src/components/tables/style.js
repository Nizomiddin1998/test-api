import styled from 'styled-components';

export const TableContainer = styled.div`
    max-width: 100%;
    /* height: 400px; */
    overflow-x: scroll !important ;
    box-sizing: border-box;
    display: block;
`

export const Table = styled.table`
    width: 100%;
    box-sizing: border-box;
`

export const TableBody = styled.tbody`
    overflow: auto;
    white-space: nowrap;
    box-sizing:border-box;
    & tr{
        background-color: #fff;
    }
    & .td-blue{
        background: rgba(34, 106, 71, 0.08);
    }
    & .td-pink{
        background: rgba(244, 194, 39, 0.2);
        input{
            background: rgba(248,241,212);
        }
    }
    & .td-pink-bold{
        background: rgba(244, 194, 39, 0.2);
        input{
            background: rgba(248,241,212);
        }
        & td:first-child{
            font-weight: 600;
        }
    }
    
    & .td-yellow{
        background: #F4C227;
        text-align: center;
        font-weight: 600;
        color: #fff;
        input{
            background: #F4C227;
        }
    }
    & td{
        border: 1px solid #E1E6E4;;
        padding: 10px;
        font-weight: 400;
        font-size: 14px;
        input{
            margin: 0;
            border: none;
            outline: none;
            width: 100%;
        }
    }
    @media (max-width: 1400px){
        & td{
        padding: 8px 10px;
        }
    }
`

export const THead = styled.thead`
    background: #226A47;
    color: #fff;
    font-size: 16px;
    box-sizing: border-box;
    & th{
        border: 1px solid #fff;
        box-sizing: border-box;
        padding: 5px 10px;
        text-align:center;
        font-weight: 400;
        font-size: 16px;
        min-width: 130px;
        height: ${props => props.heightTree ? '90px' : '60px'};
        @media (max-width: 1400px){
            font-size: 14px;
            height: ${props => props.heightTree ? '70px' : '40px'}; 
        }
    }
    & tr:first-child th:first-child{
        min-width: auto;
    }

`