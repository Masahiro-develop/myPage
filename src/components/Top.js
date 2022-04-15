import styled from 'styled-components';
import Scroll from './Scroll';

const Outer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Name = styled.div`
    font-size: 5em;
`;

// const Scroll = styled.div`
//     font-size: 2rem;
//     text-align: center;
//     position: absolute;
//     bottom: 50px;
//     margin: auto;
// `;


export default function Top() {
    return (
        <Outer>
            <Name>
                Masahiro Hayashi
            </Name>
            <Scroll/>
        </Outer>
    )
}