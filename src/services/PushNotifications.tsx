import { Platform } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';
import { LocalNotificationId } from "expo/build/Notifications/Notifications.types";

export interface NotConfig {
    id: string,
    name: string,
    body: string,
    date: string,
}

export interface Notif {
    id: string,
    notificationId: LocalNotificationId
}

export const askPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    if (finalStatus !== "granted") {
        return false;
    }
    return true;
};

export const scheduleNotification = async (data: NotConfig) => {
    if (!askPermissions()) return

    let notTime = new Date(data.date).getTime() - new Date().getTime();

    if (notTime > 86400000) {
        notTime = 86400000
    } else if (notTime > 0) {
        notTime = notTime / 3
    } else {
        return
    }

    if (Platform.OS === 'android') {
        Notifications.createChannelAndroidAsync('chat-messages', {
            name: 'Chat messages',
            sound: true,
            vibrate: true,
        });
    }

    const notificationId = await Notifications.scheduleLocalNotificationAsync(
        {
            title: `Está chegando!!`,
            body: `Falta ${notTime === 86400000 ? "um dia" : "pouco tempo"} para o evento ${data.name}`,
            ios: {
                sound: true,
            },
            android: {
                channelId: "chat-messages"
            }
        },
        {
            time: new Date().getTime() + notTime
        }
    );

    const notifications = await AsyncStorage.getItem("notifications")
    let notificationsArray: Notif[] = []
    notifications && (notificationsArray = JSON.parse(notifications))

    notificationsArray.push({ id: data.id, notificationId })

    await AsyncStorage.setItem("notifications", JSON.stringify(notificationsArray))
};

export const cancelNotification = async (id: string) => {
    const notifications = await AsyncStorage.getItem("notifications")
    let notificationsArray: Notif[] = []
    notifications && (notificationsArray = JSON.parse(notifications))

    let notif = notificationsArray.find(e => e.id === id)

    if (notif) {
        notificationsArray.splice(notificationsArray.indexOf(notif), 1)
        await Notifications.cancelScheduledNotificationAsync(notif.notificationId);
        await AsyncStorage.setItem("notifications", JSON.stringify(notificationsArray))
    }
};

export const cancelAllNotifications = async () => {
    Notifications.cancelAllScheduledNotificationsAsync()
};