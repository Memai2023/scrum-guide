import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons = ({direction, path}) => {  
    const handleClick = () => {
    window.scrollTo(0, 0); 
    };

    return (
        <>
            {direction === "forward" ? (
            <Link to={path} className={styles.arrow} onClick={handleClick}>
                <ChevronRight/>
            </Link>
        ):(
            <Link to={path} className={styles.arrow} onClick={handleClick}>
                <ChevronLeft/>
            </Link>
            )}
        </>
    )
}

export default Buttons;