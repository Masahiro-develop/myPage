import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import styled from 'styled-components';

const Outer = styled.div`
font-size: 2rem;
text-align: center;
position: absolute;
bottom: 50px;
margin: auto;
`;

export default function Scroll() {
    return (
        <Outer>
            <ArrowDropDownCircleOutlinedIcon fontSize='5' /><br />
            Scroll
        </Outer>
    )
}