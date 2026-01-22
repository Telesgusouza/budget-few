import * as Styled from './styled';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userData, listPostUpdate } from '../../config/redux/User.store';

import Budgets from '../../components/Budgets';
import Menu from '../../components/Menu';
import Pots from '../../components/Pots';
import Values from '../../components/Values';
import Transactions from '../../components/Transactions';
import RecurringBills from '../../components/RecurringBills';

import axios from 'axios';
import baseurl from '../../../baseurl';

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        async function getInfoAllUser() {
            const jsonToken = localStorage.getItem("token");
            const jsonGuestUser = localStorage.getItem("guest user");

            if (jsonToken !== null && jsonGuestUser === null) {
                const token = JSON.parse(jsonToken);

                try {
                    const requestInfosUser = await axios.get(baseurl + "/auth/all-info", {
                        headers: {
                            "Authorization": "Bearer " + token.token
                        }
                    });

                    dispatch(userData({
                        id: requestInfosUser.data.id,
                        login: requestInfosUser.data.login,
                        name: requestInfosUser.data.name
                    }));

                    dispatch(
                        listPostUpdate({
                            total: requestInfosUser.data.totalPots,
                            list: requestInfosUser.data.pots
                        })
                    );

                    localStorage.setItem("user", JSON.stringify({ user: requestInfosUser.data }));

                } catch (e) {
                    console.error("Error, not found user: ", e);
                }

            } else {
                let user;
                if (jsonGuestUser) {
                    user = JSON.parse(jsonGuestUser);

                    dispatch(userData({
                        id: user.user.id,
                        login: user.user.login,
                        name: user.user.name
                    }));

                    dispatch(
                        listPostUpdate(
                            {
                                total: user.pots.totalPots,
                                list: user.pots.pots
                            }

                        )
                    );
                }

            }
        }

        getInfoAllUser();

    }, []);

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
                        
                            <Transactions />

                        </div>

                        <div className='content_right' >
                            <Budgets />
                            <RecurringBills />
                        </div>

                    </div>

                </Styled.Grid>


            </Styled.Content>

        </Styled.Container>
    );
}
