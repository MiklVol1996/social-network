import { connect } from "react-redux";
import { setProfile } from "../../redux/profilePageReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import { api } from "../../api/api";


const ProfileContainer = ({profile, setProfile}) => {

    let {userId} = useParams();

    if(!userId){
        userId = '2';
    }
    useEffect(() => {
        setProfile(null);
        api.getProfile(userId)
        .then(data => {
            setProfile(data);
        })
    }, [userId])

    return(
        <Profile profile={profile}/>
    )

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setProfile})(ProfileContainer);


