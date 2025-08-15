import * as Styled from "./style.ts";
import { useSelector } from "react-redux";

import { IPot, RootState } from "../../config/interfaces.ts";
import { formatNumber } from "../../config/utils.ts";

import Li from "../Li/index.tsx";

import img_caret_right from '../../assets/icons/caret-right.svg';
import img_pot from '../../assets/icons/pot.svg';
import { useNavigate } from "react-router-dom";

export default function Pots() {

    const { pots } = useSelector((rootReducer: RootState) => rootReducer.user);
    const navigate = useNavigate();

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
                        <strong className="text_present_1 see_text" >R${formatNumber(pots.total)}</strong>
                    </div>
                </Styled.Card>

                <ul>

                    {pots.list.length && pots.list.map((pot: IPot, index) => (
                        <>
                            {pots.list.length >= 5 && index !== 4 && (
                                <Li 
                                    onClick={() => navigateToAnotherPage("/pot_info/" + pot.id)}

                                    key={pot.id} 
                                    title={pot.title} 
                                    value={pot.monthlyAmount} 
                                    color={pot.color.length < 4 ? undefined : pot.color} 
                                />
                            )}
                        </>
                    ))}

                </ul>
            </Styled.Grid>
        </Styled.Container>
    )
}
