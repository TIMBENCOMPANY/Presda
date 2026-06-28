from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "share" / "road-to-final-og.jpg"
LOGO = ROOT / "images" / "brand" / "ptransparent.png"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    name = "arialbd.ttf" if bold else "arial.ttf"
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size=size)


canvas = Image.new("RGB", (1200, 630), "#030303")
draw = ImageDraw.Draw(canvas, "RGBA")

# Broad red light and fine route lines keep the image legible in small previews.
glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow, "RGBA")
glow_draw.ellipse((610, -170, 1390, 720), fill=(160, 0, 10, 130))
glow = glow.filter(ImageFilter.GaussianBlur(115))
canvas.paste(glow, (0, 0), glow)
draw = ImageDraw.Draw(canvas, "RGBA")

for index in range(10):
    points = []
    for x in range(-80, 790, 16):
        y = 105 + index * 17 + int(22 * __import__("math").sin((x + index * 31) / 115))
        points.append((x, y))
    draw.line(points, fill=(235, 20, 31, 75), width=2)

draw.rectangle((0, 0, 1200, 8), fill=(235, 20, 31, 255))
draw.rectangle((58, 50, 62, 149), fill=(232, 195, 107, 255))

logo = Image.open(LOGO).convert("RGBA")
logo.thumbnail((86, 86), Image.Resampling.LANCZOS)
canvas.paste(logo, (80, 48), logo)

draw.text((184, 48), "PRESDA WORLD CUP 2026", font=font(17, True), fill=(232, 195, 107, 255))
draw.text((184, 80), "ROAD TO THE FINAL", font=font(55, True), fill=(255, 255, 255, 255))
draw.rectangle((184, 147, 430, 152), fill=(235, 20, 31, 255))
draw.text((184, 170), "BUILD YOUR BRACKET. CHOOSE YOUR WORLD CHAMPION.", font=font(16, True), fill=(255, 255, 255, 160))

column_x = [70, 285, 500, 715]
column_counts = [8, 4, 2, 1]
column_labels = ["ROUND OF 16", "QUARTER FINALS", "SEMI FINALS", "FINAL"]
column_widths = [168, 168, 160, 135]
for x, count, label, width in zip(column_x, column_counts, column_labels, column_widths):
    draw.text((x, 252), label, font=font(11, True), fill=(232, 195, 107, 225))
    available = 270
    gap = available / count
    for index in range(count):
        y = 286 + int(index * gap)
        draw.rounded_rectangle((x, y, x + width, y + 24), radius=6, fill=(255, 255, 255, 17), outline=(255, 255, 255, 35), width=1)
        draw.ellipse((x + 8, y + 8, x + 16, y + 16), fill=(235, 20, 31, 230))
        draw.line((x + width, y + 12, min(855, x + width + 26), y + 12), fill=(235, 20, 31, 95), width=2)

draw.rounded_rectangle((890, 80, 1150, 525), radius=20, fill=(6, 6, 6, 220), outline=(232, 195, 107, 150), width=2)
draw.text((1020, 125), "WORLD CHAMPION", anchor="mm", font=font(15, True), fill=(232, 195, 107, 255))
draw.text((1020, 260), "26", anchor="mm", font=font(126, True), fill=(235, 20, 31, 255))
draw.rounded_rectangle((930, 340, 1110, 405), radius=10, fill=(235, 20, 31, 38), outline=(235, 20, 31, 160), width=2)
draw.text((1020, 373), "YOUR PICK", anchor="mm", font=font(22, True), fill=(255, 255, 255, 255))
draw.text((1020, 440), "WHO LIFTS THE TROPHY?", anchor="mm", font=font(13, True), fill=(255, 255, 255, 145))

draw.text((58, 586), "MY FIFA WORLD CUP 2026 PREDICTION", font=font(13, True), fill=(255, 255, 255, 110))
draw.text((1144, 584), "PRESDA.COM", anchor="ra", font=font(19, True), fill=(255, 255, 255, 255))

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
canvas.save(OUTPUT, "JPEG", quality=94, optimize=True, progressive=True)
print(OUTPUT)
