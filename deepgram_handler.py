import requests
import json

DEEPGRAM_API_KEY = 'YOUR_DEEPGRAM_API_KEY'

def detect_speakers(audio_file: str) -> dict:
    """
    Sends the audio file to Deepgram API and detects speakers with timestamps.

    Parameters:
        audio_file (str): Path to the MP3 file.
    
    Returns:
        dict: Parsed JSON response with speaker timestamps and words.
    """
    try:
        url = 'https://api.deepgram.com/v1/listen'
        headers = {
            'Authorization': f'Token {DEEPGRAM_API_KEY}',
            'Content-Type': 'audio/mp3'
        }
        params = {
            'diarize': 'true'  # Enable speaker diarization
        }

        # Read the audio file
        with open(audio_file, 'rb') as f:
            audio_data = f.read()

        # Send request to Deepgram API
        response = requests.post(url, headers=headers, params=params, data=audio_data)
        return response.json()

    except Exception as e:
        print(f"Error in Deepgram API call: {e}")
        return None

