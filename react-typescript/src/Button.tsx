
type buttonProps = {
    count: number;
    countIncrement: React.Dispatch<React.SetStateAction<number>>;
};

function Button({ count, countIncrement }: buttonProps) {

    function handleClick() {
        countIncrement(prev => {
            const next = prev + 1;
            console.log(next);
            return next;
        })
    }
    return(
        <button onClick={handleClick}>Click me!!</button>   
    );
}

export default Button;