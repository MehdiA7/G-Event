import WelcomeMessage from "./components/Client/WelcomeMessage";
import EventCard from "./components/server/Card/EventCard";

export default function Home() {
    return (
        <div>
            <h3>welcome to</h3>
            <h1 className="flex justify-center text-3xl a">
                G EVENT
            </h1>
            <WelcomeMessage/>
            <EventCard/>
        </div>
    );
}
