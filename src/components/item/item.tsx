import { item } from '../../types'
import './item.css'

export const Item: React.FC<item> = ({ children, isDelete }) => {
    return (
        <li className={`item ${isDelete ? 'item-delete' : ''}`}>
            {children}
        </li>
    )
}