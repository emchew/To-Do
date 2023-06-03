import React from 'react'
import BrandLogo from '@mui/icons-material/TaskAlt';
import FlexContainer from '../containers/FlexContainer';
import Link from './Link';

export default function Navbar() {
  return (
    <header>
        <nav className="App-header">
            <FlexContainer sx={{paddingLeft: '1em'}} alignItems="center">
                <BrandLogo sx={{color: '#46bb40', fontSize: '2em'}}/>
                <div className="nav-brand">
                    <Link to="/">
                        <h1>To Do</h1>
                    </Link>
                    
                </div>
            </FlexContainer>
        </nav>
    </header>
  )
}
