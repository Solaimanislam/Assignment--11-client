import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            {/* NavBar */}

            {/* outlet */}
            <h1>Main</h1>
            <Outlet></Outlet>

            {/* Footer */}

        </div>
    );
};

export default Main;