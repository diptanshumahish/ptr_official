import Head from "next/head"
import s from '../styles/demo.module.css'
import Image from "next/image"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc, getFirestore, Timestamp } from 'firebase/firestore';
import { useState } from "react";
import { initFirebase } from "../src/config";

export default function Demo() {
    const [artistName, setArtistName] = useState('');
    const [demoLink, setDemoLink] = useState('');
    const [spotifyLink, setSpotifyLink] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const db = getFirestore();
    const app = initFirebase();

    async function submit() {
        setDoc(doc(db, "submissions", `${email} + ${Timestamp.now()}`), {
            artistName: artistName,
            demoLink: demoLink,
            spotifyLink: spotifyLink,
            email: email,
            comments, comments,
            SubmissionDate: Timestamp.now(),
        }, { merge: true, mergeFields: true }).then(() => {
            toast.success('Submitted succesfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    }
    return (
        <div>
            <Head>
                <title>Demo Submission</title>
            </Head>
            <main id={s.main}>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <Image src='/ptrLogo.svg' width={300} height={300} id={s.backImage} />
                <div id={s.Top}>
                    <Link href='/'>
                        <div id={s.topLeft}>
                            <Image src='/assets/back.svg' height={45} width={45} />
                            Demo Submissions
                        </div></Link>
                    <div id={s.TopRight}></div>
                </div>
                <div id={s.FormArea}>
                    <div id={s.FormLeft}>
                        <div id={s.formHead}>Complete The Form Below</div>

                        <div className={s.inpHead}>
                            Artist Name ( Used on music platforms )
                        </div>
                        <input type="text" required className={s.input} placeholder="Enter your artist name" id="name" onChange={() => {
                            setArtistName(document.getElementById('name').value);
                        }} />
                        <div className={s.inpHead}>
                            Soundcloud Demo/ Gdrive demo Link
                        </div>
                        <input type="url" required className={s.input} placeholder="Enter the url here" id="url" onChange={() => {
                            setDemoLink(document.getElementById('url').value);
                        }} />
                        <div className={s.inpHead}>
                            Your Spotify Artist Page link(Type N/A if first release)
                        </div>
                        <input type="url" required className={s.input} placeholder="Enter Spotify url here" id="spotify" onChange={() => {
                            setSpotifyLink(document.getElementById('spotify').value);
                        }} />
                        <div className={s.inpHead}>
                            Your Email address
                        </div>
                        <input type="email" required className={s.input} placeholder="Enter your email here" id="email" onChange={() => {
                            setEmail(document.getElementById('email').value);
                        }} />
                        <div className={s.inpHead}>
                            Any other comments
                        </div>
                        <input type="text" className={s.input} placeholder="Enter your comments" id="comments" onChange={() => {
                            setComments(document.getElementById('comments').value);
                        }} />
                        <div id={s.submitButton} onClick={() => {
                            submit();
                        }}>Submit</div>
                    </div>
                    <div id={s.FormRight}>
                        Make sure your demo follows the follwing guidelines: <br />
                        <span>1. Your Demo is completely original.</span> <br />
                        <span>2. Your demo can be of any genres, but not the mainstream ones such as Dubstep, Electronic and so on. </span> <br />
                        <span>3. If you include any royality free beats provide official links to the sample pack/ website</span> <br />
                        <span>4. Our split is 80 / 20 , artists keep 80% of what revenue generates</span>
                        <span>5. For more queries feel free to contact us</span>
                    </div>
                </div>
            </main>
        </div>
    )
}