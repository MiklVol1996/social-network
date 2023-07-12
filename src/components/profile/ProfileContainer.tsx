import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import { getUserData } from "../../redux/profilePageReducer";
import { Action } from "redux";
import { giveauthID } from "../../redux/selectors";


const ProfileContainer: React.FC = () => {

    const dispatch = useDispatch();
    const autorizedID = useSelector(giveauthID);

    let isOwner = false;
    let { userId } = useParams();

    useEffect(() => {
        if (userId) {
            dispatch(getUserData(+userId) as unknown as Action);
        }
    }, [userId])

    if (!userId) {
        userId = String(autorizedID);
        isOwner = true;
    }

    return (
        <Profile isOwner={isOwner} />
    )
}

export default ProfileContainer;





