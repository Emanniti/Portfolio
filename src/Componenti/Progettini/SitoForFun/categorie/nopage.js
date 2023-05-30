import React from 'react'

import NoPageCss from  "../css/noPageCss.module.css"
import Test from '../contenitore';

function NoPage () {
    return (
      <div className={NoPageCss.divCentrato}>
        <Test></Test>
        <h1 style={{marginTop:100}}>ERROR:404 Page not found!</h1>
      </div>
    )
  };
  
  export default NoPage;