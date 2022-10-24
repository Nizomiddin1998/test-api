import React, { useState } from 'react';
import { doPost } from '../services/services';
import ReactLoader from './react-loader/ReactLoader';
import { Main, Wrapper } from './style';
import TableOne from './tables/tableOne';
import TableThree from './tables/tableThree';

function Tables() {
    const [information, setInformation] = useState({ loading: false, error: false, success: false, data: null })
    const [information2, setInformation2] = useState({ loading: false, error: false, success: false, data: null })
    const [value, setValue] = useState('')
    const [changePage, setChangePage] = useState(1)
    function changeSelect(event) {
        setValue(event.target.value);
    }
    function onChangePage(id) {
        setChangePage(id)
    }
    async function onSubmit(event) {
        event.preventDefault()
        const dataForm = new FormData()
        dataForm.append('year', event.target[0].value)
        dataForm.append('quarter', event.target[1].value)
        dataForm.append('tin', value)
        if (changePage===1) {
            setInformation(prev => {
                return {
                    ...prev,
                    loading: true,
                    success: false
                }
            })
            try {
                const res = await doPost(`/api/f1-form/`, dataForm)
                setInformation(prev => {
                    return {
                        ...prev,
                        data: res,
                        success: true,
                        loading: false
                    }
                })
            } catch (e) {
                console.log(e);
                setInformation(prev => {
                    return {
                        ...prev,
                        error: true,
                        loading: false
                    }
                })
            }
        }else{
            setInformation2(prev => {
                return {
                    ...prev,
                    loading: true,
                    success: false
                }
            })
            try {
                const res = await doPost(`/api/f2-form/`, dataForm)
                setInformation2(prev => {
                    return {
                        ...prev,
                        data: res,
                        success: true,
                        loading: false
                    }
                })
            } catch (e) {
                console.log(e);
                setInformation2(prev => {
                    return {
                        ...prev,
                        error: true,
                        loading: false
                    }
                })
            }
        }
        
    }


    console.log(information)
    console.log(information2)
    return (
        <div>
            <Wrapper>
                <form style={{ display: 'flex', gap: '20px' }} onSubmit={onSubmit}>
                    <div className="form-group w-25">
                        <label htmlFor="year" >Yili</label>
                        <select name="year" id="year" className='form-select ' required>
                            <option value={''}>Barchasi</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                        </select>
                    </div>
                    <div className="form-group w-25">
                        <label htmlFor="quarter">Chorak</label>
                        <select name="quarter" id="quarter" className='form-select'>
                            <option value={''}>Barchasi</option>
                            <option value={1}>I Chorak</option>
                            <option value={2}>II Chorak</option>
                            <option value={3}>III Chorak</option>
                            <option value={4}>IV Chorak</option>
                        </select>
                    </div>
                    <div className="form-group w-25">
                        <label htmlFor="stir">Stir</label>
                        <input type="number" id='stir' className='form-control'
                            onChange={changeSelect}
                            required={true}
                            value={value}
                            placeholder='Stir kiriting...' />
                    </div>

                    <div className="form-group">
                        <button type='submit' style={{ height: 40, padding: '5px', marginTop: '20px' }}>Submit</button>
                    </div>
                </form>
                <Main >
                    <button className={changePage === 1 ? 'active' : ''} onClick={() => onChangePage(1)}>F-1</button>
                    <button className={changePage === 2 ? 'active' : ''} onClick={() => onChangePage(2)}>F-2</button>
                </Main>
                {information.loading && <ReactLoader propWidth={120} />}
                {information.error && <h1 style={{ color: 'red' }}>Serverdan malumot kelmadi!!!!</h1>}

                {
                    changePage === 1 ?
                        information.success && <TableOne evalutionNames={information?.data?.data} /> :
                        information2.success && <TableThree evalutionNamesF2={information2?.data?.data} />
                        
                }

            </Wrapper>
        </div>
    );
}

export default Tables;