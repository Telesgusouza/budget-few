import * as Styled from "./style.ts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IGuestPot, IPot, RootState } from "../../config/interfaces.ts";
import { formatNumber } from "../../config/utils.ts";

import Li from "../Li/index.tsx";

import img_caret_right from '../../assets/icons/caret-right.svg';
import img_pot from '../../assets/icons/pot.svg';
import { useEffect, useState } from "react";

export default function Pots() {

    const { pots } = useSelector((rootReducer: RootState) => rootReducer.user);

    const [onlineUser, setOnlineUser] = useState<boolean>(true);
    const [guestPots, setGuestPots] = useState<{
        total: number;
        list: IGuestPot[];
    }>({ total: 0, list: [] });

    const navigate = useNavigate();

    useEffect(() => {
        const jsonToken = localStorage.getItem('token');

        if (!jsonToken) {
            setOnlineUser(false);
            const guestJson = localStorage.getItem("guest user");

            if (guestJson && (pots.list === undefined || pots.list.length <= 0)) {
                const guest = JSON.parse(guestJson);
                const total = guest.pots.reduce((acc: number, obj: IGuestPot) => acc + obj.pot.earnedValue, 0);

                setGuestPots(
                    {
                        total: total,
                        list: [...guest.pots]
                    }
                );
            }
        }

    }, [pots]);

    function navigateToAnotherPage(link: string) {
        setTimeout(() => {
            navigate(link, { replace: true });
        }, 500);
    }

    return (
        <Styled.Container className="card" >
            <Styled.Header>
                <h3 className="text_present_2" >Potes</h3>

                <div className="text_present_4 see_details" onClick={() => navigateToAnotherPage("/pot")} >
                    Veja detalhes
                    <img src={img_caret_right} alt="Detalhes dos potes" />
                </div>
            </Styled.Header>

            <Styled.Grid>
                <Styled.Card>
                    <img src={img_pot} alt="imagem de pote" loading="lazy" />
                    <div>
                        <span className="text_present_4" >Total Salvo</span>
                        <strong className="text_present_1 see_text" >R${
                            pots.total > 0 ?
                                pots.total
                                : "0,00"
                        }</strong>
                    </div>
                </Styled.Card>

                <ul>

                    {onlineUser ? (
                        pots.list.length > 0 && pots.list.map((pot: IPot, index) => (
                            <>
                                {pots.list.length >= 5 && index !== 4 && (
                                    <Li
                                        onClick={() => navigateToAnotherPage("/pot_info/" + pot.id)}

                                        key={pot.id}
                                        title={pot.title}
                                        value={pot.earnedValue}
                                        color={pot.color.length < 4 ? undefined : pot.color}
                                    />
                                )}
                            </>
                        )))
                        : (
                            guestPots.list.length > 0 && guestPots.list.map((pot, index) => (
                                <>
                                    {index < 5 && (
                                        <Li
                                            onClick={() => { }}

                                            key={""}
                                            title={pot.pot.title}
                                            value={pot.pot.earnedValue}
                                            color={pot.pot.color}
                                        />
                                    )}
                                </>
                            ))
                        )}

                    {(onlineUser && pots.list.length <= 0) || (!onlineUser && guestPots.list.length <= 0) && (
                        <p className="text_present_4_bold center_text" >Para adicionar novos potes clique em Veja detalhes</p>
                    )}

                </ul>
            </Styled.Grid>
        </Styled.Container>
    )
}
