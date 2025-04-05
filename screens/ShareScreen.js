import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Clipboard } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';

export default function ShareScreen() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    // Function to pick a file
    const pickFile = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images], // Allow image selection
            });
            setFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                console.error('Error picking file:', err);
            }
        }
    };

    // Function to upload file
    const uploadFile = async (data) => {
        try {
            const response = await axios.post("http://your-backend-url.com/share", data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error in upload:", error);
        }
    };

    // Function to handle file upload
    const handleSubmit = async () => {
        if (!file) {
            Alert.alert("Please select a file first.");
            return;
        }

        const data = new FormData();
        data.append("name", file.name);
        data.append("file", {
            uri: file.uri,
            name: file.name,
            type: file.type,
        });

        const response = await uploadFile(data);
        if (response) {
            setResult(response);
            setFile(null);
        }
    };

    // Function to copy link
    const copyLinkToClipboard = () => {
        if (result) {
            Clipboard.setString(result);
            Alert.alert("Link copied to clipboard!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Share</Text>
            <Text style={styles.subheading}>Select an image or file to share</Text>

            {/* Display Shareable Link */}
            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.linkText}>{result}</Text>
                    <TouchableOpacity style={styles.copyButton} onPress={copyLinkToClipboard}>
                        <Text style={styles.copyButtonText}>Copy Link</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* File Upload Section */}
            <TouchableOpacity style={styles.button} onPress={pickFile}>
                <Text style={styles.buttonText}>{file ? file.name : "Choose File"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Share</Text>
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
