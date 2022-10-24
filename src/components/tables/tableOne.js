import { TableContainer, Table, THead, TableBody } from './style';
import React from 'react';

function TableOne({evalutionNames}) {
    console.log(evalutionNames)
    return (
        <TableContainer className='mt-3'>
            <Table>
                <THead>
                    <tr>
                        <th>Ko'rsatkichlar nomi</th>
                        <th>Star kodi</th>
                        <th>Hisobot davri boshiga, sum</th>
                        <th>Hisobot davri oxiriga , sum</th>
                    </tr>
                </THead>
                <TableBody>
                    <tr>
                        <td colSpan={4} className={'td-yellow'}>I. Uzoq muddatli aktivlar</td>
                    </tr>
                    <tr className={'td-pink-bold'}>
                        <td colSpan={4}  >Asosiy vositalar: </td>
                    </tr>
                    <tr>
                        <td className={'td-blue'} >Boshlang'ich (qayta tiklash) qiymati (0100, 0300)</td>
                        <td className={'td-blue'} align='center'>010</td>
                        <td> {evalutionNames.s010}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className={'td-blue'}>Eskirish summasi (0200)</td>
                        <td className={'td-blue'} align='center'>011</td>
                        <td> {evalutionNames.s011}</td>
                        <td> </td>
                    </tr>
                    <tr className={'td-pink'}>
                        <td >Qoldiq (balans) qiymati (satr.010-011)</td>
                        <td align='center' >012</td>
                        <td> {evalutionNames.s012}</td>
                        <td> </td>
                    </tr>
                    <tr className={'td-pink-bold'}>
                        <td colSpan={4}>Nomoddiy aktivlar:</td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshlang‘ich qiymati (0400)</td>
                        <td className='td-blue' align='center'>020</td>
                        <td> {evalutionNames.s020}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Amortizatsiya summasi (0500)</td>
                        <td className='td-blue' align='center'>021</td>
                        <td> {evalutionNames.s021}</td>
                        <td> </td>
                    </tr>
                    <tr className={'td-pink'}>
                        <td >Qoldiq (balans) qiymati (satr.020-021)</td>
                        <td align='center' >022</td>
                        <td> {evalutionNames.s022}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli investitsiyalar, jami (satr 040+050+060+070+080), shu jumladan:</td>
                        <td className='td-blue' align='center'>030</td>
                        <td> {evalutionNames.s030}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Qimmatli qog‘ozlar (0610)</td>
                        <td className='td-blue' align='center'>040</td>
                        <td> {evalutionNames.s040}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Shuʼba xo‘jalik jamiyatlariga investitsiyalar (0620)</td>
                        <td className='td-blue' align='center'>050</td>
                        <td> {evalutionNames.s050}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Qaram xo‘jalik jamiyatlariga investitsiyalar (0630)</td>
                        <td className='td-blue' align='center'>060</td>
                        <td> {evalutionNames.s060}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Chet el kapitali mavjud bo‘lgan korxonalarga investitsiyalar (0640)</td>
                        <td className='td-blue' align='center'>070</td>
                        <td> {evalutionNames.s070}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshqa uzoq, muddatli investitsiyalar (0690)</td>
                        <td className='td-blue' align='center'>080</td>
                        <td> {evalutionNames.s080}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >O‘rnatiladigan asbob-uskunalar (0700)</td>
                        <td className='td-blue' align='center'>090</td>
                        <td> {evalutionNames.s090}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Kapital qo‘yilmalar (0800)</td>
                        <td className='td-blue' align='center'>100</td>
                        <td> {evalutionNames.s100}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli debitorlik qarzlari (0010, 0920, 09E0, 0940)</td>
                        <td className='td-blue' align='center'>110</td>
                        <td> {evalutionNames.s110}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli kechiktirilgan xarajatlar (0S50, 0960, 0990)</td>
                        <td className='td-blue' align='center'>120</td>
                        <td> {evalutionNames.s120}</td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td  >I bo‘lim bo‘yicha jami (satr.012+022+030+090+100+110+120)</td>
                        <td align='center'>130</td>
                        <td> {evalutionNames.s130}</td>
                        <td> </td>
                    </tr>
                    <tr className='td-yellow'>
                        <td colSpan={4}>II. Joriy aktivlar</td>
                    </tr>
                    <tr className='td-pink-bold' >
                        <td >Tovar-moddiy zahiralar, jami (satr. 150+160+170+180), shu jumladan:</td>
                        <td align='center'>140</td>
                        <td> {evalutionNames.s140}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Ishlab chiqarish zahiralari (1000, 1100, 1500, 1600)</td>
                        <td className='td-blue' align='center'>150</td>
                        <td> {evalutionNames.s150}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Tugallanmagan ishlab chiqarish (2000, 2100, 2300, 2700)</td>
                        <td className='td-blue' align='center'>160</td>
                        <td> {evalutionNames.s160}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Tayyor mahsulot (2800)</td>
                        <td className='td-blue' align='center'>170</td>
                        <td> {evalutionNames.s170}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Tovarlar (2900 dan 2980 ning ayirmasi)</td>
                        <td className='td-blue' align='center'>180</td> 
                        <td> {evalutionNames.s180}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Kelgusi davr harajatlari (3100)</td>
                        <td className='td-blue' align='center'>190</td>
                        <td> {evalutionNames.s190}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Kechiktirilgan xarajatlar (3200)</td>
                        <td className='td-blue' align='center'>200</td>
                        <td> {evalutionNames.s200}</td>
                        <td> </td>
                    </tr>
                    <tr className="td-pink">
                        <td>Debitorlar, jami (satr.220+240+250+260+270+280+290+300+310)</td>
                        <td align='center'>210</td>
                        <td> {evalutionNames.s210}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">shundan muddati o‘tgan</td>
                        <td className='td-blue' align='center'>211</td>
                        <td> {evalutionNames.s211}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Xaridor va buyurtmachilar qarzi (4000 dan 4900 ning ayirmasi)</td>
                        <td className='td-blue' align='center'>220</td>
                        <td> {evalutionNames.s220}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Ajratilgan bo‘linmalarning qarzi (4110)</td>
                        <td className='td-blue' align='center'>230</td>
                        <td> {evalutionNames.s230}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Shuʼba va qaram xo‘jalik jamiyatlarining qarzi (4120)</td>
                        <td className='td-blue' align='center'>240</td>
                        <td> {evalutionNames.s240}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Xodimlarga berilgan bunaklar (4200)</td>
                        <td className='td-blue' align='center'>250</td>
                        <td> {evalutionNames.s250}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Mol yetkazib beruvchilar va pudratchilarga berilgan bo‘naklar (4300)</td>
                        <td className='td-blue' align='center'>260</td>
                        <td> {evalutionNames.s260}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Byudjetga soliq va yig‘imlar bo‘yicha bunak to‘lovlari (4400)</td>
                        <td className='td-blue' align='center'>270</td>
                        <td> {evalutionNames.s270}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Maqsadli davlat jamg‘armalari va sug‘urtalar bo‘yicha bo‘nak to‘lovlari (4500)</td>
                        <td className='td-blue' align='center'>280</td>
                        <td> {evalutionNames.s280}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Taʼsischilarning ustav kapitaliga ulushlar bo‘yicha qarzi (4600)</td>
                        <td className='td-blue' align='center'>290</td>
                        <td> {evalutionNames.s290}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Xodimlarning boshka operatsiyalar bo‘yicha qarzi (4700)</td>
                        <td className='td-blue' align='center'>300</td>
                        <td> {evalutionNames.s300}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Boshqa debitorlik qarzlari (4800)</td>
                        <td className='td-blue' align='center'>310</td>
                        <td> {evalutionNames.s310}</td>
                        <td> </td>
                    </tr>
                    <tr className="td-pink-bold">
                        <td >Pul mablag‘lari, jami (satr.330+340+350+360), shu jumladan:</td>
                        <td align='center'>320</td>
                        <td> {evalutionNames.s320}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Kassadagi pul mablag‘lari (5000)</td>
                        <td className='td-blue' align='center'>330</td>
                        <td> {evalutionNames.s330}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Hisoblashish schyotidagi pul mablag‘lari (5100)</td>
                        <td className='td-blue' align='center'>340</td>
                        <td> {evalutionNames.s340}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Chet el valyutasidagi pul mablag‘lari (5200)</td>
                        <td className='td-blue' align='center'>350</td>
                        <td> {evalutionNames.s350}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Boshqa pul mablag‘lari va ekvivalentlari (5500, 5600, 5700)</td>
                        <td className='td-blue' align='center'>360</td>
                        <td> {evalutionNames.s360}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Qisqa muddatli investitsiyalar (5800)</td>
                        <td className='td-blue' align='center'>370</td>
                        <td> {evalutionNames.s370}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Boshqa joriy aktivlar (5900)</td>
                        <td className='td-blue' align='center'>380</td>
                        <td> {evalutionNames.s380}</td>
                        <td> </td>
                    </tr>
                    <tr className="td-pink">
                        <td>II bo‘lim bo‘yicha jami (satr.140+190+200+210+230+320+370+380)</td>
                        <td align='center'>390</td>
                        <td> {evalutionNames.s390}</td>
                        <td> </td>
                    </tr>
                    <tr className="td-pink">
                        <td>Balans aktivi bo‘yicha jami (satr. 130+390)</td>
                        <td align='center'>400</td>
                        <td> {evalutionNames.s400}</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className={'td-yellow'}>I. O‘z mablag‘lar manbalari</td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Ustav kapitali (8300)</td>
                        <td className='td-blue' align='center'>410</td>
                        <td> {evalutionNames.s410}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Qo‘shilgan kapital (8400)</td>
                        <td className='td-blue' align='center'>420</td>
                        <td> {evalutionNames.s420}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Rezerv kapitali (8500)</td>
                        <td className='td-blue' align='center'>430</td>
                        <td> {evalutionNames.s430}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Sotib olingan hususiy aksiyalar (8600)</td>
                        <td className='td-blue' align='center' >440</td>
                        <td> {evalutionNames.s440}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Taqsimlanmagan foyda (qoplanmagan zarar) (8700)</td>
                        <td className='td-blue' align='center'>450</td>
                        <td> {evalutionNames.s450}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Maqsadli to‘shumlar (8800)</td>
                        <td className='td-blue' align='center'>460</td>
                        <td> {evalutionNames.s460}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Kelgusi davr harajatlari va to‘lovlari uchun zahiralar (8900)</td>
                        <td className='td-blue' align='center'>470</td>
                        <td> {evalutionNames.s470}  </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td>I bo‘lim bo‘yicha jami (satr.410+420+430-440+450+460+470)</td>
                        <td align='center'>480</td>
                        <td> {evalutionNames.s480}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-yellow" colSpan={4}>II. Majburiyatlar</td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Uzoq, muddatli majburiyatlar, jami (satr.500+510+520+530+540+550+560+570+580+590)</td>
                        <td align='center'>490</td>
                        <td> {evalutionNames.s490}  </td>
                        <td> </td>
                    </tr>
                    <tr className="td-pink">
                        <td >shu jumladan: uzoq muddatli kreditorlik qarzlari (satr.500+520+540+560+590)</td>
                        <td align='center'>491</td>
                        <td> {evalutionNames.s491}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Mol yetkazib beruvchilar va pudratchilarga uzoq muddatli qarz (7000)</td>
                        <td className='td-blue' align='center'>500</td>
                        <td> {evalutionNames.s500}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Ajratilgan bo‘linmalarga uzoq muddatli qarz (7110)</td>
                        <td className='td-blue' align='center'>510</td>
                        <td> {evalutionNames.s510}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Shuʼba va qaram xo‘jalik jamiyatlariga uzoq muddatli qarz (7120)</td>
                        <td className='td-blue' align='center'>520</td>
                        <td> {evalutionNames.s520}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli kechiktirilgan daromadlar (7210, 7220, 7230)</td>
                        <td className='td-blue' align='center'>530</td>
                        <td> {evalutionNames.s530}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Soliq va majburiy to‘lovlar bo‘yicha uzoq muddatli kechiktirilgan majburiyatlar (7240)</td>
                        <td className='td-blue' align='center'>540</td>
                        <td> {evalutionNames.s540}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshqa uzoq muddatli kechiktirilgan majburiyatlar (7250, 7290)</td>
                        <td className='td-blue' align='center'>550</td>
                        <td> {evalutionNames.s550}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Xaridorlar va buyurtmachilardan olingan bo‘naklar (7300)</td>
                        <td className='td-blue' align='center'>560</td>
                        <td> {evalutionNames.s560}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli bank kreditlari (7810)</td>
                        <td className='td-blue' align='center'>570</td>
                        <td> {evalutionNames.s570}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli qarzlar (7820, 7830, 7840)</td>
                        <td className='td-blue' align='center'>580</td>
                        <td> {evalutionNames.s580}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshqa uzoq muddatli kreditorlik qarzlari (7900)</td>
                        <td className='td-blue' align='center'>590</td>
                        <td> {evalutionNames.s590}  </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td>Joriy majburiyatlar, jami (satr.610+620+630+640+650+660+670+680+690+700+710+720+730+740+750+760)</td>
                        <td align='center'>600</td>
                        <td> {evalutionNames.s600}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >shu jumladan: joriy kreditorli qarzlari (satr.610+630+650+670+680+690+700+710+720+760)</td>
                        <td className="td-blue" align='center'>601</td>
                        <td> {evalutionNames.s601}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >shundan: muddati o‘tgan joriy kreditorlik qarzlari</td>
                        <td className="td-blue" align='center'>602</td>
                        <td> {evalutionNames.s602}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Mol yetkazib beruvchilar va pudratchilarga qarz (6000)</td>
                        <td className="td-blue" align='center'>610</td>
                        <td> {evalutionNames.s610}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Ajratilgan bo‘linmalarga qarz (6110)</td>
                        <td className="td-blue" align='center'>620</td>
                        <td> {evalutionNames.s620}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Shuʼba va qaram xo‘jalik jamiyatlariga qarz (6120)</td>
                        <td className="td-blue" align='center'>630</td>
                        <td> {evalutionNames.s630}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Kechiktirilgan daromadlar (6210, 6220, 6230)</td>
                        <td className="td-blue" align='center'>640</td>
                        <td> {evalutionNames.s640}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Soliq, va majburiy to‘lovlar bo‘yicha kechiktirilgan majburiyatlar (6240)</td>
                        <td className="td-blue" align='center'>650</td>
                        <td> {evalutionNames.s650}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Boshqa kechiktirilgan majburiyatlar (6250, 6290)</td>
                        <td className="td-blue" align='center'>660</td>
                        <td> {evalutionNames.s660}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Olingan bo‘naklar (6300)</td>
                        <td className="td-blue" align='center'>670</td>
                        <td> {evalutionNames.s670}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Byudjetga to‘lovlar bo‘yicha qarz (6400)</td>
                        <td className="td-blue" align='center'>680</td>
                        <td> {evalutionNames.s680}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue">Sug‘urtalar bo‘yicha qarz (6510)</td>
                        <td className="td-blue" align='center'>690</td>
                        <td> {evalutionNames.s690}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Maqsadli davlat jamg‘armalariga to‘lovlar bo‘yicha qarz (6520)</td>
                        <td className="td-blue" align='center'>700</td>
                        <td> {evalutionNames.s700}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Taʼsischilarga bo‘lgan qarzlar (6600)</td>
                        <td className="td-blue" align='center'>710</td>
                        <td> {evalutionNames.s710}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Mexnatga haq, to‘lash bo‘yicha qarz (6700)</td>
                        <td className="td-blue" align='center'>720</td>
                        <td> {evalutionNames.s720}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Qisqa muddatli bank kreditlari (6810)</td>
                        <td className="td-blue" align='center'>730</td>
                        <td> {evalutionNames.s730}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Qisqa muddatli qarzlar (6820, 6830, 6840)</td>
                        <td className="td-blue" align='center'>740</td>
                        <td> {evalutionNames.s740}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Uzoq muddatli majburiyatlarning joriy qismi (6960)</td>
                        <td className="td-blue" align='center'>750</td>
                        <td> {evalutionNames.s750}  </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Boshqa kreditorlik qarzlar (6950 dan tashqari 6900)</td>
                        <td className="td-blue" align='center'>760</td>
                        <td> {evalutionNames.s760}  </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >II bo‘lim bo‘yicha jami (satr.490+600)</td>
                        <td align='center'>770</td>
                        <td> {evalutionNames.s770}  </td>
                        <td> </td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Balans passivi bo‘yicha jami (satr.480+770)</td>
                        <td align='center'>780</td>
                        <td> {evalutionNames.s780}  </td>
                        <td> </td>
                    </tr>

                    

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableOne;