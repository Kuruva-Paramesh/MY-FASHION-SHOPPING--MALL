import { useContext ,useMemo, useState} from "react";
import Context from "../../store.jsx";
import img from "../../assets/images/qr.jpg";
import "./bill.css"
export default function Bill(){
    const [bil,setbil]=useState(false);
    const [qr,qrset]=useState(false);
    const{count,setCount}=useContext(Context);
    const bill=useMemo(()=>count.reduce((a,b)=>a+b.price,0),[count])
    function handle(props)
    {
        const newcount=count.filter((_,i)=> i!==props);
        setCount(newcount);
    }

     function hand1(){
     const x=confirm("OFFLINE PAYMENT SUCCESSFULLY COMPLETED");
     qrset(false)
      x?
     setbil(false)
    :    
     setbil(true)

    }
    return (<>
    {
        
       bil? (    
       <div className="acount" >
        <div className="bill">
        <div className="head">MY FASHION SHOPPING MALL.</div>
        <p className="time">Date:{new Date().toLocaleDateString()}</p>
        <p className="time">Time:{new Date().toLocaleTimeString()}</p>
        <hr></hr>
        <p className="amount">Price Amount :---------------------{(bill).toFixed(2)}</p>
        <hr></hr>
        <p className="amount">Gst--2% :----------------------------{(bill*0.02).toFixed(2)}</p>
         <hr></hr>
        <p className="amount">Total price : ------------------------{(bill+(bill*0.02)).toFixed(2)}</p>
        <hr></hr>
          <input type="radio" name="ok" onClick={()=>qrset(true)}/>online --------X--------<input type="radio" name="ok" onClick={hand1}/>offline<br/>
         { qr ? <img src={img} className="qr"/>:<p>.</p>}
        <p className="greets">Thanks for visiting My Fashion SHOPPING Mall..</p>
        <button onClick={()=>setbil(false)}>Go to back</button>
       </div>
       </div>
        ):( 
        <div className="acount" >
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
     <button className="button" onClick={()=>setbil(true)}>Way to Pay.</button>
    </div>
    </div>
    )



}</>);
}