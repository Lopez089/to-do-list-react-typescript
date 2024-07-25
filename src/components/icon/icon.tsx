import { icon } from "../../types"
import './icon.css'

export const Icon: React.FC<icon> = ({ icon, onClick }) => {
    return (
        <span
            onClick={onClick}
            className='material-symbols-outlined icon'
        >
            {icon}
        </span>
    )
}