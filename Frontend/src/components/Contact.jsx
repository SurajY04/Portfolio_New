import React, { useState } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

const Contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onClickHandle = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await api.post('/api/contact', {
                email,
                name,
                message
            })
            alert(response.data.message)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading){
        return <main>Loadingg...</main>
    }

    return (
        <>
            <button popoverTarget='get-connect'>Get In Touch</button>
            <div id="get-connect" popover='manual'>
                <form onSubmit={onClickHandle} >
                    <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Enter your name' />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Enter your email' id="" />
                    <textarea onChange={(e) => setMessage(e.target.value)} name="message" placeholder='Enter a short message' id=""></textarea>
                    <div id="buttons">
                        <button type='submit'>Submit</button>
                        <button type='button' popoverTarget='get-connect' popoverTargetAction='hide'>Hide</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact