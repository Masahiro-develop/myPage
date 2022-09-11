import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { Button, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import productDBImage1 from '../image/productDB-ScreenShot1.png';
import productDBImage2 from '../image/productDB-ScreenShot2.png';
import productDBImage3 from '../image/productDB-ScreenShot3.png';
import otaCaleImage1 from '../image/otaCale-ScreenShot1.png';
import otaCaleImage2 from '../image/otaCale-ScreenShot2.png';
import otaCaleImage3 from '../image/otaCale-ScreenShot3.png';

import "swiper/css";
import "swiper/css/navigation";

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
    max-width: 95vw;
    font-size: 1em;
    min-width: 300px;
    text-align: center;
    margin: 30px auto;
    padding: 20px;
    box-shadow: 0 10px 25px 0 #00000080;
    `;

const Image = styled('img')`
    max-width: 400px;
    margin: 20px;
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

const CustomSwiper = styled(Swiper)`
    max-width: 90vw;
    margin: 20px 0;
`;

const SwiperSlideItem = styled(SwiperSlide)`
    text-align: center;
`;

const productDBImgList = [
    {
        src: productDBImage1,
        text: 'データ入力画面例'
    },
    {
        src: productDBImage2,
        text: '当日データ出力画面例'
    },
    {
        src: productDBImage3,
        text: '月間データ出力画面例'
    }
];

const otaCaleImgList = [
    {
        src: otaCaleImage1,
        text: 'カレンダー画面例'
    },
    {
        src: otaCaleImage2,
        text: 'イベント詳細確認画面例'
    },
    {
        src: otaCaleImage3,
        text: 'イベント時に配信されるメールの例'
    },
];

export default function Portfolio() {

    const STsetting = {
        start: "top center",
        once: true,
    };

    gsap.registerPlugin(ScrollTrigger);
    
    const animation = () => {
        gsap.set(['.title', '.content1', '.content2'], { opacity: 0, y: 20 });

        gsap.to(".title", {
            scrollTrigger: { ...STsetting, trigger: '.portfolioOuter' },
            opacity: 1,
            y: 0,
        });
        gsap.to('.content1', {
            scrollTrigger: { ...STsetting, trigger: '.content1' },
            opacity: 1,
            y: 0,
        });
        gsap.to('.content2', {
            scrollTrigger: { ...STsetting, trigger: '.content2' },
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
                </div>
                <CustomSwiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                >
                    {
                        productDBImgList.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SwiperSlideItem>
                                        <Image src={img.src} width='75%' /><Text>{img.text}</Text>
                                    </SwiperSlideItem>
                                </SwiperSlide>
                            )
                        })
                    }
                </CustomSwiper>
                <SubTitle>コンセプト</SubTitle>
                <Text>誰でも使える簡単なUIの生産管理サービス</Text><br />
                <SubTitle>制作期間</SubTitle>
                <Text>約４ヶ月</Text><br />
                <SubTitle>学んだ技術</SubTitle>
                <Text>Recharts、Firebase(database, hosting)</Text>
                <CustomButton
                    variant='outlined'
                    color='inherit'
                    onClick={() => { window.open('https://productdb-ced2c.web.app/') }}
                >
                    サイトへアクセス
                </CustomButton>
            </Work>
            <Work className='content2'>
                <div>
                    OtaCale<br />

                <CustomSwiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                >
                    {
                        otaCaleImgList.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SwiperSlideItem>
                                        <Image src={img.src} width='75%' />
                                        <Text>{img.text}</Text>
                                    </SwiperSlideItem>
                                </SwiperSlide>
                            )
                        })
                    }
                </CustomSwiper>
                </div>
                <SubTitle>コンセプト</SubTitle>
                <Text>オタク向けのリアルイベント専用スケジュール管理,メール配信を行うサービス</Text><br />
                <SubTitle>制作期間</SubTitle>
                <Text>約３ヶ月</Text><br />
                <SubTitle>学んだ技術</SubTitle>
                <Text>FullCalendar, firebase(Authentication, Cloud Functions)</Text>
                <CustomButton
                    variant='outlined'
                    color='inherit'
                    onClick={() => { window.open('https://ota-cale.web.app/about') }}
                >
                    サイトへアクセス
                </CustomButton>
            </Work> 
        </Outer>
    );
}