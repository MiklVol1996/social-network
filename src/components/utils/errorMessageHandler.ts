import { EditProfileFormNamesType } from "../../types/types";


export const ErrorMessageHandler = (messages: Array<string>, setError: Function) => {
    for (let i = 0; i < messages.length; i++) {
        const name = messages[i].split('>')[1].split('');
        name.pop();
        let finalName = name.join('').toLowerCase();
        finalName =  finalName === 'mainlink' ? 'mainLink' : finalName;
        setError(`contacts.${finalName}` as keyof EditProfileFormNamesType, { message: 'invalid URL' })
    }
}