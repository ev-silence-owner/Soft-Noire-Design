/* @ds-bundle: {"format":4,"namespace":"SoftNoirDesignSystem_aee1d5","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ChoiceCard","sourcePath":"components/core/ChoiceCard.jsx"},{"name":"Slider","sourcePath":"components/core/Slider.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"HealthBadge","sourcePath":"components/dashboard/HealthBadge.jsx"},{"name":"HealthGridCell","sourcePath":"components/dashboard/HealthGridCell.jsx"},{"name":"NextWindowHint","sourcePath":"components/dashboard/NextWindowHint.jsx"},{"name":"ObservationCount","sourcePath":"components/dashboard/ObservationCount.jsx"},{"name":"SummaryRow","sourcePath":"components/dashboard/SummaryRow.jsx"},{"name":"ViewState","sourcePath":"components/dashboard/ViewState.jsx"},{"name":"BreathLine","sourcePath":"components/ritual/BreathLine.jsx"},{"name":"GoldenClock","sourcePath":"components/ritual/GoldenClock.jsx"},{"name":"GoldenRectangle","sourcePath":"components/ritual/GoldenRectangle.jsx"},{"name":"PulseTapSurface","sourcePath":"components/ritual/PulseTapSurface.jsx"},{"name":"BareNumbers","sourcePath":"components/signals/BareNumbers.jsx"},{"name":"ClusterPulse","sourcePath":"components/signals/ClusterPulse.jsx"},{"name":"InsightCard","sourcePath":"components/signals/InsightCard.jsx"},{"name":"QuietCard","sourcePath":"components/signals/QuietCard.jsx"},{"name":"RhythmLine","sourcePath":"components/signals/RhythmLine.jsx"},{"name":"ConsentRow","sourcePath":"components/status/ConsentRow.jsx"},{"name":"CrisisBanner","sourcePath":"components/status/CrisisBanner.jsx"},{"name":"PriceRow","sourcePath":"components/status/PriceRow.jsx"},{"name":"SeedIndicator","sourcePath":"components/status/SeedIndicator.jsx"},{"name":"SyncBadge","sourcePath":"components/status/SyncBadge.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","audio/noiseEngine.js":"ff2385de28b6","components/core/Button.jsx":"248fceed2e70","components/core/ChoiceCard.jsx":"de5223b0ba6c","components/core/Slider.jsx":"83c2ec568b26","components/core/Switch.jsx":"b4a72e3b1ed7","components/dashboard/HealthBadge.jsx":"017eb935013d","components/dashboard/HealthGridCell.jsx":"980912520940","components/dashboard/NextWindowHint.jsx":"589ef56ed32f","components/dashboard/ObservationCount.jsx":"9607fe234c7b","components/dashboard/SummaryRow.jsx":"e3cb9a770ce7","components/dashboard/ViewState.jsx":"5008a46269c5","components/ritual/BreathLine.jsx":"be3f05259386","components/ritual/GoldenClock.jsx":"b6f14174fdbd","components/ritual/GoldenRectangle.jsx":"d777ce5b9889","components/ritual/PulseTapSurface.jsx":"7f7f61eb3c4d","components/signals/BareNumbers.jsx":"9a9c9b1c576e","components/signals/ClusterPulse.jsx":"5712edc06784","components/signals/InsightCard.jsx":"3ded1ccb0ffa","components/signals/QuietCard.jsx":"b46083a0f633","components/signals/RhythmLine.jsx":"3d47bcc7a6c9","components/status/ConsentRow.jsx":"bb5fa3d194c4","components/status/CrisisBanner.jsx":"9fd52f79b31a","components/status/PriceRow.jsx":"0f53de8a9526","components/status/SeedIndicator.jsx":"319301285418","components/status/SyncBadge.jsx":"b8631ac37c1f","prototypes/pulse-tap-surface/pulse-tap-v2.proto.jsx":"74859dd9bcd4","ui_kits/dashboard/PatternsLab.jsx":"e3dcbfee380f","ui_kits/dashboard/ZeroScreen.jsx":"0debd426600b","ui_kits/patternlens-app/Garden.jsx":"668c2b62c7b4","ui_kits/patternlens-app/Home.jsx":"222058f5210d","ui_kits/patternlens-app/Paywall.jsx":"3e6207c91fb7","ui_kits/patternlens-onboarding/Frame.jsx":"ea3540684d19","ui_kits/patternlens-onboarding/ScreenZero.jsx":"a8ad725ed96b","ui_kits/patternlens-onboarding/Steps.jsx":"40f0f4d9e908","ui_kits/swiat-w/doc-page.js":"371bab66f42d","ui_kits/swiat-w/screens.jsx":"24e72f573dbc","ui_kits/swiat-w/worlds.jsx":"1af753d522c5"},"inlinedExternals":[],"unexposedExports":[{"name":"createNoiseEngine","sourcePath":"audio/noiseEngine.js"}]} */

(() => {

const __ds_ns = (window.SoftNoirDesignSystem_aee1d5 = window.SoftNoirDesignSystem_aee1d5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// audio/noiseEngine.js
try { (() => {
/* noiseEngine — ADR-015. Cztery profile generowane w WebAudio, bez plikow zrodlowych.
   Zero autoplay: start() musi byc wywolany z gestu uzytkownika.
   Fade-in 1618 ms, fade-out 618 ms, crossfade miedzy motywami 2618 ms bez ciszy.
   Master gain nigdy > 0.25. Zero transjentow > 3 dB. */

const PROFILE = {
  ember: {
    noise: 'brown',
    gain: 0.30
  },
  graphite: {
    noise: 'pink',
    gain: 0.25
  },
  midnight: {
    noise: 'pink',
    gain: 0.20
  },
  ion: {
    noise: 'pink',
    gain: 0.15
  }
};
const LEVEL = {
  0: 0,
  1: 0.5,
  2: 1,
  3: 1.272
};
const MASTER_MAX = 0.25;
const PAN_PERIOD_MS = 16180;
function createNoiseEngine() {
  let ctx = null,
    master = null,
    nodes = {},
    current = null,
    level = 2,
    running = false;
  function ensure() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
  }
  function buffer(kind) {
    const len = 4 * ctx.sampleRate;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      let last = 0,
        b0 = 0,
        b1 = 0,
        b2 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (kind === 'brown') {
          last = (last + 0.02 * w) / 1.02;
          d[i] = last * 3.5;
        } else {
          b0 = 0.99765 * b0 + w * 0.0990460;
          b1 = 0.96300 * b1 + w * 0.2962930;
          b2 = 0.57000 * b2 + w * 1.0526913;
          d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.11;
        }
      }
    }
    return buf;
  }
  function build(id) {
    const p = PROFILE[id];
    const g = ctx.createGain();
    g.gain.value = 0;
    g.connect(master);
    const src = ctx.createBufferSource();
    src.buffer = buffer(p.noise);
    src.loop = true;
    if (id === 'ember') {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2000;
      lp.Q.value = 0.618;
      src.connect(lp);
      lp.connect(g);
    } else if (id === 'graphite') {
      const pan = ctx.createStereoPanner();
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 1000 / PAN_PERIOD_MS;
      const lfoG = ctx.createGain();
      lfoG.gain.value = 0.618;
      lfo.connect(lfoG);
      lfoG.connect(pan.pan);
      lfo.start();
      src.connect(pan);
      pan.connect(g);
    } else if (id === 'midnight') {
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 179;
      bp.Q.value = 1.2;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 400;
      src.connect(bp);
      bp.connect(lp);
      lp.connect(g);
    } else {
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 346;
      bp.Q.value = 1.2;
      const hum = ctx.createOscillator();
      hum.type = 'sine';
      hum.frequency.value = 100;
      const humG = ctx.createGain();
      humG.gain.value = 0.0126;
      hum.connect(humG);
      humG.connect(g);
      hum.start();
      src.connect(bp);
      bp.connect(g);
    }
    src.start();
    return {
      gain: g,
      base: p.gain
    };
  }
  return {
    /** must be called from a user gesture */
    start(themeId) {
      ensure();
      ctx.resume();
      running = true;
      master.gain.setTargetAtTime(MASTER_MAX, ctx.currentTime, 1.618 / 3);
      this.setTheme(themeId);
    },
    stop() {
      if (!ctx) return;
      running = false;
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.618 / 3);
    },
    setTheme(id) {
      if (!running || !PROFILE[id]) {
        current = id;
        return;
      }
      const t = ctx.currentTime;
      if (current && nodes[current]) nodes[current].gain.gain.setTargetAtTime(0, t, 2.618 / 3);
      if (!nodes[id]) nodes[id] = build(id);
      nodes[id].gain.gain.setTargetAtTime(nodes[id].base * LEVEL[level], t, 2.618 / 3);
      current = id;
    },
    /** sensory toggle S-04: 0 OFF, 1 x0.5, 2 default, 3 x1.272 */
    setLevel(n) {
      level = n;
      if (running && current && nodes[current]) nodes[current].gain.gain.setTargetAtTime(nodes[current].base * LEVEL[n], ctx.currentTime, 0.382);
    },
    get running() {
      return running;
    },
    get theme() {
      return current;
    }
  };
}
Object.assign(__ds_scope, { createNoiseEngine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "audio/noiseEngine.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-0)',
  lineHeight: 1.272,
  letterSpacing: 'var(--ls-quiet)',
  fontWeight: 'var(--fw-regular)',
  minHeight: 'var(--touch-min)',
  padding: '0 var(--space-phi-1)',
  borderRadius: 'var(--radius-s4)',
  cursor: 'pointer',
  transition: 'opacity var(--dur-standard) var(--ease-phi), background-color var(--dur-standard) var(--ease-phi)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-fib-6)'
};
const variants = {
  signal: {
    background: 'transparent',
    color: 'var(--accent-brand)',
    border: '1px solid color-mix(in srgb,var(--accent-brand) 38%,transparent)'
  },
  quiet: {
    background: 'var(--surface-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)'
  },
  bare: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  }
};

/** Single CTA. Canon: one CTA per view, or none. Refusal is never visually weaker than acceptance. */
function Button({
  variant = 'quiet',
  full = false,
  disabled = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      width: full ? '100%' : undefined,
      opacity: disabled ? 0.382 : 1,
      pointerEvents: disabled ? 'none' : undefined
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ChoiceCard.jsx
try { (() => {
/** Selectable card, phi aspect 1.618/1. Used for intents, states (FLOW/FOCUS/CALM) and density. */
function ChoiceCard({
  title,
  meta,
  caption,
  selected = false,
  aspect = false,
  onClick = () => {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 'var(--space-phi-n1)',
      padding: 'var(--space-phi-0)',
      minHeight: 'var(--touch-min)',
      aspectRatio: aspect ? '1.618 / 1' : undefined,
      background: selected ? 'var(--surface-elevated)' : 'var(--surface-raised)',
      border: '1px solid ' + (selected ? 'color-mix(in srgb,var(--accent-brand) 38%,transparent)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-ritual)',
      fontFamily: 'var(--font-body)',
      transition: 'border-color var(--dur-standard) var(--ease-phi), background var(--dur-standard) var(--ease-phi)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-phi-n1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: selected ? 'var(--accent-brand)' : 'var(--text-primary)',
      letterSpacing: 'var(--ls-ritual)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-muted)'
    }
  }, meta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, caption));
}
Object.assign(__ds_scope, { ChoiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ChoiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Slider.jsx
try { (() => {
/** Intensity slider (damping 0–100). Value shown in mono; no gamified labels. */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  label,
  suffix = '',
  onChange = () => {}
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-phi-0)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--accent-brand)',
      letterSpacing: 'var(--ls-quiet)'
    }
  }, value, suffix)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    "aria-label": label,
    onChange: e => onChange(Number(e.target.value)),
    style: {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '100%',
      height: '2px',
      borderRadius: '1px',
      outlineOffset: '8px',
      background: 'linear-gradient(90deg,var(--accent-brand) 0%,var(--accent-brand) ' + pct + '%,var(--border-medium) ' + pct + '%,var(--border-medium) 100%)'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Slider.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Opt-in toggle. Everything sensory (audio, haptics, damping, motion) defaults to OFF. */
function Switch({
  checked = false,
  label,
  description,
  onChange = () => {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-phi-0)',
      cursor: 'pointer',
      minHeight: 'var(--touch-min)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: 0,
    onClick: () => onChange(!checked),
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onChange(!checked);
      }
    },
    style: {
      flex: '0 0 auto',
      width: 'var(--space-fib-9)',
      height: 'var(--space-fib-8)',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'color-mix(in srgb,var(--accent-brand) 26%,transparent)' : 'var(--surface-elevated)',
      border: '1px solid ' + (checked ? 'color-mix(in srgb,var(--accent-brand) 38%,transparent)' : 'var(--border-subtle)'),
      position: 'relative',
      transition: 'background var(--dur-standard) var(--ease-phi)',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '16px' : '3px',
      width: '13px',
      height: '13px',
      borderRadius: '50%',
      background: checked ? 'var(--accent-brand)' : 'var(--text-muted)',
      transition: 'left var(--dur-standard) var(--ease-phi)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/HealthBadge.jsx
try { (() => {
const STATUS = {
  adopted: {
    glyph: '✓',
    color: 'var(--signal-adopted)',
    label: 'Adopted'
  },
  'in-progress': {
    glyph: '⟳',
    color: 'var(--signal-progress)',
    label: 'In progress'
  },
  'not-adopted': {
    glyph: '◯',
    color: 'var(--text-muted)',
    label: 'Not adopted'
  },
  deprecated: {
    glyph: '✗',
    color: 'var(--text-muted)',
    label: 'Deprecated'
  },
  'at-risk': {
    glyph: '!',
    color: 'var(--signal-critical)',
    label: 'At risk'
  }
};
const SIZE = {
  sm: ['4px 8px', 'var(--fs-utility)'],
  md: ['var(--space-phi-n2) var(--space-phi-n1)', 'var(--fs-0)'],
  lg: ['var(--space-phi-n1) var(--space-phi-0)', 'var(--fs-0)']
};

/** patternslab.app status indicator. Square corners — B2B surface, not the ritual surface. */
function HealthBadge({
  status = 'adopted',
  score,
  label,
  size = 'md'
}) {
  const s = STATUS[status] ?? STATUS.adopted;
  const [pad, fs] = SIZE[size] ?? SIZE.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-fib-5)',
      padding: pad,
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      fontWeight: 500,
      border: '1px solid ' + s.color,
      color: s.color,
      background: 'color-mix(in srgb,var(--accent-brand) 5%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '16px',
      textAlign: 'center',
      lineHeight: 1
    }
  }, s.glyph), /*#__PURE__*/React.createElement("span", null, label ?? s.label, score != null && /*#__PURE__*/React.createElement("strong", {
    style: {
      marginLeft: 'var(--space-fib-5)',
      fontWeight: 700
    }
  }, score, "%")));
}
Object.assign(__ds_scope, { HealthBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/HealthBadge.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/HealthGridCell.jsx
try { (() => {
const EDGE = {
  adopted: 'var(--signal-adopted)',
  'in-progress': 'var(--signal-progress)',
  'not-adopted': 'var(--text-muted)',
  deprecated: 'var(--text-muted)',
  'at-risk': 'var(--signal-critical)'
};

/** Pattern × team matrix cell. Aspect 1.618, left status edge, progress rail at the bottom. */
function HealthGridCell({
  pattern,
  team,
  coverage = 0,
  interpretation = 0,
  status = 'adopted',
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": pattern + ' × ' + team + ': ' + status + ', coverage ' + coverage + '%, interpretation ' + interpretation + '%',
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 'var(--space-phi-n1)',
      width: '100%',
      aspectRatio: '1.618',
      padding: 'var(--space-phi-0)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderLeft: '4px solid ' + EDGE[status],
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'background var(--dur-slow) var(--ease-phi), border-color var(--dur-slow) var(--ease-phi)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.HealthBadge, {
    status: status,
    score: coverage,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Interpretation"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      fontWeight: 700,
      color: 'var(--accent-brand)'
    }
  }, interpretation, "%")), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: Math.max(coverage, interpretation) + '%',
      background: 'var(--accent-brand)'
    }
  }));
}
Object.assign(__ds_scope, { HealthGridCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/HealthGridCell.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/NextWindowHint.jsx
try { (() => {
/** Layer 2 — hidden entirely at low receptivity. Orientation, never a countdown. */
function NextWindowHint({
  label = 'Next window',
  value
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: '2px',
      padding: 'var(--space-phi-1)',
      borderLeft: '3px solid var(--accent-brand)',
      background: 'transparent',
      animation: 'fade-in-silent var(--dur-slow) var(--ease-phi-decel) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, value));
}
Object.assign(__ds_scope, { NextWindowHint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/NextWindowHint.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/ObservationCount.jsx
try { (() => {
/** Layer 0 — always visible. One number, no chart, no evaluation. */
function ObservationCount({
  count = 0,
  label = 'Observations',
  empty = 'No observations yet'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      justifyItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-phi-2) 0',
      minHeight: '160px',
      alignContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      opacity: .7
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '56px',
      fontWeight: 300,
      lineHeight: 1,
      letterSpacing: '-1px',
      color: 'var(--text-primary)'
    }
  }, count), count === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-muted)'
    }
  }, empty));
}
Object.assign(__ds_scope, { ObservationCount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/ObservationCount.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/SummaryRow.jsx
try { (() => {
/** Layer 1 — reveals at 0.3 scroll depth, 618 ms slide-up, staggered 200 ms. */
function SummaryRow({
  items = [],
  compressed = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: compressed ? 'grid' : 'flex',
      gridTemplateColumns: compressed ? '1fr 1fr' : undefined,
      flexDirection: 'column',
      gap: 'var(--space-phi-n1)',
      padding: 'var(--space-phi-1)',
      borderRadius: 'var(--radius-s2)',
      background: 'var(--surface-raised)',
      animation: 'fade-in-silent var(--dur-slow) var(--ease-phi-decel) both'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-fib-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--accent-brand)'
    }
  }, it.count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-secondary)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { SummaryRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/SummaryRow.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/ViewState.jsx
try { (() => {
const GLYPH = {
  empty: '—',
  loading: '',
  error: '!',
  'no-data': '—',
  overloaded: '≡'
};

/** Empty / loading / error / no-data / overloaded. Dashed border, never an upsell. */
function ViewState({
  kind = 'empty',
  title,
  message,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: kind === 'error' ? 'alert' : undefined,
    style: {
      display: 'grid',
      gap: 'var(--space-phi-0)',
      justifyItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-phi-2)',
      minHeight: '144px',
      alignContent: 'center',
      background: 'var(--surface-base)',
      border: '1px dashed ' + (kind === 'error' ? 'var(--border-medium)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-s3)',
      fontFamily: 'var(--font-body)'
    }
  }, kind === 'loading' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '34px',
      height: '34px',
      borderRadius: '50%',
      border: '2px solid var(--accent-brand)',
      borderTopColor: 'transparent',
      animation: 'spin-phi var(--dur-golden) linear infinite'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '25.888px',
      color: kind === 'error' ? 'var(--state-attention)' : 'var(--text-muted)'
    }
  }, GLYPH[kind]), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: 'var(--text-primary)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      minHeight: 'var(--touch-min)',
      padding: '0 var(--space-phi-1)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--accent-brand)',
      border: '1px solid color-mix(in srgb,var(--accent-brand) 38%,transparent)',
      borderRadius: 'var(--radius-s2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-0)'
    }
  }, action));
}
Object.assign(__ds_scope, { ViewState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/ViewState.jsx", error: String((e && e.message) || e) }); }

// components/ritual/BreathLine.jsx
try { (() => {
const AMPL = {
  entry: 1,
  deepening: 0.764,
  silence: 0.472,
  return: 1
};
const OPACITY = {
  entry: 0.618,
  deepening: 0.5,
  silence: 0.382,
  return: 0.618
};

/** K2 "Oddech" — the only object on Screen Zero. Cycle 1618 in / 1000 hold / 1618 out = 4236 ms. */
function BreathLine({
  phase = 'entry',
  reducedMotion = false
}) {
  const max = Math.round(89 * (AMPL[phase] ?? 1));
  if (reducedMotion) {
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        width: 'var(--space-fib-9)',
        height: '2px',
        borderRadius: '1px',
        background: 'var(--accent-theme)',
        opacity: OPACITY[phase]
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: '2px',
      borderRadius: '1px',
      background: 'var(--accent-theme)',
      opacity: OPACITY[phase],
      width: 'var(--space-fib-7)',
      maxWidth: max + 'px',
      animation: 'breath-phi-line var(--dur-rest) var(--ease-phi) infinite'
    }
  });
}
Object.assign(__ds_scope, { BreathLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ritual/BreathLine.jsx", error: String((e && e.message) || e) }); }

// components/ritual/GoldenClock.jsx
try { (() => {
/** Złoty Zegar — day orientation, 61.8/38.2 split, Fibonacci markers +1/+1/+2/+3/+5 h. */
function GoldenClock({
  progress = 0.382,
  markers = [1, 2, 4, 7, 12],
  label = 'ZŁOTY ZEGAR'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'var(--space-fib-6)',
      borderRadius: 'var(--radius-s1)',
      background: 'var(--surface-elevated)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: (progress * 100).toFixed(1) + '%',
      background: 'color-mix(in srgb,var(--accent-theme) 22%,transparent)',
      borderRight: '1px solid var(--accent-theme)'
    }
  }), markers.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: h / 16 * 100 + '%',
      width: '1px',
      background: 'var(--border-medium)'
    }
  }))));
}
Object.assign(__ds_scope, { GoldenClock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ritual/GoldenClock.jsx", error: String((e && e.message) || e) }); }

// components/ritual/GoldenRectangle.jsx
try { (() => {
/** K4 golden rectangle 144:233. Anchored at the golden point, breathes on the Calm cycle. */
function GoldenRectangle({
  width = 144,
  breathing = true,
  glow = true,
  cycle = 6472
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: width + 'px',
      aspectRatio: '144 / 233',
      border: '1px solid var(--accent-theme)',
      borderRadius: 'var(--radius-s2)',
      boxShadow: glow ? 'inset 0 0 21px color-mix(in srgb,var(--accent-theme) 3.82%,transparent)' : 'none',
      animation: breathing ? 'breathe-calm ' + cycle + 'ms var(--ease-phi) infinite' : 'none'
    }
  });
}
Object.assign(__ds_scope, { GoldenRectangle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ritual/GoldenRectangle.jsx", error: String((e && e.message) || e) }); }

// components/ritual/PulseTapSurface.jsx
try { (() => {
/** First Pulse Tap: stillness gate 1618 ms → 5 taps in φ rhythm → hard cap 16180 ms. */
function PulseTapSurface({
  taps = 0,
  total = 5,
  gateOpen = true,
  elapsedMs = 0,
  onTap = () => {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Powierzchnia tapni\u0119\u0107",
    onClick: () => gateOpen && onTap(),
    onKeyDown: e => {
      if (e.key === ' ') {
        e.preventDefault();
        gateOpen && onTap();
      }
    },
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      gap: 'var(--space-phi-1)',
      width: '100%',
      aspectRatio: '1 / 1.618',
      maxWidth: '233px',
      margin: '0 auto',
      justifySelf: 'center',
      borderRadius: 'var(--radius-ritual)',
      cursor: gateOpen ? 'pointer' : 'default',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (gateOpen ? 'color-mix(in srgb,var(--accent-brand) 38%,transparent)' : 'var(--border-subtle)'),
      transition: 'border-color var(--dur-golden) var(--ease-phi)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-7)'
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 'var(--space-fib-6)',
      height: 'var(--space-fib-6)',
      borderRadius: '50%',
      background: i < taps ? 'var(--accent-brand)' : 'transparent',
      border: '1px solid ' + (i < taps ? 'var(--accent-brand)' : 'var(--border-medium)'),
      transition: 'background var(--dur-swift) var(--ease-phi)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)'
    }
  }, gateOpen ? String(elapsedMs).padStart(5, '0') + ' MS' : 'STILLNESS GATE'));
}
Object.assign(__ds_scope, { PulseTapSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ritual/PulseTapSurface.jsx", error: String((e && e.message) || e) }); }

// components/signals/BareNumbers.jsx
try { (() => {
/** Bare Numbers mode: 1–3 large values, zero charts, zero motion. */
function BareNumbers({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-2)',
      fontFamily: 'var(--font-body)'
    }
  }, items.slice(0, 3).map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-3)',
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, it.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { BareNumbers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signals/BareNumbers.jsx", error: String((e && e.message) || e) }); }

// components/signals/ClusterPulse.jsx
try { (() => {
/** Cluster Pulse mode: droplet clusters; numbers appear only after a tap; touch stops motion. */
function ClusterPulse({
  clusters = [],
  revealed = null,
  onReveal = () => {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '233px',
      borderRadius: 'var(--radius-ritual)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }
  }, clusters.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    onClick: () => onReveal(c.id),
    "aria-label": c.id,
    style: {
      position: 'absolute',
      left: c.x + '%',
      top: c.y + '%',
      translate: '-50% -50%',
      width: c.size + 'px',
      height: c.size + 'px',
      borderRadius: '50%',
      cursor: 'pointer',
      padding: 0,
      background: revealed === c.id ? 'color-mix(in srgb,var(--accent-theme) 38%,transparent)' : 'color-mix(in srgb,var(--accent-theme) 14%,transparent)',
      border: '1px solid color-mix(in srgb,var(--accent-theme) 38%,transparent)',
      animation: revealed === c.id ? 'none' : 'phi-breath var(--dur-breathe) var(--ease-phi) infinite'
    }
  }, revealed === c.id && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-primary)'
    }
  }, c.value))));
}
Object.assign(__ds_scope, { ClusterPulse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signals/ClusterPulse.jsx", error: String((e && e.message) || e) }); }

// components/signals/InsightCard.jsx
try { (() => {
/** Insight Card — appears after 1618 ms of attention. Observation + option + agency. One CTA or none. */
function InsightCard({
  observation,
  option,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-0)',
      padding: 'var(--space-phi-1)',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-ritual)',
      animation: 'fade-in-silent var(--dur-golden) var(--ease-phi) both'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-ritual)'
    }
  }, observation), option && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, option), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      justifySelf: 'start',
      minHeight: 'var(--touch-min)',
      padding: '0 var(--space-phi-1)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--accent-brand)',
      border: '1px solid color-mix(in srgb,var(--accent-brand) 38%,transparent)',
      borderRadius: 'var(--radius-s4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-0)',
      transition: 'border-color var(--dur-standard) var(--ease-phi)'
    }
  }, action));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signals/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/signals/QuietCard.jsx
try { (() => {
/** Quiet Cards mode: one number per card, maximum three cards. Zero charts. */
function QuietCard({
  label,
  value,
  unit,
  note,
  breathing = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-phi-n1)',
      padding: 'var(--space-phi-1)',
      minHeight: '120px',
      textAlign: 'center',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-ritual)',
      animation: breathing ? 'quiet-breath var(--dur-golden) var(--ease-phi) infinite' : 'none',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-phi-n2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, note));
}
Object.assign(__ds_scope, { QuietCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signals/QuietCard.jsx", error: String((e && e.message) || e) }); }

// components/signals/RhythmLine.jsx
try { (() => {
/** Rhythm Line mode: one line, no grid, current point is the accent. */
function RhythmLine({
  points = [],
  label = 'ITI'
}) {
  const max = Math.max(...points, 1);
  const w = 610,
    h = 89;
  const d = points.map((p, i) => (i === 0 ? 'M' : 'L') + (i / Math.max(points.length - 1, 1) * w).toFixed(1) + ',' + (h - p / max * h).toFixed(1)).join(' ');
  const lastX = w,
    lastY = h - points[points.length - 1] / max * h;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + h,
    width: "100%",
    height: h,
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  }), points.length > 0 && /*#__PURE__*/React.createElement("circle", {
    cx: lastX,
    cy: isNaN(lastY) ? h : lastY,
    r: "3",
    fill: "var(--accent-brand)"
  })));
}
Object.assign(__ds_scope, { RhythmLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signals/RhythmLine.jsx", error: String((e && e.message) || e) }); }

// components/status/ConsentRow.jsx
try { (() => {
/** One of four granular consent flags: local, sync, insights, research. All default off. */
function ConsentRow({
  flag,
  label,
  description,
  checked = false,
  onChange = () => {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n2)',
      padding: 'var(--space-phi-0) 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    label: label,
    description: description,
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-quiet)',
      color: 'var(--text-muted)'
    }
  }, flag));
}
Object.assign(__ds_scope, { ConsentRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/ConsentRow.jsx", error: String((e && e.message) || e) }); }

// components/status/CrisisBanner.jsx
try { (() => {
/** Non-blocking crisis resources. No red, no modal, never interrupts what the user is doing. */
function CrisisBanner({
  title = 'Numery wsparcia',
  lines = [],
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      padding: 'var(--space-phi-0)',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-s4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n2)'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.region,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-phi-0)',
      fontSize: 'var(--fs-0)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.region), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, l.number)))), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    style: {
      justifySelf: 'start',
      minHeight: 'var(--touch-min)',
      background: 'transparent',
      border: 'none',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-0)',
      cursor: 'pointer',
      padding: 0
    }
  }, "Zamknij"));
}
Object.assign(__ds_scope, { CrisisBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/CrisisBanner.jsx", error: String((e && e.message) || e) }); }

// components/status/PriceRow.jsx
try { (() => {
/** Transactional price row. Apple 3.1.2: price, period, auto-renew, restore, EULA/Privacy. Zero countdowns. */
function PriceRow({
  price,
  period,
  note,
  autoRenew = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n2)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-phi-n2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2)',
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-muted)'
    }
  }, "/ ", period)), autoRenew && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-0)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, "Odnawia si\u0119 automatycznie. Anulujesz kiedy chcesz."), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-utility)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/status/SeedIndicator.jsx
try { (() => {
/** Garden HUD seed indicator: mono, muted, zero chrome. Long-press opens Settings/Archive/About. */
function SeedIndicator({
  hash = '',
  level = 1,
  ritual = 'closed'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-phi-0)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-quiet)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-theme)'
    }
  }, "F(", level, ")"), /*#__PURE__*/React.createElement("span", null, hash.slice(0, 8)), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: ritual === 'closed' ? 1 : 0.382
    }
  }, ritual === 'closed' ? 'RITUAL CLOSED' : 'RITUAL OPEN'));
}
Object.assign(__ds_scope, { SeedIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/SeedIndicator.jsx", error: String((e && e.message) || e) }); }

// components/status/SyncBadge.jsx
try { (() => {
const MAP = {
  ok: {
    dot: 'var(--state-ok)',
    text: 'Zsynchronizowano'
  },
  syncing: {
    dot: 'var(--state-attention)',
    text: 'Synchronizacja…'
  },
  pending: {
    dot: 'var(--text-muted)',
    text: 'Oczekuje'
  }
};

/** Sync status is always visible. "Failed to sync" is never shown — it reads "Synchronizacja…". */
function SyncBadge({
  status = 'ok',
  detail
}) {
  const s = MAP[status] ?? MAP.pending;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-fib-6)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-quiet)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--space-fib-5)',
      height: 'var(--space-fib-5)',
      borderRadius: '50%',
      background: s.dot
    }
  }), s.text, detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\xB7 ", detail));
}
Object.assign(__ds_scope, { SyncBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/SyncBadge.jsx", error: String((e && e.message) || e) }); }

// prototypes/pulse-tap-surface/pulse-tap-v2.proto.jsx
try { (() => {
/* PROTOTYP — NIE JEST KOMPONENTEM SYSTEMU.
   Celowo bez siostrzanego .d.ts i z nazwa pliku kebab-case, zeby kompilator
   NIE wciagnal go do _ds_bundle.js i nie wystawil na window.<Namespace>.
   Kontrakt produkcyjny PulseTapSurface.d.ts pozostaje nietkniety. */

const PT = {
  GATE_MS: 1618,
  // stillness gate
  MIN_ITI: 382,
  // walidacja per tap
  CAP_MS: 16180,
  // hard cap
  TOTAL: 5 // F(5)
};
function PulseTapV2({
  onResolve = () => {}
}) {
  const NS = window.SoftNoirDesignSystem_aee1d5;
  const [phase, setPhase] = React.useState('GATE'); // GATE | OPEN | COMPLETE | WORLDHALT
  const [taps, setTaps] = React.useState([]); // timestamps
  const [now, setNow] = React.useState(0);
  const t0 = React.useRef(null);
  const rejected = React.useRef(0);
  const reduced = React.useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;
  React.useEffect(() => {
    t0.current = performance.now();
    const id = setInterval(() => setNow(performance.now() - t0.current), 50);
    const gate = setTimeout(() => setPhase(p => p === 'GATE' ? 'OPEN' : p), PT.GATE_MS);
    return () => {
      clearInterval(id);
      clearTimeout(gate);
    };
  }, []);

  // hard cap -> WORLDHALT (sciezka B)
  React.useEffect(() => {
    if (phase !== 'OPEN') return;
    if (now >= PT.CAP_MS) {
      setPhase('WORLDHALT');
      onResolve({
        path: 'WORLDHALT',
        taps: taps.length,
        elapsedMs: Math.round(now)
      });
    }
  }, [now, phase]);
  function tap() {
    if (phase !== 'OPEN') return;
    const t = performance.now() - t0.current;
    const last = taps[taps.length - 1];
    if (last != null && t - last < PT.MIN_ITI) {
      rejected.current += 1;
      return;
    } // odrzucone bez komunikatu bledu
    const next = [...taps, t];
    setTaps(next);
    if (next.length >= PT.TOTAL) {
      setPhase('COMPLETE');
      onResolve({
        path: 'COMPLETE',
        taps: next.length,
        elapsedMs: Math.round(t),
        itis: itis(next)
      });
    }
  }
  const iti = itis(taps);
  const median = iti.length ? [...iti].sort((a, b) => a - b)[Math.floor(iti.length / 2)] : null;
  const cv = iti.length > 1 ? stddev(iti) / mean(iti) : null;
  const capPct = Math.min(now / PT.CAP_MS, 1) * 100;
  const gateOpen = phase === 'OPEN';
  const resolved = phase === 'COMPLETE' || phase === 'WORLDHALT';
  const edge = phase === 'WORLDHALT' ? 'var(--text-muted)' : gateOpen || phase === 'COMPLETE' ? 'color-mix(in srgb,var(--accent-brand) 38%,transparent)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      width: '100%',
      maxWidth: '233px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Powierzchnia tapni\u0119\u0107",
    "aria-disabled": !gateOpen,
    "aria-live": "polite",
    onClick: tap,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        tap();
      }
    },
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      gap: 'var(--space-phi-1)',
      width: '100%',
      aspectRatio: '1 / 1.618',
      minHeight: '44px',
      borderRadius: 'var(--radius-ritual)',
      overflow: 'hidden',
      cursor: gateOpen ? 'pointer' : 'default',
      background: 'var(--surface-raised)',
      border: '1px solid ' + edge,
      transition: reduced ? 'none' : 'border-color var(--dur-golden) var(--ease-phi)'
    }
  }, !gateOpen && !resolved && !reduced && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '61.8%',
      top: '38.2%',
      translate: '-50% -50%',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--accent-theme)',
      animation: 'zero-pulse 1618ms var(--ease-phi) infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-7)'
    }
  }, Array.from({
    length: PT.TOTAL
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 'var(--space-fib-6)',
      height: 'var(--space-fib-6)',
      borderRadius: '50%',
      background: i < taps.length ? 'var(--accent-brand)' : 'transparent',
      border: '1px solid ' + (i < taps.length ? 'var(--accent-brand)' : 'var(--border-medium)'),
      transition: reduced ? 'none' : 'background var(--dur-swift) var(--ease-phi)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: 'var(--ls-hud)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      padding: '0 var(--space-phi-n1)'
    }
  }, phase === 'GATE' && 'STILLNESS GATE', phase === 'OPEN' && String(Math.round(now)).padStart(5, '0') + ' MS', phase === 'COMPLETE' && 'ZAPISANE', phase === 'WORLDHALT' && 'WORLDHALT'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: capPct + '%',
      background: phase === 'WORLDHALT' ? 'var(--text-muted)' : 'var(--accent-theme)',
      opacity: .618
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '4px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "MEDIAN ITI",
    v: median != null ? Math.round(median) + ' ms' : '—'
  }), /*#__PURE__*/React.createElement(Row, {
    k: "CV",
    v: cv != null ? cv.toFixed(4) : '—'
  }), /*#__PURE__*/React.createElement(Row, {
    k: "ODRZUCONE",
    v: rejected.current || '0'
  }), /*#__PURE__*/React.createElement(Row, {
    k: "\u015ACIE\u017BKA",
    v: resolved ? phase : '—'
  })), phase === 'WORLDHALT' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      lineHeight: 1.618,
      color: 'var(--text-secondary)'
    }
  }, "Sesja zamkn\u0119\u0142a si\u0119 sama po 16180 ms. Zapisano tyle, ile si\u0119 wydarzy\u0142o."));
}
function Row({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-phi-n1)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, v));
}
function itis(ts) {
  return ts.slice(1).map((t, i) => t - ts[i]);
}
function mean(a) {
  return a.reduce((x, y) => x + y, 0) / a.length;
}
function stddev(a) {
  const m = mean(a);
  return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / a.length);
}
Object.assign(window, {
  PulseTapV2,
  PT_PROTO: PT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/pulse-tap-surface/pulse-tap-v2.proto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PatternsLab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MODULES = [['overview', 'Overview'], ['health-grid', 'Health Grid'], ['conflicts', 'Conflicts'], ['activity', 'Activity'], ['teams', 'Teams'], ['adoption', 'Adoption'], ['catalog', 'Catalog'], ['signals', 'Signals']];
function PatternsLab() {
  const {
    HealthBadge,
    HealthGridCell,
    ViewState,
    SyncBadge
  } = window.SoftNoirDesignSystem_aee1d5;
  const [mod, setMod] = React.useState('health-grid');
  const [drill, setDrill] = React.useState(null);
  const cells = [{
    pattern: 'Auth Gate',
    team: 'Core',
    coverage: 78,
    interpretation: 61,
    status: 'in-progress'
  }, {
    pattern: 'Auth Gate',
    team: 'Mobile',
    coverage: 92,
    interpretation: 88,
    status: 'adopted'
  }, {
    pattern: 'Event Log',
    team: 'Core',
    coverage: 42,
    interpretation: 31,
    status: 'at-risk'
  }, {
    pattern: 'Event Log',
    team: 'Mobile',
    coverage: 12,
    interpretation: 8,
    status: 'not-adopted'
  }, {
    pattern: 'Sync Queue',
    team: 'Core',
    coverage: 64,
    interpretation: 55,
    status: 'in-progress'
  }, {
    pattern: 'Sync Queue',
    team: 'Mobile',
    coverage: 0,
    interpretation: 0,
    status: 'deprecated'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: drill ? '200px 1fr 300px' : '200px 1fr',
      gap: 'var(--space-phi-1)',
      background: 'var(--surface-base)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-s3)',
      overflow: 'hidden',
      minHeight: '610px'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: 'var(--space-phi-1)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 'var(--space-fib-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-phi-n1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: 'var(--accent-brand)'
    }
  }, "Silence"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, "patternslab.app")), MODULES.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setMod(id),
    "aria-current": mod === id ? 'page' : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '44px',
      padding: '0 var(--space-phi-n1)',
      cursor: 'pointer',
      background: mod === id ? 'var(--surface-raised)' : 'transparent',
      border: '1px solid transparent',
      borderLeft: '2px solid ' + (mod === id ? 'var(--accent-brand)' : 'transparent'),
      color: mod === id ? 'var(--accent-brand)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)',
      fontWeight: mod === id ? 700 : 400,
      textAlign: 'left'
    }
  }, label))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-phi-1)',
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-phi-0)',
      paddingBottom: 'var(--space-phi-n1)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: 'var(--text-primary)'
    }
  }, "Health Grid"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: "30d",
    "aria-label": "Zakres czasu",
    style: {
      minHeight: '44px',
      padding: '0 var(--space-phi-n1)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "7d"
  }, "Ostatnie 7 dni"), /*#__PURE__*/React.createElement("option", {
    value: "30d"
  }, "Ostatnie 30 dni"), /*#__PURE__*/React.createElement("option", {
    value: "90d"
  }, "Ostatnie 90 dni")), /*#__PURE__*/React.createElement(SyncBadge, {
    status: "ok",
    detail: "4 min temu"
  }))), mod === 'health-grid' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-phi-0)'
    }
  }, cells.map(c => /*#__PURE__*/React.createElement(HealthGridCell, _extends({
    key: c.pattern + c.team
  }, c, {
    onClick: () => setDrill(c)
  })))) : /*#__PURE__*/React.createElement(ViewState, {
    kind: "no-data",
    title: MODULES.find(m => m[0] === mod)[1],
    message: "Brak danych dla tego zakresu."
  })), drill && /*#__PURE__*/React.createElement("aside", {
    role: "complementary",
    style: {
      padding: 'var(--space-phi-1)',
      borderLeft: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 'var(--space-phi-0)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 'var(--space-phi-n1)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '.12em',
      color: 'var(--text-muted)'
    }
  }, "PATTERN"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDrill(null),
    "aria-label": "Zamknij",
    style: {
      minHeight: '44px',
      minWidth: '44px',
      background: 'transparent',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: 'var(--text-primary)'
    }
  }, drill.pattern), /*#__PURE__*/React.createElement(HealthBadge, {
    status: drill.status,
    score: drill.coverage,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-utility)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Zesp\xF3\u0142"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, drill.team)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Coverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, drill.coverage, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Interpretation"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-brand)'
    }
  }, drill.interpretation, "%")))));
}
Object.assign(window, {
  PatternsLab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PatternsLab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ZeroScreen.jsx
try { (() => {
const zeroShell = {
  phone: {
    position: 'relative',
    width: '393px',
    height: '760px',
    background: 'var(--surface-zero)',
    borderRadius: '34px',
    border: '1px solid var(--border-subtle)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    position: 'relative',
    zIndex: 2,
    flex: '0 0 44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 var(--space-phi-0)',
    background: 'var(--surface-base)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  date: {
    fontFamily: 'var(--font-display)',
    fontSize: '18px',
    fontWeight: 400,
    color: 'var(--text-primary)',
    margin: 0,
    flex: 1,
    textAlign: 'center'
  },
  icon: {
    width: '44px',
    height: '44px',
    display: 'grid',
    placeItems: 'center',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px'
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '0 var(--space-phi-0)',
    display: 'grid',
    gap: 'var(--space-phi-0)',
    alignContent: 'start'
  },
  footer: {
    flex: '0 0 60px',
    display: 'grid',
    placeItems: 'center',
    padding: '0 var(--space-phi-0)',
    background: 'var(--surface-base)',
    borderTop: '1px solid var(--border-subtle)'
  },
  cta: {
    width: '100%',
    maxWidth: '280px',
    minHeight: '48px',
    background: 'var(--accent-brand)',
    color: '#121417',
    border: 'none',
    borderRadius: 'var(--radius-s2)',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  banner: {
    position: 'absolute',
    top: '50px',
    left: 'var(--space-phi-0)',
    right: 'var(--space-phi-0)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-fib-6)',
    padding: 'var(--space-phi-n1)',
    borderRadius: 'var(--radius-s1)',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '.12em'
  }
};
function ZeroHeader({
  sync = 'ok'
}) {
  const {
    SyncBadge
  } = window.SoftNoirDesignSystem_aee1d5;
  return /*#__PURE__*/React.createElement("header", {
    style: zeroShell.header
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: '6px'
    }
  }, /*#__PURE__*/React.createElement(SyncBadge, {
    status: sync
  })), /*#__PURE__*/React.createElement("h1", {
    style: zeroShell.date
  }, "Dzi\u015B"), /*#__PURE__*/React.createElement("button", {
    style: zeroShell.icon,
    "aria-label": "Ustawienia"
  }, "SET"));
}
function ZeroScreen({
  state = 'signal',
  receptivity = 'high',
  count = 2,
  offline = false,
  error = null,
  onCta = () => {}
}) {
  const {
    ObservationCount,
    SummaryRow,
    NextWindowHint,
    ViewState,
    RhythmLine,
    Button
  } = window.SoftNoirDesignSystem_aee1d5;
  const compressed = receptivity === 'low';
  const showLayer2 = receptivity === 'high' && state === 'signal';
  const [detail, setDetail] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: zeroShell.phone,
    "data-receptivity": receptivity
  }, /*#__PURE__*/React.createElement(ZeroHeader, {
    sync: offline ? 'pending' : 'ok'
  }), offline && /*#__PURE__*/React.createElement("div", {
    style: {
      ...zeroShell.banner,
      background: 'var(--state-attention-soft)',
      border: '1px solid var(--border-medium)',
      color: 'var(--text-secondary)'
    }
  }, "OFFLINE \xB7 DANE LOKALNE"), error && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      ...zeroShell.banner,
      background: 'var(--state-error-soft)',
      border: '1px solid var(--border-medium)',
      color: 'var(--text-secondary)'
    }
  }, error), /*#__PURE__*/React.createElement("div", {
    style: zeroShell.body
  }, state === 'first_run' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'center',
      height: '100%',
      textAlign: 'center',
      padding: 'var(--space-phi-1)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-1)',
      color: 'var(--text-primary)'
    }
  }, "Gotowa na obserwacj\u0119?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      lineHeight: 1.618,
      color: 'var(--text-secondary)'
    }
  }, "Jedna obserwacja wystarczy. Nic nie jest mierzone przeciwko Tobie."), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    onClick: onCta
  }, "Utw\xF3rz pierwszy wzorzec"), /*#__PURE__*/React.createElement(Button, {
    variant: "bare",
    full: true,
    onClick: onCta
  }, "Pomi\u0144")), state === 'empty' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ObservationCount, {
    count: 0,
    label: "Obserwacje",
    empty: "Brak obserwacji"
  }), receptivity === 'high' && /*#__PURE__*/React.createElement(NextWindowHint, {
    label: "Nast\u0119pne okno",
    value: "~15:00"
  })), state === 'signal' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ObservationCount, {
    count: count,
    label: "Obserwacje"
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    compressed: compressed,
    items: [{
      count: 2,
      label: 'zmiany uwagi'
    }, {
      count: 1,
      label: 'zmiana energii'
    }]
  }), showLayer2 && /*#__PURE__*/React.createElement(NextWindowHint, {
    label: "Nast\u0119pne okno",
    value: "~15:00"
  }), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      padding: 'var(--space-phi-0)',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-s2)'
    }
  }, /*#__PURE__*/React.createElement(RhythmLine, {
    points: [3, 5, 2, 8, 5, 6, 4],
    label: "7 DNI"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDetail(false),
    style: {
      justifySelf: 'start',
      minHeight: '44px',
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-s1)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      padding: '0 var(--space-phi-n1)',
      cursor: 'pointer'
    }
  }, "Zwi\u0144")), !detail && receptivity === 'high' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setDetail(true),
    style: {
      justifySelf: 'start',
      minHeight: '44px',
      background: 'transparent',
      border: 'none',
      color: 'var(--accent-brand)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      cursor: 'pointer',
      padding: 0
    }
  }, "Poka\u017C szczeg\xF3\u0142y")), state === 'overloaded' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ObservationCount, {
    count: 5,
    label: "Obserwacje"
  }), /*#__PURE__*/React.createElement(ViewState, {
    kind: "overloaded",
    message: "5 obserwacji zapisanych",
    action: "Poka\u017C szczeg\xF3\u0142y"
  })), state === 'loading' && /*#__PURE__*/React.createElement(ViewState, {
    kind: "loading",
    message: "Wczytywanie\u2026"
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      ...zeroShell.footer,
      opacity: receptivity === 'low' && state === 'first_run' ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: zeroShell.cta,
    onClick: onCta,
    "aria-label": "Zapisz obserwacj\u0119"
  }, "+ Zapisz obserwacj\u0119")));
}
Object.assign(window, {
  ZeroScreen,
  zeroShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ZeroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-app/Garden.jsx
try { (() => {
function Garden() {
  const {
    SeedIndicator
  } = window.SoftNoirDesignSystem_aee1d5;
  const plants = [{
    x: 30,
    y: 58,
    r: 34,
    l: 5
  }, {
    x: 52,
    y: 44,
    r: 21,
    l: 3
  }, {
    x: 70,
    y: 62,
    r: 13,
    l: 2
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '393px',
      minHeight: '852px',
      borderRadius: '34px',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      background: 'hsl(220,8%,8%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at center, hsl(220,8%,11%) 0%, hsl(220,8%,8%) 70%)'
    }
  }), plants.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.x,
    title: 'F(' + p.l + ')',
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      translate: '-50% -50%',
      width: p.r * 2 + 'px',
      height: p.r * 2 + 'px',
      borderRadius: '50%',
      border: '1px solid var(--border-gold)',
      background: 'color-mix(in srgb,var(--accent-gold) 6%,transparent)',
      animation: 'phi-breath var(--dur-breathe) var(--ease-phi) infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '24%',
      translate: '-50% -50%',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--accent-gold)',
      animation: 'phi-breath var(--dur-breathe) ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      translate: '-50% 0',
      display: 'flex',
      gap: '1.618rem',
      alignItems: 'center',
      background: 'hsla(220,8%,8%,0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid hsla(220,8%,85%,0.12)',
      borderRadius: '9999px',
      padding: '0.618rem 1.618rem'
    }
  }, /*#__PURE__*/React.createElement(SeedIndicator, {
    hash: "9f3c1ba7e24d",
    level: 5,
    ritual: "closed"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      top: '13%',
      left: '50%',
      translate: '-50% 0',
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: 'var(--text-muted)'
    }
  }, "\u03C6-GARDEN"));
}
Object.assign(window, {
  Garden
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-app/Garden.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-app/Home.jsx
try { (() => {
const appShell = {
  page: {
    width: '393px',
    minHeight: '852px',
    background: 'var(--surface-base)',
    borderRadius: '34px',
    border: '1px solid var(--border-subtle)',
    padding: 'var(--space-phi-1)',
    display: 'grid',
    gap: 'var(--space-phi-1)',
    alignContent: 'start'
  },
  hud: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: 'var(--ls-hud)',
    color: 'var(--text-muted)'
  }
};
function ModeSwitch({
  mode,
  setMode
}) {
  const modes = ['quiet', 'rhythm', 'cluster', 'bare'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-6)'
    }
  }, modes.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    type: "button",
    onClick: () => setMode(m),
    style: {
      flex: 1,
      minHeight: '34px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: mode === m ? 'var(--surface-elevated)' : 'transparent',
      color: mode === m ? 'var(--accent-gold)' : 'var(--text-muted)',
      border: '1px solid ' + (mode === m ? 'var(--border-gold)' : 'var(--border-subtle)')
    }
  }, m)));
}
function Home({
  mode,
  setMode
}) {
  const {
    QuietCard,
    BareNumbers,
    RhythmLine,
    ClusterPulse,
    InsightCard,
    SyncBadge,
    GoldenClock
  } = window.SoftNoirDesignSystem_aee1d5;
  const [rev, setRev] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: appShell.page,
    "data-visual-mode": mode
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SyncBadge, {
    status: "ok",
    detail: "4 min temu"
  }), /*#__PURE__*/React.createElement("span", {
    style: appShell.hud
  }, "\u015ARODA \xB7 14:08")), /*#__PURE__*/React.createElement(GoldenClock, {
    progress: 0.618
  }), /*#__PURE__*/React.createElement(ModeSwitch, {
    mode: mode,
    setMode: setMode
  }), mode === 'quiet' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-fib-7)'
    }
  }, /*#__PURE__*/React.createElement(QuietCard, {
    label: "SIGNAL_FLOW",
    value: "8",
    unit: "obs",
    note: "Trzy powroty do tego samego obiektu."
  }), /*#__PURE__*/React.createElement(QuietCard, {
    label: "GOLDEN_RHYTHM",
    value: "0.62",
    note: "Rytm zbli\u017Cony do wczorajszego."
  }), /*#__PURE__*/React.createElement(QuietCard, {
    label: "STRUCTURAL_FLOW",
    value: "3",
    unit: "struct"
  })), mode === 'rhythm' && /*#__PURE__*/React.createElement(RhythmLine, {
    points: [610, 618, 600, 632, 618, 605, 640, 618, 612],
    label: "ITI \xB7 MS"
  }), mode === 'cluster' && /*#__PURE__*/React.createElement(ClusterPulse, {
    revealed: rev,
    onReveal: setRev,
    clusters: [{
      id: 'rano',
      x: 30,
      y: 32,
      size: 34,
      value: 3
    }, {
      id: 'popołudnie',
      x: 61.8,
      y: 61.8,
      size: 55,
      value: 5
    }, {
      id: 'wieczór',
      x: 78,
      y: 26,
      size: 21,
      value: 2
    }]
  }), mode === 'bare' && /*#__PURE__*/React.createElement(BareNumbers, {
    items: [{
      label: 'SIGNAL_FLOW',
      value: 8
    }, {
      label: 'STRUCTURAL_FLOW',
      value: '0.62'
    }]
  }), /*#__PURE__*/React.createElement(InsightCard, {
    observation: "Trzy obserwacje wr\xF3ci\u0142y do tego samego obiektu.",
    option: "Mo\u017Cesz otworzy\u0107 obiekt albo zostawi\u0107 to tak.",
    action: "Otw\xF3rz obiekt"
  }));
}
Object.assign(window, {
  Home,
  appShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-app/Paywall.jsx
try { (() => {
function Paywall() {
  const {
    Button,
    PriceRow
  } = window.SoftNoirDesignSystem_aee1d5;
  const rows = [['Obserwacje', 'bez limitu', 'bez limitu'], ['Ogrody', '1', 'bez limitu'], ['Wzorce', 'podstawowe', 'pełne'], ['Eksport', '—', 'CSV / JSON'], ['Pomiar rytmu', '—', 'pełny']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '393px',
      minHeight: '852px',
      background: 'var(--surface-base)',
      borderRadius: '34px',
      border: '1px solid var(--border-subtle)',
      padding: 'var(--space-phi-1)',
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: 'var(--text-muted)'
    }
  }, "PATTERNLENS PRO"), /*#__PURE__*/React.createElement(PriceRow, {
    price: "49 z\u0142",
    period: "mies.",
    note: "Rocznie 46.80 \u20AC \xB7 Bez okresu pr\xF3bnego. Wszystko podane przed zap\u0142at\u0105."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 'var(--space-phi-0)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, "FREE"), /*#__PURE__*/React.createElement("span", null, "PRO")), rows.map(([k, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 'var(--space-phi-0)',
      alignItems: 'baseline',
      paddingBottom: 'var(--space-phi-n2)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      color: 'var(--text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      width: '89px',
      textAlign: 'right'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-primary)',
      width: '89px',
      textAlign: 'right'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-fib-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true
  }, "W\u0142\u0105cz PRO"), /*#__PURE__*/React.createElement(Button, {
    variant: "bare",
    full: true
  }, "Zosta\u0144 przy FREE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-phi-0)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#restore"
  }, "Przywr\xF3\u0107 zakupy"), /*#__PURE__*/React.createElement("a", {
    href: "#eula"
  }, "EULA"), /*#__PURE__*/React.createElement("a", {
    href: "#privacy"
  }, "Prywatno\u015B\u0107")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      lineHeight: 1.618,
      color: 'var(--text-muted)'
    }
  }, "Subskrypcja odnawia si\u0119 automatycznie do momentu anulowania. Anulujesz w ustawieniach konta."));
}
Object.assign(window, {
  Paywall
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-app/Paywall.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-onboarding/Frame.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const onbFrame = {
  shell: {
    width: '393px',
    height: '852px',
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--surface-zero)',
    borderRadius: '34px',
    border: '1px solid var(--border-subtle)'
  },
  body: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--space-phi-2) var(--space-phi-1) var(--space-phi-1)'
  },
  hud: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: 'var(--ls-hud)',
    color: 'var(--text-muted)'
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '41.887px',
    lineHeight: 1.1,
    letterSpacing: 'var(--ls-ritual)',
    color: 'var(--text-primary)',
    margin: 0
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    lineHeight: 1.618,
    color: 'var(--text-secondary)',
    margin: 0,
    maxWidth: '89%'
  }
};
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: onbFrame.shell
  }, /*#__PURE__*/React.createElement("div", {
    style: onbFrame.body
  }, children));
}
function StepHead({
  step,
  total,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...onbFrame.hud
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, String(step).padStart(2, '0'), " / ", String(total).padStart(2, '0')));
}
Object.assign(window, {
  Phone,
  StepHead,
  onbFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-onboarding/Frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-onboarding/ScreenZero.jsx
try { (() => {
/* EKRAN_ZERO — 60 000 ms FSM. Demo runs the phases at 1/10 scale so the flow is walkable. */
function ScreenZero({
  onExit
}) {
  const {
    GoldenRectangle,
    BreathLine
  } = window.SoftNoirDesignSystem_aee1d5;
  const phases = [['entry', 6472], ['deepening', 10472], ['silence', 32360], ['return', 10696]];
  const [i, setI] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 100), 100);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => {
    if (i >= phases.length - 1) return;
    const t = setTimeout(() => setI(i + 1), phases[i][1] / 10);
    return () => clearTimeout(t);
  }, [i]);
  const phase = phases[i][0];
  const deep = {
    entry: 0,
    deepening: 0.382,
    silence: 0.618,
    return: 0.236
  }[phase];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onExit,
    role: "button",
    tabIndex: 0,
    "aria-label": "Wyj\u015Bcie z ciszy",
    style: {
      position: 'absolute',
      inset: 0,
      cursor: 'pointer',
      background: 'var(--surface-zero)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-zero-deep)',
      opacity: deep,
      transition: 'opacity var(--dur-rest) var(--ease-settle)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 61.8% 38.2%, transparent 38.2%, rgba(13,15,18,0.618) 89%)',
      opacity: phase === 'entry' ? 0 : 1,
      transition: 'opacity var(--dur-rest) var(--ease-settle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '61.8%',
      top: '38.2%',
      translate: '-50% -50%'
    }
  }, /*#__PURE__*/React.createElement(GoldenRectangle, {
    width: 144,
    cycle: 6472
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '22%',
      top: '38.2%',
      translate: '-50% -50%'
    }
  }, /*#__PURE__*/React.createElement(BreathLine, {
    phase: phase
  })), phase === 'return' && /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      top: '61.8%',
      left: '50%',
      translate: '-50% 0',
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '25.888px',
      letterSpacing: 'var(--ls-ritual)',
      color: 'var(--text-ritual)',
      opacity: 0.618
    }
  }, "wracasz"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--space-phi-1)',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 var(--space-phi-1)',
      ...window.onbFrame.hud
    }
  }, /*#__PURE__*/React.createElement("span", null, phase.toUpperCase()), /*#__PURE__*/React.createElement("span", null, String(elapsed).padStart(5, '0'), " MS")));
}
Object.assign(window, {
  ScreenZero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-onboarding/ScreenZero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patternlens-onboarding/Steps.jsx
try { (() => {
const DS = () => window.SoftNoirDesignSystem_aee1d5;
const {
  Phone,
  StepHead,
  onbFrame
} = window;
function Welcome({
  onNext
}) {
  const {
    Button
  } = DS();
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 1,
    total: 6,
    label: "WELCOME"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-phi-1)',
      paddingBottom: '38.2%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: onbFrame.title
  }, "Cisza, kt\xF3ra pokazuje Tw\xF3j rytm."), /*#__PURE__*/React.createElement("p", {
    style: onbFrame.sub
  }, "Bez konta. Bez oceniania. Zaczynasz od jednej obserwacji.")), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    onClick: onNext
  }, "Zacznij obserwacj\u0119"));
}
function Intent({
  value,
  onPick,
  onNext
}) {
  const {
    Button,
    ChoiceCard
  } = DS();
  const items = [['FOCUS', 'Zebrać uwagę w jednym miejscu.'], ['FLOW', 'Utrzymać tempo, które już mam.'], ['RESET', 'Zejść z obrotów.'], ['GROW', 'Zobaczyć, co się powtarza.'], ['OBSERVE', 'Nic nie zmieniać. Tylko patrzeć.']];
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 2,
    total: 6,
    label: "INTENT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'start',
      paddingTop: 'var(--space-phi-2)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...onbFrame.title,
      fontSize: '25.888px'
    }
  }, "Po co tu jeste\u015B dzisiaj?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-fib-7)'
    }
  }, items.map(([t, c]) => /*#__PURE__*/React.createElement(ChoiceCard, {
    key: t,
    title: t,
    caption: c,
    selected: value === t,
    onClick: () => onPick(t)
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    disabled: !value,
    onClick: onNext
  }, "Dalej"));
}
function JitaiCalibration({
  audio,
  setAudio,
  haptic,
  setHaptic,
  damping,
  setDamping,
  intensity,
  setIntensity,
  density,
  setDensity,
  onNext
}) {
  const {
    Button,
    ChoiceCard,
    Switch,
    Slider
  } = DS();
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 3,
    total: 6,
    label: "JITAI \xB7 KALIBRACJA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'start',
      paddingTop: 'var(--space-phi-1)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...onbFrame.title,
      fontSize: '25.888px'
    }
  }, "Trzy w\u0119z\u0142y profilu uwagi."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...onbFrame.sub,
      fontSize: '16px'
    }
  }, "Ka\u017Cdy z nich mo\u017Cesz zmieni\u0107 p\xF3\u017Aniej w ustawieniach."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-0)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "D\u017Awi\u0119k",
    description: "Brown noise. Startuje z gestu, nigdy sam.",
    checked: audio,
    onChange: setAudio
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Haptyka",
    description: "Impulsy 30\u201340 ms co ~260 ms.",
    checked: haptic,
    onChange: setHaptic
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "T\u0142umienie zmian",
    description: "Wyg\u0142adza przej\u015Bcia mi\u0119dzy stanami.",
    checked: damping,
    onChange: setDamping
  })), damping && /*#__PURE__*/React.createElement(Slider, {
    label: "Intensywno\u015B\u0107 t\u0142umienia",
    value: intensity,
    suffix: "%",
    onChange: setIntensity
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-fib-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...onbFrame.hud
    }
  }, "G\u0118STO\u015A\u0106 PULPITU"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-fib-7)'
    }
  }, /*#__PURE__*/React.createElement(ChoiceCard, {
    title: "Light",
    meta: "1\u20133",
    caption: "Bare Numbers.",
    selected: density === 'light',
    onClick: () => setDensity('light')
  }), /*#__PURE__*/React.createElement(ChoiceCard, {
    title: "Dense",
    meta: "3+",
    caption: "Quiet Cards.",
    selected: density === 'dense',
    onClick: () => setDensity('dense')
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    onClick: onNext
  }, "Dalej"));
}
function FirstPulseTap({
  taps,
  gateOpen,
  elapsed,
  onTap,
  onNext
}) {
  const {
    Button,
    PulseTapSurface
  } = DS();
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 4,
    total: 6,
    label: "FIRST PULSE TAP"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 'var(--space-phi-2)',
      alignContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...onbFrame.title,
      fontSize: '25.888px'
    }
  }, "Pi\u0119\u0107 tapni\u0119\u0107 we w\u0142asnym tempie."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...onbFrame.sub,
      textAlign: 'center'
    }
  }, gateOpen ? 'Bez pośpiechu. Nic tu nie jest mierzone przeciwko Tobie.' : 'Poczekaj, aż powierzchnia się otworzy.')), /*#__PURE__*/React.createElement(PulseTapSurface, {
    taps: taps,
    gateOpen: gateOpen,
    elapsedMs: elapsed,
    onTap: onTap
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    disabled: taps < 5,
    onClick: onNext
  }, "Dalej"));
}
function Consents({
  flags,
  setFlag,
  onNext
}) {
  const {
    Button,
    ConsentRow
  } = DS();
  const rows = [['consent_local', 'Dane lokalnie', 'Na Twoim urządzeniu. Zawsze włączone.'], ['consent_sync', 'Synchronizacja', 'Kopia między urządzeniami.'], ['consent_insights', 'Wzorce', 'Analiza Twoich obserwacji na urządzeniu.'], ['consent_research', 'Agregaty badawcze', 'Kohorty od 50 osób. Nigdy pojedyncze osoby.']];
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 5,
    total: 6,
    label: "ZGODY"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 'var(--space-phi-0)',
      alignContent: 'start',
      paddingTop: 'var(--space-phi-1)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...onbFrame.title,
      fontSize: '25.888px'
    }
  }, "Cztery zgody. Osobno."), /*#__PURE__*/React.createElement("div", null, rows.map(([k, l, d]) => /*#__PURE__*/React.createElement(ConsentRow, {
    key: k,
    flag: k,
    label: l,
    description: d,
    checked: flags[k],
    onChange: v => setFlag(k, v)
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    onClick: onNext
  }, "Dalej"));
}
function PlanPermissions({
  onDone
}) {
  const {
    Button,
    SyncBadge
  } = DS();
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StepHead, {
    step: 6,
    total: 6,
    label: "PROTOK\xD3\u0141 STARTOWY"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 'var(--space-phi-1)',
      alignContent: 'start',
      paddingTop: 'var(--space-phi-1)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...onbFrame.title,
      fontSize: '25.888px'
    }
  }, "Protok\xF3\u0142 startowy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-0)'
    }
  }, [['Sesja zero', '60 000 ms'], ['Pierwsza obserwacja', 'kiedy zechcesz'], ['Ogród', 'F(1) — nasiono'], ['Cena', 'jeden ogród zawsze bezpłatny']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 'var(--space-phi-n1)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      color: 'var(--text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-primary)'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...onbFrame.sub,
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "Non-clinical behavioral protocol. No diagnosis. No therapy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-fib-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    onClick: onDone
  }, "Wejd\u017A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SyncBadge, {
    status: "pending",
    detail: "offline-first"
  }))));
}
Object.assign(window, {
  Welcome,
  Intent,
  JitaiCalibration,
  FirstPulseTap,
  Consents,
  PlanPermissions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patternlens-onboarding/Steps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swiat-w/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swiat-w/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/swiat-w/screens.jsx
try { (() => {
const W = {
  card: {
    position: 'relative',
    width: '393px',
    height: '700px',
    background: 'var(--surface-base)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-s3)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  head: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 'var(--space-phi-0) var(--space-phi-0) 0'
  },
  id: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '.18em',
    color: 'var(--accent-brand)'
  },
  meta: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    letterSpacing: '.14em',
    color: 'var(--text-muted)'
  },
  body: {
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-phi-n1)',
    padding: 'var(--space-phi-0)'
  },
  h: {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontSize: '25.888px',
    lineHeight: 1.15,
    letterSpacing: '.0382em',
    color: 'var(--text-primary)'
  },
  p: {
    margin: 0,
    fontSize: '13px',
    lineHeight: 1.618,
    color: 'var(--text-secondary)'
  },
  hud: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    letterSpacing: '.18em',
    color: 'var(--text-muted)'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 'var(--space-phi-n1)',
    paddingBottom: '6px',
    borderBottom: '1px solid var(--border-subtle)'
  },
  k: {
    fontSize: '13px',
    color: 'var(--text-secondary)'
  },
  v: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    color: 'var(--text-primary)'
  },
  foot: {
    flex: '0 0 auto',
    padding: '0 var(--space-phi-0) var(--space-phi-0)'
  }
};
function Shell({
  id,
  name,
  meta,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: W.card,
    "data-screen-label": id
  }, /*#__PURE__*/React.createElement("div", {
    style: W.head
  }, /*#__PURE__*/React.createElement("span", {
    style: W.id
  }, id), /*#__PURE__*/React.createElement("span", {
    style: W.meta
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: W.body
  }, /*#__PURE__*/React.createElement("h2", {
    style: W.h
  }, name), children), footer && /*#__PURE__*/React.createElement("div", {
    style: W.foot
  }, footer));
}
function Rows({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)'
    }
  }, items.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: W.row
  }, /*#__PURE__*/React.createElement("span", {
    style: W.k
  }, k), /*#__PURE__*/React.createElement("span", {
    style: W.v
  }, v))));
}
Object.assign(window, {
  W,
  Shell,
  Rows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swiat-w/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swiat-w/worlds.jsx
try { (() => {
const {
  W,
  Shell,
  Rows
} = window;
const D = () => window.SoftNoirDesignSystem_aee1d5;

/* W-01 GENESIS */
function W01() {
  const {
    GoldenRectangle,
    BreathLine,
    Button
  } = D();
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-01",
    name: "Genesis",
    meta: "0 \u2192 6472 MS"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Pierwszy oddech systemu. Forma 1:\u03C6 wy\u0142ania si\u0119 z ciszy \u2014 nie animacja wej\u015Bcia, tylko moment, w kt\xF3rym \u015Bwiat zaczyna istnie\u0107."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(GoldenRectangle, {
    width: 110,
    cycle: 6472
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '12%',
      top: '50%',
      translate: '0 -50%'
    }
  }, /*#__PURE__*/React.createElement(BreathLine, {
    phase: "entry"
  }))), /*#__PURE__*/React.createElement("span", {
    style: W.hud
  }, "FORMA 144:233 \xB7 Z\u0141OTY PUNKT 61.8 / 38.2"), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true
  }, "Otw\xF3rz \u015Bwiat"));
}

