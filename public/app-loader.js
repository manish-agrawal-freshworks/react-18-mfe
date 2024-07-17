export const mountApp = ({ element, options }) => {
  const { baseURL, ...rest } = options;
  if (!baseURL) {
    throw Error(
      'Please provide the baseURL in the options for the admin MFE to load',
    );
  }

  fetch(`${baseURL}/.vite/manifest.json`)
    .then((res) => res.json())
    .then((data) => {
      import(`${baseURL}${data['index.html'].file}`).then(() => {
        const adminMfe = document.createElement('new-react-18-mfe');
        adminMfe.setAttribute('options', JSON.stringify(rest));
        element.appendChild(adminMfe);
      });
    });
};
