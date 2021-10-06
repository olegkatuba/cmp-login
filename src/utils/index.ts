/**
 * Render script tag to post data to parent window.
 * Is used to send restored controllerId to opener window from popup.
 * @param {Object} data
 * @returns {string}
 */
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

/**
 * Make query params string from object
 * @param {Object} obj 
 * @returns {string}
 */
export function makeQueryParamsString(obj: {[key: string]: string}) {
  return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
}