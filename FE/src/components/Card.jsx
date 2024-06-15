const Card = (props) => {
    const {children} = props
    return(
        <>
            <div className="border border-gray-200 rounded-lg shadow bg-white min-w-fit p-3">
                {children}
            </div> 
        </>
    )
}

export default Card