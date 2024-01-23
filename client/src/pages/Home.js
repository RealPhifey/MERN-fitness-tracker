import { useEffect, useState }from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const respone = await fetch("/api/workouts");
            const json = await respone.json();

            if (respone.ok) {
                setWorkouts(json);
            }
        };

        fetchWorkouts();
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
};

export default Home;