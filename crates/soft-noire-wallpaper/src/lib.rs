//! Soft Noire wallpaper renderer + tap/signal measure.
//! Gold is one commitment mark. No diagnosis. No telemetry.

pub const PHI: f64 = 1.618_033_988_749_895;
pub const GOLDEN_SECOND_MS: u64 = 1618;
pub const PULSE_TARGETS_MS: [u64; 5] = [400, 648, 1048, 1618, 2618];
pub const GOLD_HIT_RADIUS: f64 = 0.06;
pub const SIGNAL_CAP: f64 = 0.55;
pub const SPAM_TAPS_PER_MIN: usize = 12;

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Motif {
    Void,
    Graphite,
    Midnight,
    Ember,
}

impl Motif {
    pub fn id(self) -> &'static str {
        match self {
            Motif::Void => "void",
            Motif::Graphite => "graphite",
            Motif::Midnight => "midnight",
            Motif::Ember => "ember",
        }
    }

    pub fn all() -> [Motif; 4] {
        [Motif::Void, Motif::Graphite, Motif::Midnight, Motif::Ember]
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Layout {
    Lock,
    Home,
}

impl Layout {
    pub fn id(self) -> &'static str {
        match self {
            Layout::Lock => "lock",
            Layout::Home => "home",
        }
    }

    pub fn gold_y(self) -> f64 {
        match self {
            Layout::Lock => 1.0 / PHI,
            Layout::Home => 0.78,
        }
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Size {
    pub w: u32,
    pub h: u32,
    pub id: &'static str,
}

pub const SIZE_IOS_PRO_MAX: Size = Size { w: 1290, h: 2796, id: "ios-1290x2796" };
pub const SIZE_IOS_PRO: Size = Size { w: 1179, h: 2556, id: "ios-1179x2556" };
pub const SIZE_ANDROID_FHD: Size = Size { w: 1080, h: 2400, id: "android-1080x2400" };
pub const SIZE_ANDROID_QHD: Size = Size { w: 1440, h: 3200, id: "android-1440x3200" };
pub const SIZE_PREVIEW: Size = Size { w: 390, h: 844, id: "preview-390x844" };

pub fn sizes() -> [Size; 5] {
    [
        SIZE_IOS_PRO_MAX,
        SIZE_IOS_PRO,
        SIZE_ANDROID_FHD,
        SIZE_ANDROID_QHD,
        SIZE_PREVIEW,
    ]
}

#[derive(Clone, Copy, Debug)]
pub struct Palette {
    pub void: [u8; 3],
    pub black: [u8; 3],
    pub graphite: [u8; 3],
    pub silver: [u8; 3],
    pub gold: [u8; 3],
    pub gold_muted: [u8; 3],
}

pub const PALETTE: Palette = Palette {
    void: [0x0A, 0x0A, 0x0B],
    black: [0x10, 0x11, 0x14],
    graphite: [0x17, 0x18, 0x1B],
    silver: [0x96, 0x9A, 0xA3],
    gold: [0xC6, 0xA1, 0x5B],
    gold_muted: [0x8F, 0x6E, 0x32],
};

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Zone {
    Void,
    Silver,
    Gold,
}

impl Zone {
    pub fn id(self) -> &'static str {
        match self {
            Zone::Void => "void",
            Zone::Silver => "silver",
            Zone::Gold => "gold",
        }
    }
}

pub fn gold_x() -> f64 {
    0.5
}

pub fn phi_points(layout: Layout) -> [(f64, f64); 3] {
    let gy = layout.gold_y();
    [(0.5, gy), (1.0 / PHI, gy), (1.0 - 1.0 / PHI, gy)]
}

pub fn classify_zone(motif: Motif, layout: Layout, x: f64, y: f64) -> Zone {
    let d = ((x - gold_x()).powi(2) + (y - layout.gold_y()).powi(2)).sqrt();
    if d <= GOLD_HIT_RADIUS {
        return Zone::Gold;
    }
    match motif {
        Motif::Graphite if y >= 1.0 / (PHI * PHI) && y <= 1.0 / PHI => Zone::Silver,
        Motif::Midnight => {
            let m = 1.0 / (PHI * PHI);
            if x >= m && x <= 1.0 - m && y >= m && y <= 1.0 - m {
                Zone::Silver
            } else {
                Zone::Void
            }
        }
        _ => Zone::Void,
    }
}

pub fn phi_distance(layout: Layout, x: f64, y: f64) -> f64 {
    phi_points(layout)
        .iter()
        .map(|(px, py)| ((x - px).powi(2) + (y - py).powi(2)).sqrt())
        .fold(f64::MAX, f64::min)
}

#[derive(Clone, Debug, PartialEq)]
pub struct Tap {
    pub t_ms: u64,
    pub x: f64,
    pub y: f64,
    pub zone: Zone,
    pub phi_dist: f64,
    pub interval_ms: Option<u64>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Report {
    pub taps: usize,
    pub gold_hits: usize,
    pub silver_hits: usize,
    pub mean_interval_ms: f64,
    pub tempo_match: f64,
    pub stillness_ms: u64,
    pub spam: bool,
    pub signal: f64,
}

pub fn record_tap(
    taps: &mut Vec<Tap>,
    motif: Motif,
    layout: Layout,
    t_ms: u64,
    x: f64,
    y: f64,
) -> Tap {
    let interval_ms = taps.last().map(|p| t_ms.saturating_sub(p.t_ms));
    let tap = Tap {
        t_ms,
        x,
        y,
        zone: classify_zone(motif, layout, x, y),
        phi_dist: phi_distance(layout, x, y),
        interval_ms,
    };
    taps.push(tap.clone());
    tap
}

fn nearest_pulse(interval: u64) -> u64 {
    PULSE_TARGETS_MS
        .iter()
        .copied()
        .min_by_key(|p| p.abs_diff(interval))
        .unwrap_or(1618)
}

pub fn score(taps: &[Tap], now_ms: u64, session_start_ms: u64) -> Report {
    let taps_n = taps.len();
    let gold_hits = taps.iter().filter(|t| t.zone == Zone::Gold).count();
    let silver_hits = taps.iter().filter(|t| t.zone == Zone::Silver).count();
    let intervals: Vec<u64> = taps.iter().filter_map(|t| t.interval_ms).collect();
    let mean_interval_ms = if intervals.is_empty() {
        0.0
    } else {
        intervals.iter().sum::<u64>() as f64 / intervals.len() as f64
    };
    let tempo_match = if intervals.is_empty() {
        0.0
    } else {
        let acc: f64 = intervals
            .iter()
            .map(|&iv| {
                let p = nearest_pulse(iv) as f64;
                let err = (iv as f64 - p).abs() / p;
                (1.0 - err).clamp(0.0, 1.0)
            })
            .sum();
        acc / intervals.len() as f64
    };
    let last_t = taps.last().map(|t| t.t_ms).unwrap_or(session_start_ms);
    let stillness_ms = now_ms.saturating_sub(last_t);
    let elapsed = now_ms.saturating_sub(session_start_ms).max(1);
    let per_min = taps_n as f64 * 60_000.0 / elapsed as f64;
    let spam = per_min > SPAM_TAPS_PER_MIN as f64;
    let precision = if taps_n == 0 {
        0.0
    } else {
        gold_hits as f64 / taps_n as f64
    };
    let stillness_term = (stillness_ms as f64 / GOLDEN_SECOND_MS as f64).clamp(0.0, 1.0);
    let anti_spam = if spam { 0.0 } else { 1.0 };
    let raw = 0.40 * tempo_match + 0.30 * precision + 0.30 * stillness_term * anti_spam;
    Report {
        taps: taps_n,
        gold_hits,
        silver_hits,
        mean_interval_ms,
        tempo_match,
        stillness_ms,
        spam,
        signal: raw.clamp(0.0, 1.0) * SIGNAL_CAP,
    }
}

fn put(buf: &mut [u8], w: u32, x: i32, y: i32, h: u32, c: [u8; 3]) {
    if x < 0 || y < 0 {
        return;
    }
    let xu = x as u32;
    let yu = y as u32;
    if xu >= w || yu >= h {
        return;
    }
    let i = ((yu as usize) * (w as usize) + (xu as usize)) * 3;
    buf[i] = c[0];
    buf[i + 1] = c[1];
    buf[i + 2] = c[2];
}

fn fill(buf: &mut [u8], c: [u8; 3]) {
    for px in buf.chunks_exact_mut(3) {
        px[0] = c[0];
        px[1] = c[1];
        px[2] = c[2];
    }
}

fn fill_rect(buf: &mut [u8], w: u32, h: u32, x0: u32, y0: u32, x1: u32, y1: u32, c: [u8; 3]) {
    let x1 = x1.min(w);
    let y1 = y1.min(h);
    for y in y0..y1 {
        for x in x0..x1 {
            put(buf, w, x as i32, y as i32, h, c);
        }
    }
}

fn hline(buf: &mut [u8], w: u32, h: u32, y: u32, x0: u32, x1: u32, c: [u8; 3]) {
    if y >= h {
        return;
    }
    for x in x0.min(w)..x1.min(w) {
        put(buf, w, x as i32, y as i32, h, c);
    }
}

fn vline(buf: &mut [u8], w: u32, h: u32, x: u32, y0: u32, y1: u32, c: [u8; 3]) {
    if x >= w {
        return;
    }
    for y in y0.min(h)..y1.min(h) {
        put(buf, w, x as i32, y as i32, h, c);
    }
}

fn disc(buf: &mut [u8], w: u32, h: u32, cx: f64, cy: f64, r: f64, c: [u8; 3]) {
    let x0 = (cx - r).floor().max(0.0) as i32;
    let y0 = (cy - r).floor().max(0.0) as i32;
    let x1 = (cx + r).ceil() as i32;
    let y1 = (cy + r).ceil() as i32;
    let r2 = r * r;
    for y in y0..=y1 {
        for x in x0..=x1 {
            let dx = x as f64 - cx;
            let dy = y as f64 - cy;
            if dx * dx + dy * dy <= r2 {
                put(buf, w, x, y, h, c);
            }
        }
    }
}

fn line(buf: &mut [u8], w: u32, h: u32, x0: f64, y0: f64, x1: f64, y1: f64, c: [u8; 3], thick: f64) {
    let steps = ((x1 - x0).abs().max((y1 - y0).abs()).ceil() as i32 + 1).max(1);
    for i in 0..=steps {
        let t = i as f64 / steps as f64;
        let x = x0 + (x1 - x0) * t;
        let y = y0 + (y1 - y0) * t;
        disc(buf, w, h, x, y, thick, c);
    }
}

pub fn render_rgb(motif: Motif, layout: Layout, size: Size) -> Vec<u8> {
    let w = size.w;
    let h = size.h;
    let mut buf = vec![0u8; (w as usize) * (h as usize) * 3];
    let p = PALETTE;
    match motif {
        Motif::Void | Motif::Ember | Motif::Graphite => fill(&mut buf, p.void),
        Motif::Midnight => fill(&mut buf, p.black),
    }

    if motif == Motif::Graphite {
        let y0 = ((1.0 / (PHI * PHI)) * (h as f64)).round() as u32;
        let y1 = ((1.0 / PHI) * (h as f64)).round() as u32;
        fill_rect(&mut buf, w, h, 0, y0, w, y1, p.graphite);
        hline(&mut buf, w, h, y1.min(h.saturating_sub(1)), 0, w, p.silver);
    }

    if motif == Motif::Midnight {
        let m = 1.0 / (PHI * PHI);
        let x0 = (m * w as f64).round() as u32;
        let x1 = ((1.0 - m) * w as f64).round() as u32;
        let y0 = (m * h as f64).round() as u32;
        let y1 = ((1.0 - m) * h as f64).round() as u32;
        hline(&mut buf, w, h, y0, x0, x1, p.silver);
        hline(&mut buf, w, h, y1.min(h.saturating_sub(1)), x0, x1, p.silver);
        vline(&mut buf, w, h, x0, y0, y1, p.silver);
        vline(&mut buf, w, h, x1.min(w.saturating_sub(1)), y0, y1, p.silver);
    }

    let gx = gold_x() * (w.saturating_sub(1) as f64);
    let gy = layout.gold_y() * (h.saturating_sub(1) as f64);
    let aspect = w as f64 / h as f64;

    if motif == Motif::Ember {
        let cx = 0.62 * (w.saturating_sub(1) as f64);
        let cy = gy;
        let mut a = 0.0_f64;
        let mut r = 0.012 * h as f64;
        let mut prev = (cx, cy);
        let mut term = (cx, cy);
        for _ in 0..48 {
            a += 0.236 * std::f64::consts::TAU;
            r *= PHI.powf(0.08);
            let nx = cx + r * a.cos() * aspect.sqrt();
            let ny = cy + r * a.sin();
            line(&mut buf, w, h, prev.0, prev.1, nx, ny, p.gold_muted, 1.1);
            prev = (nx, ny);
            term = (nx, ny);
        }
        disc(&mut buf, w, h, term.0, term.1, 0.010 * h as f64, p.gold);
    }

    let mark = 0.018 * h as f64;
    disc(&mut buf, w, h, gx, gy, mark * 1.25, p.gold_muted);
    disc(&mut buf, w, h, gx, gy, mark, p.gold);
    buf
}

fn crc32(data: &[u8]) -> u32 {
    let mut crc: u32 = 0xFFFF_FFFF;
    for &b in data {
        crc ^= b as u32;
        for _ in 0..8 {
            let mask = if crc & 1 == 1 { 0xFFFF_FFFF } else { 0 };
            crc = (crc >> 1) ^ (0xEDB8_8320 & mask);
        }
    }
    !crc
}

fn adler32(data: &[u8]) -> u32 {
    let mut a: u32 = 1;
    let mut b: u32 = 0;
    for &d in data {
        a = (a + d as u32) % 65521;
        b = (b + a) % 65521;
    }
    (b << 16) | a
}

pub fn encode_png(w: u32, h: u32, rgb: &[u8]) -> Vec<u8> {
    let mut raw = Vec::with_capacity(((w as usize) * 3 + 1) * h as usize);
    for y in 0..h as usize {
        raw.push(0);
        let s = y * (w as usize) * 3;
        raw.extend_from_slice(&rgb[s..s + (w as usize) * 3]);
    }
    let mut z = Vec::new();
    z.push(0x78);
    z.push(0x01);
    let mut offset = 0usize;
    while offset < raw.len() {
        let n = (raw.len() - offset).min(65535);
        let last = offset + n == raw.len();
        z.push(if last { 0x01 } else { 0x00 });
        let ln = n as u16;
        z.push((ln & 0xFF) as u8);
        z.push((ln >> 8) as u8);
        let nln = !ln;
        z.push((nln & 0xFF) as u8);
        z.push((nln >> 8) as u8);
        z.extend_from_slice(&raw[offset..offset + n]);
        offset += n;
    }
    z.extend_from_slice(&adler32(&raw).to_be_bytes());

    fn chunk(out: &mut Vec<u8>, ty: &[u8; 4], data: &[u8]) {
        out.extend_from_slice(&(data.len() as u32).to_be_bytes());
        let mut crc_src = Vec::with_capacity(4 + data.len());
        crc_src.extend_from_slice(ty);
        crc_src.extend_from_slice(data);
        out.extend_from_slice(ty);
        out.extend_from_slice(data);
        out.extend_from_slice(&crc32(&crc_src).to_be_bytes());
    }

    let mut png = Vec::new();
    png.extend_from_slice(&[137, 80, 78, 71, 13, 10, 26, 10]);
    let mut ihdr = Vec::new();
    ihdr.extend_from_slice(&w.to_be_bytes());
    ihdr.extend_from_slice(&h.to_be_bytes());
    ihdr.extend_from_slice(&[8, 2, 0, 0, 0]);
    chunk(&mut png, b"IHDR", &ihdr);
    chunk(&mut png, b"IDAT", &z);
    chunk(&mut png, b"IEND", &[]);
    png
}

pub fn render_png(motif: Motif, layout: Layout, size: Size) -> Vec<u8> {
    let rgb = render_rgb(motif, layout, size);
    encode_png(size.w, size.h, &rgb)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn gold_zone_at_mark() {
        let z = classify_zone(Motif::Void, Layout::Lock, 0.5, Layout::Lock.gold_y());
        assert_eq!(z, Zone::Gold);
    }

    #[test]
    fn void_far_from_mark() {
        let z = classify_zone(Motif::Void, Layout::Lock, 0.05, 0.05);
        assert_eq!(z, Zone::Void);
    }

    #[test]
    fn spam_kills_signal() {
        let mut taps = Vec::new();
        for i in 0..20 {
            record_tap(&mut taps, Motif::Void, Layout::Lock, i * 100, 0.1, 0.1);
        }
        let r = score(&taps, 2000, 0);
        assert!(r.spam);
        assert!(r.signal < 0.15);
    }

    #[test]
    fn phi_interval_lifts_tempo() {
        let mut taps = Vec::new();
        record_tap(
            &mut taps,
            Motif::Void,
            Layout::Lock,
            0,
            0.5,
            Layout::Lock.gold_y(),
        );
        record_tap(
            &mut taps,
            Motif::Void,
            Layout::Lock,
            1618,
            0.5,
            Layout::Lock.gold_y(),
        );
        let r = score(&taps, 1618, 0);
        assert!(r.tempo_match > 0.95);
        assert_eq!(r.gold_hits, 2);
        assert!(r.signal > 0.2);
        assert!(r.signal <= SIGNAL_CAP);
    }

    #[test]
    fn png_signature() {
        let png = render_png(Motif::Void, Layout::Lock, SIZE_PREVIEW);
        assert_eq!(&png[..8], &[137, 80, 78, 71, 13, 10, 26, 10]);
        assert!(png.len() > 100);
    }

    #[test]
    fn gold_pixel_present() {
        let size = SIZE_PREVIEW;
        let rgb = render_rgb(Motif::Void, Layout::Lock, size);
        let gx = (gold_x() * (size.w - 1) as f64).round() as u32;
        let gy = (Layout::Lock.gold_y() * (size.h - 1) as f64).round() as u32;
        let i = ((gy as usize) * (size.w as usize) + (gx as usize)) * 3;
        assert!(rgb[i] > 0x80);
        assert!(rgb[i + 1] > 0x60);
    }

    #[test]
    fn signal_never_exceeds_cap() {
        let mut taps = Vec::new();
        for k in 0..5 {
            record_tap(
                &mut taps,
                Motif::Void,
                Layout::Lock,
                k * 1618,
                0.5,
                Layout::Lock.gold_y(),
            );
        }
        let r = score(&taps, 5 * 1618, 0);
        assert!(r.signal <= SIGNAL_CAP);
    }
}