/* W-02 PULSE */
function W02() {
  const {
    PulseTapSurface,
    RhythmLine
  } = D();
  const [taps, setTaps] = React.useState(3);
  const mfi = 0.0618;
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-02",
    name: "Pulse",
    meta: "F(5) = 5 \xB7 CAP 16180 MS"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Rytm pi\u0105tki. MFI liczone na \u017Cywo jako CV interwa\u0142\xF3w \u2014 nie ocena, tylko odczyt struktury."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '178px',
      width: '100%',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(PulseTapSurface, {
    taps: taps,
    gateOpen: true,
    elapsedMs: 4236,
    onTap: () => setTaps(t => (t + 1) % 6)
  })), /*#__PURE__*/React.createElement(RhythmLine, {
    points: [610, 618, 600, 632, 618, 605, 640],
    label: "ITI \xB7 MS"
  }), /*#__PURE__*/React.createElement(Rows, {
    items: [['MFI (CV ITI)', mfi.toFixed(4)], ['Median ITI', '618 ms'], ['Phase-lock', '0.94']]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-6)'
    }
  }, [['GOLDEN_RHYTHM', 'var(--signal-adopted)'], ['TRANSITION_BAND', 'var(--signal-progress)'], ['ALERT_DRIFT', 'var(--signal-critical)']].map(([l, c], i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '5px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-utility)',
      letterSpacing: '.06em',
      color: c,
      border: '1px solid ' + c,
      opacity: i === 0 ? 1 : .72
    }
  }, l.split('_')[0]))));
}

