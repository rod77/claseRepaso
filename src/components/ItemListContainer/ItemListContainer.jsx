import { useEffect, useState } from "react"

export const ItemListContainer = ({ greetings, otroSaludo }) => {


    const miEstilo = {
        color: "red",
        margin: 20,
        fontSize: 30
    }
    const [datos, setDatos] = useState("Hola")
    const [datos2, setDatos2] = useState("11111")

    useEffect(() => {
        console.log("Me ejecuto siempre")
    }) //Se ejecta siempre

    useEffect(() => {
        console.log("Me ejecuto una vez")
    }, [])//Se solo 1 vez

    useEffect(() => {
        console.log("Me ejecuto solo con el state DATOS")
    }, [datos]) //Se datos.


    const modificoDatos = () => {
        if (datos === "Hola") {
            setDatos("Chau")
        } else {
            setDatos("Hola")
        }
    }

    const modificoDatos2 = () => {

        if (datos === "1111") {
            setDatos2("2222")
        } else {
            setDatos2("1111")
        }
    }

    return (
        <>
            <div style={miEstilo}>{greetings}</div>

            <button onClick={modificoDatos}>{datos}</button>
            <br />
            <button onClick={modificoDatos2}>{datos2}</button>
        </>
    )
}


