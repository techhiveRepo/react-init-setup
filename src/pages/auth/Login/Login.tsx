import React from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
/**
 * Login Component
 * @param {object} props - Props passed to the component
 * @returns {JSX.Element} JSX element representing the Login component
 */
const Login = (props) => {
    return (
        <>
            <div>Login</div>
            <button onClick={() => {
                localStorage.setItem("token", "hii");
                props.loading(true);
                setTimeout(() => {
                    props.loading(false);
                }, 2000);
            }}>
                login
            </button>
        </>
    )
}
const mapStateToProps = (state: RootState) => {
    //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
    loading

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login