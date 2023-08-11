import style from './Header.module.css'

export const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
        
            </div>
            <div className={style.socialMedia}>
                <img src="src/Assets/facebook.png" alt="facebook" className={style.icon}/>
                <img src="src/Assets/instagram.png" alt="instagram" className={style.icon}/>
                <img src="src/Assets/twitter-sign.png" alt="twitter" className={style.icon}/>
            </div>
        </div>
    );
}