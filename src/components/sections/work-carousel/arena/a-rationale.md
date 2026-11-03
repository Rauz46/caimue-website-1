# The room: rationale

**Idea.** Each card is a window onto a dark viewing room built from real CSS 3D planes: back wall, side walls, polished floor. A two-leaf hinged screen stands in the room. One leaf carries the work, the other carries the logo and sentence. Words and work are one object, so there is no caption strip.

**Depth is computed, not faked.** Moving off centre applies a z-shear to the camera, which is the exact off-axis projection of an eye that isn't on the window's axis. Far surfaces slide and near ones hold. The pointer feeds the same matrix very slightly.

**Reflection.** The leaves are mirrored through the floor plane and seen through a translucent floor, so the reflection stays correct at every camera position.

**Work.** Crops are big and poster-like, with light falling off down the panel. Nothing depends on the work being a website.

**Weak points.** At 1440 the side-card sentences are small (about 10px). Phone widths need recomposing, because this layout is desktop only. A stranger could read the screen as an open brochure.
