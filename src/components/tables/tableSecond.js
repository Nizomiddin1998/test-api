import { TableContainer, Table, THead, TableBody } from './style';
import React from 'react';
import evalotionsRedux from '../../../../../../zustand/evalotionsRedux';

function TableSecond({register}) {
    const evalutionNames = evalotionsRedux(state => state.evalutionNames)
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
                        <td colSpan={4} className={'td-yellow'}>I. O‘z mablag‘lar manbalari</td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Ustav kapitali (8300)</td>
                        <td className='td-blue' align='center'>410</td>
                        <td><input type="number" defaultValue={evalutionNames.authorized_capital_410.start} {...register('authorized_capital_410_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.authorized_capital_410.end} {...register('authorized_capital_410_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Qo‘shilgan kapital (8400)</td>
                        <td className='td-blue' align='center'>420</td>
                        <td><input type="number" defaultValue={evalutionNames.added_capital_420.start} {...register('added_capital_420_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.added_capital_420.end} {...register('added_capital_420_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Rezerv kapitali (8500)</td>
                        <td className='td-blue' align='center'>430</td>
                        <td><input type="number" defaultValue={evalutionNames.reserve_capital_430.start} {...register('reserve_capital_430_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.reserve_capital_430.end} {...register('reserve_capital_430_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Sotib olingan hususiy aksiyalar (8600)</td>
                        <td className='td-blue' align='center' >440</td>
                        <td><input type="number" defaultValue={evalutionNames.purchased_private_shares_440.start} {...register('purchased_private_shares_440_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.purchased_private_shares_440.end} {...register('purchased_private_shares_440_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Taqsimlanmagan foyda (qoplanmagan zarar) (8700)</td>
                        <td className='td-blue' align='center'>450</td>
                        <td><input type="number" defaultValue={evalutionNames.retained_earnings_450.start} {...register('retained_earnings_450_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.retained_earnings_450.end} {...register('retained_earnings_450_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Maqsadli to‘shumlar (8800)</td>
                        <td className='td-blue' align='center'>460</td>
                        <td><input type="number" defaultValue={evalutionNames.target_crops_460.start} {...register('target_crops_460_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.target_crops_460.end} {...register('target_crops_460_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue'>Kelgusi davr harajatlari va to‘lovlari uchun zahiralar (8900)</td>
                        <td className='td-blue' align='center'>470</td>
                        <td><input type="number" defaultValue={evalutionNames.reserves_for_future_expenses_470.start} {...register('reserves_for_future_expenses_470_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.reserves_for_future_expenses_470.end} {...register('reserves_for_future_expenses_470_end')} /></td>
                    </tr>
                    <tr className='td-pink'>
                        <td>I bo‘lim bo‘yicha jami (satr.410+420+430-440+450+460+470)</td>
                        <td align='center'>480</td>
                        <td><input type="number" defaultValue={evalutionNames.total_for_the_first_part_480.start} {...register('total_for_the_first_part_480_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.total_for_the_first_part_480.end} {...register('total_for_the_first_part_480_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-yellow" colSpan={4}>II. Majburiyatlar</td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Uzoq, muddatli majburiyatlar, jami (satr.500+510+520+530+540+550+560+570+580+590)</td>
                        <td align='center'>490</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_commitments_490.start} {...register('long_term_commitments_490_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_commitments_490.end} {...register('long_term_commitments_490_end')} /></td>
                    </tr>
                    <tr className="td-pink">
                        <td >shu jumladan: uzoq muddatli kreditorlik qarzlari (satr.500+520+540+560+590)</td>
                        <td align='center'>491</td>
                        <td><input type="number" defaultValue={evalutionNames.including_long_term_payables_491.start} {...register('including_long_term_payables_491_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.including_long_term_payables_491.end} {...register('including_long_term_payables_491_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Mol yetkazib beruvchilar va pudratchilarga uzoq muddatli qarz (7000)</td>
                        <td className='td-blue' align='center'>500</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_suppliers_500.start} {...register('long_term_debt_to_suppliers_500_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_suppliers_500.end} {...register('long_term_debt_to_suppliers_500_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Ajratilgan bo‘linmalarga uzoq muddatli qarz (7110)</td>
                        <td className='td-blue' align='center'>510</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_spin_offs_510.start} {...register('long_term_debt_to_spin_offs_510_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_spin_offs_510.end} {...register('long_term_debt_to_spin_offs_510_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Shuʼba va qaram xo‘jalik jamiyatlariga uzoq muddatli qarz (7120)</td>
                        <td className='td-blue' align='center'>520</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_subsidiaries_520.start} {...register('long_term_debt_to_subsidiaries_520_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debt_to_subsidiaries_520.end} {...register('long_term_debt_to_subsidiaries_520_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli kechiktirilgan daromadlar (7210, 7220, 7230)</td>
                        <td className='td-blue' align='center'>530</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_deferred_income_530.start} {...register('long_term_deferred_income_530_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_deferred_income_530.end} {...register('long_term_deferred_income_530_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Soliq va majburiy to‘lovlar bo‘yicha uzoq muddatli kechiktirilgan majburiyatlar (7240)</td>
                        <td className='td-blue' align='center'>540</td>
                        <td><input type="number" defaultValue={evalutionNames.delayed_payment_obligations_540.start} {...register('delayed_payment_obligations_540_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.delayed_payment_obligations_540.end} {...register('delayed_payment_obligations_540_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshqa uzoq muddatli kechiktirilgan majburiyatlar (7250, 7290)</td>
                        <td className='td-blue' align='center'>550</td>
                        <td><input type="number" defaultValue={evalutionNames.other_deferred_liabilities_550.start} {...register('other_deferred_liabilities_550_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.other_deferred_liabilities_550.end} {...register('other_deferred_liabilities_550_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Xaridorlar va buyurtmachilardan olingan bo‘naklar (7300)</td>
                        <td className='td-blue' align='center'>560</td>
                        <td><input type="number" defaultValue={evalutionNames.feedback_from_customers_560.start} {...register('feedback_from_customers_560_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.feedback_from_customers_560.end} {...register('feedback_from_customers_560_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli bank kreditlari (7810)</td>
                        <td className='td-blue' align='center'>570</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_bank_loans_570.start} {...register('long_term_bank_loans_570_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_bank_loans_570.end} {...register('long_term_bank_loans_570_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Uzoq muddatli qarzlar (7820, 7830, 7840)</td>
                        <td className='td-blue' align='center'>580</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debts_580.start} {...register('long_term_debts_580_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_debts_580.end} {...register('long_term_debts_580_end')} /></td>
                    </tr>
                    <tr>
                        <td className='td-blue' >Boshqa uzoq muddatli kreditorlik qarzlari (7900)</td>
                        <td className='td-blue' align='center'>590</td>
                        <td><input type="number" defaultValue={evalutionNames.other_long_term_payables_590.start} {...register('other_long_term_payables_590_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.other_long_term_payables_590.end} {...register('other_long_term_payables_590_end')} /></td>
                    </tr>
                    <tr className='td-pink'>
                        <td>Joriy majburiyatlar, jami (satr.610+620+630+640+650+660+670+680+690+700+710+720+730+740+750+760)</td>
                        <td align='center'>600</td>
                        <td><input type="number" defaultValue={evalutionNames.current_liabilities_600.start} {...register('current_liabilities_600_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.current_liabilities_600.end} {...register('current_liabilities_600_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >shu jumladan: joriy kreditorli qarzlari (satr.610+630+650+670+680+690+700+710+720+760)</td>
                        <td className="td-blue" align='center'>601</td>
                        <td><input type="number" defaultValue={evalutionNames.including_current_payables_601.start} {...register('including_current_payables_601_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.including_current_payables_601.end} {...register('including_current_payables_601_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >shundan: muddati o‘tgan joriy kreditorlik qarzlari</td>
                        <td className="td-blue" align='center'>602</td>
                        <td><input type="number" defaultValue={evalutionNames.which_overdue_current_payables_602.start} {...register('which_overdue_current_payables_602_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.which_overdue_current_payables_602.end} {...register('which_overdue_current_payables_602_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Mol yetkazib beruvchilar va pudratchilarga qarz (6000)</td>
                        <td className="td-blue" align='center'>610</td>
                        <td><input type="number" defaultValue={evalutionNames.debt_to_suppliers_of_goods_610.start} {...register('debt_to_suppliers_of_goods_610_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debt_to_suppliers_of_goods_610.end} {...register('debt_to_suppliers_of_goods_610_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Ajratilgan bo‘linmalarga qarz (6110)</td>
                        <td className="td-blue" align='center'>620</td>
                        <td><input type="number" defaultValue={evalutionNames.debt_to_separate_units_620.start} {...register('debt_to_separate_units_620_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debt_to_separate_units_620.end} {...register('debt_to_separate_units_620_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Shuʼba va qaram xo‘jalik jamiyatlariga qarz (6120)</td>
                        <td className="td-blue" align='center'>630</td>
                        <td><input type="number" defaultValue={evalutionNames.doubtful_and_dependent_debt_630.start} {...register('doubtful_and_dependent_debt_630_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.doubtful_and_dependent_debt_630.end} {...register('doubtful_and_dependent_debt_630_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Kechiktirilgan daromadlar (6210, 6220, 6230)</td>
                        <td className="td-blue" align='center'>640</td>
                        <td><input type="number" defaultValue={evalutionNames.deferred_earnings_640.start} {...register('deferred_earnings_640_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.deferred_earnings_640.end} {...register('deferred_earnings_640_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Soliq, va majburiy to‘lovlar bo‘yicha kechiktirilgan majburiyatlar (6240)</td>
                        <td className="td-blue" align='center'>650</td>
                        <td><input type="number" defaultValue={evalutionNames.delayed_payment_obligations_650.start} {...register('delayed_payment_obligations_650_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.delayed_payment_obligations_650.end} {...register('delayed_payment_obligations_650_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Boshqa kechiktirilgan majburiyatlar (6250, 6290)</td>
                        <td className="td-blue" align='center'>660</td>
                        <td><input type="number" defaultValue={evalutionNames.other_deferred_liabilities_660.start} {...register('other_deferred_liabilities_660_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.other_deferred_liabilities_660.end} {...register('other_deferred_liabilities_660_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Olingan bo‘naklar (6300)</td>
                        <td className="td-blue" align='center'>670</td>
                        <td><input type="number" defaultValue={evalutionNames.received_lumps_670.start} {...register('received_lumps_670_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.received_lumps_670.end} {...register('received_lumps_670_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Byudjetga to‘lovlar bo‘yicha qarz (6400)</td>
                        <td className="td-blue" align='center'>680</td>
                        <td><input type="number" defaultValue={evalutionNames.debt_payments_to_budget_680.start} {...register('debt_payments_to_budget_680_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debt_payments_to_budget_680.end} {...register('debt_payments_to_budget_680_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue">Sug‘urtalar bo‘yicha qarz (6510)</td>
                        <td className="td-blue" align='center'>690</td>
                        <td><input type="number" defaultValue={evalutionNames.insurance_debt_690.start} {...register('insurance_debt_690_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.insurance_debt_690.end} {...register('insurance_debt_690_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Maqsadli davlat jamg‘armalariga to‘lovlar bo‘yicha qarz (6520)</td>
                        <td className="td-blue" align='center'>700</td>
                        <td><input type="number" defaultValue={evalutionNames.debt_on_state_funds_700.start} {...register('debt_on_state_funds_700_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debt_on_state_funds_700.end} {...register('debt_on_state_funds_700_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Taʼsischilarga bo‘lgan qarzlar (6600)</td>
                        <td className="td-blue" align='center'>710</td>
                        <td><input type="number" defaultValue={evalutionNames.debts_to_founders_710.start} {...register('debts_to_founders_710_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debts_to_founders_710.end} {...register('debts_to_founders_710_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Mexnatga haq, to‘lash bo‘yicha qarz (6700)</td>
                        <td className="td-blue" align='center'>720</td>
                        <td><input type="number" defaultValue={evalutionNames.debt_for_payment_of_wages_720.start} {...register('debt_for_payment_of_wages_720_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.debt_for_payment_of_wages_720.end} {...register('debt_for_payment_of_wages_720_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Qisqa muddatli bank kreditlari (6810)</td>
                        <td className="td-blue" align='center'>730</td>
                        <td><input type="number" defaultValue={evalutionNames.short_term_bank_loans_730.start} {...register('short_term_bank_loans_730_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.short_term_bank_loans_730.end} {...register('short_term_bank_loans_730_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Qisqa muddatli qarzlar (6820, 6830, 6840)</td>
                        <td className="td-blue" align='center'>740</td>
                        <td><input type="number" defaultValue={evalutionNames.short_term_loans_740.start} {...register('short_term_loans_740_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.short_term_loans_740.end} {...register('short_term_loans_740_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Uzoq muddatli majburiyatlarning joriy qismi (6960)</td>
                        <td className="td-blue" align='center'>750</td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_liabilities_part_750.start} {...register('long_term_liabilities_part_750_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.long_term_liabilities_part_750.end} {...register('long_term_liabilities_part_750_end')} /></td>
                    </tr>
                    <tr>
                        <td className="td-blue" >Boshqa kreditorlik qarzlar (6950 dan tashqari 6900)</td>
                        <td className="td-blue" align='center'>760</td>
                        <td><input type="number" defaultValue={evalutionNames.other_payables_760.start} {...register('other_payables_760_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.other_payables_760.end} {...register('other_payables_760_end')} /></td>
                    </tr>
                    <tr className='td-pink'>
                        <td >II bo‘lim bo‘yicha jami (satr.490+600)</td>
                        <td align='center'>770</td>
                        <td><input type="number" defaultValue={evalutionNames.total_for_second_part_770.start} {...register('total_for_second_part_770_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.total_for_second_part_770.end} {...register('total_for_second_part_770_end')} /></td>
                    </tr>
                    <tr className='td-pink'>
                        <td >Balans passivi bo‘yicha jami (satr.480+770)</td>
                        <td align='center'>780</td>
                        <td><input type="number" defaultValue={evalutionNames.total_on_balance_sheet_liabilities_780.start} {...register('total_on_balance_sheet_liabilities_780_start')} /></td>
                        <td><input type="number" defaultValue={evalutionNames.total_on_balance_sheet_liabilities_780.end} {...register('total_on_balance_sheet_liabilities_780_end')} /></td>
                    </tr>


                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableSecond;