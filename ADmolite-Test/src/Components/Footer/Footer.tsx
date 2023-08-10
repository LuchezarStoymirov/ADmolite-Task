import style from './Footer.module.css'

export const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.contactInfo}>
                <h3>Telephone: 123456789</h3>
                <h3>Email: Mountaineers@mail.com</h3>
                <h3>Address: Paradise City, Mountain street No.42</h3>
            </div>
            <div className={style.form}>
                <h1 className={style.formLabel}>Contact us Here!</h1>
                <input type="text" placeholder='Your Email..'  className={style.email}/>
                <input type="textarea" className={style.textarea}/>
                <div className={style.check}>
                <label htmlFor="">Im not a robot</label>
                <input type="checkbox"/>
                </div>
                <div className={style.buttonDiv}>
                    <button className={style.button}>Send</button>
                </div>
                
            </div>
        </div>
    );
}