import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Contact from './Contact'

const Home = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        // Intro sequence — nav + hero content
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 0.6 }
        });

        tl.from('nav', { y: -40, delay: 0.2 })
            .from(
                ['#home-box-1', '#home-box-2', '#home-box-3', '#home-box-4', '#home-box-5'],
                { y: 40, stagger: 0.15 },
                '-=0.4' // overlap slightly with nav for a snappier feel
            )
            .from('#home-main-upper-right', { y: 40 }, '<'); // start alongside boxes

        // Scroll-triggered reveals
        gsap.from('#home-main-middle-upper', {
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#home-main-middle',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.middle-box', {
            y: 40,
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#home-main-middle',
                start: 'top 70%',
                scrub : true
            }
        });

        gsap.from('#bottom-2-upper', {
            y: 50,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#home-main-bottom-2',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);
    return (
        <div id="home-main">
            <nav>
                <div id="nav-left">
                    <h1>Portfolio .</h1>
                </div>
                <div id="nav-middle">
                    <div id="nav-middle-home"><a href="">Home</a></div>
                    <div id="nav-middle-project"><a href="/project">Project</a></div>
                </div>
                <div id="nav-bottom">
                   <Contact/> 

                </div>
            </nav>
            <div id="home-main-upper">
                <div id="home-main-upper-left">
                    <div id="home-box-1"><h4>Developer Portfolio</h4></div>
                    <div id="home-box-2"><h1>Suraj Yadav</h1></div>
                    <div id="home-box-3"><h3>Creative technologist. Architecting robust digital experiences with rigorous attention to detail and performance.</h3></div>
                    <div id="home-box-4">
                        <div id="box-4_01">
                            <img src="./src/assets/mobile.png" alt="" />
                            <h4>8887591883</h4>
                        </div>
                        <div id="box-4_02">
                            <img src="./src/assets/email.png" alt="" />
                            <h4>sy844662@gmail.com</h4>
                        </div>
                    </div>
                    <div id="home-box-5">
                        <img src="./src/assets/location.png" alt="" />
                        <h4>Varanasi</h4>
                    </div>
                </div>
                <div id="home-main-upper-right">
                    <img src="./src/assets/mine.png" />
                </div>
            </div>
            <div id="home-main-middle">
                <div id="home-main-middle-upper">
                    <h1>Education</h1>
                </div>
                <div id="home-main-middle-lower">
                    <div className="middle-box" id='home-main-middle-lower-left'>
                        <div id="middle-box-1"><h4>10th Grade</h4></div>
                        <div id="middle-box-2"><h2>Modern Convent School</h2></div>
                        <div id="middle-box-3"><h4>Completed with distinction, establishing a strong foundation in core analytical subjects.</h4></div>
                        <div id="middle-box-4">
                            <div id="middle-box-4-left"><h4>Score</h4></div>
                            <div id="middle-box-4-right"><h3>80%</h3></div>
                        </div>
                    </div>
                    <div className="middle-box" id='home-main-middle-lower-center'>
                        <div id="middle-box-1"><h4>12th Grade</h4></div>
                        <div id="middle-box-2"><h2>S.S.S Senior Secondary School</h2></div>
                        <div id="middle-box-3"><h4>Advanced studies focusing on logic, mathematics, and problem-solving methodologies.</h4></div>
                        <div id="middle-box-4">
                            <div id="middle-box-4-left"><h4>Score</h4></div>
                            <div id="middle-box-4-right"><h3>78%</h3></div>
                        </div>
                    </div>
                    <div className="middle-box" id='home-main-middle-lower-bottom'>
                        <div id="middle-box-1"><h4>: Pursuing</h4></div>
                        <div id="middle-box-2"><h2>Kashi Institue Of Technology</h2></div>
                        <div id="middle-box-3"><h4>Active exploration of software engineering principles, algorithms, and modern development paradigms.</h4></div>
                        <div id="middle-box-4">
                            <div id="middle-box-4-left"><h4>Score</h4></div>
                            <div id="middle-box-4-right"><h3>78%</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-main-bottom-2">
                <div id="bottom-2-upper">
                    <h1>Professional Values</h1>
                </div>
                <div id="bottom-2-lower">
                    <div id="bottom-2-lower-left">
                        <h1>Client-Centric Craft</h1>
                        <h4>A creative mindset with never-ending ideas for utilizing self-potential. Approaching problems not just as tasks, but as architectural puzzles waiting for optimal design.</h4>
                    </div>
                    <div id="bottom-2-lower-right">
                        <h2>Relentness Drive</h2>
                        <h4>Always hungry for work. Driven by technical challenges and continuous learning.</h4>
                    </div>
                </div>
                <div id="bottom-3-lower">
                    <div id="bottom-3-lower-left">
                        <h1>Infinite Ideation</h1>
                        <h4>A creative mindset with never-ending ideas for utilizing self-potential. Approaching problems not just as tasks, but as architectural puzzles waiting for optimal design.</h4>
                    </div>
                    <div id="bottom-3-lower-right">
                        <img src="./src/assets/bottom.png" />
                    </div>
                </div>
                <div id="bottom-lower">
                    <div id="bottom-lower-center">
                        <h4><a href="https://github.com/SurajY04">Github</a></h4>
                        <h4><a href="www.linkedin.com/in/suraj-yadav-b7242b33b">Linkedin</a></h4>
                        <h4><a href="">Email</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home