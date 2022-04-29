import { styled } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

const Outer = styled('div')`
    height: 100vh;
    font-size: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E4734F;
    text-align: center;
`;

const Inner = styled('div')`
    padding: 20px;
    margin: 20px;
    border: #CC4165 solid 5px;
    border-radius: 10px;
`;

const Text = styled('div')`
    margin-top: 40px;
    font-size: 1.5rem;
`;

export default function SelfIntroduction() {

    gsap.registerPlugin(ScrollTrigger);
    
    const animation = () => {
        gsap.set('.selfIntroduction', { opacity: 0, y: 20 });
        gsap.to(".selfIntroduction", {
            scrollTrigger: {
                trigger: ".selfIntroductionOuter",
                start: "20% center",
                once: true,
            },
            opacity: 1,
            y: 0,
        });
    };

    useEffect(() => {
        animation();
    }, []);

    return (
        <Outer className='selfIntroductionOuter'>
            <Inner className='selfIntroduction'>
                自己紹介
                <Text>
                    林 政宏<br />
                    2000/12/05生まれ<br />
                    フロントエンド開発、特にReactをメインに学んでいます。<br />
                </Text>
            </Inner>
        </Outer>
    )
}