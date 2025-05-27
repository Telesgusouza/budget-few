import * as Styled from './styled.ts';

import eyeImage from '../../assets/icons/eye.png';
import { useState } from 'react';
import eyeSlashImage from '../../assets/icons/eye-slash.png';
import { useNavigate } from 'react-router-dom';


interface IInput {
    type?: "text" | "password" | "email";
    label: string;
    value: string;
    wrong?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onToggleShowPassword?: (show: boolean) => void;
}

export default function Input({ type = "text", label, onChange, value, onToggleShowPassword, wrong }: IInput) {

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
        <Styled.Label paddingRight={onToggleShowPassword ? "password" : ""} wrong={wrong ? 'wrong' : ''} >
            <span className='text_present_5_bold' >{label}</span>

            <div>
                <input 
                    type={type} 
                    value={value} 
                    onChange={onChange} />

                { onToggleShowPassword && (
                    <>
                        <img
                            onClick={handleToggleShowPassword}
                            src={showPassword ? eyeSlashImage : eyeImage}
                            alt="" />
                    </>
                )}

            </div>

                {label === "Criar Senha" && <p className='text_present_5' > As senhas devem ter pelo menos 8 caracteres</p> }
                {label === "Senha" && <Styled.changePassword className='text_present_5' onClick={pageChangedPassword} > Esqueceu sua senha? clique aqui</Styled.changePassword> }

        </Styled.Label>
    )
}
