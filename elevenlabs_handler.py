from elevenlabs import generate

ELEVEN_LABS_API_KEY = "YOUR_ELEVEN_LABS_API_KEY"

def generate_speech_for_speaker(voice_id: str, text: str, output_file: str):
    """
    Generate speech for a specific speaker using Eleven Labs API.

    Parameters:
        voice_id (str): Voice ID for the speaker.
        text (str): The text to generate speech for.
        output_file (str): Path to save the generated speech (MP3).
    
    Returns:
        None
    """
    try:
        # Generate speech from text using the Eleven Labs API
        audio = generate(text=text, voice=voice_id, api_key=ELEVEN_LABS_API_KEY)
        # Save the generated speech to a file
        with open(output_file, 'wb') as f:
            f.write(audio)
        print(f"Generated speech saved to {output_file}")
    
    except Exception as e:
        print(f"Error generating speech with Eleven Labs: {e}")
