import * as Styled from './styled';

import Budgets from '../../components/Budgets';
import Menu from '../../components/Menu';
import Pots from '../../components/Pots';
import Values from '../../components/Values';

export default function Home() {

    return (
        <Styled.Container>
            <Menu />



            <Styled.Content>

                <h1 className='text_present_1 '>Visão geral</h1>

                <Styled.Grid>
                    <Values />

                    <div className='content_overview' >
                        
                        <div className='content_left' >
                            <Pots />
                        </div>
                        
                        <div className='content_right' >
                            <Budgets />
                        </div>
                    </div>

                </Styled.Grid>
            </Styled.Content>

        </Styled.Container>
    );
}
