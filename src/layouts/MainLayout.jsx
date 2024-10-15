import {Flowbite, Navbar} from "flowbite-react";
import {Link} from "react-router-dom";

export default function MainLayout(props) {
    return (
        <Flowbite>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Food Restaurant</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <Link to="/">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/food">Foods</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/customer">Customers</Link>
                    </Navbar.Link>
                    <Navbar.Link><Link to="/transaction">Transactions</Link></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className="flex flex-row justify-end sticky">
            </div>
            <div className="flex justify-center pt-20 min-h-screen w-full">
                {
                    props.children
                }
            </div>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> Made with ❤️ by <a
                        href="https://github.com/RevaldiDwiOctavian"
                        target="_blank"
                        className="hover:underline">Revaldi Dwi Octavian</a>.
                    </span>
                    © 2023
                </div>
            </footer>
        </Flowbite>

    )
};