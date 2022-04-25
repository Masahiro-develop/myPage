import { Button, styled } from "@mui/material"

const StyledButton = styled(Button)`
    margin: 300px;
`;

export default function CustomButton(props) {
    return (
        <StyledButton  variant='outlined' color='inherit' >{props.content}</StyledButton>
    )
}