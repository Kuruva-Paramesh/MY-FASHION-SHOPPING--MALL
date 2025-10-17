import { useContext ,useMemo} from "react";
import Context from "../../store.jsx";
import "./bill.css"
export default function Bill(){
    const{count,setcount}=useContext(Context);
    const bill=useMemo(()=>count.reduce((a,b)=>a+b.price,0),[count])
    function handle(props)
    {
        const newcount=count.filter((x,i)=> i!==props);
        setcount(newcount);
    }
    return (<>
    {
        
       count.length===0? (    
       <div className="acount">
        DEAR SIR/MADAM..<br></br>
        NOT SELECTED PRODUCTS <br>
        </br>
        PLEASE SELECT PRODUCTS...
        <div>
        <div className="h"> YOU ORDER PRODUCTS</div>
        <table>
            <thead>
                <th>s.no</th>
                <th>image</th>
                <th>title</th>
                <th>price</th>
                 <th>Delete</th>
            </thead>
      <tbody>     
    <tr>
        <td>-</td>
        <td>{count.length} Qty</td>
        <td>-</td>
        <td>total :&#8377;{bill}</td>
        <td>-</td>
    </tr>
     </tbody>
        </table>

    </div>
       </div>




       ):( 
        <div className="acount">
        <div className="h"> YOU ORDER PRODUCTS</div>
        <table>
            <thead>
                <th>s.no</th>
                <th>image</th>
                <th>title</th>
                <th>price</th>
                 <th>Delete</th>
            </thead>
            <tbody>
             {
            count.map((im,i)=>
            <tr>
           <td>{i+1}</td>
           <td><img src={im.images[0]}/></td>
           <td>{im.title}</td>
           <td>{im.price}</td>
           <td><button onClick={()=>handle(i)}>remove to cart</button></td>
           </tr>
           )
           
    }
    <tr>
        <td>-</td>
        <td>{count.length} Qty</td>
        <td>-</td>
        <td>total :&#8377;{bill}</td>
        <td>-</td>
    </tr>
     </tbody>
        </table>
    <div className="h">
     <button>Way to Pay.</button>
    </div>
    </div>
    )



}</>);
}