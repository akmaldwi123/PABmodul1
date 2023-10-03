const { useState } = React; const 
{ render } = ReactDOM; 
 function Cat() {     const [State, 
setState] = useState(0); 
     const handleDecrease = () => {         
setState((prevState) => prevState - 1); 
    };      const handleIncrease = () => { 
    setState((prevState) => prevState + 1); 
    };      
return ( 
        <div> 
            <p><h1>{State}</h1></p> 
            <button onClick={handleDecrease}>-1</button> 
            <button onClick={handleIncrease}>+1</button> 
        </div> 
    ); 
} 
 
ReactDOM.createRoot(document.getElementById('root')).render(<Cat />); 
