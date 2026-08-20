import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders the updated portfolio homepage", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();

  assert.match(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /Computer science student\./);
  assert.match(html, /Project or work enquiry\?/);
  assert.match(html, /mailto:adeshp32@asu\.edu\?subject=Project%20or%20work%20enquiry/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/aditya-deshpande-127218205\//);
  assert.match(html, /View Resume/);
  assert.match(html, /Docker, Kubernetes, CI\/CD/);
  assert.match(html, /Generative AI, PyTorch, Prompt Engineering/);
  assert.match(html, /Stripe, Power BI, Zoho Software, AWS, Firebase/);
  assert.doesNotMatch(html, /Scroll to Resume/);
  assert.doesNotMatch(html, /résumé/i);
  assert.doesNotMatch(html, /class=["']scroll-progress["']/);
});
