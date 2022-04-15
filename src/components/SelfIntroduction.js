import styled from 'styled-components';

const Outer = styled.div`
    height: 100vh;
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    margin: 20px;
    font-size: 1.5rem;
    text-align: center;
`;

export default function SelfIntroduction() {
    return (
        <Outer>
            自己紹介
            <Text>
                林 政宏<br/>
                2000/12/05生まれ<br />
                フロントエンド開発、特にReactをメインに学んでいます。<br/>
            </Text>
        </Outer>
    )
}