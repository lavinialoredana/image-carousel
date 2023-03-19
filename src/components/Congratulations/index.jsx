
const Congratulations = ({winner, handleClick, admin, handleLogInClick}) => {
        
        return(
                <>
                <section>
                        <p> Congratulations {winner}!</p>
                        <button onClick = {handleClick}> Change Winner </button>
                </section>
                
                <section>
                        <p> {admin? "The user is logged in" : "The user is logged out"} </p>
                        <button onClick = {handleLogInClick}>Log in </button>
                </section>
                </>


        )
}

export default Congratulations;