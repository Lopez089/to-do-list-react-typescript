export const ListItems: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <ul className='list-to-do'>
            {children}
        </ul>
    )

}