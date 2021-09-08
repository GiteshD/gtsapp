import React, {useEffect, useState} from "react";
import DiceComponent from "./DiceComponent";
import InvestmentComponent from "./InvestmentComponent";

function InvestmentCountComponent() {

    const [investCount, setInvestCount] = useState(0);

    function increaseCounter() {
        console.log("Paraent Investment: inside increase counter");
        setInvestCount(previousCount => previousCount + 1);
    }

    return(
        <div>
            <InvestmentComponent inv={increaseCounter} />
            <h3>Count of Investment: <span>{investCount}</span></h3>
        </div>
    );
}

export default InvestmentCountComponent;