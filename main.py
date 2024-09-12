from elevenlabs_handler import generate_speech_for_speaker

# Paths
audio_file = "input_audio.mp3"  # Your MP3 file
output_files = {
    0: "speaker_0_output.mp3",  # Output file for speaker 0
    1: "speaker_1_output.mp3",  # Output file for speaker 1
    # Add more speakers if necessary
}

# Text for each speaker (can be customized)
text_for_speaker = {
    0: "This is a new sentence for Speaker 0",
    1: "This is a new sentence for Speaker 1"
}

# Voice IDs (replace with actual voice IDs from Eleven Labs)
voice_ids = {
    0: 'voice_id_for_speaker_0',
    1: 'voice_id_for_speaker_1'
}

def main():
    # Example usage of generating speech for different speakers
    for speaker, text in text_for_speaker.items():
        voice_id = voice_ids.get(speaker)
        output_file = output_files.get(speaker)

        if voice_id and output_file:
            print(f"Generating speech for speaker {speaker}...")
            generate_speech_for_speaker(voice_id, text, output_file)
        else:
            print(f"Voice ID or output file missing for speaker {speaker}.")

if __name__ == "__main__":
    main()
