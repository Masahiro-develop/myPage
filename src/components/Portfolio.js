import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import styled from 'styled-components';
import productDBImage from '../image/productDB-ScreenShot.png'

const Outer = styled.div`
    min-height: 100vh;
    padding: 200px;
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Test = styled.div`
    height: 100px;
    width: 100px;
    background-color: black;
    margin: 2px;
`;

const Work = styled.div`
    font-size: 3rem;
    min-width: 300px;
    text-align: center;
    margin: 30px auto;
`;

const Image = styled.img`
    margin: 20px;
`;

const Text = styled.div`
    font-size: 1.5rem;
    text-align: left;
`;

export default function Portfolio() {

    gsap.registerPlugin(ScrollTrigger);
    
    const animation = () => {
        gsap.set('.box', {opacity: 0, y: 20})
        gsap.to(".box", { // 動かす要素
            scrollTrigger: {
                trigger: ".box", // この要素まできたらアニメーション開始
                start: "center center", // ビューポートの設定
                markers: true, // 検証用のマーカーを表示
                once: true,
            },
            opacity: 1,
            y: 0,
        });
    }

    useEffect(() => {
        animation();
    }, []);

    

    return (
        <Outer>
            制作してきたサービス
            <Work>
                productDB<br/>
                <Image src={productDBImage} height='900' />
                <Text>
                    コンセプト: 誰でも使える簡単なUIの生産管理サービス<br/>
                    制作期間: 約４ヶ月<br/>
                    学んだ技術: Recharts、Firebase(database, hosting)
                </Text>
            </Work>
            <Test className='box'>1</Test>
            <Test className='box'>2</Test>
            <Test className='box'>3</Test>
        </Outer>
    )
}