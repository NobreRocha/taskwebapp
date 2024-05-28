import Item from './Item'

function Lista() {
    return (
        <>
            <h1>Minha Listinha</h1>
            <ul>
                <Item marca="Ferrari" ano_lacamento={1985} />
                <Item marca="Fiat" ano_lacamento={1964} />
                <Item marca="Renault" />
            </ul>
        </>
    )
}

export default Lista;