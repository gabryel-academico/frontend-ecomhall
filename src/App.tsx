//Esse arquivo é o primeiro a ser redenizado na aplicação e ele está redirecionando o roteamento para o arquivo de rotas(route.js)

//Importando função de roteamento
import CartProvider from "./context/carrinhoContext";
import RoutesApp from "./routes";
//importando Navbar

function App() {
  return (
    <>
    <CartProvider>
    <RoutesApp/>
    </CartProvider>
    
    </>
  
  );
}

export default App;
