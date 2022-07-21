import React from 'react';
import {
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Colors } from '../../theme';


export default function Layout({
    children,
    contentContainerStyle,
    Header,
    toastStyle,
    ...props
}) {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'android' && NaN} // to handle react navigation error on android, weird!
            style={styles.aviodKeyboard}
        >
            {Header}
            <ScrollView
                contentContainerStyle={[styles.container, contentContainerStyle]}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                {...props}
                
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    aviodKeyboard: {
        flex: 1,
        backgroundColor: Colors.screen
    },
});
