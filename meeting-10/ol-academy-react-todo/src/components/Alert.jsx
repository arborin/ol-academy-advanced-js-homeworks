import React from "react"


class Alert extends React.Component {
    render() {
        return (
            <div className="alert alert-danger fade show" role="alert">
                <strong>Name exists!</strong>
            </div>
        )
    }
}


export default Alert;