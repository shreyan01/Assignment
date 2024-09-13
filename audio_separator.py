from pydub import AudioSegment

def split_audio_by_speaker(mp3_file: str, diarization_data: dict, output_dir: str):
    """
    Splits an MP3 file into multiple segments based on Deepgram's speaker diarization.

    Parameters:
        mp3_file (str): Path to the MP3 file.
        diarization_data (dict): The speaker timestamps data from Deepgram.
        output_dir (str): Directory to save the separated audio files.
    
    Returns:
        None
    """
    audio = AudioSegment.from_mp3(mp3_file)
    
    for idx, turn in enumerate(diarization_data['results']['channels'][0]['alternatives'][0]['words']):
        start_time = turn['start'] * 1000  # Convert to milliseconds
        end_time = turn['end'] * 1000      # Convert to milliseconds
        speaker = turn.get('speaker', 'unknown')

        # Extract segment
        segment = audio[start_time:end_time]

        # Save the speaker's audio segment
        output_path = f"{output_dir}/speaker_{speaker}_segment_{idx}.mp3"
        segment.export(output_path, format="mp3")
        print(f"Saved {output_path}")

