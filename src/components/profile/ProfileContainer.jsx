import { connect } from "react-redux";
import { setProfile } from "../../redux/profilePageReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Profile from "./Pfofile";


const ProfileContainer = ({profile, setProfile}) => {

    let {userId} = useParams();

    if(!userId){
        userId = '2';
    }
    useEffect(() => {
        setProfile(null);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then((response) => {
            setProfile(response.data);
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


