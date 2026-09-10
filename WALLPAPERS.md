# Soft Noire wallpapers

On-device lock/home wallpapers plus tap/signal measure.

Not a medical device. Not an attention score. Gold is one commitment mark.

## What testers get

| Action | Result |
| --- | --- |
| Open `/wallpapers` | Four motifs, lock or home layout |
| Tap the field | Zone (void / silver / gold), interval, tempo vs 400·648·1048·1618·2618 ms |
| Wait | Stillness toward 1618 ms raises signal; spam holds it |
| Download PNG | iPhone 1290×2796 / 1179×2556, Android 1080×2400 / 1440×3200 |
| Export log | JSON on this device only |

Signal cap = **0.55**. No cloud.

## Rust (source of truth)

```
crates/soft-noire-wallpaper
```

```
cargo test --manifest-path crates/soft-noire-wallpaper/Cargo.toml
cargo run --release --manifest-path crates/soft-noire-wallpaper/Cargo.toml -- wallpapers/png
```

Writes `soft-noire-{motif}-{lock|home}-{size}.png`.

## Save on the phone

- **iOS:** Download → Photos → image → Share → Use as Wallpaper (Lock or Home).
- **Android:** Download → long-press → Set as wallpaper.

## Kill

- Diagnosis, therapy, HRV, “this wallpaper calms you”
- Gold on more than one mark
- Telemetry without consent
