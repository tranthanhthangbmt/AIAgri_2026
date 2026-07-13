import os
import shutil

def main():
    base_dir = r"d:\DongAUniversity\TÀI LIỆU DẠY HỌC_2024-2025\Ứng dụng AI trong nông nghiệp"
    web_public = os.path.join(base_dir, "web_ai_nongnghiep", "public")
    
    slides_dest = os.path.join(web_public, "slides")
    ebooks_dest = os.path.join(web_public, "ebooks")
    
    os.makedirs(slides_dest, exist_ok=True)
    os.makedirs(ebooks_dest, exist_ok=True)
    
    # Copy slides
    slide_dir = os.path.join(base_dir, "slide")
    if os.path.exists(slide_dir):
        for f in os.listdir(slide_dir):
            if f.endswith(".pdf"):
                src = os.path.join(slide_dir, f)
                dst = os.path.join(slides_dest, f)
                shutil.copy2(src, dst)
                print(f"Copied slide: {f}")
                
    # Copy Viet docs
    vi_dir = os.path.join(base_dir, "Tài liệu tiếng Việt")
    if os.path.exists(vi_dir):
        for f in os.listdir(vi_dir):
            if f.endswith(".pdf") or f.endswith(".epub"):
                src = os.path.join(vi_dir, f)
                dst = os.path.join(ebooks_dest, f)
                shutil.copy2(src, dst)
                print(f"Copied ebook: {f}")

    # Copy Media
    media_dir = os.path.join(base_dir, "Media")
    media_dest = os.path.join(web_public, "media")
    if os.path.exists(media_dir):
        if os.path.exists(media_dest):
            shutil.rmtree(media_dest)
        shutil.copytree(media_dir, media_dest)
        print(f"Copied media folder")

if __name__ == "__main__":
    main()
