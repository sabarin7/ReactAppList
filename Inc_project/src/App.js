import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './hellowWorld';
import Counter from './Components/Counter'
// import { increamentAction,decreamentAction } from './actions/increamentAction';
// import { connect } from 'react-redux';


// functional component
// function App() {
//   return (
//     <div className="App">
//       <HelloWorld />
//     </div>
//   );
// }

// class component
class App extends React.Component {
  state = {
    displayImage: false,
  };

  handleShowImageInAPP = () => {
    //  update state
    this.setState({
      displayImage: true,
    })
  }

  handleHideImageInAPP = () => {
    //  update state
    this.setState({
      displayImage: false,
    })
  }

  // performinc = (item) => {
  //   const { _performinc } = this.props;
  //   _performinc(item);
  // }

  render() {
    console.log('Render !');
    const { displayImage } = this.state;
    // const { allItems } = this.props;
    return(
      <div className="App">
       {/* <HelloWorld /> */}
       <Counter
        text="Increment"
        text1="Decrement"
        displayImage={displayImage}
        handleShowImage={this.handleShowImageInAPP}
        handleHideImage={this.handleHideImageInAPP}
       />
     </div>
    )
  }
}

// const mapStoreToProps = (store) => ({
//   allItems: store.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   _performinc: (item) => {
//     dispatch(increamentAction(item))
//   },
//   _performdec: (data) => {
//     dispatch(decreamentAction(data))
//   },
// })

// export default connect(mapStoreToProps, mapDispatchToProps)(App);

export default App;