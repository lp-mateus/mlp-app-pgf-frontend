// Icons
import LinkedinIcon from '../../Images/linkedin.png';
import GmailIcon from '../../Images/gmail.png';

const iconsStyle = {
    width: "100%",
    textDecoration: "none",
    textAlign: "center", 
}

const iconResize = {
    width: "2em",
    margin: "0.5em",
}

export function Footer() {
    return(
        <footer>
            <div style={iconsStyle}>            
                <a href="mateuspedrosa38@gmail.com">
                    <img src={GmailIcon} alt="Card Icon" style={iconResize}></img>      
                </a> 
                <a href="https://br.linkedin.com/in/mateus-leite-1021a716b">
                    <img src={LinkedinIcon} alt="Card Icon" style={iconResize}></img>  
                </a>                                                                    
            </div>
            <p>100% Safe & Secure</p>
            <p>Copyright @ 2022 all rights reserveds</p>
        </footer>
    )
}



