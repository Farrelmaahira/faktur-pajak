const Input = (props) => {
    const {type, name, className, placeholder, onChange, id, required} = props

    return(
        <input type={type} name={name} className={className} placeholder={placeholder} onChange={onChange} id={id} required={required ? true : false}/>
    )
}

export default Input