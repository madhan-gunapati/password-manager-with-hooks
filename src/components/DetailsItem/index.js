const DetailsItem = (props)=>{
    return <li>
        <p>{props.data.website}</p>
        <p>{props.data.username}</p>
        <p>{props.data.password}</p>
    </li>
}

export default DetailsItem