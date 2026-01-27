import * as Styled from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';


import Button from '../../components/Button';
import Menu from '../../components/Menu';
import ModalPot from '../../components/modals/ModalPot';
import baseurl from '../../../baseurl';
import PaginationInput from '../../components/Inputs/PaginationInput';
import { IGuestPot, IGuestUser, IPot } from '../../config/interfaces';
import { calculatePercentage, formatNumber } from '../../config/utils';
import WithdrawOrAdd from '../../components/modals/WithdrawOrAdd';
import { useNavigate } from 'react-router-dom';

/*

precisar fazer tratamento de erro aqui

*/

export default function Pots() {

    const [viewModalPot, setViewModalPot] = useState<boolean>(false);
    const [viewWithdrawOrAdd, setViewWithdrawOrAdd] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [countPages, setCountPages] = useState<number>(1);

    const [listPots, setListPots] = useState<IPot[]>([]);

    const [currentPot, setCurrentPot] = useState<{
        id: string,
        operation: "add" | "withdraw"
    }>({
        id: "",
        operation: "add"
    });

    const navigate = useNavigate();

    useEffect(() => {
        async function getListPots() {
            const tokenJson = localStorage.getItem("token");
            const guestJson = localStorage.getItem("guest user");

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

                } catch (error) {
                    console.error("Error: ", error);
                }
            } else if (!tokenJson && guestJson) {
                const guest: IGuestUser = JSON.parse(guestJson);

                const list = guest.pots.map((obj: IGuestPot) => obj.pot);

                setCountPages(Math.ceil(list.length / 6));
                setListPots(list);
            }
        }

        getListPots();
    }, [viewModalPot]);

    useEffect(() => {
        const guestJson = localStorage.getItem("guest user");
        if (guestJson) {

            const guest: IGuestUser = JSON.parse(guestJson);

            const list = guest.pots.map((obj: IGuestPot) => obj.pot);

            setCountPages(Math.ceil(list.length / 6));
            setListPots(list);
        }
    }, [viewWithdrawOrAdd]);

    function toggleWithdrawOrAdd(id: string, operation: "add" | "withdraw") {
        setCurrentPot({
            id: id,
            operation: operation
        })
        setViewWithdrawOrAdd(true);
    }

    return (
        <Styled.Container>

            <ModalPot
                close={viewModalPot}
                modal='add'
                onShow={(e) => setViewModalPot(e)} />


            {viewWithdrawOrAdd && (
                <WithdrawOrAdd
                    id={currentPot.id}

                    onShow={(e) => setViewWithdrawOrAdd(e)}
                    operation={currentPot.operation}
                    close={viewWithdrawOrAdd}
                />
            )}

            <Menu />

            <section>

                <header>
                    <h1 className='text_present_1' >Pots</h1>
                    <Button onClick={() => { setViewModalPot(true) }} > + Adicionar Pote</Button>
                </header>

                <ul className='listPots' >

                    {listPots.length > 0 ? listPots.map((pot: IPot) => (
                        <li className='card' key={pot.id} >
                            <div className='between' >

                                <Styled.CardTitle ballColor={pot.color} className='text_present_2' >{pot.title}</Styled.CardTitle>

                                <div className="threePoints" onClick={() => navigate("/pot_info/" + pot.id)} >
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
                                <Button type='submit' order='secondary' onClick={() => toggleWithdrawOrAdd(pot.id, 'add')} >+Adicionar dinheiro</Button>
                                <Button order='secondary' onClick={() => toggleWithdrawOrAdd(pot.id, 'withdraw')} >Retirar</Button>
                            </div>

                        </li>
                    )) : (<></>)}

                </ul>

                <div className="pagination">
                    {countPages >= 2 && <PaginationInput count={countPages} current={currentPage} response={(num) => setCurrentPage(num)} />}
                </div>


            </section>

        </Styled.Container>
    );
}