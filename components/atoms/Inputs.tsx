import React from 'react';
import css from 'styled-jsx/css';

const style = css`
    input {
        width: 100%;
        padding: 8px 8px 7px;
        font-size: 15px;
        border: 1px solid #888;
        border-radius: 5px;
    }
`;

interface Props {
    value: string;
    onChangeVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Inputs = ({ value, onChangeVal, placeholder }: Props) => {
    return (
        <>
            <input type="text" value={value} onChange={onChangeVal} placeholder={placeholder} />
            <style jsx>{style}</style>
        </>
    );
};

export default Inputs;
