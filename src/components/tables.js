import React, {  useEffect, useState } from 'react';
import { doGetPayment } from '../services/services';
import ReactLoader from './react-loader/ReactLoader';
import { Table, TableBody, TableContainer, THead, Wrapper } from './style';

function Tables() {
    const [information, setInformation] = useState({ loading: false, error: false, success: false, data: null })
    const [selectId, setSelectId] = useState('')
    const [disabled, setDisabled] = useState(false)
    function changeSelect(event) {
        setSelectId(event.target.value);
    }
    function onSubmit() {
        setDisabled(true)
        try {
            doGetPayment(`/kadastr/${selectId}/`, setInformation)
        } catch (e) {
            console.log(e);
        } 
    }
    useEffect(() => {    
      if (!information.loading) {
        setDisabled(false)
      }
    }, [information])
    
    
    return (
        <div>
            <Wrapper>
                <div>
                    <select className='select-control' defaultValue={'10'} onChange={changeSelect}>
                        <option value="10">Тошкент шахри</option>
                        <option value="11">Тошкент вилояти</option>
                        <option value="12">Сирдарё вилояти</option>
                        <option value="13">Жиззах вилояти</option>
                        <option value="14">Самарқанд вилояти</option>
                        <option value="15">Фарғона вилояти</option>
                        <option value="16">Наманган вилояти</option>
                        <option value="17">Андижон вилояти</option>
                        <option value="18">Қашқадарё вилояти</option>
                        <option value="19">Сурхондарё вилояти</option>
                        <option value="20">Бухоро вилояти</option>
                        <option value="21">Навоий вилояти</option>
                        <option value="22">Хоразм вилояти</option>
                        <option value="23">Қорақалпоғистон республик</option> 
                    </select>
                    <button onClick={onSubmit} disabled={disabled}>Submit</button>
                </div>
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
                                    <tr  >
                                        <td>{selectId}</td>
                                        <td>{information.data?.data?.total_land_area_full_total}</td>
                                        <td>{information.data?.data?.total_land_area_full_irrigated}</td>
                                        <td>{information.data?.data?.total_land_area_full_non_irrigated}</td>
                                        <td>{information.data?.data?.types_of_agricultural_land_total}</td>
                                        <td>{information.data?.data?.types_of_agricultural_land_irrigated}</td>
                                        <td>{information.data?.data?.types_of_agricultural_land_non_irrigated}</td>
                                        <td>{information.data?.data?.cultivated_lands_total}</td>
                                        <td>{information.data?.data?.cultivated_lands_irrigated}</td>
                                        <td>{information.data?.data?.cultivated_lands_non_irrigated}</td>
                                        <td>{information.data?.data?.perennial_trees_total}</td>
                                        <td>{information.data?.data?.gardens_areas}</td>
                                        <td>{information.data?.data?.vineyards_areas}</td>
                                        <td>{information.data?.data?.mulberry_trees_areas}</td>
                                        <td>{information.data?.data?.othr_perenial_plants_ars}</td>
                                        <td>{information.data?.data?.perennial_trees_irrigated}</td>
                                        <td>{information.data?.data?.perennial_trees_non_irrigated}</td>
                                        <td>{information.data?.data?.gray_lands_total}</td>
                                        <td>{information.data?.data?.gray_lands_irrigated}</td>
                                        <td>{information.data?.data?.gray_lands_non_irrigated}</td>
                                        <td>{information.data?.data?.hayfield_pastures_total}</td>
                                        <td>{information.data?.data?.hayfield_pastures_irrigated}</td>
                                        <td>{information.data?.data?.hayfield_pastures_non_irrigated}</td>
                                        <td>{information.data?.data?.lands_and_horticultural_associations_total}</td>
                                        <td>{information.data?.data?.lands_and_horticultural_associations_full_irrigated}</td>
                                        <td>{information.data?.data?.lands_in_reclamation_condition}</td>
                                        <td>{information.data?.data?.forests_total}</td>
                                        <td>{information.data?.data?.forests_irrigated}</td>
                                        <td>{information.data?.data?.shrubbery}</td>
                                        <td>{information.data?.data?.other_areas}</td>
                                        <td>{information.data?.data?.lands_and_horticultural_associations_total}</td>
                                        <td>{information.data?.data?.shelterbelts_areas}</td>
                                        <td>{information.data?.data?.total_underwater_areas}</td>
                                        <td>{information.data?.data?.roads_and_trails_areas}</td>
                                        <td>{information.data?.data?.construction_land_area}</td>
                                        <td>{information.data?.data?.al_lnd_nusd_agrcultr_ars}</td>
                                        <td>{information.data?.data?.unused_other_areas}</td>
                                    </tr>
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