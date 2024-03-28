import { useParams } from "react-router-dom"

export default function RegistrationConfirmation() {
    const { id } = useParams()
    return(
        <h1 style={{color: "white"}}>Thank you for your application. Your confirmation ID is: {id}</h1>
    )
}