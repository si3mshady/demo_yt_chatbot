# Flask Text Generation API with ReactJS Integration

This repository contains a simple Flask web application that serves as an API for text generation using the Llama 2 model. The application uses the Hugging Face Transformers library and enables Cross-Origin Resource Sharing (CORS) to allow requests from different domains. Additionally, it includes a ReactJS component that provides a user-friendly interface for interacting with the Flask API.

## Flask API

### Setup

1. Install the required packages by running:

    ```bash
    pip install flask transformers flask-cors
    ```

2. Make sure to have the Hugging Face Transformers library installed. You can install it using:

    ```bash
    pip install transformers
    ```

### Usage

1. Run the Flask application:

    ```bash
    python your_app_name.py
    ```

2. Send a POST request to the `/generate_text` endpoint with a JSON payload containing the `input_prompt`. For example:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"input_prompt": "Once upon a time"}' http://localhost:5000/generate_text
    ```

3. The API will respond with the generated text as JSON:

    ```json
    {"generated_text": "Once upon a time, in a land far, far away..."}
    ```

#### Endpoint

- **`/generate_text` (POST):**
  - **Input:**
    - JSON payload with the key `input_prompt` containing the text prompt for text generation.

      ```json
      {"input_prompt": "Once upon a time"}
      ```

  - **Output:**
    - JSON response with the key `generated_text` containing the generated text.

      ```json
      {"generated_text": "Once upon a time, in a land far, far away..."}
      ```

## ReactJS Integration

To integrate this Flask API with a ReactJS frontend, follow the steps below:

### ReactJS Setup

1. Install required dependencies in your React project:

    ```bash
    npm install
    ```

2. Create a new component or modify an existing one. For example, create a file named `YourComponent.js` and use the provided React component.

3. Import and use the `YourComponent` in your main application file (e.g., `App.js`).

4. Style your component by creating a CSS file (e.g., `YourComponent.css`) and importing it into your React component.

5. Run your React application:

    ```bash
    npm start
    ```

Now, your React component should interact with the Flask Text Generation API. The input prompt is sent to the API, and the generated text is displayed in the response box. Feel free to customize the React component and styles according to your project requirements.