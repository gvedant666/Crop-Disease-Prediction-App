import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import useContent from "@/hook/useContent";

type props = {
	onPress: () => void;
	color?: string;
};

export default function JoinButton({ onPress, color }: props) {
	const content = useContent();

	return (
		<Pressable
			onPress={onPress}
			style={{ ...styles.button, backgroundColor: color ?? "#208F4F" }}
		>
			<Text className="text-white text-[16px]">
				{content.onboardingData.joinButtonText}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		paddingHorizontal: 30,
	},
});
