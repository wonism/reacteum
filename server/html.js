const html = ({ head, body, styles, files }) => {
  const scripts = files.map(file => `<script type="text/javascript" src="${file}"></script>`).join('');

  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  ${head}
  <style>${styles}</style>
</head>
<body>
  <div id="app-root">${body}</div>
  ${scripts}
</body>
</html>`;

  return content.replace(/^\s+/gm, '').replace(/\r?\n/g, '');
};

export default html;
