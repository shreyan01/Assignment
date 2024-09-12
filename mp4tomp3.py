from pydub import AudioSegment

def convert_mp4_to_mp3(mp4_path:str, mp3_output:str):
    try:
        # Load the audio from the MP4 file
        audio = AudioSegment.from_file(mp4_path, format="mp4")
        # Export the audio as MP3
        audio.export(mp3_output, format="mp3")
        print(f"Conversion successful! MP3 saved as {mp3_output}")
    except Exception as e:
        print(f"Error during conversion: {e}")