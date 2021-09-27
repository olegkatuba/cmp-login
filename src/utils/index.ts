export function renderPostMessageScript(data: any): string{
  return `
  <script>
    if (window.opener) {
      window.opener.postMessage(${JSON.stringify(data)}, "*");
    }
    close();
  </script>
  `
}