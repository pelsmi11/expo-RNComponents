import "dotenv/config";

export default {
  expo: {
    name: "RNComponents",
    slug: "RNComponents",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "website.pelsmi11.prueva",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "f76a9696-dc85-4387-aff0-61a32877fdc9",
      },
      apiUrl: process.env.API_URL ?? "http://localhost:3000",
      testEnv: process.env.TEST_ENV ?? "TEST_ENV local gg",
    },
  },
};
