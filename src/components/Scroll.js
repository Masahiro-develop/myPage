import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { styled } from '@mui/material';

const Outer = styled('div')`
    font-size: 2rem;
    text-align: center;
`;

export default function Scroll() {
    return (
        <Outer>
            <ArrowDropDownCircleOutlinedIcon fontSize='5' /><br />
            Scroll
        </Outer>
    )
}