import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import ParentComponentWithoutParameters from './components/ParentComponentWithoutParameters'
import Dashboard from './template/Dashboard'
import SignIn from './template/SignIn';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameList2WithIDData from './components/NameList2WithIDData';
import NameList3WithComponentAndProps from './components/NameList3WithComponentAndProps';
import NameList4WithoutID from './components/NameList4WithoutID';
import NameList4WithoutIDUsingIndex from './components/NameList4WithoutIDUsingIndex';
import Stylesheet from './components/Stylesheet'
import InLine from './components/InLine';
import Forms from './components/forms/Forms';
import FragmentDemoOne from './components/fragments/FragmentDemoOne';
import Table from './components/fragments/Table' 
import LifeCycleUpdateA from './components/ComponentLifecycle/LifeCycleUpdateA';
import LifeCycleA from './components/ComponentLifecycle/LifeCycleA';
import PureComp from './components/pure/PureComp';
import ParentComp from './components/pure/ParentComp';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FRParentInput from './components/refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';

function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/* <FRParentInput /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}

      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <LifeCycleA /> */}
      {/* <LifeCycleUpdateA /> */}

      {/* <Table /> */}
      
      {/* <FragmentDemoOne /> */}
      {/* <Forms /> */}
      {/* <InLine /> */}
      {/* <Stylesheet /> */}
      {/* <NameList4WithoutIDUsingIndex /> */}
      {/* <NameList4WithoutID /> */}
      {/* <NameList3WithComponentAndProps /> */}

      {/* <NameList2WithIDData /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponentWithoutParameters /> */}

      {/* <SignIn /> */}
      {/* <Dashboard /> */}

      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}

      {/* Using props for functional components */}
      {/* <Greet name = "Ayushi" heroName= "Catwoman" >
          <p>This is children props</p> 
        </Greet>
        <Greet name = "Naimish"  heroName= "Superman" >
        <p>This is children props for Superman</p>
        </Greet>
        <Greet name = "Shiv"  heroName= "Batman" >
          <button>Action</button>
        </Greet> */}

      {/* using props for Class components */}
      {/* <Welcome  name = "Diana" heroName= "Catwoman">
          <p>This is children props</p>
        </Welcome>
        <Welcome  name = "Bruce" heroName= "Batman" />
        <Welcome  name = "Clark" heroName= "Superman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