/* W-03 GARDEN */
function W03() {
  const {
    SeedIndicator,
    Button
  } = D();
  const plants = [{
    x: 32,
    y: 60,
    r: 30
  }, {
    x: 54,
    y: 46,
    r: 20
  }, {
    x: 72,
    y: 64,
    r: 13
  }];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-03",
    name: "Garden",
    meta: "+0.1 UNITS / H IDLE"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Ogr\xF3d ro\u015Bnie sam, tak\u017Ce wtedy gdy nie ma sesji. Wzrost jest funkcj\u0105 czasu, nie wysi\u0142ku \u2014 dlatego nie da si\u0119 go \u201Eprzegra\u0107\u201D."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      borderRadius: 'var(--radius-ritual)',
      border: '1px solid var(--border-subtle)',
      background: 'radial-gradient(ellipse at 61.8% 38.2%, color-mix(in srgb,var(--surface-raised) 80%,transparent) 0%, var(--surface-base) 72%)',
      overflow: 'hidden'
    }
  }, plants.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.x,
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      translate: '-50% -50%',
      width: p.r * 2,
      height: p.r * 2,
      borderRadius: '50%',
      border: '1px solid color-mix(in srgb,var(--accent-theme) 38%,transparent)',
      background: 'color-mix(in srgb,var(--accent-theme) 6%,transparent)',
      animation: 'phi-breath var(--dur-breathe) var(--ease-phi) infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '22%',
      translate: '-50% -50%',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-theme)',
      animation: 'zero-pulse 1618ms var(--ease-phi) infinite'
    }
  })), /*#__PURE__*/React.createElement(SeedIndicator, {
    hash: "9f3c1ba7e24d",
    level: 5,
    ritual: "closed"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    full: true
  }, "Zapisz kadr"));
}

