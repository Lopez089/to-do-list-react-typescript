import './item.css'

export const Item: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <li className='item'>
            {children}
        </li>
    )
}