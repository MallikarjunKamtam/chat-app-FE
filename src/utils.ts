export const getToken = (): string => {

    const token = 'Bearer ' + localStorage.getItem('chat_app_token')
    return token

}