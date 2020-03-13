import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import { FaUsers, FaUserTie, FaBook } from "react-icons/fa";
import StudentSidebar from '../StudentSidebar'
import NavbarComponent from '../../NavbarComponent'
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
    EuiPageContentBody,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
  } from '@elastic/eui'
//import FacultyDashboard from './FacultyDashboard'

export class StudentMainPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isPopoverOpen: false
        };
      }
    
      onButtonClick() {
        this.setState({
          isPopoverOpen: !this.state.isPopoverOpen
        });
      }
    
      closePopover() {
        this.setState({
          isPopoverOpen: false
        });
      }
    render() {
        return (
            <div>
                {/* <NavbarComponent/> */}
                                     <EuiPageContentBody className='body'>
              <EuiFlexGroup style={{ width: "45%" }}>
                <EuiFlexItem>
                  <EuiCard className='cardsOfFaculty'
                    // icon={<EuiIcon size="xxl" />}
                    icon={<MdAssignment size={70} />}
                    title={`Assignment`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <Link to="/stdhome/assignment">
                  <EuiButton style={{ width: "150%" }}>View</EuiButton>
                  </Link>
                  
                 </EuiFlexItem>
                {/* <EuiFlexItem className="card">
                  <EuiCard
                    icon={<FaUserTie size={70} />}
                    title={`Faculty`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <Link to="/adminDashboard/student">
                    <EuiButton style={{ width: "150%" }}>View</EuiButton>
                  </Link>
                </EuiFlexItem> */}
              </EuiFlexGroup>
              <br /> 
              <EuiFlexGroup style={{ width: "45%" }}>
                <EuiFlexItem className="card">
                  <EuiCard 
                  className='cardsOfStudent'
                    icon={<FaBook size={70} />}
                    title={`Subject`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <Link to="/ViewDetailsComponent">
                    <EuiButton style={{ width: "150%" }}> View</EuiButton>
                  </Link>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>                            
                       </div>
                   
        )
    }
}

export default StudentMainPage;
