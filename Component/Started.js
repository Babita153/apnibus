import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Started = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>

            {/* Image */}
            <Image
                source={require("../assets/bus3.png")}
                style={styles.image}
            />

            {/* Title */}
            <Text style={styles.title}>
                Share Your Ride Info{'\n'} with Trusted One
            </Text>

            {/* Description */}
            <Text style={styles.description}>
                Embrace the future of ticketing 
                with our apps streamline digital ticket 
                system.
            </Text>

            {/* Indicator Dots */}
            <View style={styles.dotsContainer}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={[styles.dot, styles.activeDot]} />
            </View>

            {/* Started Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Started;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    image: {
        width: 230,
        height: 230,
        resizeMode: "contain",
        marginBottom: 40,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
    },

    description: {
        textAlign: "center",
        color: "gray",
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    dotsContainer: {
        flexDirection: "row",
        marginBottom: 40,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 5,
    },

    activeDot: {
        backgroundColor: "#2e5df6",
        width: 18,
    },

    button: {
        backgroundColor: "#2e5df6",
        width: "90%",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
})
