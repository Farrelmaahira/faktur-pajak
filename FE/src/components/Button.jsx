const Button = (props) => {
    const {type, className, children, onCLick} = props

    return (
        <button type={type} className={className} onClick={onCLick}>
            {children}
        </button>
    )
}

export default Button