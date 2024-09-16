from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, FileResponse
from io import BytesIO
from pydub import AudioSegment
import os
import requests


app = FastAPI()
