from pydub import AudioSegment
import os

def convert_mp4_to_mp3(mp4_file):
    try:
        audio = AudioSegment.from_file(mp4_file, format="mp4")
        mp3_file = mp4_file.replace(".mp4", ".mp3")
        audio.export(mp3_file, format="mp3")
        print(f"Successfully converted {mp4_file} to {mp3_file}")
        return mp3_file
    except Exception as e:
        mp3_file = mp4_file.replace(".mp4", ".mp3")  # Ensure mp3_file is defined
        print(f"Error converting {mp4_file} to {mp3_file}: {e}")

