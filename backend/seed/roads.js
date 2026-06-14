// ============================================================
// Hyderabad City Navigation Graph
// 50+ real locations | Real distances (km) | Real travel times
// Traffic: LOW / MEDIUM / HIGH based on actual road conditions
// All edges are bidirectional in the app (undirected graph)
// ============================================================

module.exports = [

  // ── ZONE 1: OLD CITY (Charminar area) ──────────────────────
  { source: "Charminar",            destination: "Salar Jung Museum",      distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Charminar",            destination: "Mecca Masjid",           distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },
  { source: "Charminar",            destination: "Laad Bazaar",            distance: 1,  averageTravelTime: 4,   trafficLevel: "HIGH"   },
  { source: "Charminar",            destination: "MGBS",                   distance: 2,  averageTravelTime: 7,   trafficLevel: "MEDIUM" },
  { source: "Charminar",            destination: "Golconda Fort",          distance: 9,  averageTravelTime: 28,  trafficLevel: "HIGH"   },
  { source: "Charminar",            destination: "Osmania General Hospital",distance: 2,  averageTravelTime: 6,   trafficLevel: "MEDIUM" },
  { source: "Mecca Masjid",         destination: "Laad Bazaar",            distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },
  { source: "Mecca Masjid",         destination: "MGBS",                   distance: 3,  averageTravelTime: 8,   trafficLevel: "MEDIUM" },
  { source: "Salar Jung Museum",     destination: "MGBS",                   distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Salar Jung Museum",     destination: "Nampally Railway Station",distance: 3, averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Laad Bazaar",          destination: "Nampally Railway Station",distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },

  // ── ZONE 2: MGBS / ABIDS / NAMPALLY ────────────────────────
  { source: "MGBS",                 destination: "Nampally Railway Station",distance: 2,  averageTravelTime: 7,   trafficLevel: "MEDIUM" },
  { source: "MGBS",                 destination: "Ameerpet",               distance: 7,  averageTravelTime: 25,  trafficLevel: "HIGH"   },
  { source: "MGBS",                 destination: "Mehdipatnam",            distance: 6,  averageTravelTime: 20,  trafficLevel: "HIGH"   },
  { source: "MGBS",                 destination: "Banjara Hills",          distance: 5,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "MGBS",                 destination: "Nizams Institute of Medical Sciences", distance: 4, averageTravelTime: 14, trafficLevel: "MEDIUM" },
  { source: "Nampally Railway Station", destination: "Ameerpet",           distance: 5,  averageTravelTime: 18,  trafficLevel: "HIGH"   },
  { source: "Nampally Railway Station", destination: "Secunderabad Railway Station", distance: 7, averageTravelTime: 20, trafficLevel: "MEDIUM" },
  { source: "Nampally Railway Station", destination: "Osmania General Hospital", distance: 2, averageTravelTime: 7, trafficLevel: "MEDIUM" },

  // ── ZONE 3: GOLCONDA / WEST ─────────────────────────────────
  { source: "Golconda Fort",        destination: "Qutb Shahi Tombs",       distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Golconda Fort",        destination: "Jubilee Hills",          distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "Golconda Fort",        destination: "Financial District",     distance: 9,  averageTravelTime: 28,  trafficLevel: "HIGH"   },
  { source: "Golconda Fort",        destination: "Mehdipatnam",            distance: 7,  averageTravelTime: 22,  trafficLevel: "MEDIUM" },
  { source: "Qutb Shahi Tombs",     destination: "Manikonda",              distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Qutb Shahi Tombs",     destination: "Financial District",     distance: 7,  averageTravelTime: 20,  trafficLevel: "MEDIUM" },

  // ── ZONE 4: AMEERPET / PUNJAGUTTA ───────────────────────────
  { source: "Ameerpet",             destination: "Banjara Hills",          distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Ameerpet",             destination: "Kukatpally",             distance: 9,  averageTravelTime: 30,  trafficLevel: "HIGH"   },
  { source: "Ameerpet",             destination: "Necklace Road",          distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Ameerpet",             destination: "Prasads Multiplex",      distance: 4,  averageTravelTime: 14,  trafficLevel: "MEDIUM" },
  { source: "Ameerpet",             destination: "Punjagutta",             distance: 2,  averageTravelTime: 7,   trafficLevel: "HIGH"   },
  { source: "Punjagutta",           destination: "Banjara Hills",          distance: 2,  averageTravelTime: 7,   trafficLevel: "HIGH"   },
  { source: "Punjagutta",           destination: "Necklace Road",          distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Punjagutta",           destination: "Begumpet",               distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },

  // ── ZONE 5: NECKLACE ROAD / HUSSAIN SAGAR ──────────────────
  { source: "Necklace Road",        destination: "Prasads Multiplex",      distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Necklace Road",        destination: "Lumbini Park",           distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },
  { source: "Necklace Road",        destination: "Secunderabad Railway Station", distance: 4, averageTravelTime: 14, trafficLevel: "MEDIUM" },
  { source: "Necklace Road",        destination: "KBR National Park",      distance: 5,  averageTravelTime: 15,  trafficLevel: "MEDIUM" },
  { source: "Prasads Multiplex",    destination: "Lumbini Park",           distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },
  { source: "Prasads Multiplex",    destination: "Nizams Institute of Medical Sciences", distance: 2, averageTravelTime: 6, trafficLevel: "LOW" },
  { source: "Lumbini Park",         destination: "Secunderabad Railway Station", distance: 4, averageTravelTime: 14, trafficLevel: "MEDIUM" },

  // ── ZONE 6: BANJARA HILLS / JUBILEE HILLS ──────────────────
  { source: "Banjara Hills",        destination: "Jubilee Hills",          distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Banjara Hills",        destination: "KBR National Park",      distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Banjara Hills",        destination: "Apollo Hospitals Jubilee Hills", distance: 4, averageTravelTime: 12, trafficLevel: "MEDIUM" },
  { source: "Banjara Hills",        destination: "GVK One Mall",           distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Banjara Hills",        destination: "Care Hospitals Banjara Hills", distance: 1, averageTravelTime: 4, trafficLevel: "LOW"  },
  { source: "Banjara Hills",        destination: "Mehdipatnam",            distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Jubilee Hills",        destination: "Apollo Hospitals Jubilee Hills", distance: 2, averageTravelTime: 6, trafficLevel: "LOW" },
  { source: "Jubilee Hills",        destination: "Hitech City",            distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Jubilee Hills",        destination: "Madhapur",               distance: 3,  averageTravelTime: 9,   trafficLevel: "MEDIUM" },
  { source: "Jubilee Hills",        destination: "AMB Cinemas",            distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Jubilee Hills",        destination: "Inorbit Mall",           distance: 3,  averageTravelTime: 9,   trafficLevel: "MEDIUM" },
  { source: "GVK One Mall",         destination: "Care Hospitals Banjara Hills", distance: 1, averageTravelTime: 3, trafficLevel: "LOW" },
  { source: "GVK One Mall",         destination: "Prasads Multiplex",      distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Care Hospitals Banjara Hills", destination: "Nizams Institute of Medical Sciences", distance: 3, averageTravelTime: 9, trafficLevel: "LOW" },
  { source: "Apollo Hospitals Jubilee Hills", destination: "Hitech City",  distance: 3,  averageTravelTime: 9,   trafficLevel: "LOW"    },
  { source: "KBR National Park",    destination: "Hitech City",            distance: 3,  averageTravelTime: 9,   trafficLevel: "LOW"    },

  // ── ZONE 7: HITECH CITY / MADHAPUR / CYBERABAD ─────────────
  { source: "Hitech City",          destination: "Gachibowli",             distance: 3,  averageTravelTime: 10,  trafficLevel: "HIGH"   },
  { source: "Hitech City",          destination: "Madhapur",               distance: 2,  averageTravelTime: 7,   trafficLevel: "HIGH"   },
  { source: "Hitech City",          destination: "Kondapur",               distance: 3,  averageTravelTime: 9,   trafficLevel: "MEDIUM" },
  { source: "Hitech City",          destination: "Inorbit Mall",           distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Hitech City",          destination: "AMB Cinemas",            distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Hitech City",          destination: "Cyber Towers",           distance: 1,  averageTravelTime: 3,   trafficLevel: "HIGH"   },
  { source: "Madhapur",             destination: "Kondapur",               distance: 3,  averageTravelTime: 9,   trafficLevel: "MEDIUM" },
  { source: "Madhapur",             destination: "Inorbit Mall",           distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Madhapur",             destination: "Cyber Towers",           distance: 1,  averageTravelTime: 4,   trafficLevel: "HIGH"   },
  { source: "Cyber Towers",         destination: "Gachibowli",             distance: 3,  averageTravelTime: 10,  trafficLevel: "HIGH"   },
  { source: "Inorbit Mall",         destination: "AMB Cinemas",            distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },

  // ── ZONE 8: GACHIBOWLI / FINANCIAL DISTRICT / NANAKRAMGUDA ─
  { source: "Gachibowli",           destination: "Financial District",     distance: 2,  averageTravelTime: 7,   trafficLevel: "MEDIUM" },
  { source: "Gachibowli",           destination: "Manikonda",              distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "Gachibowli",           destination: "University of Hyderabad",distance: 4,  averageTravelTime: 12,  trafficLevel: "LOW"    },
  { source: "Gachibowli",           destination: "Nanakramguda",           distance: 2,  averageTravelTime: 6,   trafficLevel: "MEDIUM" },
  { source: "Financial District",   destination: "Manikonda",              distance: 5,  averageTravelTime: 15,  trafficLevel: "MEDIUM" },
  { source: "Financial District",   destination: "Nanakramguda",           distance: 2,  averageTravelTime: 6,   trafficLevel: "MEDIUM" },
  { source: "Financial District",   destination: "RGIA Airport",           distance: 24, averageTravelTime: 40,  trafficLevel: "LOW"    },
  { source: "Nanakramguda",         destination: "Manikonda",              distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "University of Hyderabad", destination: "Miyapur",             distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "University of Hyderabad", destination: "Manikonda",           distance: 7,  averageTravelTime: 20,  trafficLevel: "MEDIUM" },

  // ── ZONE 9: KONDAPUR / KUKATPALLY / KPHB ───────────────────
  { source: "Kondapur",             destination: "Kukatpally",             distance: 5,  averageTravelTime: 16,  trafficLevel: "MEDIUM" },
  { source: "Kondapur",             destination: "KPHB Colony",            distance: 5,  averageTravelTime: 16,  trafficLevel: "MEDIUM" },
  { source: "Kukatpally",           destination: "KPHB Colony",            distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Kukatpally",           destination: "JNTU Hyderabad",         distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Kukatpally",           destination: "Forum Sujana Mall",      distance: 2,  averageTravelTime: 6,   trafficLevel: "LOW"    },
  { source: "Kukatpally",           destination: "PVR Cinemas Kukatpally", distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "Kukatpally",           destination: "Bachupally",             distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "KPHB Colony",          destination: "Miyapur",                distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "KPHB Colony",          destination: "JNTU Hyderabad",         distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "KPHB Colony",          destination: "Forum Sujana Mall",      distance: 1,  averageTravelTime: 4,   trafficLevel: "LOW"    },
  { source: "JNTU Hyderabad",       destination: "Forum Sujana Mall",      distance: 1,  averageTravelTime: 3,   trafficLevel: "LOW"    },
  { source: "Forum Sujana Mall",    destination: "PVR Cinemas Kukatpally", distance: 2,  averageTravelTime: 5,   trafficLevel: "LOW"    },
  { source: "Miyapur",              destination: "Bachupally",             distance: 5,  averageTravelTime: 15,  trafficLevel: "MEDIUM" },
  { source: "Bachupally",           destination: "Nizampet",               distance: 3,  averageTravelTime: 9,   trafficLevel: "LOW"    },
  { source: "Nizampet",             destination: "KPHB Colony",            distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },

  // ── ZONE 10: BEGUMPET / SECUNDERABAD ───────────────────────
  { source: "Begumpet",             destination: "Secunderabad Railway Station", distance: 4, averageTravelTime: 14, trafficLevel: "MEDIUM" },
  { source: "Begumpet",             destination: "Paradise",               distance: 3,  averageTravelTime: 10,  trafficLevel: "HIGH"   },
  { source: "Begumpet",             destination: "Ameerpet",               distance: 3,  averageTravelTime: 10,  trafficLevel: "HIGH"   },
  { source: "Secunderabad Railway Station", destination: "KIMS Hospitals", distance: 4,  averageTravelTime: 14,  trafficLevel: "MEDIUM" },
  { source: "Secunderabad Railway Station", destination: "Yashoda Hospitals Secunderabad", distance: 2, averageTravelTime: 6, trafficLevel: "LOW" },
  { source: "Secunderabad Railway Station", destination: "Osmania University", distance: 5, averageTravelTime: 16, trafficLevel: "MEDIUM" },
  { source: "Secunderabad Railway Station", destination: "Uppal",          distance: 9,  averageTravelTime: 30,  trafficLevel: "HIGH"   },
  { source: "Secunderabad Railway Station", destination: "Paradise",       distance: 2,  averageTravelTime: 7,   trafficLevel: "MEDIUM" },
  { source: "Paradise",             destination: "Osmania University",     distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Paradise",             destination: "KIMS Hospitals",         distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Yashoda Hospitals Secunderabad", destination: "KIMS Hospitals", distance: 3, averageTravelTime: 10, trafficLevel: "LOW"   },

  // ── ZONE 11: EAST HYD — OSMANIA / UPPAL / LB NAGAR ─────────
  { source: "Osmania University",   destination: "KIMS Hospitals",         distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "Osmania University",   destination: "Uppal",                  distance: 5,  averageTravelTime: 16,  trafficLevel: "MEDIUM" },
  { source: "Osmania General Hospital", destination: "KIMS Hospitals",     distance: 5,  averageTravelTime: 16,  trafficLevel: "MEDIUM" },
  { source: "Osmania General Hospital", destination: "Nampally Railway Station", distance: 2, averageTravelTime: 7, trafficLevel: "MEDIUM" },
  { source: "KIMS Hospitals",       destination: "Nizams Institute of Medical Sciences", distance: 3, averageTravelTime: 9, trafficLevel: "LOW" },
  { source: "Uppal",                destination: "LB Nagar",               distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "Uppal",                destination: "Dilsukhnagar",           distance: 5,  averageTravelTime: 16,  trafficLevel: "MEDIUM" },
  { source: "LB Nagar",             destination: "Dilsukhnagar",           distance: 4,  averageTravelTime: 12,  trafficLevel: "MEDIUM" },
  { source: "LB Nagar",             destination: "RGIA Airport",           distance: 26, averageTravelTime: 42,  trafficLevel: "LOW"    },
  { source: "Dilsukhnagar",         destination: "MGBS",                   distance: 5,  averageTravelTime: 18,  trafficLevel: "HIGH"   },

  // ── ZONE 12: SOUTH / MEHDIPATNAM / MANIKONDA ────────────────
  { source: "Mehdipatnam",          destination: "Manikonda",              distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "Mehdipatnam",          destination: "Banjara Hills",          distance: 3,  averageTravelTime: 10,  trafficLevel: "MEDIUM" },
  { source: "Manikonda",            destination: "Gachibowli",             distance: 6,  averageTravelTime: 18,  trafficLevel: "MEDIUM" },
  { source: "Manikonda",            destination: "RGIA Airport",           distance: 22, averageTravelTime: 38,  trafficLevel: "LOW"    },

  // ── ZONE 13: AIRPORT CONNECTIONS ────────────────────────────
  { source: "RGIA Airport",         destination: "Shamshabad",             distance: 3,  averageTravelTime: 8,   trafficLevel: "LOW"    },
  { source: "Shamshabad",           destination: "LB Nagar",               distance: 24, averageTravelTime: 38,  trafficLevel: "LOW"    },
  { source: "Shamshabad",           destination: "Manikonda",              distance: 20, averageTravelTime: 35,  trafficLevel: "LOW"    },
];