 import "./style.css";
 import { useParams } from "react-router-dom";
 function Produto() {

    const {id} = useParams()

  return (
    <div>
      <h2>Detalhes do Produto</h2>
        meu produto é {id}
        
    </div>
  )
}
export default Produto;