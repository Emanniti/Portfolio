import React from "react";
import Test from "../contenitore";
import NoPageCss from "../css/noPageCss.module.css"

function informazioniSito() {
    return (<div className={NoPageCss.divCentrato}>
        <Test></Test>
        <h1 style={{ marginTop: 100 }}>Sito di test per testare alcune cose e divertirmi</h1>
    </div>);
}

export default informazioniSito;