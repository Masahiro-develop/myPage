import { styled } from "@mui/material";


const Outer = styled('div')`
    height: 15vh;
    font-size: 1em;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Footer() {
    return (
        <Outer>
            Made by Masahiro Hayashi 2022
        </Outer>
    )
}