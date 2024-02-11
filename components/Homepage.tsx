import { Button } from "@/components/ui/Button"

export function Homepage() {
    return (
        <main className="flex flex-col items-center space-y-8 text-white">
            <h2 className="text-4xl font-bold text-center">Join the thrill of real-time typing races!</h2>
            <p className="text-center max-w-md">
                Compete against typists from around the world, improve your typing speed, and climb the leaderboard!
            </p>
            <div className="flex space-x-4">
                <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Create a Room
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Join a Random Race
                </Button>
            </div>
        </main>
    )
}

