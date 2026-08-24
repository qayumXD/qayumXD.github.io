# Web API & Dashboard

QVM ships an optional FastAPI service that exposes the whole simulation stack over REST, plus a Next.js dashboard for interactive circuit running.

## Starting the server

```bash
pip install "quantum-virtual-machine[server]"
uvicorn api.app:app --reload          # from the repo root
```

The API is also deployed live at **quantum-virtual-machine.vercel.app**, and the dashboard build is served automatically under `/web` when a static export exists.

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/` | Service info + endpoint index |
| GET | `/health` | Liveness probe |
| POST | `/run` | Run a circuit — the main workhorse |
| GET | `/circuits` | List saved circuits (filter by `?category=`) |
| POST | `/circuits` | Save a circuit (algorithm / error_correction / benchmark / educational / custom) |
| GET | `/history` | Recent execution logs (`?limit=N`) |

## Running a circuit: `POST /run`

The request schema covers every engine feature:

```json
{
  "source_type": "qasm",
  "qasm": "OPENQASM 3.0;\ninclude \"stdgates.inc\";\nqubit[2] q;\nh q[0];\ncx q[0], q[1];\n",
  "engine": "statevector",
  "shots": 1024,
  "seed": 42
}
```

Request fields:

| Field | Values | Notes |
|---|---|---|
| `source_type` | `json` \| `qasm` | Gate list or OpenQASM text |
| `circuit` | gate dicts | Required when `source_type=json`, with `nqubits` |
| `transpile` + `routing` | `greedy` \| `sabre` | Route onto linear topology |
| `restore_mapping` | bool | Swap back to logical identity mapping after routing |
| `engine` | `statevector` \| `mps` | Dense or tensor-network backend |
| `shots` / `seed` | int | Sampling; deterministic with seed |
| `noise_depol` / `noise_amp_damp` / `noise_phase_damp` / `noise_readout` | float 0–1 | Custom channel strengths |
| `device_backend` | `fake_5q` \| `fake_7q` \| `ideal` | Prepackaged profile |
| `expectation_pauli` | e.g. `{"ZZ": -1.0}` | Weighted Pauli expectation |

Response fields:

```json
{
  "probabilities": [0.5, 0.0, 0.0, 0.5],
  "counts": {"00": 512, "11": 512},
  "classical_memory": {},
  "transpiled_operations": [...],
  "openqasm2": "OPENQASM 2.0; ...",
  "circuit_plot": "<base64 PNG>",
  "histogram_plot": "<base64 PNG>",
  "expectation_value": null,
  "noise_summary": null
}
```

Both plots arrive as base64 PNGs ready to drop into an `<img>` tag; the transpiled operation list lets you *see* what routing did.

## Dashboard

The Next.js app in [`web/`](https://github.com/qayumXD/quantum-virtual-machine/tree/main/web) provides:

- **Runner page** — pick JSON or QASM input, engine, shots, noise sliders; view probabilities, counts, and rendered plots.
- **Docs pages** — renders the same technical documentation you're reading, from markdown.
- **History page** — browse past executions.

Deployed on Vercel; locally: `npm run dev` inside `web/`.

## Persistence (optional Supabase)

Setting `SUPABASE_URL` and `SUPABASE_KEY` environment variables activates circuit library and execution-history persistence via Supabase. Without them, the API runs stateless — `/circuits` serves a built-in example catalog and history endpoints degrade gracefully.

## Try it from Python

```python
import httpx

resp = httpx.post(
    "http://127.0.0.1:8000/run",
    json={"source_type": "json",
          "circuit": [{"name": "h", "qubits": [0]}, {"name": "cx", "qubits": [0, 1]}],
          "nqubits": 2, "shots": 1000},
)
print(resp.json()["counts"])
```
