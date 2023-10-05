import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return (
    <div>
    <NavBar />
        <ItemListContainer greeting={"Bienvenido a Un Ecommerce Más"} />
    </div>
    )
}

export default App