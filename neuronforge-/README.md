# NeuronForge

An original, self-contained GenAI operations dashboard and product-intelligence copilot. It is a polished front-end prototype that demonstrates the pieces an enterprise AI product needs:

- Grounded retrieval / knowledge hub surface
- Multi-model routing and live operations visibility
- Agent workflow progress and data sync status
- Guardrails, PII protection, policy checks, and trust cues
- Human-friendly prompt modes, suggested work, sharing, and responsive feedback
- A functional prototype chat loop with source citations and workspace reset

## Run it

Open `index.html` in any modern browser. No build step or server is required.

### Run in VS Code

1. Install [Visual Studio Code](https://code.visualstudio.com/) if needed.
2. Extract `neuronforge-github.zip`, then open VS Code.
3. Select **File → Open Folder** and choose the extracted `neuronforge` folder.
4. In VS Code's Explorer, right-click `index.html` and choose **Open with Default Browser**. The app opens immediately.
5. Optional: install the **Live Server** extension from VS Code's Extensions panel. Then right-click `index.html` and choose **Open with Live Server** for automatic browser refreshes while editing.

There are no packages to install and no terminal commands to run.

### Upload to GitHub

1. On GitHub, create an empty repository named `neuronforge`.
2. Extract the ZIP and upload the contents of the `neuronforge` folder to that repository, or use VS Code's **Source Control → Publish to GitHub**.
3. Keep `README.md` and `LICENSE` in the repository root so the project description and MIT license appear automatically.

## Ownership and GitHub readiness

This package contains original HTML, CSS, JavaScript, and fictional sample data created for this project. It uses no downloaded images, logos, third-party JavaScript packages, or web-hosted fonts. You may upload it to GitHub. Before publishing commercially, independently check whether the `NeuronForge` product name is available for your intended region and industry, since that is a trademark question rather than a code copyright question.

The included [MIT License](LICENSE) identifies Jha42 as the copyright holder for this project code.

## Production integration map

Replace the mocked reply code in `app.js` with an API route that:

1. Authenticates the workspace user and applies RBAC.
2. Retrieves approved, permission-filtered chunks from a vector store.
3. Sends the prompt plus retrieved context to a selected model gateway.
4. Runs prompt-injection, PII, policy, and output-quality checks.
5. Streams the cited response, trace ID, model, cost, latency, and feedback events back to the UI.

For production, keep provider keys server-side, record evaluation sets/versioned prompts, and use audit logs for every retrieval and generation.
