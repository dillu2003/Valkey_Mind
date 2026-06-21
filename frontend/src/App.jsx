import { useState } from "react";
import axios from "axios";

function App() {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const translate = async () => {

    const response = await axios.post(
      "http://127.0.0.1:8000/translate",
      {
        query: query
      }
    );

    setResult(response.data);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>ValkeyMind</h1>

      <textarea
        rows="8"
        cols="80"
        value={query}
        placeholder="Enter SQL or Natural Language Query"
        onChange={(e) => setQuery(e.target.value)}
      />

      <br />
      <br />

      <button onClick={translate}>
        Translate
      </button>

      <br />
      <br />

      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>

    </div>
  );
}

export default App;