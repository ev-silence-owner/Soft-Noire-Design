# Surfaces

Product surfaces consume Soft Noire. They are not the umbrella.

| Surface | Repo | Role |
|---|---|---|
| Soft Noire Design | [ev-silence-owner/Soft-Noire-Design](https://github.com/ev-silence-owner/Soft-Noire-Design) | Umbrella: tokens, arrival demo, wallpapers, this wiki |
| Entry Gate | [ev-silence-owner/entry-gate](https://github.com/ev-silence-owner/entry-gate) | Screen Zero, Golden Silence, Aha, Intent, Pulse |
| PatternLens | patternlens.app | Public hostname for Entry Gate |

## DNS

`patternlens.app` is on Cloudflare. Production is **not LIVE** until:

1. Pages project on the **same** Cloudflare account as the DNS zone
2. Connected to `ev-silence-owner/entry-gate`
3. Framework None, output `/`
4. Production deployment Ready
5. Custom domains `patternlens.app` + `www.patternlens.app`
6. `https://patternlens.app/` returns 200 with Screen Zero

Error **1014** (CNAME Cross-User Banned) means zone and Pages project are on different accounts. Flattening does not fix it.

Redirect www → apex. Orange proxy stays.
