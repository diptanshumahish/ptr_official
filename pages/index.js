import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [height, setHeight] = useState('0vh');
  const [display, setDisplay] = useState('0');
  const [seo, setSeo] = useState('none');


  setTimeout(() => {
    setSeo('block')
  }, 2000)
  return (
    <div className={s.container}>
      <Head>
        <title>Peace Tempo Records</title>
        <meta name="description" content="The official website of Peace Tempo Records" />
        <link rel="icon" href="/ptrLogo.svg" />
      </Head>
      <main>
        <div id="mobMenu" style={{ height: height, opacity: display }}>
          <Image src='/assets/close.svg' height={30} width={30} id='MobClose' onClick={() => {
            setHeight('0vh');
            setDisplay('0')
          }} />
          <div id="mobHeading">
            Navigation
          </div>
          <div id="mobMenuInner">
            <div className="mobLinks">Home 🡥</div>
            <div className="mobLinks">Releases 🡥</div>
            <div className="mobLinks">Demo Submisiion 🡥</div>
          </div>
        </div>

        {/* main content  */}
        <nav>
          <div id="navLeft">
            <div id="menu" onClick={() => {
              setDisplay('1')
              setHeight('100vh')
            }}>
              <Image src='/assets/menu.svg' height={30} width={30} />
              <div>Peace Tempo Records</div>
              <Image src='/ptrLogo.svg' width={30} height={30} />
            </div>
          </div>
          <div id="navRight">
            <div id="navRightIcons">
              <Link href='/'>
                <Image src='/assets/insta.svg' height={20} width={20} />
              </Link>
              <Link href=''>
                <Image src='/assets/spotify.svg' height={20} width={20} />
              </Link>
              <Link href=''>
                <Image src='/assets/gmail.svg' height={20} width={20} />
              </Link>
            </div>
            <Link href=''>
              <div id="navRightDemo">
                Send Demo
              </div>
            </Link>
          </div>
        </nav>
        <div id={s.mainTop}>

          <Image src='/ptrLogo.svg' width={600} height={200} id={s.peace} />
          <Image src='/assets/p.svg' width={800} height={900} id={s.peace1} style={{ display: seo }} />
          <div id={s.head}>
            <div id={s.name}>
              <div id={s.nameTop}>
                Peace Tempo <br />
                Records.
              </div>
              <div id={s.nameBelow}>
                #peacetemporecords2021
              </div>
            </div>
            <Image src='/ptrLogo.svg' height={400} width={400} id={s.mainLogo} />
          </div>
          {/* <div id={s.headContent}>
            <div id={s.headCards}>
              <div className={s.headCard}>
                <div className={s.headCardHead}>
                  WHO ARE WE?
                </div>
                <div className={s.cardContent}>
                  Record Label from India , Estd 2021. Formed with the goal of helping upcoming and underrated asrtists especially for the non mainstream genres :)
                  <Link href='/Login'>
                    <div class={s.headMore}>
                      About Us ^^ ❯
                    </div></Link>
                </div>
              </div>
              <div className={s.headCard}>
                <div className={s.headCardHead}>
                  GENRES WE ACCEPT?
                </div>
                <div className={s.cardContent}>
                  We are a <span>multigenre</span> label, We focus mainly on the non mainstream genres such as <span>Orchestral</span>, <span>Chill</span>, <span>Alternative Indie</span>, <span>Lo-Fi</span> and so on.
                  <div class={s.headMore}>
                    Our genres ❯
                  </div>
                </div>
              </div>
              <div className={s.headCard}>
                <div className={s.headCardHead}>
                  OUR RELEASES
                </div>
                <div className={s.cardContent}>
                  Check out  all our releases, below, it tells about our taste :)
                  <div class={s.headMore}>
                    Releases here ❯
                  </div>
                </div>
              </div>
              <div className={s.headCard}>
                <div className={s.headCardHead}>
                  OUR ARTISTS
                </div>
                <div className={s.cardContent}>
                  Our artsts are those, who make it all possible, check them out!
                  <div class={s.headMore}>
                    Our artists ❯
                  </div>
                </div>
              </div>
            </div>




          </div> */}
        </div>

        <section id={s.news}>
          <div className={s.newsHead}>
            Latest Updates
            <div className={s.nesSub}>
              Keep yourself updated
            </div>
          </div>
          <div id={s.newBack}>
            <div id={s.newsCards}>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d0000b2735e25ddeab48d37aaec6d98f0' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <div className={s.newsAction}>
                    Go!
                  </div>
                </div>
              </div>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d00001e02386eb50e6c27e82e7c59840e' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <Link href=''>
                    <div className={s.newsAction}>
                      Listen Now!
                    </div></Link>
                </div>
              </div>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d0000b2735e25ddeab48d37aaec6d98f0' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <div className={s.newsAction}>
                    Go!
                  </div>
                </div>
              </div>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d0000b2735e25ddeab48d37aaec6d98f0' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <div className={s.newsAction}>
                    Go!
                  </div>
                </div>
              </div>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d00001e02386eb50e6c27e82e7c59840e' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <Link href=''>
                    <div className={s.newsAction}>
                      Listen Now!
                    </div></Link>
                </div>
              </div>
              <div className={s.newsCard}>
                <Image src='https://i.scdn.co/image/ab67616d0000b2735e25ddeab48d37aaec6d98f0' width={250} height={250} className={s.newsImage} />
                <div className={s.newsDetails}>
                  <span>11th November, 2022:</span>
                  Mundane by Riot Th3 Kid is out now, Go and stream it
                  <div className={s.newsAction}>
                    Go!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={s.demo}>
          <div className={s.newsHead}>
            Demos
            <div className={s.nesSub}>
              Submit your demos
            </div>

          </div>
          <div id={s.demoBack}>
            <div id={s.demoo}>
              <Image src='/assets/demo.svg' width={400} height={400} id={s.demoInage} />
              <div className={s.demooContent}>
                <div id={s.demoContentHeading}>
                  We are open for new releases!
                </div>
                <div id={s.demoDetails}>
                  We accept multigenre original demos, Feel free to submit your demos. Go to the demoSubmissions page and fill up the form to
                  submit your demos. We prefer more of the non mainstream genres, as our primary objective of Peace Tempo Reecords is to uplift
                  the upcoming artists especially those who release more of the non mianstream genres songs

                </div>
                <div id={s.submitDemo}>Submit a Demo ❯</div>
              </div>
            </div>
          </div>
        </section>
        <section id={s.upcoming}>
          <div className={s.newsHead}>
            Upcoming Release(s)
            <div className={s.nesSub}>
              Keep an eye on our upcoming stuff
            </div>
          </div>
          <div id={s.upcomingBack}>
            <div id={s.upcomingReleasesCards}>
              <div className={s.upcomingCard}>
                <div className={s.date}>
                  <div className={s.Date}>
                    12 <span>th</span>
                  </div>
                  <div className={s.Month}>
                    November
                  </div>
                </div>
                <div className={s.upcmomingData}>
                  <div className={s.upReleaseName}>
                    Morning Bliss
                  </div>
                  <div className={s.upArtist}>
                    Kxx1sh
                  </div>
                  <div className={s.presave}>
                    Presave
                  </div>
                </div>
              </div>

              <div className={s.upcomingCard}>
                <div className={s.date}>
                  <div className={s.Date}>
                    12 <span>th</span>
                  </div>
                  <div className={s.Month}>
                    November
                  </div>
                </div>
                <div className={s.upcmomingData}>
                  <div className={s.upReleaseName}>
                    Morning Bliss
                  </div>
                  <div className={s.upArtist}>
                    Kxx1sh
                  </div>
                  <div className={s.presave}>
                    Presave
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section id={s.abtUs}>
          <div className={s.newsHead}>
            About Us
            <div className={s.nesSub}>
              A few lines?
            </div>
          </div>
          <div id={s.sbtUsBack}>
            <div id={s.abt}>
              <Image src='/ptrLogo.svg' height={300} width={300} id={s.mainLogo} />
              <div id={s.abtText}>
                Peace Tempo Records is an indian record label formed in 2021 by <span> Diptanshu Mahish</span>. We are a multigenre record label aiming at
                helping the <span>non mainstream genres</span> grow. Our main focus has always been genres like Cinematic, Indie, Alternative, Lo-Fi, Regional
                etc. We are always open to talk about any releases, <span> Feel free</span> to reach us at any time to know more <br />
                <span> #peace :)</span>
              </div>
            </div>
          </div>


        </section>
        <section id={s.stats}>
          <div id={s.statsAreaBack}>
            <div id={s.statsArea}>
              <div className={s.statsColumn}>
                <div className={s.statsColumnHead}>
                  RELEASES
                </div>
                <div className={s.statsData}>
                  15+
                </div>
              </div>
              <div className={s.statsColumn}>
                <div className={s.statsColumnHead}>
                  ARTISTS
                </div>
                <div className={s.statsData}>
                  10+
                </div>
              </div>
              <div className={s.statsColumn}>
                <div className={s.statsColumnHead}>
                  COUNTRIES
                </div>
                <div className={s.statsData}>
                  5+
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          &copy; Peace Tempo Records, 2022
        </footer>
      </main>

    </div>
  )
}
