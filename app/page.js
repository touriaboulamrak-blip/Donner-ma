export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Donner.ma</h1>
      <p>Donner ce dont vous n'avez plus besoin.</p>
      <p>Recevoir ce dont vous avez besoin.</p>

      <div style={{ marginTop: "30px" }}>
        <button style={{ margin: "10px", padding: "12px 20px" }}>
          Je veux donner
        </button>

        <button style={{ margin: "10px", padding: "12px 20px" }}>
          Je cherche un don
        </button>
      </div>
    </main>
  );
}
