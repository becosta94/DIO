async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Resolvida");
    }, 2000);
  });

  const resolved = await myPromise.then(
    (result) => `${result} passando pelo then`
  );

  return resolved;
}
