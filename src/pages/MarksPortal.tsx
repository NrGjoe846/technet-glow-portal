Got it 👍 You want a **complete project prompt for Lovable (low-code AI dev platform)** so it can scaffold the **Monsoon Travel Assistant** web app for you. Here’s a polished prompt you can paste directly into Lovable:

---

# 🌧️ Monsoon Travel Assistant – Complete Prompt for Lovable

**Project Goal**
Build a **monsoon-friendly travel assistant web app** that helps users plan **safe and dry travel within the city** by avoiding waterlogged roads, providing alternate routes, and showing transport availability.

---

## 🔹 Core Features

1. **Route Planning (Safe Navigation)**

   * Input: Source & Destination.
   * Display route avoiding **flooded/waterlogged roads**.
   * Use **Leaflet.js (preferred) or Google Maps API**.

2. **Crowd-Sourced Flood Reports**

   * Users can mark/report flooded areas on map.
   * Store reports in backend DB with:

     * Latitude, Longitude
     * Severity (Low, Medium, High)
     * Timestamp & User ID (optional).
   * Display reports as **red markers** on map.

3. **Alternate Route Suggestions**

   * If main route is blocked, suggest alternate safe paths.
   * Re-calculate routes dynamically when new reports are added.

4. **Transport Availability Checker (Mock API)**

   * Show real-time (mocked) status for **Autos, Buses, Cabs**.
   * Example JSON:

     ```json
     {
       "auto": "Available",
       "bus": "Delayed",
       "cab": "Limited"
     }
     ```
   * Display results in a side panel.

5. **Interactive Map UI**

   * Real-time route overlays.
   * Flooded road markers.
   * Option to toggle crowd-sourced flood layers ON/OFF.

---

## 🔹 Tech Stack

* **Frontend**: React + TailwindCSS + Leaflet.js
* **Backend**: Node.js + Express
* **Database**: MongoDB or PostgreSQL (for reports)
* **APIs**:

  * Routing: Mapbox Directions API or Google Maps API
  * Mock transport API (simple JSON endpoint)

---

## 🔹 Deliverables

✅ **Frontend + Backend Integration**
✅ **Interactive Map with Safe Routes**
✅ **Flood Reporting System (crowd-sourced)**
✅ **Transport Availability Widget (mock API)**
✅ **GitHub Repo with Documentation**
✅ **Deployable Web Version (Vercel + Render)**

---

## 🔹 Extra Notes for Lovable

* Scaffold **project structure** with `frontend` and `backend` folders.
* Provide **boilerplate code** for:

  * React UI with Leaflet map
  * Express server with `/reports` and `/transport` endpoints
* Include sample **mock data** for initial testing.
* Add a clear **README.md** with setup + run instructions.

---

⚡ Prompt to paste in Lovable:

> "Build me a **Monsoon Travel Assistant web app** with React + Tailwind + Leaflet frontend and Node.js + Express + MongoDB backend. Features: route planning avoiding flooded roads, crowd-sourced flood reporting, alternate safe route suggestions, and a mock API to check transport availability. Deliverables: interactive map UI, backend APIs, real-time updates (mock allowed), GitHub repo with documentation, and deployable version."

---

Do you also want me to **write the first boilerplate code (React + Node + Leaflet)** here, so you can test even before using Lovable?
