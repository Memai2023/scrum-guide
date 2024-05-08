import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons = ({direction, path}) => {  
    return (
        <>
            {direction === "forward" ? (
                <Link to={path} className={styles.arrow}>
                    <ChevronRight/>
                </Link>
            ):(
                <Link to={path} className={styles.arrow}>
                    <ChevronLeft/>
                </Link>
            )}
        </>
    )
}
<<<<<<< HEAD
export default Buttons 
=======
export default Buttons;
>>>>>>> main
