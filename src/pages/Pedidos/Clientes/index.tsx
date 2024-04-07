import "../style.css";

function PedidosC() {
  return (
    <div className="containerPedidos">
      <h1>Meus Pedidos</h1>
      <hr />
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
    </div>
    
  );
}

export default PedidosC;