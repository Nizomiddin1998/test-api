import { TableContainer, Table, THead, TableBody } from './style';
import React from 'react';
function TableThree({ evalutionNamesF2 }) {
    console.log(evalutionNamesF2)
    return (
        <TableContainer className='mt-3'>
            <Table>
                <THead heightTree={false} >
                    <tr>
                        <th rowSpan={2} >Ko'rsatkichlar nomi</th>
                        <th rowSpan={2}>Star kodi</th>
                        <th colSpan={2}>Joriy yilning shu davrida, sum</th>
                    </tr>
                    <tr>
                        <th>Daromadlar (Foyda)</th>
                        <th>Xarajatlar (Zararlar)</th>
                    </tr>
                </THead>
                <TableBody>
                    <tr>
                        <td colSpan={6} className='td-yellow' >I. O‘z mablag‘lar manbalari</td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Mahsulot (tovar, ish va xizmat)larni sotishdan sof tushum</td>
                        <td className='td-blue' align='center'>010</td>
                        <td> {evalutionNamesF2.s010>=0&&evalutionNamesF2.s010} </td>
                        <td>   {evalutionNamesF2.s010<0&&evalutionNamesF2.s010} </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Sotilgan mahsulot (tovar, ish va xizmat)larning tannarxi</td>
                        <td className='td-blue' align='center'>020</td>
                        <td>  {evalutionNamesF2.s020>=0&&evalutionNamesF2.s020} </td>
                        <td> {evalutionNamesF2.s020<0&&evalutionNamesF2.s020} </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Mahsulot (tovar, ish va xizmat)larni sotishniig yalpi foydasi (zarari) (satr.010-020)</td>
                        <td align='center'>030</td>
                        <td> {evalutionNamesF2.s030>=0&&evalutionNamesF2.s030} </td>
                        <td> {evalutionNamesF2.s030<0&&evalutionNamesF2.s030} </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Davr xarajatlari, jami (catr.050+060+070+080), shu jumladan:</td>
                        <td align='center'>040</td>
                        <td>  {evalutionNamesF2.s040} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Sotish xarajatlari</td>
                        <td className='td-blue' align='center'>050</td>
                        <td>  {evalutionNamesF2.s050} </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Maʼmuriy xarajatlar</td>
                        <td className='td-blue' align='center'>060</td>
                        <td>  {evalutionNamesF2.s060} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Boshqa operatsion xarajatlar</td>
                        <td className='td-blue' align='center'>070</td>
                        <td>  {evalutionNamesF2.s070} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Kelgusida soliqqa tortiladigan bazadan chiqariladigan hisobot davri xarajatlari</td>
                        <td className='td-blue' align='center'>080</td>
                        <td>  {evalutionNamesF2.s080} </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Asosiy faoliyatning boshqa daromadlari</td>
                        <td className='td-blue' align='center'>090</td>
                        <td> {evalutionNamesF2.s090} </td>
                        <td>   </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Asosiy faoliyatning foydasi (zarari) (satr.030-040+090)</td>
                        <td align='center'>100</td>
                        <td> {evalutionNamesF2.s100} </td>
                        <td>  </td>
                    </tr>
                    <tr className='td-pink-bold'>
                        <td >Moliyaviy faoliyatning daromadlari, jami (satr.120+130+140+150+160), shu jumladan:</td>
                        <td align='center'>110</td>
                        <td> {evalutionNamesF2.s110} </td>
                        <td>   </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Dividentlar shakldagi daromadlar</td>
                        <td align='center' className='td-blue'>120</td>
                        <td> {evalutionNamesF2.s120} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Foizlar shaklidagi daromadlar</td>
                        <td align='center' className='td-blue'>130</td>
                        <td> {evalutionNamesF2.s130} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Uzoq muddatli ijara (lizing)dan daromadlar</td>
                        <td align='center' className='td-blue'>140</td>
                        <td> {evalutionNamesF2.s140} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Valyuta kursi farqidan daromadlar</td>
                        <td align='center' className='td-blue'>150</td>
                        <td> {evalutionNamesF2.s150} </td>
                        <td>   </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Moliyaviy faoliyatning boshqa daromadlari</td>
                        <td align='center' className='td-blue'>160</td>
                        <td> {evalutionNamesF2.s160} </td>
                        <td>  </td>
                    </tr>
                    <tr className='td-pink-bold'>
                        <td >Moliyaviy faoliyat bo‘yicha xarajatlar (satr.180+190+200+210), shu jumladan:</td>
                        <td align='center'>170</td>
                        <td>  {evalutionNamesF2.s170} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Foizlar shaklidagi xarajatlar</td>
                        <td align='center' className='td-blue'>180</td>
                        <td>  {evalutionNamesF2.s180} </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Uzok muddatli ijara (lizing) buyicha foizlar shaklidagi xarajatlar</td>
                        <td align='center' className='td-blue'>190</td>
                        <td>  {evalutionNamesF2.s190} </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Valyuta kursi farqidan zararlar</td>
                        <td align='center' className='td-blue'>200</td>
                        <td>  {evalutionNamesF2.s200} </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Moliyaviy faoliyat bo‘yicha boshqa xarajatlar</td>
                        <td align='center' className='td-blue'>210</td>
                        <td>  {evalutionNamesF2.s210} </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Asosiy faoliyatning foydasi (zarari) (satr.030-040+090)</td>
                        <td align='center'>220</td>
                        <td> {evalutionNamesF2.s220} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Favquloddagi foyda va zararlar</td>
                        <td align='center' className='td-blue'>230</td>
                        <td> {evalutionNamesF2.s230} </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Daromad (foyda) solig‘ini tulagunga qadar foyda (zarar) (satr.220+/-230)</td>
                        <td align='center'>240</td>
                        <td> {evalutionNamesF2.s240} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Daromad (foyda) solig‘i</td>
                        <td align='center' className='td-blue'>250</td>
                        <td> {evalutionNamesF2.s250} </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Foydadan boshka soliqlar va yig‘imlar</td>
                        <td className='td-blue' align='center'>260</td>
                        <td> {evalutionNamesF2.s260} </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Hisobot davrining sof foydasi (zarari) (satr.240-250-260)</td>
                        <td align='center'>270</td>
                        <td> {evalutionNamesF2.s270} </td>
                        <td>  </td>
                    </tr>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableThree;