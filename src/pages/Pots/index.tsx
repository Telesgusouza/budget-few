import Button from '../../components/Button';
import Menu from '../../components/Menu';
import * as Styled from './style';

/*

    terça
    + adicionar novo pote, com api
    + trazer potes, e conectar informações

    quarta
    + mexer com backend
        + adicionar meta (variavel da entidade)
        + adicionar 
        + retirar
    
    quinta
    + mudar updates (de qualquer atualização, para apenas atualização de valores)
    + modificar ou retirar os botões do info pot

*/

export default function Pots() {

    return (
        <Styled.Container>

            <Menu />

            <section>

                <header>
                    <h1 className='text_present_1' >Pots</h1>
                    <Button > + Adicionar Pote</Button>
                </header>

                <ul className='listPots' >
                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>
                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>

                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>

                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>

                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>

                    <li className='card' >
                        <div className='between' >

                            <h2 className='text_present_2' >teste</h2>

                            <div className="threePoints">
                                <div />
                                <div />
                                <div />
                            </div>

                        </div>

                        <Styled.PotChartAndBar>

                            <div >
                                <span className='text_present_4' >Total salvo</span>
                                <strong className='text_present_1' >R$159,00</strong>
                            </div>

                            <Styled.Bar  />

                            <div>
                                <span className='text_present_5_bold' >7.95%</span>
                                <span className='text_present_5' >Meta de R$2.000</span>
                            </div>

                        </Styled.PotChartAndBar>

                        <div className="containerBtn">
                            <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                            <Button order='secondary' >Retirar</Button>
                        </div>

                    </li>
                </ul>

            </section>

        </Styled.Container>
    );
}