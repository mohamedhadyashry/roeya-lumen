# ROEYA Lumen

Members-only endoscopy training platform for GI and endoscopy fellows. It runs on Firebase's free plan: Authentication plus Cloud Firestore, no paid services.

## Files
- `index.html`: the page
- `config.js`: Firebase config and settings (`showSamples`, demo account)
- `assets/app.js`: the app
- `assets/firebase.js`: Firebase SDK and the data layer
- `assets/style.css`: the design
- `firestore.rules`: database security rules. Paste them into Firebase console → Firestore Database → Rules → Publish.

## Make someone an admin
1. Firebase console → Authentication → Users → copy the person's **User UID**.
2. Firestore Database → Start collection `admins` → Document ID = that UID → add any field (for example `role` = `admin`) → Save.
3. The person reloads the site. **Admin** appears in their account menu.

## Course codes
Admin → Course codes → create a code (for example `ERCP4-2026`). Attendees enter it at sign-up or under Plans → "Activate with course code". The course is linked to their account and its pathway opens.

## Going live for real
In `config.js`, set `showSamples: false`. Then in Admin → Feed content, press "Remove sample posts".

## Limits on the free plan
- 50,000 database reads and 20,000 writes a day
- 1 GB stored

That's plenty for a pilot with a few hundred members. Videos aren't hosted here; use a video service (Bunny Stream, Vimeo or Mux) and link them.