/* W-04 NDS-GATE */
function W04() {
  const anti = [['Grywalizacja', 'czysto'], ['Streaki', 'czysto'], ['Wykresy osoby', 'czysto'], ['Czerwone bannery', 'czysto'], ['Język kliniczny', '1 trafienie'], ['Urgency / presja', 'czysto']];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-04",
    name: "NDS-Gate",
    meta: "SENTINEL \xB7 6 ANTY-WZORC\xD3W"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Wartownik neurodywergencji. Skanuje ka\u017Cdy build pod k\u0105tem sze\u015Bciu anty-wzorc\xF3w i zwraca protok\xF3\u0142 naprawczy \u2014 nigdy diagnoz\u0119."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '6px'
    }
  }, anti.map(([k, v]) => {
    const ok = v === 'czysto';
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        ...W.row,
        borderBottomColor: 'var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: W.k
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: ok ? 'var(--signal-adopted)' : 'var(--signal-progress)'
      }
    }, ok ? '✓ ' + v : '! ' + v));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-phi-n1)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-s2)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: W.hud
  }, "PROTOK\xD3\u0141 NAPRAWCZY"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...W.p,
      marginTop: '6px'
    }
  }, "Fraza \u201Epoziom stresu\u201D w S-10. Zamie\u0144 na struktur\u0119: co zaobserwowano i w jakim rytmie.")));
}

