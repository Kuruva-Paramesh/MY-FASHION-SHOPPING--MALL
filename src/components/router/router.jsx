import {Routes,Route} from "react-router-dom";
import { lazy,Suspense } from "react";
const H =lazy(()=>import("../body/body.jsx"))
const S =lazy(()=>import("../shop/shop.jsx"))
const A =lazy(()=>import("../account/account.jsx"))
const C =lazy(()=>import("../about/about.jsx"))
const B =lazy(()=>import("../bill/bill.jsx"))

export default function Rout(){
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<H/>}></Route>
        <Route path="/shop" element={<S/>}></Route>
        <Route path="/account" element={<A/>}></Route>
        <Route path="/contact" element={<C/>}></Route>
        <Route path="/bill" element={<B/>}></Route>
        </Routes>
        </Suspense>
    );

}