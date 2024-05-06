import { useState } from "react"

interface User{
    email: string
    password: string
}
export default function B9() {
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })
    const submit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        submitUser();
        
    }
    const change = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const email = e.target.name;
        const value = e.target.value;
        setUser({
            ...user, [email]: value
        })
    }
    const submitUser = () =>{
        const email = document.getElementById('email') as HTMLElement;
        const password = document.getElementById('password') as HTMLElement;
        email.innerHTML = `Email: ${user.email}`
        password.innerHTML = `Password: ${user.password}`
    }
  return (
    <>
    <form onSubmit={submit}>
        <input name='email' onChange={change} placeholder="Nhập email" type="text" />
        <br />
        <input name='password' onChange={change} placeholder="Nhập mật khẩu" type="password" />
        <br />
        <button type="submit">Submit</button>
    </form>
    <div>
        <h3 id="email">Email: </h3>
        <h3 id="password">Password: </h3>
    </div>
    </>
  )
}
