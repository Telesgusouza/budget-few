import * as Styled from "./style";

import caret from '../../../assets/icons/caret-up.svg';
import { useEffect, useState } from "react";

interface iProps {
    className?: string;

    count: number;
    current: number;
    response: (num: number) => void;
}

export default function PaginationInput({ className = "", count, current, response }: iProps) {

    const [listNumber, setListNumber] = useState<number[]>([]);

    useEffect(() => {

        updateList();

    }, [current]);

    function updateList() {
        const list: number[] = [];

        for (let i = (current == 1 ?  1 : current) - 1; i <= current + 1; i++) {

            list.push((current == 1 ?  i+1 : i));
        }

        setListNumber(list);
    }

    return (
        <Styled.Container className={className} >

            {current - 2 > 0 &&
                (<>
                    <img className="pagination_icon_1" src={caret} alt="" />

                    <span className="text_present_3" >...</span>
                </>)}

            {count > 0 && listNumber.length > 0 && listNumber.map(num => (
                <li onClick={() => response(num)} className={`text_present_3 ${num == current && "select"}`} >
                    {num}
                </li>
            ))}

            {current + 2 <= count &&
                (<>
                    <span className="text_present_3" >...</span>

                    <img className="pagination_icon_2" src={caret} alt="" />
                </>
                )}



        </Styled.Container>
    )
}