import React, { useState } from 'react';

import {
    Alert,
    Keyboard,
    TextInput,
    View
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSeddingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormated = message.trim();

        if (messageFormated.length > 0) {
            setSeddingMessage(true);
            await api.post('/messages', { message: messageFormated });

            setMessage('');
            Keyboard.dismiss();
            setSeddingMessage(false);
            Alert.alert('Mensagem enviada com sucesso!');

        } else {
            Alert.alert('Escereva a mensagem para enviar.');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardAppearance="dark"
                placeholder="Qual é a sua expectativa para o evento?"
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                editable={!sendingMessage}
            />

            <Button
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit} />
        </View>
    );
}