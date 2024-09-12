import requests
import os
DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

def detect_speakers(audio_file:str)->dict:
    try:
        url = 'https://api.deepgram.com/v1/listen'
        headers = {
            'Authorization': f'Token {DEEPGRAM_API_KEY}',
            'Content-Type': 'audio/mp3'
        }
        params = {
            'diarize': 'true'  # Enable speaker diarization
        }

        with open(audio_file, 'rb') as f:
            audio_data = f.read()

        response = requests.post(url, headers=headers, params=params, data=audio_data)
        response_data = response.json()

        return response_data
    except Exception as e:
        print(f"Error detecting speakers: {e}")
        return None
