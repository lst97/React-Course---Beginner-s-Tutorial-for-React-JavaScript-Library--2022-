import React from 'react'
import logo from '../../Images/me_blur.webp'
import '../../Asserts/Styles/info.css'
import Footer from './Footer'

function Info(){
    return(
        <div className='info'>
            <img className='info--profile-pic' src={logo} alt='logo' height={300} width={300}></img>
            <div className='info--content'>
                <div className='info--content--header'>
                    <h2 className='name'>Nelson Lai</h2>
                    <p className='name--title'>Frontend Developer</p>
                    <p className='name--sub-title'>this is a subtitle</p>
                </div>
                <div className='name--buttons'>
                    <button type="button" className='btn-email'>
                        <div className='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
                            Email
                        </div>
                    </button>
                    <button type="button" className='btn-LinkedIn'>
                        <div className='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </div>
                    </button>
                </div>
                <h2>About</h2>
                <p className='content'>This is the about content.</p>
                <h2 >Interests</h2>
                <p className='content'>This is the Intrests content.</p>
                <Footer />
            </div>
        </div>

    );
}
export default Info;