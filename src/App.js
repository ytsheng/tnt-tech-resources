import React from 'react';
import logo from './tnt-logo.png';
import './App.css';
import ExploreFunctions from './ExploreFunctions'
import AppList from './AppList'
import styled from '../node_modules/styled-components';
import {PageView, initGA} from './Tracking';
import { Tooltip } from '../node_modules/react-tippy';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exposure_notification: false,
      symptom_reporting: false,
      manual_contact_tracing: true,
      symptom_checker: false,
      lab_logistics: false,
      information_and_statistics: false,
      locate_testing_centers: false,
      policy: false,
      postcare_support: false,
      business_readiness: false,
      immunity_passport: false,
      movement_tracking: false,
      health_passport: false,
    };
    this.setAll = this.setAll.bind(this)
  }

  componentDidMount() {
    initGA('UA-57905986-8');
    PageView()
  }

  navigationLinks() {
    return (
      <>
        <HeaderLink href="https://testandtrace.com/the-full-explanation">Overview</HeaderLink>
        <HeaderLink href="https://testandtrace.com/state-data/">US State Data</HeaderLink>
        <HeaderLink href="https://testandtrace.com/resources">Resources/Guides</HeaderLink>
        <HeaderLink href="https://testandtrace.com/news/">News</HeaderLink>
        <HeaderLink href="https://testandtrace.com/about-test-and-trace/">About Us</HeaderLink>
        <HowYouCanHelpButton href="https://testandtrace.com/#how-you-can-help">How You Can Help</HowYouCanHelpButton>
      </>
    );
  }

  render() {
    return (
      <div>
        <HeaderBar>
          <HeaderBarContent>
            <HeaderLeftContainer>
              <HeaderLink href="https://www.testandtrace.com">
                <LogoImage src={logo} alt="logo" />
              </HeaderLink>
            </HeaderLeftContainer>
            <HeaderRightContainer>
              <ExpandedNavigation>
                { this.navigationLinks() }
              </ExpandedNavigation>
              <HamburgerMenu>
                <Tooltip
                  interactive
                  position='bottom-end'
                  trigger='click'
                  html={(
                    <HamburgerMenuTooltipContent>
                      { this.navigationLinks() }
                    </HamburgerMenuTooltipContent>
                  )}
                >
                  <HamburgerIcon>
                    { '\u2630' }
                  </HamburgerIcon>
                </Tooltip>
              </HamburgerMenu>
            </HeaderRightContainer>
          </HeaderBarContent>
        </HeaderBar>
        <AppContent>
          <AppContentHeader>The Best Contact Tracing Tech Resources</AppContentHeader>
          <br/>
          <br/>
          <p className="App-header-intro">Entrepreneurs, app developers, government agencies and more are working on a range of technologies for containing the COVID-19 outbreak in the United States.They include mobile and web-based solutions designed to facilitate activities such as contact tracing and screening for symptoms of the coronavirus.</p>
          <p className="App-header-intro">The following list covers all technological applications that are COVID-19 related.</p>
          <br/>
          <br/>
          <ExploreFunctions settings={this.state} onClick={(data) => this.onExploreClick(data)} setAll={this.setAll} />
          <br/>
          <br/>
          <AppList filter={this.state}/>
          <br/>
          <br/>
          <p>Made with love by the #testandtrace team. Underlying table source is the <a href="https://airtable.com/tblgxtCyYsFZBHdfE/viwoUzldDFDZnm6fo">Covid Tech Solutions</a> table.</p>
          <p>Please join the #tech-resources channel on our <a href="https://testandtrace.slack.com/join/shared_invite/zt-dr5fzg7o-M3g~en8Z1F4o8kX7pOpYtg#/">slack</a> if you are willing to help us improve the data.</p>
          <p>Please join the #engineering channel on our <a href="https://testandtrace.slack.com/join/shared_invite/zt-dr5fzg7o-M3g~en8Z1F4o8kX7pOpYtg#/">slack</a> if you are willing to help us build more features for this website.</p>
        </AppContent>
      </div>
    );
  }

  onExploreClick(data) {
    this.setState(function(state, props) {
      return {
        [data]: !state[data],
      }
    })
  }

  setAll(selected) {
    for (const item in this.state) {
      this.setState( {[item]: selected})
    }
  }
}

export default App;

const HeaderBar = styled.div`
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,.1) !important;
  background: white;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
`;

const HeaderBarContent = styled.div`
  align-items: center;
  display: flex;
  height: 93px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 981px) {
    max-width: 1200px;
  }
`;

const HeaderLeftContainer = styled.div``;
const HeaderRightContainer = styled.div``;

const LogoImage = styled.img`
  height: auto;
  width: 326px;

   @media (max-width: 980px) {
     width: 163px;
   }
`;

const HeaderLink = styled.a`
  color: black;
  font-size: 14px;
  font-weight: 700;
  margin: 11px;
  text-decoration: none;

  :hover {
    color: black;
    text-decoration: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  height: 32px;
  margin: 0 20px 12px 0;
  width: 32px;

  @media (max-width: 1080px) {
    display: block;  
  }
`;

const HamburgerIcon = styled.div`
  color: #3ba4a0;
  cursor: pointer;
  font-size: 26px;
`;

const HamburgerMenuTooltipContent = styled.div`
  align-items: center;
  background: white;
  border-top-color: #3ba4a0;
  border-radius: 3px;
  border-top: 2px;
  box-shadow: 0 0 10px rgba(0,0,0,.1) !important;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 30px 10px;
`;

const ExpandedNavigation = styled.div`
  display: none;

  @media (min-width: 1081px) {
    display: block;
  }
`;

const HowYouCanHelpButton = styled.a`
  background-color: #3ba4a0;
  border-radius: 40px;
  color: white !important;
  font-size: 14px;
  font-weight: 700px;
  margin: 0 11px;
  padding: 15px 35px;
  text-decoration: none;

  :hover {
    background-color: #2a76e6;
    text-decoration: none;
  }
`;

const AppContent = styled.div`
  padding: 120px 30px 30px 30px;

  @media (min-width: 981px) {
    margin: auto;
    max-width: 1200px;
  }
`;

const AppContentHeader = styled.h1`
  align-items: center;
  background-color: #ffffff;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: calc(30px + 2vmin);
  font-weight: 48px;
  justify-content: center;
`;
