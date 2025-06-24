import * as Styled from './style';
import { useState } from 'react';

import logo from '../../assets/imgs/Logo.svg';
import logo_mobile from '../../assets/imgs/Logo_mobile.svg';

import icon_house from '../../assets/icons/house.svg';
import icon_house_select from '../../assets/icons/house_select.svg';

import icon_transaction from '../../assets/icons/arrows-down-up.svg';
import icon_transaction_select from '../../assets/icons/arrows-down-up_selected.svg';

import icon_budget from '../../assets/icons/chart-donut.svg';
import icon_budget_select from '../../assets/icons/chart-donut_selected.svg';

import icon_pot from '../../assets/icons/jar-fill.svg';
import icon_pot_select from '../../assets/icons/jar-fill_selected.svg';

import icon_recurring_bills from '../../assets/icons/receipt.svg';
import icon_recurring_bills_select from '../../assets/icons/receipt_selected.svg';

import icon_arrow_fat from '../../assets/icons/arrow-fat-lines-left.svg';

interface ISelect {
    option: "overview" | "transactions" | "budgets" | "pots" | "recurring bills";
}

export default function Menu() {

    const [selectMenu] = useState<ISelect>({ option: 'recurring bills' });
    const [showMenu, setShowMenu] = useState<boolean>(true);

    return (
        <Styled.Menu show_menu={showMenu ? "hidden" : "show"} >

            <menu>


                <div>

                    {showMenu ? (
                        <>
                            <img src={logo_mobile} alt="logo do site mobile" className='logo' />
                        </>)
                        : (
                            <>
                                <img src={logo} alt="logo do site" className='logo' />
                            </>
                        )}


                    <ul>
                        <li className={"text_present_3 "
                            + (selectMenu.option === "overview" && "selected")} >
                            <img

                                loading='lazy'
                                src={selectMenu.option === "overview" ? icon_house_select : icon_house}
                                alt="logo de casa"

                            />
                            Visão geral
                        </li>

                        <li className={"text_present_3 "
                            + (selectMenu.option === "transactions" && "selected")} >
                            <img

                                loading='lazy'
                                src={selectMenu.option === "transactions" ? icon_transaction_select : icon_transaction}
                                alt="logo de transação"

                            /> Transação</li>

                        <li className={"text_present_3 "
                            + (selectMenu.option === "budgets" && "selected")} >
                            <img

                                loading='lazy'
                                src={selectMenu.option === "budgets" ? icon_budget_select : icon_budget}
                                alt="logo de orçamento"

                            /> Orçamentos</li>

                        <li className={"text_present_3 "
                            + (selectMenu.option === "pots" && "selected")} >
                            <img

                                loading='lazy'
                                src={selectMenu.option === "pots" ? icon_pot_select : icon_pot}
                                alt="logo de potes"

                            /> Potes</li>

                        <li className={"text_present_3 "
                            + (selectMenu.option === "recurring bills" && "selected")} >
                            <img

                                loading='lazy'
                                src={selectMenu.option === "recurring bills" ? icon_recurring_bills_select : icon_recurring_bills}
                                alt="logo de contas recorrentes"

                            /> Contas recorrentes</li>
                    </ul>

                </div>

                <Styled.MinimizeMenu
                    show_menu={showMenu ? "hidden" : "show"}
                    onClick={() => setShowMenu(show => !show)}
                >

                    <img src={icon_arrow_fat} alt="icone de flecha" />
                    <strong className='text_present_3' >{!showMenu && "Minimizar Menu"}</strong>

                </Styled.MinimizeMenu>

            </menu>
        </Styled.Menu>
    );
}
