import * as Styled from "./style";

import img_caret_right from '../../assets/icons/caret-right.svg';
import PieChartDonut from "../PieChartDonut";
import Li from "../Li";

export default function Budgets() {

    return (
        <Styled.Container className="card" >
            <Styled.Header>
                <strong className="text_present_2" >Orçamentos</strong>

                <div className="see_details" > <span className="text_present_4" > Veja detalhes </span> <img src={img_caret_right} alt="imagem de seta" loading="lazy" /> </div>
            </Styled.Header>

            <div className="rosquinha" >
                <PieChartDonut />
                <ul>
                    <Li title="Poupança" value={159} color="#f2cdac" />
                    <Li title="Poupança" value={159} color="#f2cdac" />
                    <Li title="Poupança" value={159} color="#f2cdac" />
                    <Li title="Poupança" value={159} color="#f2cdac" />
                </ul>
            </div>

        </Styled.Container>
    )
}
