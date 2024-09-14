import os
import requests
import json

# Set your Deepgram API key here
DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

AUDIO_FILE = "input.mp3"
OUTPUT_FILE = "output.json"
def main():
    try:
        # Prepare the headers with the API key
        headers = {
            "Authorization": f"Token {DEEPGRAM_API_KEY}",
            "Content-Type": "audio/wav",
        }

        # Read the audio file
        with open(AUDIO_FILE, "rb") as file:
            audio_data = file.read()

        # Prepare the request payload
        payload = audio_data

        # Prepare the transcription options
        params = {
            "diarize": "true",
            "model": "nova-2"
        }

        # Make the API request
        response = requests.post("https://api.deepgram.com/v1/listen", headers=headers, params=params, data=payload)

        # Parse the response as JSON
        response_json = response.json()

        # Print the JSON response in a pretty format
        with open(OUTPUT_FILE, "w") as file:
            json.dump(response_json, file, indent=4)

        print(f"JSON response saved to {OUTPUT_FILE}")


    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    main()