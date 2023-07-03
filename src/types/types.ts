export type ContactsProfileType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosProfileType = {
    small: string | null,
    large: string | null,
}

export type ProfileType = {
    aboutMe: string,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsProfileType,
    photos: PhotosProfileType,
}

export type ProfileTypeWithoutPhotos = {
    userId: number,
    aboutMe: string
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsProfileType,
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosProfileType,
    followed: boolean,
}

export type LoginArgumentsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}

export type statusDataType = {
    statusBody: string,
}

export type EditProfileFormNamesType = {
    'aboutMe': string,
    'lookingForAJobDescription': string,
    'fullName': string,
    'contacts.github': string,
    'contacts.vk': string,
    'contacts.facebook': string,
    'contacts.instagram': string,
    'contacts.twitter': string,
    'contacts.website': string,
    'contacts.youtube': string,
    'contacts.mainLink': string,
}

export type LoginFormNames = {
    'email': string,
    'password': string,
    'captcha': string,
}

export type StatusFormType = {
    'status': string,
}

export type ResponseType<D = {}, E = ResultCodeEnum> = {
    messages: Array<string>,
    resultCode: E,
    data: D
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeWithCaptchaEnum {
    CaptchaIsRequired = 10,
}

export interface AvaArgumentsType extends Blob  {
    lastModified: number,
    lastModifiedDate: string,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string,
}

export type PostType = {
    id: number, 
    message: string, 
    likesCount: string,
}


