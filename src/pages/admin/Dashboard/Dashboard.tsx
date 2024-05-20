import React from 'react'
import { ENUMFORROUTES } from '../../../interfaces/interface'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../redux/store';
import { loading } from '../../../redux/Loader/loader.action';
import { connect } from 'react-redux';
/**
 * Dashboard Component
 * @returns {JSX.Element} JSX element representing the Dashboard component
 */

const Dashboard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => {
        localStorage.removeItem("token");
        props.loading(true);
        setTimeout(() => {
          props.loading(false);
        }, 2000);
      }}>Logout</button>


    </>
  )
}

const mapStateToProps = (state: RootState) => {
  //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
  loading

};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
