import { icon } from "../../types"

export const Icon: React.FC<icon> = ({ icon, onClick }) => {
    return (
        <span
            onClick={onClick}
            className='material-symbols-outlined'
        >
            {icon}
        </span>
    )
}