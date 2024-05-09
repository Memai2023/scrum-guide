import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useHistory } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons = ({direction, path}) => {  
    const history = useHistory();

    const handleClick = () => {
        window.scrollTo(0, 0);
        history.push(path);
    }
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
export default Buttons;