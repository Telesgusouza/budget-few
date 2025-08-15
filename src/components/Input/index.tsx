import * as Styled from './styled.ts';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import eyeSlashImage from '../../assets/icons/eye-slash.png';
import eyeImage from '../../assets/icons/eye.png';
import dollarSignimage from '../../assets/icons/dollar-sign.svg';

interface IInput {
    type?: "text" | "password" | "email" | "number";
    label: string;
    value: string | number;
    wrong: boolean;

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // 
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void; // 

    typeInput?: "basic" | "target" | "password";
    onToggleShowPassword?: (show: boolean) => void;
}

export default function Input({
    type = "text",
    label,
    value,

    onChange,
    onBlur = () => {},
    onFocus = () => {},

    onToggleShowPassword,
    wrong = false,
    typeInput = "basic"
}: IInput) {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function handleToggleShowPassword() {
        const newState = !showPassword;
        setShowPassword(newState);
        onToggleShowPassword?.(newState);
    };

    function pageChangedPassword() {
        setTimeout(() => {
            navigate("change_password", { replace: true });
        }, 500);
    }

    return (
        <Styled.Label
            $pright={onToggleShowPassword ? "password" : ""}
            $wrong={wrong ? 'wrong' : ''}
        >
            <span className='text_present_5_bold' >{label}</span>

            <div
                className={typeInput === "target" ? 'target_input' : 'password_input'}
            >

                {typeInput === "target" && (
                    <>
                        <img
                            src={dollarSignimage}
                            alt="Objetivo de valor do pote"
                        />
                    </>
                )}

                <input
                    type={type}
                    value={value}

                    onChange={onChange} 
                    onBlur={onBlur}
                    onFocus={onFocus}
                    />

                {onToggleShowPassword && (
                    <>
                        <img
                            onClick={handleToggleShowPassword}
                            src={showPassword ? eyeSlashImage : eyeImage}
                            alt="Icone de olho" />
                    </>
                )}

            </div>

            {label === "Criar Senha" && <p className='text_present_5' > As senhas devem ter pelo menos 8 caracteres</p>}
            {label === "Senha" && <Styled.changePassword className='text_present_5' onClick={pageChangedPassword} > Esqueceu sua senha? clique aqui</Styled.changePassword>}

        </Styled.Label>
    )
}
