import gsap from 'gsap';
import { useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/material';

const vh = window.innerHeight

const Outer = styled('div')`
    height: ${vh}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #CC4165;
`;

const Name = styled('div')`
    text-align: center;
    font-size: 10vw;
`;

const Scroll = styled('div')`
    text-align: center;
    position: absolute;
    margin: 0 auto;
    bottom: 50px;
    left: 0;
    right: 0;
    font-size: 2.3em;
`;


export default function Top(props) {

    const tl = gsap.timeline({
        delay: 2,
        repeat: -1,
        repeatDelay: 1,
    });

    const animation = () => {
        gsap.set('.name', { opacity: 0, y: -200 });
        gsap.set('.scroll', { opacity: 0 });
        gsap.to('.name', { opacity: 1, duration: 1.5, ease: "elastic.out(1.5, 0.75)", y: 0 });
        gsap.to('.scroll', { opacity: 1, delay: 1 });
        tl.to('.scrollArrow', { delay:0.5, duration: 1, ease: "power3.out(1.7)", y: -25 })
            .to('.scrollArrow', { delay:0.5, duration: 1, ease: "bounce.out(1.7)", y: 0})
    };
    
    useEffect(() => {
        animation()
    }, [])

    return (
        <Outer>
            <Name className='name'>
                Masahiro Hayashi
            </Name>
            <Scroll>
                <div className='scroll'>
                    <ArrowDownwardIcon fontSize='5' className='scrollArrow' /><br />
                    Scroll
                </div>
            </Scroll>
        </Outer>
    )
}