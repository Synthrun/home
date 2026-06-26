import os
from PIL import Image

MAX_SIZE = 400 * 1024
ROOT = os.path.dirname(os.path.abspath(__file__))

def sizeof(path):
    return os.path.getsize(path)

def compress_png(path):
    img = Image.open(path)
    tmp_path = path + '.tmp.png'

    w, h = img.size
    for scale in [1.0, 0.85, 0.7, 0.55, 0.4]:
        sw = int(w * scale)
        sh = int(h * scale)
        tmp = img.resize((sw, sh), Image.LANCZOS) if scale < 1 else img.copy()

        if tmp.mode == 'RGBA':
            out = tmp.quantize(colors=255, method=Image.FASTOCTREE)
        elif tmp.mode == 'RGB':
            out = tmp.quantize(colors=256, method=Image.MEDIANCUT)
        else:
            out = tmp.convert('P', palette=Image.Palette.WEB)

        out.save(tmp_path, optimize=True)
        if sizeof(tmp_path) <= MAX_SIZE:
            os.replace(tmp_path, path)
            return True, sizeof(path)
        os.remove(tmp_path)

    out = img.convert('P', palette=Image.Palette.WEB) if img.mode != 'P' else img.copy()
    for q in range(85, 9, -5):
        out.save(tmp_path, optimize=True, quality=q)
        if sizeof(tmp_path) <= MAX_SIZE:
            os.replace(tmp_path, path)
            return True, sizeof(path)
        os.remove(tmp_path)

    return False, sizeof(path)

def main():
    for dirpath, _, filenames in os.walk(ROOT):
        if '.git' in dirpath or '.venv' in dirpath:
            continue
        for f in filenames:
            if not f.lower().endswith(('.png', '.jpg', '.jpeg')):
                continue
            path = os.path.join(dirpath, f)
            before = sizeof(path)
            if before <= MAX_SIZE:
                continue
            print(f'{path.split(ROOT + "/")[1]}  {before // 1024}KB', end='')
            ok, after = compress_png(path)
            if ok:
                print(f'  ->  {after // 1024}KB')
            else:
                print(f'  ->  still {after // 1024}KB (over limit)')

if __name__ == '__main__':
    main()
