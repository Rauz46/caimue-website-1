# The real object

Each card is a small photo studio. The work is printed on a thick lacquered slab, lit and shot in real WebGL.

## How it is built
- One three.js renderer and one canvas behind the HTML card shells. Each visible card gets its own viewport and scissor, and one scene is re-dressed per card, so there is one shadow map and one set of lights.
- An antialiased mask multiplies the canvas alpha to round each card's corners. The canvas stays transparent elsewhere, so the white grid shows between cards.
- The slab is custom geometry of under 1,000 triangles with analytic normals, so the bevels stay smooth.
- The floor and wall are one seamless photographer's sweep, so there is no horizon line.
- Light: a shadow-casting overhead spot throws the soft shadow onto the floor, a close spot gives falloff across the print, and a pool on the wall separates the object from the room.
- Specular comes only from baked softboxes. Point-light highlights are removed in the shader, because they were what looked like CG.
- A slanted window reflection in the lacquer travels across the face as the slab turns. This is the clearest proof the object is real.

## UX decisions
- Three whole cards fit on screen, with the outer margin equal to the gap between cards. Cropped side cards would have cut their words.
- Scale falls linearly with distance, which keeps the gap between neighbours exactly constant while moving.
- Words sit on the card's floor, in the same space as the object, with no panel below an image. The slab's shadow falls toward them.
- Side-card words are partly counter-scaled so they stay readable (about 13px effective) without reflowing.
- Slabs rotate by distance to centre, and the speed of the row adds a little more, so nothing jumps.
- Rendering stops at rest. Resolution steps down once if a move runs slow.

## Works for any work
Nothing refers to a browser. Slab proportions come from the crop, so a poster, deck page or film frame only needs an image and a crop rectangle. Talentou already uses a squarer slab.

## Discarded
- Logo at the top left: it collided with the slab.
- Hard window reflection across the whole face: it washed out the print.
- A straight wall and floor: the crease read as a cheap horizon line.
- Overlapping cards: the corner mask would cut into the card behind.
- Pointer-driven light: the brief bans cursor effects, and rendering stays idle at rest.

## Honest weak points
- A website crop viewed at an angle still has small text, and soft small type is its limit. The treatment lifts the image, but it cannot make weak source art good.
- Opened directly from file:// without Chrome's file-access flag, browser security blocks the textures and the page shows its flat fallback. Over http this limit does not apply, as long as the images are served same-origin.
- three.js adds a dependency of roughly 150 KB gzipped (an estimate, not measured).
- During a move at 1907 wide, frames averaged 14.2 ms at dpr 1. At dpr 2 they averaged 15.6 ms, but the slow-move resolution step-down can act during that test, so it may not have held dpr 2. That is one fast machine, not a low-end GPU measurement.

## Checked
- Next button through the full loop, drag, side-card click, arrow key, sideways wheel. A vertical wheel leaves the row alone.
- Reduced motion, forced no-WebGL fallback, no-flag fallback, and phone width (no sideways scroll).
- No console errors.