/* W-05 DSP-23 */
function W05() {
  const {
    Button
  } = D();
  const seg = [['Przegląd', 7], ['Domknięcie', 8], ['Cisza', 8]];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-05",
    name: "DSP-23",
    meta: "7 + 8 + 8 = 23 MIN"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Zamkni\u0119cie dnia. Najwa\u017Cniejsze zdarzenie doby \u2014 nie podsumowanie wynik\xF3w, tylko od\u0142o\u017Cenie ich."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '8px',
      borderRadius: '2px',
      overflow: 'hidden',
      marginTop: 'var(--space-phi-n1)'
    }
  }, seg.map(([l, m], i) => /*#__PURE__*/React.createElement("i", {
    key: l,
    style: {
      flex: m,
      background: 'var(--accent-theme)',
      opacity: [0.85, 0.55, 0.3][i]
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, seg.map(([l, m]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: W.hud
  }, l, " ", m, "\u2032"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '56px',
      fontWeight: 300,
      color: 'var(--text-primary)'
    }
  }, "23")), /*#__PURE__*/React.createElement(Rows, {
    items: [['Start', '21:00 [H]'], ['Sekwencja', '7 / 8 / 8 min'], ['Wyjście', 'w każdej chwili']]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true
  }, "Zamknij dzie\u0144"));
}

