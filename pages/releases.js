import Head from "next/head";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import s from '../styles/releases.module.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import r from '../releases.json';
export default function Releases() {
    const [height, setHeight] = useState('0vh');
    const [display, setDisplay] = useState('0');
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <div>
            <Head>
                <title>Releases</title>
            </Head>
            <main>
                <div id="mobMenu" style={{ height: height, opacity: display }}>
                    <Image src='/assets/close.svg' height={30} width={30} id='MobClose' alt='close' onClick={() => {
                        setHeight('0vh');
                        setDisplay('0')
                    }} />
                    <div id="mobHeading">
                        Navigation
                    </div>
                    <div id="mobMenuInner">
                        <Link href='/'>
                            <div className="mobLinks" onClick={() => {
                                setHeight('0vh');
                                setDisplay('0')
                            }} >Home  <Image src='/assets/home.svg' height={30} width={30} alt='home' /></div>
                        </Link>
                        <Link href='/about'>
                            <div className="mobLinks" onClick={() => {
                                setHeight('0vh');
                                setDisplay('0')
                            }} >About Us  <Image src='/assets/abt.svg' height={30} width={30} alt='aboutus' /></div>
                        </Link>
                        <Link href='/artists'>
                            <div className="mobLinks" onClick={() => {
                                setHeight('0vh');
                                setDisplay('0')
                            }} >Artists  <Image src='/assets/artists.svg' height={30} width={30} alt='artists' className='svg' /></div>
                        </Link>
                        <Link href='/releases'>
                            <div className="mobLinks" onClick={() => {
                                setHeight('0vh');
                                setDisplay('0')
                            }} >Releases  <Image src='/assets/rel.svg' height={30} width={30} alt='releases' /></div>
                        </Link>

                        <Link href='/demo'><div className="mobLinks">Demo Submisiion  <Image src='/assets/demlink.svg' height={30} width={30} alt='demo' /></div></Link>
                    </div>
                    <div id="socials">
                        <Link href='https://www.instagram.com/peacetempo_recs/'>
                            <Image src='/assets/insta.svg' height={30} width={30} alt='insta' />
                        </Link>
                        <Link href='https://open.spotify.com/playlist/4keaTDEOuxB6Av9tSW9ib4'>
                            <Image src='/assets/spotify.svg' height={30} width={30} alt='spotify' />
                        </Link>
                        <Link href='mailto:peacetemporecords@gmail.com'>
                            <Image src='/assets/gmail.svg' height={30} width={30} alt='gmail' />
                        </Link>
                    </div>
                </div>
                <nav>
                    <div id="navLeft" >
                        <div id="menu" >
                            <Image src='/assets/menu.svg' height={30} width={30} alt='menu' onClick={() => {
                                setDisplay('1')
                                setHeight('100vh')
                            }} />
                            <div>Peace Tempo Records</div>
                            <Image src='/ptrLogo.svg' width={30} height={30} />
                        </div>
                    </div>
                    <div id="navRight">
                        <div id="navRightIcons">
                            <Link href='https://www.instagram.com/peacetempo_recs/'>
                                <Image src='/assets/insta.svg' height={20} width={20} alt='insta' />
                            </Link>
                            <Link href='https://open.spotify.com/playlist/4keaTDEOuxB6Av9tSW9ib4'>
                                <Image src='/assets/spotify.svg' height={20} width={20} alt='spotify' />
                            </Link>
                            <Link href='mailto:peacetemporecords@gmail.com'>
                                <Image src='/assets/gmail.svg' height={20} width={20} alt='gmail' />
                            </Link>
                        </div>
                        <Link href='/demo'>
                            <div id="navRightDemo">
                                Send Demo
                            </div>
                        </Link>
                    </div>
                </nav>
                <div id={s.releases} >
                    <div id={s.releaseHead}>
                        Our Releases
                        <div id={s.subHead}>Check Out our releases</div>
                    </div>
                    <div id={s.releasesCards}>
                        {r.map(ele => {
                            return (
                                <div className={s.releasesCard} data-aos="flip-right" key={ele.id}>
                                    <div id={s.image}>
                                        <Image src={ele.imageLink} width={200} height={200} alt='release' className={s.img} />

                                    </div>
                                    <div className={s.content}>
                                        <div className={s.text}>
                                            <div className={s.title}>{ele.name}</div>
                                            <div className={s.artist}>{ele.artist}</div>
                                            <div className={s.genre}>{ele.genre}</div>
                                        </div>
                                        <div className={s.link}>
                                            <Link href={ele.link}>
                                                Listen Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
                <footer>
                    &copy; Peace Tempo Records, 2022
                </footer>
            </main>
        </div>
    )

}