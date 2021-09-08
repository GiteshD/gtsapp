import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';


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

    
            <Typography variant="body1" >{userState.name}</Typography>
            <Typography variant="body1" >{userState.amountRequired}</Typography>
            <TextField id="outlined-basic" label="Amount" variant="outlined"  value={investedAmount}  onChange={e => setInvestedAmount(e.target.value)}/>
        
            <Button variant="contained" color="primary" onClick={handleInvestment}>Invest</Button>
        </div>
    );
    
}


export default InvestmentComponent;