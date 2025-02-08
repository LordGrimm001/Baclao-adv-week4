import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

export default function Effect() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1); // Use the previous state to update time
            }, 1000);
        } else {
            clearInterval(interval);
        }
        
        return () => {
            clearInterval(interval); // Cleanup on unmount or when start is toggled
        };
    }, [start]);

    function handleStart() {
        setStart(!start);
    }

    function handleReset() {
        setTime(0); // Reset time to 0
        setStart(false); // Stop the timer when reset
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>00:00:{time < 10 ? `0${time}` : time}</Text> {/* Format the time */}
            <Button onPress={handleReset} title="Reset" />
            <Button
                onPress={handleStart}
                title={!start ? 'Start' : 'Stop'}
            />
        </View>
    );
}