/* W-06 TDL-φ */
function W06() {
  const layers = [['DAILY', '1 doba', 'dziś'], ['φ-YEAR', '1.618 roku', '591 dni'], ['DECADE', '10 lat', 'projekcja']];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-06",
    name: "TDL-\u03C6",
    meta: "TRZY WARSTWY CZASU"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Ta sama obserwacja czytana w trzech skalach. Dzie\u0144 nic nie znaczy sam; \u03C6-rok pokazuje kszta\u0142t; dekada jest projekcj\u0105, nie obietnic\u0105."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      marginTop: 'var(--space-phi-n1)'
    }
  }, layers.map(([n, span, note], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: 'var(--space-phi-n1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-s2)',
      background: 'var(--surface-raised)',
      opacity: 1 - i * 0.18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--text-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: W.hud
  }, span)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      height: '2px',
      background: 'var(--accent-theme)',
      opacity: .618,
      width: [100, 61.8, 38.2][i] + '%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...W.hud,
      display: 'block',
      marginTop: '6px'
    }
  }, note)))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...W.hud,
      marginTop: 'auto'
    }
  }, "DECADE = MODELED \xB7 NIE PROGNOZA"));
}

/* W-07 SIGNAL-COMMONS */
function W07() {
  const dots = [[28, 42, 18], [46, 58, 26], [62, 34, 14], [74, 62, 20], [38, 70, 12]];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-07",
    name: "Signal-Commons",
    meta: "k \u2265 5 \xB7 DP \u03B5 \u2264 1.0"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Globalna mapa receptywno\u015Bci. Nigdy pojedyncza osoba \u2014 najmniejsza widoczna jednostka to kohorta pi\u0119ciu."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      borderRadius: 'var(--radius-s2)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-raised)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .05,
      background: 'repeating-linear-gradient(90deg,transparent 0 21px,var(--text-muted) 21px 22px),repeating-linear-gradient(0deg,transparent 0 21px,var(--text-muted) 21px 22px)'
    }
  }), dots.map(([x, y, r], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      translate: '-50% -50%',
      width: r * 2,
      height: r * 2,
      borderRadius: '50%',
      background: 'color-mix(in srgb,var(--accent-theme) 16%,transparent)',
      border: '1px solid color-mix(in srgb,var(--accent-theme) 38%,transparent)',
      animation: 'phi-breath var(--dur-breathe) var(--ease-phi) infinite'
    }
  }))), /*#__PURE__*/React.createElement(Rows, {
    items: [['Kohorty', '34'], ['Minimalna kohorta', '5 osób'], ['Budżet prywatności', 'ε = 1.0'], ['Surowe zdarzenia', 'nigdy']]
  }));
}

