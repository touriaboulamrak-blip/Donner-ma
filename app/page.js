"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>Donner.ma</h1>

      <p>Donner ce dont vous n'avez plus besoin.</p>
      <p>Recevoir ce dont vous avez besoin.</p>

      {!showForm ? (
        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => setShowForm(true)}
            style={{ padding: "12px 20px", marginRight: "10px" }}
          >
            Je veux donner
          </button>

          <button style={{ padding: "12px 20px" }}>
            Je cherche un don
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h2>Publier un don</h2>

          <input
            type="text"
            placeholder="Titre du don"
            style={{ display: "block", width: "100%", padding: "12px", marginBottom: "12px" }}
          />

          <textarea
            placeholder="Décrivez ce que vous souhaitez donner"
            style={{ display: "block", width: "100%", padding: "12px", marginBottom: "12px" }}
          />

          <input
            type="text"
            placeholder="Ville"
            style={{ display: "block", width: "100%", padding: "12px", marginBottom: "12px" }}
          />

          <button style={{ padding: "12px 20px" }}>
            Publier le don
          </button>
        </div>
      )}
    </main>
  );
}
