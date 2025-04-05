import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#4085fa', '#e7f1fe']} style={styles.main} start={{ x: 0, y: 0 }} end={{ x: 1, y: -0.3 }}>
            
            {/* Soft "Home" Heading at Top-Left */}
            <Text style={styles.softHeading}>Home</Text>

            <View style={styles.container}>
                <View style={styles.heroContent}>
                    <Text style={styles.heroSubheading}>Welcome to ImageShare</Text>
                    <Text style={styles.heroHeading}>Effortlessly Share Your Moments</Text>
                    <Text style={styles.heroPara}>
                        ImageShare allows you to upload, store, and share your images with ease. Whether you are a registered user or just a guest, you can share your memorable moments with friends and family by simply uploading your images and generating a shareable link.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50, // Adjust for better spacing
    },
    softHeading: {
        fontSize: 30, // Bigger size for visibility
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.75)', // Soft white blend
        position: 'absolute',
        top: 35, // Position towards top-left
        left: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.2)', // Light shadow for depth
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    container: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 30,
    },
    heroContent: {
        alignItems: 'center',
        marginBottom: 20,
    },
    heroSubheading: {
        fontSize: 20,
        color: '#0a52bd',
        fontWeight: '600',
        marginBottom: 10,
    },
    heroHeading: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        color: '#003b99',
        marginBottom: 15,
    },
    heroPara: {
        fontSize: 16,
        color: '#f5fbff',
        textAlign: 'left',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#0062ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
