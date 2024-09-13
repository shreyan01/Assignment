from mp4tomp3 import convert_mp4_to_mp3
from deepgram_handler import detect_speakers
from audio_separator import split_audio_by_speaker
from elevenlabs_handler import generate_speech_for_speaker

# File paths
mp4_file = "input_video.mp4"
mp3_file = "output_audio.mp3"
output_dir = "separated_speakers"
custom_text = "This is the custom text each speaker should say."

# Step 1: Convert MP4 to MP3
convert_mp4_to_mp3(mp4_file, mp3_file)

# Step 2: Run Deepgram Diarization
diarization_data = detect_speakers(mp3_file)

if diarization_data:
    # Step 3: Split audio by speakers based on Deepgram timestamps
    split_audio_by_speaker(mp3_file, diarization_data, output_dir)

    # Step 4: Clone voices and generate speech using Eleven Labs
    # Assume speaker voice IDs are manually assigned or extracted
    voice_ids = {
        0: "voice_id_for_speaker_0",
        1: "voice_id_for_speaker_1"
    }

    for speaker, voice_id in voice_ids.items():
        output_speech = f"{output_dir}/speaker_{speaker}_custom_speech.mp3"
        generate_speech_for_speaker(voice_id, custom_text, output_speech)
