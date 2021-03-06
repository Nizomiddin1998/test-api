import React, {  useEffect, useState } from 'react';
import { doGetPayment } from '../services/services';
import ReactLoader from './react-loader/ReactLoader';
import { Table, TableBody, TableContainer, THead, Wrapper } from './style';

function Tables() {
    const [information, setInformation] = useState({ loading: false, error: false, success: false, data: null })
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(true)
    function changeSelect(event) {
        
        setValue(event.target.value);
    }
    function onSubmit(event) {
        event.preventDefault()
        setDisabled(true)
        try {
            doGetPayment(`/kadastr/${value}/`, setInformation)
        } catch (e) {
            console.log(e);
        } 
    }
    useEffect(() => {    
      if (!information.loading) {
        setDisabled(false)
      }
    }, [information])
    
    useEffect(() => {    
        if (value.length>8) {
            setDisabled(false)
        } else setDisabled(true) 
    }, [value])
    
    
    return (
        <div>
            <Wrapper>
                <form style={{display: 'flex', gap: '20px'}} onSubmit={onSubmit}>
                    <input type="number" className='select-control' onChange={changeSelect} placeholder='Stir kiriting...' />
 
                    <button type='submit' style={{background: value.length<8 && 'red'}} disabled={disabled}>Submit</button>
                </form>
                {information.loading && <ReactLoader propWidth={120} />}
                {information.error && <h1 style={{ color: 'red' }}>Serverdan malumot kelmadi!!!!</h1>}
                {
                    information.success && <>
                        <TableContainer >
                            <Table>
                                <THead>
                                    <tr>
                                        <th rowSpan={3}>№</th>
                                        <th rowSpan={2} colSpan={3}>Умумий ер майдони</th>
                                        <th rowSpan={2} colSpan={3}>Қишлоқ хўжалиги ер турлари		        </th>
                                        <th colSpan={16}>шу жумладан:</th>
                                        <th colSpan={2} rowSpan={2}> Томорка ерлар ва богдорчилик-сабзовот уюшма ерлари</th>
                                        <th rowSpan={3}>Мелиоратив курилиш холатидаги ерлар</th>
                                        <th colSpan={2} rowSpan={2}>Ўрмонзорлар</th>
                                        <th rowSpan={3}>"Бутазорлар"</th>
                                        <th rowSpan={3} >Бошқа ерлар</th>
                                        <th rowSpan={3} >Tomorka yerlari</th>
                                        <th rowSpan={3} >Ixota daraxtzorlari</th>
                                        <th rowSpan={3} >Suv ostidagi yerlar</th>
                                        <th rowSpan={3} >Yo'llar, so'qmoqlar va chorva yo'llari</th>
                                        <th rowSpan={3} >Qurilishlar</th>
                                        <th rowSpan={3} >Jami Q/X foydalanilmaydigan yerlar</th>
                                        <th rowSpan={3} >Boshqalar</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={3}>Экин ерлар</th>
                                        <th colSpan={7}>Куп йиллик дарахтзорлар</th>
                                        <th colSpan={3}>Бўз ерлар</th>
                                        <th colSpan={3}>Пичанзор ва яйловлар</th>
                                    </tr>
                                    <tr>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>Bog'lar</th>
                                        <th>Tutzorlar</th>
                                        <th>Uzumzorlar</th>
                                        <th>Boshqa ko'p yillik daraxtlar</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>лалми</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>
                                        <th>жами</th>
                                        <th>"суғориладиган"</th>

                                    </tr>
                                </THead>
                                <TableBody>
                                    {
                                      information.data?.data?.map((item,index)=><tr  key={index}>
                                        <td>{value}</td>
                                        <td>{item.total_land_area_full_total}</td>
                                        <td>{item.total_land_area_full_irrigated}</td>
                                        <td>{item.total_land_area_full_non_irrigated}</td>
                                        <td>{item.types_of_agricultural_land_total}</td>
                                        <td>{item.types_of_agricultural_land_irrigated}</td>
                                        <td>{item.types_of_agricultural_land_non_irrigated}</td>
                                        <td>{item.cultivated_lands_total}</td>
                                        <td>{item.cultivated_lands_irrigated}</td>
                                        <td>{item.cultivated_lands_non_irrigated}</td>
                                        <td>{item.perennial_trees_total}</td>
                                        <td>{item.gardens_areas}</td>
                                        <td>{item.vineyards_areas}</td>
                                        <td>{item.mulberry_trees_areas}</td>
                                        <td>{item.othr_perenial_plants_ars}</td>
                                        <td>{item.perennial_trees_irrigated}</td>
                                        <td>{item.perennial_trees_non_irrigated}</td>
                                        <td>{item.gray_lands_total}</td>
                                        <td>{item.gray_lands_irrigated}</td>
                                        <td>{item.gray_lands_non_irrigated}</td>
                                        <td>{item.hayfield_pastures_total}</td>
                                        <td>{item.hayfield_pastures_irrigated}</td>
                                        <td>{item.hayfield_pastures_non_irrigated}</td>
                                        <td>{item.lands_and_horticultural_associations_total}</td>
                                        <td>{item.lands_and_horticultural_associations_full_irrigated}</td>
                                        <td>{item.lands_in_reclamation_condition}</td>
                                        <td>{item.forests_total}</td>
                                        <td>{item.forests_irrigated}</td>
                                        <td>{item.shrubbery}</td>
                                        <td>{item.other_areas}</td>
                                        <td>{item.lands_and_horticultural_associations_total}</td>
                                        <td>{item.shelterbelts_areas}</td>
                                        <td>{item.total_underwater_areas}</td>
                                        <td>{item.roads_and_trails_areas}</td>
                                        <td>{item.construction_land_area}</td>
                                        <td>{item.al_lnd_nusd_agrcultr_ars}</td>
                                        <td>{item.unused_other_areas}</td>
                                    </tr>
                                      )  
                                    }
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </>



                }

            </Wrapper>
        </div>
    );
}

export default Tables;