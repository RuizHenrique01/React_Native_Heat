import React from 'react';

import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {

    const message = {
        id: "aaasdd",
        text: "Hello World!!!",
        user: {
            name: "RuizHenrique01",
            avatar_url: "https://github.com/RuizHenrique01.png",
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never">
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>
    );
}