/* W-08 PROTOCOL ZERO */
function W08() {
  const {
    Button,
    Switch
  } = D();
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-08",
    name: "Protocol Zero",
    meta: "PZ-1.0.0"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Sesja badawcza z sensorem. Bramka sync_confidence wpuszcza dane do EE dopiero po przekroczeniu progu \u2014 poni\u017Cej sesja istnieje, ale nie liczy si\u0119 jako pomiar."), /*#__PURE__*/React.createElement(Rows, {
    items: [['Protokół', 'PZ-1.0.0'], ['sync_confidence', '0.97 / próg 0.97'], ['Okno', '97.08 min'], ['Retencja', 'CONSENT_GATED']]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-phi-n1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-s2)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Sensor zewn\u0119trzny",
    description: "Dane surowe zostaj\u0105 na urz\u0105dzeniu. Do EE trafia wy\u0142\u0105cznie agregat.",
    checked: on,
    onChange: setOn
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...W.hud,
      marginTop: 'auto'
    }
  }, "HRV / GSR WYKLUCZONE Z B2C \u2014 GATE R-01"), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    disabled: !on
  }, "Rozpocznij sesj\u0119"));
}

/* W-09 GOVERNANCE */
function W09() {
  const chain = ['9f3c1ba7', 'e24d0b91', '77af3c02', '1bd9e4aa'];
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-09",
    name: "Governance",
    meta: "SHA-256 \xB7 ANNEX IV"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Portal audytu. Trzy widoki: weryfikacja \u0142a\u0144cucha, eksplorator EffectLog, eksport. Zero luk w \u0142a\u0144cuchu jest warunkiem release'u."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-fib-6)'
    }
  }, ['Chain', 'EffectLog', 'Export'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      flex: 1,
      textAlign: 'center',
      minHeight: '34px',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '.12em',
      border: '1px solid ' + (i === 0 ? 'color-mix(in srgb,var(--accent-brand) 38%,transparent)' : 'var(--border-subtle)'),
      color: i === 0 ? 'var(--accent-brand)' : 'var(--text-muted)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '6px',
      marginTop: 'var(--space-phi-n1)'
    }
  }, chain.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-fib-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--signal-adopted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-secondary)'
    }
  }, h, "\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--text-muted)'
    }
  }, "#", String(i + 1).padStart(4, '0'))))), /*#__PURE__*/React.createElement(Rows, {
    items: [['Zdarzenia', '12 618'], ['Luki w łańcuchu', '0'], ['Ostatnia weryfikacja', '4 min temu']]
  }));
}

/* W-10 SECOND WORLD */
function W10() {
  const gates = [['Łańcuch bez luk przez 7 dni', true], ['NDS-Gate czysty w 4 buildach', true], ['Kohorty ≥ 5 we wszystkich regionach', false], ['Audyt tygodniowy podpisany', false]];
  const open = gates.every(g => g[1]);
  return /*#__PURE__*/React.createElement(Shell, {
    id: "W-10",
    name: "Second World",
    meta: "4 BRAMY \xB7 AUDYT TYGODNIOWY"
  }, /*#__PURE__*/React.createElement("p", {
    style: W.p
  }, "Drugi \u015Bwiat nie uruchamia si\u0119 decyzj\u0105. Otwiera si\u0119, kiedy wszystkie cztery bramy s\u0105 zielone w tym samym audycie tygodniowym."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-phi-n1)',
      marginTop: 'var(--space-phi-n1)'
    }
  }, gates.map(([t, ok]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-fib-7)',
      alignItems: 'flex-start',
      padding: 'var(--space-phi-n1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-s2)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: '8px',
      height: '8px',
      marginTop: '6px',
      borderRadius: '50%',
      background: ok ? 'var(--signal-adopted)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...W.k,
      color: ok ? 'var(--text-primary)' : 'var(--text-muted)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'grid',
      placeItems: 'center',
      gap: '6px',
      padding: 'var(--space-phi-0)',
      border: '1px dashed var(--border-medium)',
      borderRadius: 'var(--radius-s2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      color: open ? 'var(--accent-brand)' : 'var(--text-muted)'
    }
  }, open ? 'OTWARTY' : 'ZAMKNIĘTY'), /*#__PURE__*/React.createElement("span", {
    style: W.hud
  }, "2 / 4 BRAMY")));
}
Object.assign(window, {
  W01,
  W02,
  W03,
  W04,
  W05,
  W06,
  W07,
  W08,
  W09,
  W10
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swiat-w/worlds.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ChoiceCard = __ds_scope.ChoiceCard;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.HealthBadge = __ds_scope.HealthBadge;

__ds_ns.HealthGridCell = __ds_scope.HealthGridCell;

__ds_ns.NextWindowHint = __ds_scope.NextWindowHint;

__ds_ns.ObservationCount = __ds_scope.ObservationCount;

__ds_ns.SummaryRow = __ds_scope.SummaryRow;

__ds_ns.ViewState = __ds_scope.ViewState;

__ds_ns.BreathLine = __ds_scope.BreathLine;

__ds_ns.GoldenClock = __ds_scope.GoldenClock;

__ds_ns.GoldenRectangle = __ds_scope.GoldenRectangle;

__ds_ns.PulseTapSurface = __ds_scope.PulseTapSurface;

__ds_ns.BareNumbers = __ds_scope.BareNumbers;

__ds_ns.ClusterPulse = __ds_scope.ClusterPulse;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.QuietCard = __ds_scope.QuietCard;

__ds_ns.RhythmLine = __ds_scope.RhythmLine;

__ds_ns.ConsentRow = __ds_scope.ConsentRow;

__ds_ns.CrisisBanner = __ds_scope.CrisisBanner;

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.SeedIndicator = __ds_scope.SeedIndicator;

__ds_ns.SyncBadge = __ds_scope.SyncBadge;

})();
