use std::fs;
use std::path::PathBuf;

use soft_noire_wallpaper::{render_png, sizes, Layout, Motif};

fn main() {
    let out = std::env::args()
        .nth(1)
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from("wallpapers/png"));
    fs::create_dir_all(&out).expect("mkdir");
    let mut n = 0u32;
    for motif in Motif::all() {
        for layout in [Layout::Lock, Layout::Home] {
            for size in sizes() {
                if size.id.starts_with("preview") {
                    continue;
                }
                let png = render_png(motif, layout, size);
                let name = format!("soft-noire-{}-{}-{}.png", motif.id(), layout.id(), size.id);
                fs::write(out.join(&name), png).expect("write");
                n += 1;
                eprintln!("wrote {name}");
            }
        }
    }
    eprintln!("done {n} files → {}", out.display());
}
