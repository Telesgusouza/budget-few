import * as Styled from './style';
import caretUpImage from '../../assets/icons/caret-up.svg';
import { useEffect, useState } from 'react';
import { ITheme } from '../../config/interfaces';
import { toast } from 'react-toastify';

interface IProps {
    label?: string;
    list: ITheme[];
    current: ITheme;
    updateCurrent: (color: ITheme) => void;
}

export default function InputAccordion({ label, list, current, updateCurrent }: IProps) {

    const [show, setShow] = useState<boolean>(false);
    const [currentColor, setCurrentColor] = useState<ITheme>(current);
    const [listColors, setListColors] = useState<ITheme[]>(list.filter(color => color.name !== current.name));

    useEffect(() => {
        const ordered = [...listColors].sort((a, b) => {
            if (a.use === b.use) return 0
            return a.use ? 1 : -1
        });

        setListColors(ordered);
    }, []);

    const selectColor = (obj: ITheme) => {

        if (obj.use) {
            toast.warn("cor já esta sendo usada", { autoClose: 1400 });
            return;
        }

        const newList = [...listColors];

        if (currentColor && !newList.some(c => c.name === currentColor.name)) {
            newList.push(currentColor);
        }

        const filteredList = newList.filter(color => color.name !== obj.name);
        setListColors(filteredList);
        setCurrentColor(obj);

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
                    <Styled.BallColor $color={currentColor.color} />
                    <span className='text_present_4' >{currentColor.name}</span>
                </div>

                <img src={caretUpImage} alt="input sanfona" />
            </Styled.Content>

            <ul >

                {listColors.length > 0 && listColors.map(theme => (
                    <Styled.Li
                        key={theme.name}
                        $alreadyUsed={theme.use ? "unavailable" : "available"}
                        onClick={() => {
                            selectColor(theme)
                        }}
                    >
                        <div>
                            <Styled.BallColor $color={theme.color} />
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
