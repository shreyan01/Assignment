import mp4tomp3
import deepgram_handler
import audio_separator
import elevenlabs_handler

def main():
    mp4tomp3.convert("input.mp4", "output.mp3")
    transcript = deepgram_handler.transcribe("output.mp3")
    audio_files = audio_separator.separate("output.mp3")
    for i, audio_file in enumerate(audio_files):
        voice_id = elevenlabs_handler.add_voice(f"Speaker_{i}", audio_file)
        elevenlabs_handler.text_to_speech(voice_id, transcript)

if __name__ == "__main__":
    main()