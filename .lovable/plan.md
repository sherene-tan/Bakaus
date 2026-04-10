

## Replace Coastal Wildlife Image

Replace the current `coastal-wildlife.jpg` image in the "Coastal Wildlife" feature card with the uploaded `Wildlife_Scene_New.jpg`.

### Steps
1. Copy `user-uploads://Wildlife_Scene_New.jpg` to `public/images/Wildlife_Scene_New.jpg`
2. Update the `features` array in `src/pages/Index.tsx` — change the "Coastal Wildlife" entry's `media.src` from `/images/coastal-wildlife.jpg` to `/images/Wildlife_Scene_New.jpg`

