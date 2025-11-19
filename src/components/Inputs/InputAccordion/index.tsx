import * as Styled from './style';
import caretUpImage from '../../../assets/icons/caret-up.svg';
import { useEffect, useState } from 'react';
import { IOptionsInputAccordion } from '../../../config/interfaces';
import { toast } from 'react-toastify';

interface IProps {
    label?: string;
    list: IOptionsInputAccordion[];
    current: IOptionsInputAccordion;
    updateCurrent: (color: IOptionsInputAccordion) => void;
}

export default function InputAccordion({ label, list, current, updateCurrent }: IProps) {

    const [show, setShow] = useState<boolean>(false);
    const [currentOption, setCurrentOption] = useState<IOptionsInputAccordion>(current);
    const [listOptions, setListOptions] = useState<IOptionsInputAccordion[]>(list.filter(color => color.name !== current.name));

    useEffect(() => {

        const ordered = [...listOptions].sort((a, b) => {
            if (a.use === b.use) return 0
            return a.use ? 1 : -1
        });

        setListOptions(ordered);
    }, []);

    function selectOption(obj: IOptionsInputAccordion) {

        if (obj.use && !!obj.color) {
            toast.warn("cor já esta sendo usada", { autoClose: 1400 });
            return;
        }

        const newList = [...listOptions];

        if (currentOption && !newList.some(c => c.name === currentOption.name)) {
            if (!currentOption.color) {
                currentOption.use = false; 
            }
            
            newList.push(currentOption);
        }

        const filteredList = newList.filter(color => color.name !== obj.name);
        setListOptions(filteredList);
        setCurrentOption(obj);

        updateCurrent(obj);
    };

    return (
        <Styled.Container $show={show ? "show" : "hidden"} >

            <span
                className='text_present_5_bold' >
                {label && label}
            </span>

            <Styled.Content
                $color={"red"}
                $directionArrow={show ? "up" : "down"}
                onClick={() => setShow(!show)}
            >
                <div>
                    { currentOption.color && <Styled.BallColor $color={currentOption.color} /> }
                    <span className='text_present_4' >{currentOption.name}</span>
                </div>

                <img src={caretUpImage} alt="input sanfona" />
            </Styled.Content>

            <ul >

                {listOptions.length > 0 && listOptions.map(theme => (
                    <Styled.Li
                        key={theme.name}
                        $alreadyUsed={theme.use ? "unavailable" : "available"}
                        onClick={() => {
                            selectOption(theme)
                        }}
                    >
                        <div>
                            { theme.color &&  <Styled.BallColor $color={theme.color} /> }
                            <strong className='text_present_4 see_text' >
                                {theme.name}
                            </strong>
                        </div>

                        {theme.use && (
                            <span className='text_present_5_bold' >
                                Já usado
                            </span>
                        )}
                    </Styled.Li>

                ))}
            </ul>

        </Styled.Container >
    )
}
