import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import productDBImage from '../image/productDB-ScreenShot.png';
import otaCaleImage from '../image/otaCale-ScreenShot.png';
import { Button, styled } from '@mui/material';

const Outer = styled('div')`
    min-height: 100vh;
    padding: 20px;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #CC4165;
`;

const Title = styled('div')`
    margin: 20vh 0;
    font-size: 1.5em;
    text-align: center;
`;

const Work = styled('div')`
    max-width: 700px;
    font-size: 1em;
    min-width: 300px;
    text-align: center;
    margin: 30px auto;
`;

const Image = styled('img')`
    margin: 20px;
    box-shadow: 0 10px 25px 0 #00000080;
`;

const SubTitle = styled('div')`
    font-size: 0.8em;
    font-weight: bold;
    text-align: center;
`;

const Text = styled('div')`
    font-size: 0.7em;
    text-align: center;
`;

const CustomButton = styled(Button)`
    margin: 20px;
`;

export default function Portfolio() {

    const STsetting = {
        start: "top center",
        once: true,
    };

    gsap.registerPlugin(ScrollTrigger);
    
    const animation = () => {
        gsap.set(['.title', '.content1', '.content2'], { opacity: 0, y: 20 });

        gsap.to(".title", {
            scrollTrigger: {...STsetting, trigger: '.portfolioOuter'},
            opacity: 1,
            y: 0,
        });
        gsap.to('.content1', {
            scrollTrigger: {...STsetting, trigger: '.content1'},
            opacity: 1,
            y: 0,
        });
        gsap.to('.content2', {
            scrollTrigger: {...STsetting, trigger: '.content2'},
            opacity: 1,
            y: 0,
        });
    };

    useEffect(() => {
        animation();
    }, []);

    return (
        <Outer className='portfolioOuter'>
            <Title className='title'>制作実績</Title>
            <Work className='content1'>
                <div>
                    productDB<br />
                    <Image src={productDBImage} width='80%' />
                </div>
                <SubTitle>コンセプト</SubTitle>
                <Text>誰でも使える簡単なUIの生産管理サービス</Text><br />
                <SubTitle>制作期間</SubTitle>
                <Text>約４ヶ月</Text><br />
                <SubTitle>学んだ技術</SubTitle>
                <Text>Recharts、Firebase(database, hosting)</Text>
                <CustomButton variant='outlined' color='inherit' onClick={() => { window.open('https://productdb-ced2c.web.app/') }}>サイトへアクセス</CustomButton>
            </Work>
            <Work className='content2'>
                <div>
                    OtaCale<br />
                    <Image src={otaCaleImage} width='80%' />
                </div>
                <SubTitle>コンセプト</SubTitle>
                <Text>オタク向けのリアルイベント専用スケジュール管理,メール配信を行うサービス</Text><br />
                <SubTitle>制作期間</SubTitle>
                <Text>約３ヶ月</Text><br />
                <SubTitle>学んだ技術</SubTitle>
                <Text>FullCalendar, firebase(Authentication, Cloud Functions)</Text>
                <CustomButton variant='outlined' color='inherit' onClick={()=>{window.open('https://ota-cale.web.app/about')}}>サイトへアクセス</CustomButton>
            </Work>
        </Outer>
    );
}