
import React, { useState } from 'react';

function CompoFoot(props) {

  

    let [count,setCount] = useState(1) ;
    let handleClick =()=>
        // count = count+1;
        setCount(count +1);
        console.log(count)
    
  return (<div>

    <div class="footer">
     <p>{count}</p>
      <button onClick ={handleClick}>
        <img src="https://lh3.googleusercontent.com/proxy/15gRY-InDGoTwsvjnCEixxjHx4egkYVQIOcM9wiV3kFH_C5DnOO_6ubzig9TLJysy6NPvSlHAQogZJixEQhWMLNZWp5LbV8U792uuzRTW5tG5Qlnvkj_3At7UEL25w" alt="Like" width="20" height="15" />
      </button>
     
      <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">แชร์</a></div>
      <p>5735512161</p>
    </div>



  </div>
  )

} export default CompoFoot;