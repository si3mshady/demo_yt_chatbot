from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS



app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Load Llama 2 model
model_name = "alquimista888/sunday"

alquimista888_pipeline = pipeline('text-generation', model=model_name)

@app.route('/generate_text', methods=['POST'])
def generate_text():
    # Get input prompt from the request
    input_prompt = request.json.get('input_prompt', '')
    print(input_prompt)

    # Generate text using the Llama pipeline
    generated_text = alquimista888_pipeline(input_prompt)
    print(generated_text)

    # Return the generated text as JSON

    # Return only the latest generated response
    response_data = jsonify({'generated_text': generated_text})

    # Add the Access-Control-Allow-Origin header
    response_data.headers.add('Access-Control-Allow-Origin', '*')

    return response_data

    # return jsonify({'generated_text': generated_text[0]['generated_text']})

if __name__ == '__main__':
     app.run(host='0.0.0.0', port=5000, debug=True)



