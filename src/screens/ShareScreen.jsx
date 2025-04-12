import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';

export default function ShareScreen() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const pickImage = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error:', response.errorMessage);
                } else if (response.assets && response.assets.length > 0) {
                    const asset = response.assets[0];
                    setFile(asset);
                    setResult('');
                }
            }
        );
    };

    const uploadFile = async (data) => {
        try {
            const response = await axios.post("http://10.0.2.2:5000/share", data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
        } catch (error) {
            console.error("Error in upload:", error);
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            Alert.alert("Please select a file first.");
            return;
        }

        const data = new FormData();
        data.append("name", file.fileName);
        data.append("file", {
            uri: file.uri,
            name: file.fileName,
            type: file.type,
        });

        setLoading(true);
        const response = await uploadFile(data);
        setLoading(false);

        if (response) {
            setResult(response);
            setFile(null);
        }
    };

    const copyLinkToClipboard = () => {
        if (result) {
            Clipboard.setString(result);
            Alert.alert("Link copied to clipboard!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Share</Text>
            <Text style={styles.subheading}>Select an image to share</Text>

            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.linkText}>{result}</Text>
                    <TouchableOpacity style={styles.copyButton} onPress={copyLinkToClipboard}>
                        <Text style={styles.copyButtonText}>Copy Link</Text>
                    </TouchableOpacity>
                </View>
            )}

            {file && (
                <Image
                    source={{ uri: file.uri }}
                    style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>{file ? file.fileName : "Choose Image"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.uploadButton, loading && { opacity: 0.6 }]}
                onPress={handleSubmit}
                disabled={loading}
            >
                <Text style={styles.buttonText}>{loading ? "Sharing..." : "Share"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7f1fe',
        padding: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#003b99',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#0a52bd',
        marginBottom: 20,
        textAlign: 'center',
    },
    resultContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 14,
        color: '#003b99',
        textAlign: 'center',
        marginBottom: 5,
    },
    copyButton: {
        backgroundColor: '#0062ff',
        padding: 8,
        borderRadius: 5,
    },
    copyButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#4085fa',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 15,
    },
    uploadButton: {
        backgroundColor: '#0062ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
