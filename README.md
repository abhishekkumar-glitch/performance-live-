# image_same_format

Small helper to open an image and save it back in the same format.

## Python CLI

Requirements:

- Python 3.8+
- Pillow

Install:

```bash
pip install Pillow
```

Usage:

```bash
python image_same_format.py path/to/input.jpg
# creates path/to/input_copy.jpg

python image_same_format.py path/to/input.png path/to/out.png
```

Notes:

- The script preserves EXIF when available.
- For JPEG output, alpha channels are removed automatically.
- If the original format is unknown, the output extension is used as a hint.

## Web UI (client-side)

Files added:

- `index.html` — simple page to pick an image and download it in the same format.
- `styles.css` — minimal styling.
- `script.js` — reads an image, draws to a canvas and triggers a download preserving the original extension when possible.

How to use the web UI:

1. Open `index.html` in a modern browser (no server required for quick testing).
2. Click the file input and choose an image.
3. When the preview appears, click "Download Same Format" to save a copy.

Notes about the web UI:

- Animated GIFs may be flattened when drawn to a canvas.
- EXIF metadata is not preserved by the canvas approach.
- JPEG quality can be adjusted with the provided slider.

## Local server (optional)

If you prefer to serve the page over HTTP (recommended for some browsers):

```bash
# from the project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```
