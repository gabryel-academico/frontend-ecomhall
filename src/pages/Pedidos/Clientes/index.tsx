import { useEffect, useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { ProdutoService } from "../../../shared/Services/api/Produto/ProdutoService";
import { jwtDecode } from "jwt-decode";
import banner from "../../../assets/meuspedidos.jpg"

interface user{
unique_name: string;
email: string;
Id: string;
}

function PedidosC() {
  const navigate = useNavigate();
  const token = localStorage.getItem('ACESS_TOKEN');
  const [decodedToken, setDecodedToken] = useState<user | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('ACESS_TOKEN');
    if (token) {
      const decoded = jwtDecode<user | null>(token);
      setDecodedToken(decoded);
      console.log(decoded)
    }
  }, []);

  return (
    <div className="containerPedidos">
     
      <div className='banner'><img src={banner} alt="banner" /></div>
      <hr />

      <article>
        <section className= "conta">
        <h3>Conta</h3>
        <hr />
        {decodedToken ? (
          <>
            <span>Id: {decodedToken.Id}</span>

            <span>Nome: {decodedToken.unique_name}</span>
            
            <span>Email: {decodedToken.email}</span>
          </>
        ) : (
          <span>Token não decodificado</span>
        )}
        </section>
          

      </article>

      <article className="areaPedidos">
          {/**Adicionar um map aqui para todos os pedidos do cliente */}

          

          <section className="pedido">
          
            <section id="numPedido"><span>Número do pedido:</span></section>
            {/**Adicionar outro map aqui para todos os itens de dada pedido do cliente */}
            <section className="infoPedido">

              <div id="itemPedido">
                <span>Item: </span>
                <span>Apontador</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Valor: </span>
                <span>R$ 1,50</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Quantidade: </span>
                <span>3</span>
              </div>
            
            
            </section>
              <section id="finalPedido">
                <div id="itemPedido">
                  <span>Status:</span>
                      <span>Enviado</span>
                    </div>
                    <hr />
                    <div id="itemPedido">
                      <span >Endereço: </span>
                      <span>Rua x, casa Y</span>
                    </div>
                    <hr />
                    <div id="itemPedido">
                      <span>Valor total:</span>
                      <span>R$4,50</span>
                    </div>
              </section>
          </section>
          <hr />
          <hr />
          
          <section className="pedido">
          
            <section id="numPedido"><span>Número do pedido:</span></section>
            <section className="infoPedido">
            
              <div id="itemPedido">
                <span>Item: </span>
                <span>Apontador</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Valor: </span>
                <span>R$ 1,50</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Quantidade: </span>
                <span>3</span>
              </div>
            
            
            </section>
            <section className="infoPedido">
            
              <div id="itemPedido">
                <span>Item: </span>
                <span>Apontador</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Valor: </span>
                <span>R$ 1,50</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Quantidade: </span>
                <span>3</span>
              </div>
            
            
            </section>
            <section className="infoPedido">
            
              <div id="itemPedido">
                <span>Item: </span>
                <span>Apontador</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Valor: </span>
                <span>R$ 1,50</span>
              </div>
              <hr />
              <div id="itemPedido">
                <span>Quantidade: </span>
                <span>3</span>
              </div>
            
            
            </section>
        
                    <section id="finalPedido">
                      <div id="itemPedido">
                        <span>Status:</span>
                        <span>Enviado</span>
                      </div>
                      <hr />
                      <div id="itemPedido">
                        <span >Endereço: </span>
                        <span>Rua x, casa Y</span>
                      </div>
                      <hr />
                      <div id="itemPedido">
                        <span>Valor total:</span>
                        <span>R$4,50</span>
                      </div>
                    </section>
          </section>
          <hr />
          <hr />
      </article>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
    
  );
}

export default PedidosC;