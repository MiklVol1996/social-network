
export const handleErrors = (answer) => {
    const errors = {};
    errors.contacts = {};
    for (let i = 0; i < answer.messages.length; i++) {
        const error = answer.messages[i].split('(')[1].split('');
        error.pop();
        let r = error.join('').toLowerCase();
        if (r.includes('->')) {
            let newR = r.split('->')[1];
            errors.contacts[newR] = 'incorrect URL';
            continue;
        }
        let newR;
        switch (r) {
            case ('aboutme'): {
                newR = 'aboutMe';
                break;
            }
            case ('lookingforajobdescription'): {
                newR = 'lookingForAJobDescription';
                break;
            }
            case ('fullname'): {
                newR = 'fullName';
                break;
            }
        }
        errors[newR] = 'this field is required';
    }
    return errors;
}
