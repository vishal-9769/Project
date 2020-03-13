import React, { Component } from 'react';
import { EuiIcon, EuiTreeView, Link} from '@elastic/eui';

export class StudentSidebar extends Component {
    showAlert = () => {
        alert('You squashed a bug!');
      };
    
      render() {
        const items = [
          {
            label: 'Dashboard',
            id: 'dashboard',
          },
          {
            label: 'Assignment',
            id: 'dept',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                 
                label: 'View Assign',
                id: 'viewAssign',
                icon: <EuiIcon type="document" />,
                
              },
            ],
          },
          
          {
            label: 'Reports',
            id: 'reports',
            icon: <EuiIcon type="document" />,
          },
        ];
    
        return (
          <div style={{ width: '13rem' }}>
            <EuiTreeView className='sidebar' items={items} aria-label="Sample Folder Tree" />
          </div>
        );
      }
    }

export default StudentSidebar;
