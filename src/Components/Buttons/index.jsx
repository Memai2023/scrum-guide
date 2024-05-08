import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom'

const Buttons = ({direction, path}) => {  
    return (
        <>
            {direction === "forward" ? (
                <Link to={path}>
                    <ChevronRight/>
                </Link>
            ):(
                <Link to={path}>
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
