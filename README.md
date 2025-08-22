# Krishi-Sakha

**Krishi-Sakha** is an AI-powered solution designed to help farmers detect crop diseases early and receive preventive guidance based on weather conditions. The project consists of a mobile application and a backend service integrated with TensorFlow models for real-time disease prediction and multilingual support in 11 regional languages.

---

## Features

- **Real-Time Disease Detection**: Upload crop images to receive instant disease diagnosis using an image classification model.
- **Weather-Driven Alerts**: Provides preventive advice based on local weather data to help farmers take proactive measures.
- **Multilingual Audio Support**: Supports 11 languages with text-to-speech functionality, making the app accessible to farmers with varied language needs.
- **User-Friendly Interface**: Simple and intuitive design for ease of use by farmers with limited technical knowledge.

---

## Project Repositories

- **[App Repository](https://github.com/ImaginedTime/Crop-Disease-Prediction-App)**: Contains the source code for the mobile app built with React Native and Expo.
- **[Backend Repository](https://github.com/ImaginedTime/Crop-disease-prediction-backend)**: Contains the FastAPI backend and TensorFlow models for disease prediction.

---

## Technologies Used

- **Frontend (App)**: React Native with Expo for cross-platform compatibility on Android and iOS devices.
- **Backend**: FastAPI to handle image processing and disease prediction requests.
- **Machine Learning**: TensorFlow and Keras for building and training crop disease detection models.
- **Google Sheets API**: Manages disease information and treatment guidelines in multiple languages.
- **Text-to-Speech (TTS)**: Expo’s TTS library for providing audio guidance in regional languages.

---

## Setup and Installation

### Clone the Repositories

1. Clone the app repository:
   ```bash
   git clone https://github.com/ImaginedTime/Crop-Disease-Prediction-App.git
   ```
2. Clone the backend repository:
   ```bash
   git clone https://github.com/ImaginedTime/Crop-disease-prediction-backend.git
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Crop-disease-prediction-backend
   ```
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

### App Setup

1. Navigate to the app directory:
   ```bash
   cd Crop-Disease-Prediction-App
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the app with Expo:
   ```bash
   expo start
   ```

---

## Usage

1. **Upload Crop Images**: Farmers can upload an image of their crop through the app to receive a diagnosis.
2. **Receive Disease Information**: The app provides disease information and preventive tips based on the prediction.
3. **Audio Guidance**: Text-to-speech functionality provides audio instructions in the selected language.

---

## Future Enhancements

- **Extended Crop Support**: Add more crops and diseases to the database.
- **Soil-Based Recommendations**: Provide crop suggestions based on soil data and weather patterns.
- **Offline Mode**: Enable the app to function in low-connectivity areas by storing key information offline.

---

## Contributors

- **`Uday Om Srivastava`**
- **`Karthik Ragulan`**
- **`Vedant Gaikwad`**

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to add any other relevant links or details to further enhance the README. Let me know if you'd like more customization!
