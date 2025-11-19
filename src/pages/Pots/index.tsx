import * as Styled from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';


import Button from '../../components/Button';
import Menu from '../../components/Menu';
import ModalPot from '../../components/modals/ModalPot';
import baseurl from '../../../baseurl';
import PaginationInput from '../../components/Inputs/PaginationInput';
import { IPot } from '../../config/interfaces';
import { calculatePercentage, formatNumber } from '../../config/utils';

/*


    quarta
    + mexer com backend
        + adicionar 
        + retirar
    + front end
        + modal de adicionar
        + modal de retirar
    
    quinta
    + mudar updates (de qualquer atualização, para apenas atualização de valores)
    + modificar ou retirar os botões do info pot




*/

export default function Pots() {

    const [viewModal, setViewModal] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [countPages, setCountPages] = useState<number>(1);

    const [listPots, setListPots] = useState<IPot[]>([]);

    useEffect(() => {
        async function getListPots() {
            const tokenJson = localStorage.getItem("token");

            setCountPages(10);

            if (tokenJson) {
                const token = JSON.parse(tokenJson);

                try {
                    const request = await axios.get(`${baseurl}/pot?page=1&size=2`, {
                        headers: {
                            'Authorization': `Bearer ${token.token}`,
                            'Content-Type': 'application/json'
                        },
                    })

                    const fields = request.data;

                    setCountPages(fields.totalPages);

                    setListPots(fields.content);

                    console.log(fields);
                    console.log();
                    console.log();

                } catch (error) {
                    console.error("Error: ", error);
                }
            } else {

                /*

                    ATENÇÃO
                    *  sem token
                       verificar se e visitate

                */

            }

        }

        getListPots();
    }, []);

    return (
        <Styled.Container>

            <ModalPot close={viewModal} modal='add' onShow={() => setViewModal(viewModal)} />

            <Menu />

            <section>

                <header>
                    <h1 className='text_present_1' >Pots</h1>
                    <Button > + Adicionar Pote</Button>
                </header>

                <ul className='listPots' >




                    {listPots.length > 0 ? listPots.map((pot: IPot) => (
                        <li className='card' key={pot.id} >
                            <div className='between' >

                                <h2 className='text_present_2' >{pot.title}</h2>

                                <div className="threePoints">
                                    <div />
                                    <div />
                                    <div />
                                </div>

                            </div>

                            <Styled.PotChartAndBar>

                                <div >
                                    <span className='text_present_4' >Total salvo</span>
                                    <strong className='text_present_1' >R${formatNumber(pot.earnedValue)}</strong>
                                </div>

                                <Styled.Bar 
                                    percentage={Number(`${calculatePercentage(pot.earnedValue, pot.goal)}`)} 
                                    />

                                <div>
                                    <span className='text_present_5_bold' >{calculatePercentage(pot.earnedValue, pot.goal)}%</span>
                                    <span className='text_present_5' >Meta de R${formatNumber(pot.goal)}</span>
                                </div>

                            </Styled.PotChartAndBar>

                            <div className="containerBtn">
                                <Button type='submit' order='secondary' >+Adicionar dinheiro</Button>
                                <Button order='secondary' >Retirar</Button>
                            </div>

                        </li>
                    )) : (<></>)}


                    {/* 


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

                            <Styled.Bar />

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

                            <Styled.Bar />

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

                            <Styled.Bar />

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

                            <Styled.Bar />

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

                            <Styled.Bar />

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

                            <Styled.Bar />

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
                     */}
                </ul>

                <div className="pagination">
                    {countPages >= 2 && <PaginationInput count={countPages} current={currentPage} response={(num) => setCurrentPage(num)} />}
                </div>


            </section>

        </Styled.Container>
    );
}