import React from 'react';
import { imgNano } from '../cars_images/nano.png';
// import { incAction,decAction } from './actions/in';
import {incAction,decAction} from '../actions/increamentAction'
import { connect } from 'react-redux';

class Counter extends React.Component {
    // Initial Mount phase
    constructor(props){
        super(props);
        console.log('constructor !!');
        // Initialize state
        this.state = {
            // count: 0,
            name: '', 
        }
        // Bind the function in the constructor - when we do not use Arrow functions
        // this.handleClickCountDecrement = this.handleClickCountDecrement.bind(this); 
    }

    //  Componnet Life cycle Methods
    componentWillMount() {
        console.log('component Will Mount ');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    // Updation
    componentWillReceiveProps() {
        console.log('Will receive props !!! =');
    }

    componentWillUpdate(){
        console.log('Will Update');
    }

    componentDidUpdate() {
        console.log('Did Update !');
    }

    shouldComponentUpdate() {
        console.log('Should Component Update');
        return true;
    }

    handleClickCount = () => {
        const { _performinc } = this.props;
        _performinc();
    }

    handleClickCountDecrement = () => {
    
        const { _performdec } = this.props;
        _performdec();
    }

    handleInputText = (e) => {
        this.setState({
            name: e.target.value,
        })
        // console.log('value =', e.target.value);
    }

    //  Render to UI - returns JSX
    render() {
        // console.log('Counter Render =', this.props.text);
        // console.log('Count state =', this.state.count);
        const { text, text1, handleShowImage, displayImage, handleHideImage } = this.props;
        const {  name } = this.state;
        const {totcount} =this.props;
        return(
            <div>
                {/* <div>Count : {this.state.count}</div> */}
                {/* Use Destructure */}
                <div>
                    Count: {totcount}
                </div>
                <button onClick={this.handleClickCount}>
                    {text}
                </button>
                <button onClick={this.handleClickCountDecrement}>
                    {text1}
                </button>
                <br />
                {/*  Uncontrolled component / Input element */}
                {/* <input type="text" /> */}
                {/* Controlled input element */}
                <input type="text" value={name} onChange={this.handleInputText} />
                Name : {name}
                <div>
                    <button onClick={handleShowImage}>
                        SHOW
                    </button>
                    <button onClick={handleHideImage}>
                        HIDE
                    </button>
                    {displayImage && <img src={imgNano} alt="nano" /> }
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
  totcount : store.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  _performinc: () => {
    dispatch(incAction())
  },
  _performdec: () => {
    dispatch(decAction())
  },
})

export default connect(mapStoreToProps, mapDispatchToProps)(Counter);

//export default Counter;