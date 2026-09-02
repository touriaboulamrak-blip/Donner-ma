"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [ville, setVille] = useState("");
  const [message, setMessage] = useState("");

  async function publierDon() {
    setMessage("");

    if (!titre || !description || !ville) {
      setMessage("Merci de remplir tous les champs.");
      return;
    }

    const { error } = await supabase
      .from("dons")
      .insert([
        {
          nom: titre,
          description: description,
          ville: ville,
        },
      ]);

    if (error) {
      console.error(error);
      setMessage("Une erreur est survenue. Le don n'a pas été publié.");
      return;
    }

    setMessage("🎉 Votre don a été publié avec succès !");
    setTitre("");
    setDescription("");
    setVille("");
  }

  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>Donner.ma</h1>

      <p>Donner ce dont vous n'avez plus besoin.</p>
      <p>Recevoir ce dont vous avez besoin.</p>

      {!showForm ? (
        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => setShowForm(true)}
            style={{
              padding: "12px 20px",
              marginRight: "10px",
            }}
          >
            Je veux donner
          </button>

          <button
            style={{
              padding: "12px 20px",
            }}
          >
            Je cherche un don
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h2>Publier un don</h2>

          <input
            type="text"
            placeholder="Titre du don"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <textarea
            placeholder="Décrivez ce que vous souhaitez donner"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <input
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <button
            onClick={publierDon}
            style={{
              padding: "12px 20px",
            }}
          >
            Publier le don
          </button>

          {message && (
            <p style={{ marginTop: "15px" }}>
              {message}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
