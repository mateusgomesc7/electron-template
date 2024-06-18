console.log("👋 This message is being logged by 'index.js', included via webpack"); // Just to make sure when I start the app that the file has been correctly handled by Webpack;

$( "body" ).addClass( "bg-info" );


document.addEventListener('DOMContentLoaded', () => {
    window.electron.onReadTextResponse((data) => {
      console.log(data.split('\r'));
      // Aqui você pode manipular o DOM ou exibir os dados na interface do usuário
    });
  });