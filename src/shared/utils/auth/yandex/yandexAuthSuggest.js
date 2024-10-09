export const yandexAuthSuggest = () => {
    window.YaAuthSuggest.init(
        {
            client_id: "f654f08187754187b2f364fd0b4eeafe",
            response_type: "token",
            redirect_uri: "https://w.ppfunion.com/auth/token"
          },
          "https://w.ppfunion.com",
          {
            view: "button",
            parentId: "buttonContainerId",
            buttonSize: 'l',
            buttonView: 'main',
            buttonTheme: 'light',
            buttonBorderRadius: "5",
            buttonIcon: 'ya',
          }
    )
    .then(({handler}) => handler())
    .then(data => console.log('Сообщение с токеном', data))
    .catch(error => console.log('Обработка ошибки', error))
}