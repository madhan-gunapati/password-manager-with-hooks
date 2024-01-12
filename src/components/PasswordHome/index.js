import { useState } from "react"

import DetailsItem from "../DetailsItem"
const PasswordHome = ()=>{
    const [passwords , setPassword] = useState({password_list:[]})
    const [inputContainer , setInput] = useState({website:'' , username:'' , password:''})
    
    const changeInputWebsite = (e)=>{
        setInput((p)=>({...p , website:e.target.value}))
    }
    
    const chnageInputName = (e)=>{
        setInput((p)=>({...p , username:e.target.value}))
    }

    const changeInputPassword = (e)=>{
        setInput((p)=>({...p , password:e.target.value}))
    }

    const addNewItem = ()=>{
        const newItem = {website:inputContainer.website , username:inputContainer.username , password:inputContainer.password}
       setPassword((p) => ({ password_list: [...p.password_list, newItem] }))
       setInput({ website: '', username: '', password: '' })
       console.log(passwords.password_list)
        
    }

    return <div>
        <h1>Password Manager</h1>
        <form onClick={(e)=>{e.preventDefault()}}>
    <h3>Add New Password</h3>
    <input type="text" placeholder="Enter website" value={inputContainer.website} onChange={changeInputWebsite} /> 
    <input type="text" placeholder="Enter unsername" value={inputContainer.username} onChange={chnageInputName} />
    <input type='password' placeholder="Enter Password" value={inputContainer.password} onChange={changeInputPassword} />
    <button type='button' onClick={addNewItem}>Add</button>
        </form>

        <div>
            <h3>Your Passwords</h3>
            <hr/>
            <ul>
                {passwords.password_list.map((item)=><DetailsItem key={item.username} data={item} />)}
                
            </ul>
        </div>
    </div>
}

export default PasswordHome