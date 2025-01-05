import { Link } from "react-router-dom";

function AuthPage() {

    return (
        <>
            <h1 className="text-primary" >WIP</h1>
            <Link to={"/goals"}>
                {"Proceed to Goals"}
            </Link>
        </>
    )
}

export default AuthPage
