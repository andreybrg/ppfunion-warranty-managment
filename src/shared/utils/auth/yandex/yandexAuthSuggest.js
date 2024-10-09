export const yandexAuthSuggest = async () => {

    return window.YaAuthSuggest.init(
        {
            client_id: "f654f08187754187b2f364fd0b4eeafe",
            response_type: "token",
            redirect_uri: "https://w.ppfunion.com/auth/token"
          },
          "https://w.ppfunion.com/auth/token",
          {
            view: "button",
            parentId: "auth-ya-btn",
            buttonSize: 'l',
            buttonView: 'main',
            buttonTheme: 'light',
            buttonBorderRadius: "5",
            buttonIcon: 'ya',
          }
    )
    .then(({handler}) => handler())
    .then(data => {
            return {
                data: data,
                isError: 0,
            }
        }
    )
    .catch(error => {
        return {
            data: error,
            isError: 1,
        }
    }
)
}