import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    switchEditMode() {
        if (this.state.editMode) {
            this.setState({
                editMode: false,
            })
            return;
        }
        this.setState({
            editMode: true,
        })
    }

    onStatusChange(e) {
        this.setState({
            status: e.target.value,
        })
    }

    onBlur() {
        this.switchEditMode();
        if(this.state.status  !== this.props.status){
            this.props.sendStatusToServer(this.state.status);
        }
    }

    componentDidUpdate() {
        if (this.state.status === null) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input value={this.state.status}
                                onChange={this.onStatusChange.bind(this)}
                                autoFocus={true}
                                onBlur={this.onBlur.bind(this)} />
                        </div>
                        : <div >
                            <span onDoubleClick={
                                this.props.id === '29133'
                                    ? this.switchEditMode.bind(this)
                                    : () => ({})
                            }
                            >{this.props.status || '-----'}</span>
                        </div>
                }
            </div>
        )
    }
}

export default Status;