import './toggleComplete.css'
import { toggleComplete } from '../../types'


export const ToggleComplete: React.FC<toggleComplete> = ({ isComplete, handleComplete, id }) => {
    return (
        <div
            className='toggle '
            onClick={() => handleComplete(id)}
        >
            <div className={isComplete ? 'toggle-complete' : ''}></div>
        </div>)
}