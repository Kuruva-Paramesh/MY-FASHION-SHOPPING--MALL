import "./about.css";
import Context from "../../store";
import {useContext} from "react";
export default function About(){
   const{theme}=useContext(Context);
    return (
    <div className="detail" style={{
            background: theme,
            color: theme === "black" ? "white" : "black"
          }}>
     <div className="title">WELCOME TO <br></br>MY FASHION SHOPPING MALL.</div>
     <h2>Shopping Suppliers — Contact List</h2>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Supplier / Brand</th>
        <th>Contact / Phone</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="category">Clothing / Apparel</td>
        <td>The Ethnic World</td>
        <td><a href="tel:+918866591335">+91 88665 91335</a></td>
        <td><a href="https://theethnicworld.com" target="_blank" rel="noopener">theethnicworld.com</a></td>
      </tr>
      <tr>
        <td class="category">Clothing / Apparel</td>
        <td>Cottonduniya</td>
        <td><a href="tel:+917819991335">+91 78199 91335</a></td>
        <td><a href="https://www.cottonduniya.com" target="_blank" rel="noopener">cottonduniya.com</a></td>
      </tr>
      <tr>
        <td class="category">Clothing / Apparel</td>
        <td>Billoomi Fashion</td>
        <td>-----</td>
        <td><a href="https://www.billoomifashion.com" target="_blank" rel="noopener">billoomifashion.com</a></td>
      </tr>
      <tr>
        <td class="category">Clothing / Apparel</td>
        <td>Srokam Exports</td>
        <td>-----</td>
        <td><a href="https://www.srokam.com" target="_blank" rel="noopener">srokam.com</a></td>
      </tr>
      <tr>
        <td class="category">Clothing / Apparel</td>
        <td>The Odd Factory</td>
        <td>-----</td>
        <td><a href="https://theoddfactory.com" target="_blank" rel="noopener">theoddfactory.com</a></td>
      </tr>

      <tr>
        <td class="category">Sports / Equipment</td>
        <td>RS Sports Goods (Meerut)</td>
        <td><a href="tel:+918279707441">+91 82797 07441</a></td>
        <td><a href="https://www.instagram.com/rssportsmeerut" target="_blank" rel="noopener">instagram.com</a></td>
      </tr>
      <tr>
        <td class="category">Sports / Equipment</td>
        <td>Vinex Sports / Bhalla International</td>
        <td>----</td>
        <td><a href="https://www.vinex.com" target="_blank" rel="noopener">vinex.com</a></td>
      </tr>
      <tr>
        <td class="category">Sports / Equipment</td>
        <td>National Sports</td>
        <td>----</td>
        <td><a href="https://www.national-sport.com" target="_blank" rel="noopener">national-sport.com</a></td>
      </tr>
      <tr>
        <td class="category">Sports / Equipment</td>
        <td>Delux Sports</td>
        <td>-----</td>
        <td><a href="https://www.deluxsports.com" target="_blank" rel="noopener">deluxsports.com</a></td>
      </tr>
      <tr>
        <td class="category">Sports / Equipment</td>
        <td>SGMEA (Jalandhar)</td>
        <td><a href="tel:+919999157707">+91 99991 57707</a></td>
        <td><a href="https://www.sgmea.org" target="_blank" rel="noopener">sgmea.org</a></td>
      </tr>

      <tr>
        <td class="category">Home Appliances</td>
        <td>Haier (India)</td>
        <td>-----</td>
        <td><a href="https://www.haier.com/in" target="_blank" rel="noopener">haier.com/in</a></td>
      </tr>
      <tr>
        <td class="category">Home Appliances</td>
        <td>LG India</td>
        <td>-----</td>
        <td><a href="https://www.lg.com/in" target="_blank" rel="noopener">lg.com/in</a></td>
      </tr>
      <tr>
        <td class="category">Toys / Model Cars</td>
        <td>Majorette (die-cast)</td>
        <td>-----</td>
        <td><a href="https://www.majorette.com" target="_blank" rel="noopener">majorette.com</a></td>
      </tr>
      <tr>
        <td class="category">Toys / Model Cars</td>
        <td>Funskool / Hamleys (India)</td>
        <td>------</td>
        <td><a href="https://www.funskoolindia.com" target="_blank" rel="noopener">funskoolindia.com</a></td>
      </tr>

    </tbody>
  </table>
        <h3>Product Categories & Sample Items
       </h3>
       <h4>Here are categories and examples to give you an idea:</h4>
    <table>
        <thead>
        <tr>
            <th>Category</th>
             <th>Sample Product Types / Subcategories</th>
              <th>Example Product</th>
         </tr>
        </thead>
       <tbody>
         <tr>
          <td>Men’s Clothing</td>
          <td>Shirts, T-shirts, jeans, trousers, jackets, formal wear, activewear</td>
          <td>Blaosn men’s Golf / Tennis Dress</td>
         </tr>
         <tr>
            <td>
Women’s Clothing / Dresses
            </td>
             <td>
                Dresses, skirts, tops, ethnic wear, evening gowns, casual wear
                
            </td>
             <td>
                Blaosn Women’s Golf / Tennis Dress
            </td>
         </tr>
          <tr>
            <td>
Sports Goods
            </td>
             <td>
                Balls (soccer, basketball, cricket), frames, nets, equipment, accessories
            </td>
             <td>
                Good Quality Latest Fashion Design Soccer / Football Ball, Willage Leather Ball
            </td>
         </tr>
          <tr>
            <td>
Home Appliances / Electronics
            </td>
             <td>
                Refrigerators, washing machines, air conditioners, TVs
            </td>
             <td>
                -------
            </td>
         </tr>
          <tr>
            <td>
Vehicles / Automobiles / Toy Cars
            </td>
             <td>
                Full-size vehicles (if your mall does that) or model / toy cars
            </td>
             <td>
                --------
            </td>
         </tr>
         <tr>
            <td>Other / Novelty / Accessories</td>
             <td>Bags, shoes, belts, jewelry, gadgets, decor</td>
              <td>--------</td>
         </tr>
        </tbody>
        
    
    </table> 


   </div>
    );
}