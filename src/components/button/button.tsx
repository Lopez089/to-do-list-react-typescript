import { button } from "../../types";
import './button.css'

export const Button: React.FC<button> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='btn'
        >
            {children}
        </button>
    )
}


