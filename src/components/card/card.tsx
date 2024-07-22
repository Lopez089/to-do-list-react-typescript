import './card.css'

export const Card: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}