import { HeaderLogo } from "../ui/HeaderLogo"
import { Button } from "../ui/Button"
export function Header() {
    return (
        <header className="w-full py-4 px-8 flex mt-5 justify-between">
            <div className="flex items-center space-x-4">
                <HeaderLogo className="text-yellow-400 h-8 w-8" />
                <h1 className="text-2xl font-bold">Keyboard Racing</h1>
            </div>
            <nav className="flex space-x-6">
                <Button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-200 border-white hover:border-transparent rounded dark:border-gray-800">
                    Sign In
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</Button>
            </nav>
        </header>
    )
}