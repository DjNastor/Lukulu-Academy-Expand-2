Vercel reconnect / team fix instructions

Problem
-------
The currently connected Vercel account (phushiplan-4334s-projects) does not own the target team/project (lukulu-recordings → lukulu-academy). Vercel returns "Deployment not found" for that connection.

Quick fixes (choose one)
------------------------
1) Reconnect Vercel via ChatGPT Settings (recommended)
   - Open ChatGPT Settings → Apps / Connectors → Vercel
   - Disconnect the existing Vercel integration
   - Reconnect and log in with the Vercel account that has access to the lukulu-recordings team (lukulu-academy project)
   - Once the correct team appears, re-run any deploy checks

2) Transfer / Invite
   - In Vercel, invite the phushiplan account to the lukulu-recordings team OR transfer the project to the team that the connected account owns.
   - After team membership/ownership is fixed, reconnect the integration if needed.

3) Use GitHub Action deploy (backup)
   - Add the following repository secrets in GitHub: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
   - The included GitHub Action (./.github/workflows/vercel-deploy.yml) will deploy to Vercel on push to main using those secrets.
   - To get VERCEL_TOKEN: in Vercel Dashboard > Settings > Tokens (create a Personal Token for the team that owns the project).
   - To get ORG ID / PROJECT ID: Project Settings -> General (IDs shown at bottom)

Security note
-------------
Never paste long-lived tokens into chat. Add tokens in GitHub repository secrets only. If you'd like, provide a short-lived Vercel token via a secure channel and I can attempt CLI linking, but it's safer for the owner to add secrets in the repo.

What I did
---------
- Merged and fast-forwarded local main with origin/main and verified the repo builds locally.
- Created a GitHub Actions workflow to let the correct-team owner deploy from GitHub to Vercel once secrets are provided.

Next recommended step
---------------------
- If you can, reconnect Vercel via ChatGPT Settings using the account with access to lukulu-recordings → lukulu-academy and then send the message: "fix protection now" so the assistant can verify the public deployment.
- Alternatively, add the three repository secrets and push to main to trigger the new deploy workflow.
