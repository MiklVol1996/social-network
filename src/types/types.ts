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

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}

export type statusDataType = {
    statusBody: string,
}

