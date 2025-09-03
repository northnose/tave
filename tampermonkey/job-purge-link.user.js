// ==UserScript==
// @name         VSCO Job Purge Link
// @namespace    https://github.com/northnose/tave
// @version      0.1
// @description  Adds a "Purge" link to the job view sidebar on VSCO Workspace
// @match        https://workspace.vsco.co/jobs/view/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vsco.co
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // For safety, exit if #StageProgress (the bar at the top) does not have class "lead"
  const stageProgress = document.getElementById("StageProgress");
  if (!stageProgress || !stageProgress.classList.contains("lead")) {
    return;
  }

  // Utility: wait for a condition to become true
  function waitFor(checkFn, { interval = 150, timeout = 15000 } = {}) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const timer = setInterval(() => {
        try {
          const result = checkFn();
          if (result) {
            clearInterval(timer);
            resolve(result);
          } else if (Date.now() - start > timeout) {
            clearInterval(timer);
            reject(new Error("waitFor timeout"));
          }
        } catch (err) {
          clearInterval(timer);
          reject(err);
        }
      }, interval);
    });
  }

  async function init() {
    try {
      // Wait for the sidebar container
      const container = await waitFor(() => document.querySelector("#PageButtons .sidebar-buttons"));

      // Wait for TP.sourceULID to be available
      const sourceULID = await waitFor(() => (window.TP && TP.sourceULID) ? TP.sourceULID : null);

      // Prevent duplicates if this runs more than once (SPA navigation, etc.)
      if (container.querySelector("#tm-purge-job-link")) return;

      // Build and insert the link
      const a = document.createElement("a");
      a.className = "btn btn-danger btn-block"
      a.id = "tm-purge-job-link";
      a.href = `/jobs/${encodeURIComponent(sourceULID)}/purge`;
      a.textContent = "Purge";
      container.appendChild(a);
    } catch (e) {
      console.error("[VSCO Job Purge Link] Failed:", e);
    }
  }

  // Run it
  init();
})();

