import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 32,
        backgroundColor: "#121212",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    alternateContainer: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 32,
        backgroundColor: "#121212",
        flexDirection: "column",
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: "rhd-regular",
    },
    text777: {
        color: "#777777",
        fontSize: 16,
        fontFamily: "rhd-regular",
    },
    text555: {
        color: "#555555",
        fontSize: 16,
        fontFamily: "rhd-regular",
    },
    textDark: {
        color: "#121212",
        fontSize: 16,
        fontFamily: "rhd-medium",
    },
    textGreen: {
        color: "#ceff00",
        fontSize: 16,
        fontFamily: "rhd-regular",
    },
    heading: {
        color: "#ffffff",
        fontSize: 40,
        fontFamily: "rhd-bold",
        lineHeight: 40,
    },
    brand: {
        // color: "#ceff00",
        color: "#ffffff",
        fontSize: 18,
        fontFamily: "rhd-bold",
        lineHeight: 20,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 64,
    },
    alternateHeader: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    dp: {
        height: 40,
        width: 40,
    },
    icon: {
        height: 20,
        width: 20,
        padding: 5,
    },
    alternateIcon: {
        height: 20,
        width: 24,
        padding: 5,
    },
    bicep: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -10,
        height: 288,
        width: 288,
    },
    textInput: {
        height: 60,
        paddingHorizontal: 16,
        paddingVertical: 20,
        fontSize: 16,
        fontFamily: "rhd-regular",
        color: "#121212",
        backgroundColor: "#ffffff",
        marginTop: 8,
        marginBottom: 8,
    },
});
