
function Button() {
    const handleClick = 
        (event: React.MouseEvent<HTMLButtonElement>) => console.log(event);

    return(
        <button onClick={handleClick}>Click me!!</button>    
    );
}

export default Button;