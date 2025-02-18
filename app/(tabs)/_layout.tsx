import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: route.name === "index" || route.name === "Apresentacao2" ? { display: "none" } : {},
      })}
    >
      <Tabs.Screen name="explore" options={{ title: "Explorar" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
      <Tabs.Screen name="settings" options={{ title: "Configurações" }} />
    </Tabs>
  );
}
