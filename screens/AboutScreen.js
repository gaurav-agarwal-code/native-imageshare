import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function AboutScreen() {
    return (
        <LinearGradient colors={['#4085fa', '#e7f1fe']} style={styles.main} start={{ x: 0, y: 0 }} end={{ x: 1, y: -0.3 }}>

            {/* Soft "About" Heading at Top-Left */}
            <Text style={styles.softHeading}>About</Text>

            <View style={styles.container}>
                <View style={styles.heroContent}>
                    <Text style={styles.heroSubheading}>About ImageShare</Text>
                    <Text style={styles.heroHeading}>Store & Share Your Memories</Text>
                    <Text style={styles.heroPara}>
                        ImageShare is a platform designed to simplify the way you store and share your images. Whether you're looking to securely store your photos online or share a special moment with friends, ImageShare provides a seamless experience.
                    </Text>
                </View>

                {/* Horizontally Scrollable Feature List */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconContainer}>
                    <View style={styles.iconBox}>
                        <Text style={styles.iconTitle}>Upload</Text>
                        <Text style={styles.iconDesc}>Quickly and securely upload your images.</Text>
                    </View>

                    <View style={styles.iconBox}>
                        <Text style={styles.iconTitle}>Copy Link</Text>
                        <Text style={styles.iconDesc}>Generate shareable links for images.</Text>
                    </View>

                    <View style={styles.iconBox}>
                        <Text style={styles.iconTitle}>Share</Text>
                        <Text style={styles.iconDesc}>Instantly share images via social media.</Text>
                    </View>
                </ScrollView>
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
        color: '#f3f3ff',
        marginBottom: 15,
    },
    heroPara: {
        fontSize: 16,
        color: '#f5fbff',
        textAlign: 'left',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconBox: {
        width: 160,
        height: 170,
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    iconTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    iconDesc: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
    },
});
