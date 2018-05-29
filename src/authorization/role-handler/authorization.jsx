import { React } from 'react';

const ROLES = {
    USER: 'user',
    ADMIN: 'admin'
}

const Authorization = (wrappedComponent, allowedRoles) =>
    class WithAuthorization extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                user: {
                    name: 'sanyok',
                    role: ROLES.ADMIN
                }
            };
        }

        render() {
            const role = this.state.user.role;
            if (allowedRoles.includes(role)) {
                return (<wrappedComponent {...this.props} />)
            } else {
                return <div>
                    <h2>No page for you</h2>
                </div>
            }
        }
    }

module.exports = {Authorization, ROLES};