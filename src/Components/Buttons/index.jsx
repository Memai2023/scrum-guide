import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons = ({direction, path, text}) => {  
    const handleClick = () => {
    window.scrollTo(0, 0); 
    };

    return (
        <>
            {direction === "forward" ? (
            <Link to={path} className={styles.arrow} onClick={handleClick}>
                <ChevronRight/>
                {text} {}
            </Link>
        ):(
            <Link to={path} className={styles.arrow} onClick={handleClick}>
                {text} {}
                <ChevronLeft/>
            </Link>
            )}
        </>
    )
}


export default Buttons;