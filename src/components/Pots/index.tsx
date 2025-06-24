import * as Styled from "./style.ts";
import img_caret_right from '../../assets/icons/caret-right.svg';

import img_pot from '../../assets/icons/pot.svg';
import Li from "../Li/index.tsx";

export default function Pots() {

    return (
        <Styled.Container className="card" >
            <Styled.Header>
                <h3 className="text_present_2" >Potes</h3>

                <div className="text_present_4 see_details" >
                    Veja detalhes
                    <img src={img_caret_right} alt="Detalhes dos potes" />
                </div>
            </Styled.Header>

            <Styled.Grid>
                <Styled.Card>
                    <img src={img_pot} alt="imagem de pote" loading="lazy" />
                    <div>
                        <span className="text_present_4" >Total Salvo</span>
                        <strong className="text_present_1 see_text" >$850.000.000</strong>
                    </div>
                </Styled.Card>

                <ul>
                    <Li title="Poupança" value={159} color="#277c78" />
                    <Li title="Poupança" value={159} color="#626070" />
                    <Li title="Poupança" value={159} color="#82c9d7" />
                    <Li title="Poupança" value={159} color="#f2cdac" />
                </ul>
            </Styled.Grid>
        </Styled.Container>
    )
}