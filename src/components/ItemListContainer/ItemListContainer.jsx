
export const ItemListContainer = ({ greetings }) => {


    const miEstilo = {
        color: "blue",
        margin: 20,
        fontSize: 30
    }

    return (
        <div style={miEstilo}>{greetings}</div>
    )
}
