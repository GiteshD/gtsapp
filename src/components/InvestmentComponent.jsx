import React, {useEffect, useState} from "react";


function InvestmentComponent(props) {

    console.log(props);

    const [userState, setUserState] = useState(()=> ({
        name: 'Bruce Kent',
        amountRequired: 5000
    }));

    const [investedAmount, setInvestedAmount] = useState(()=> (''));

   
    
    function handleInvestment() {
        setUserState(prviousUserState => {
            return {...prviousUserState, amountRequired: prviousUserState.amountRequired - Number(investedAmount)}
        });

        props.inv();
    }

   
    return(
        <div style={{marginTop:'5em'}}>
            <h3>Investments </h3>

            <span>{userState.name}</span>
            <span style={{marginLeft:'1em'}}>{userState.amountRequired}</span>
            <input style={{marginLeft:'1em'}} value={investedAmount} placeholder="invest" onChange={e => setInvestedAmount(e.target.value)}/>
            <button className='counter-button counter-button-increment' onClick={handleInvestment}>Invest</button>
        </div>
    );
    
}


export default InvestmentComponent;