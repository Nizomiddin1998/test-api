import styled from "styled-components";


export const TableContainer = styled.div`
max-width: 100%;
/* height: 400px; */
overflow-x: scroll !important ;
box-sizing: border-box;
display: block;
margin-top: 20px;
`
export const Table = styled.table`
width: 100%;
box-sizing: border-box;
`
export const Wrapper = styled.div`
box-sizing: border-box;
margin: 0;
padding: 24px;
@media (max-width: 1400px){
    padding: 18px 24px;
}
`
export const FormContainer = styled.form`
font-size: 14px;
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
    font-size: 14px;
    min-width: 130px;
    @media (max-width: 1400px){
        font-size: 12px;
    }
}
& tr:first-child th:first-child{
    min-width: auto;
}

`
export const TableBody = styled.tbody`
    overflow: auto;
    white-space: nowrap;
    box-sizing:border-box;
    & tr:nth-child(even){
        background: #F9F9F9;
    }
    & tr:nth-child(2n+1){
        background: #E5E5E5;
    }
    & td{
        border: 1px solid #F1F1F1;
        padding: 10px;
        font-weight: 400;
        font-size: 14px;
    }
    @media (max-width: 1400px){
        & td{
        padding: 8px 10px;
        }
    }
`

export const Main = styled.main`
display:flex;
justify-content: center;
gap: 10px;
margin: 30px 0;
button{
    border: 0;
    padding: 8px;
    background-color: red;
    width: 70px;
    border-radius: 4px;
    &.active{
        background-color: #226A47
    }
}
`