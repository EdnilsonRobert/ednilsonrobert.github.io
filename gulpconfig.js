const path = require('path');

let insertIcon = (icon) => {
  return path.join(__dirname, `${app.paths.icons}/${icon}`);
}

let paths = {
  root: {
    src: './',
  },
  css: {
    src: './src/scss',
    dest: './resources/css'
  },
  icons: {
    src: './src/icons'
  }
}

let app = {
  name: 'GulpJS',
  appID: 'GulpJS',
  paths: {
    icons: paths.icons.src
  }
}

let messages = {
  gulp: {
    isRunning: {
      title: app.name,
      message: 'GulpJS is running and works like a charm.',
      icon: insertIcon('icon-gulp.png'),
      appID: app.appID
    }
  },
  css: {
    cssErrorMessage: 'Houve falha na transpilação dos arquivos.\nConsulte o Terminal para checar o log de erros.',
    error: {
      title: 'Ooops!',
      icon: insertIcon('icon-error.png'),
      appID: app.appID
    },
    success: {
      title: 'WOW!',
      message: 'Arquivos CSS transpilados com sucesso!',
      icon: insertIcon('icon-success.png'),
      appID: app.appID,
      onLast: true
    }
  }
}

module.exports = {
  paths,
  app,
  messages
}
