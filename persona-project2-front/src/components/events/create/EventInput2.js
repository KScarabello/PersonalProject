import React from 'react';
import axios from 'axios';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

const styles = {
  customWidth: {
    width: 200,
  },
};

class EventInput2 extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                loading: false,
                finished: false,
                stepIndex: 0,
                value: "Category",
                ddvalue: 0,
                displayValue: "Category",
                title: "",
                description: "",
                date: "",
                starttime: "",
                endtime: "",
                address: "",
                city: "",
                zipcode: "",
                imgUrl: "",
                perks: "",
                venue: "",
                quantofvols: ""
            };

  this.handleFinish = this.handleFinish.bind(this);

} 

handleChange = (event, index, value) => {
    console.log(value)
    
    if(value === "Event Staffing"){
        var test0 = "Event Staffing";
        this.setState({value: test0});
         
    } else if (value === "Environmental"){
        var test1 = "Environmental";
        this.setState({value: test1});
        
    } else if (value === "Parks and Recreation"){
        var test2 = "Parks and Recreation";
        this.setState({value: test2});
        
    } else if (value === "Arts and Crafts"){
        var test3 = "Arts and Crafts";
        this.setState({value: test3});
        
    } else if (value === "Infrastructure"){
        var test4 = "Infrastructure";
        this.setState({value: test4});
        
    } else if (value === "Household Tasks"){
        var test5 = "Household Tasks";
        this.setState({value: test5});
        
    } else if (value === "Education"){
        var test6 = "Education";
        this.setState({value: test6});
        
    } else if (value === "Animals"){
        var test7 = "Animals";
        this.setState({value: test7});
        
    } else if (value === "Disaster Relief") {
        var test8 = "Disaster Relief";
        this.setState({value: test8});
        
    } else if (value === "Poverty Alleviation"){
        var test9 = "Poverty Alleviation";
        this.setState({value: test9});
        
    }
    
    setTimeout(() => {console.log(this.state.value)}, 3000); 
    // console.log(this.state.displayValue)
}

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
      if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex === 3
      }));
      // if (stepIndex === 3){
      //   var event = {
      //       title: this.state.title,
      //       description: this.state.description,
      //       date: this.state.date,
      //       starttime: this.state.starttime,
      //       endtime: this.state.endtime,
      //       venue: this.state.venue, 
      //       address: this.state.address,
      //       city: this.state.city,
      //       zipcode: this.state.zipcode,
      //       imgUrl: this.state.imgUrl,
      //       perks: this.state.perks,
      //       category: this.state.value,
      //       quantofvols: this.state.quantofvols

      //   }

      //   axios.post('http://localhost:3001/api/event', event).then(res =>{
      //       console.log(res.data);
        
      //   })
    }

    };
    
 

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  handleFinish = () => {
    for (var prop in this.state){
      if (prop === ""){
        alert("Please enter a " + prop)
      } 


      }
        var event = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            venue: this.state.venue, 
            address: this.state.address,
            city: this.state.city,
            zipcode: this.state.zipcode,
            imgUrl: this.state.imgUrl,
            perks: this.state.perks,
            category: this.state.value,
            quantofvols: this.state.quantofvols

        }
        console.log()
        axios.post('/api/event', event).then(res =>{
            this.setState({currentId: res.data[0].id});
        
        })
    }
  

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>  
            <TextField style={{marginTop: 0}} floatingLabelText="Event Title" onChange={(e) => this.setState({title: e.target.value})}/>
            <br />
            <p>The event title should be a few word description of the work you will be doing. Short and direct is ideal.
                Save the details for the event description.
            </p>
            <TextField style={{marginTop: 0}} floatingLabelText="Event Description" onChange={(e) => this.setState({description: e.target.value})}/> 
            <p>
            Provide event details here. What can a lender expect? Why is it worth their time?
            </p>
         </div> 
        );
      case 1:
        return (
          <div>
            <DatePicker locale='en-US' hintText="Event Date" onChange={(e, date) => this.setState({date: date})}/>
            <TimePicker hintText="Start Time" onChange={(e, time) => this.setState({starttime: time})}/>
            <TimePicker hintText="End Time" onChange={(e, time) => this.setState({endtime: time})}/>
            
          </div>
        );
      case 2:
        return (
           <div> 
                    <TextField hintText="Location Name" onChange={(e) => this.setState({venue: e.target.value})}/>
                    <br />
                    <TextField hintText="Street Address" onChange={(e) => this.setState({address: e.target.value})}/>
                    <br />
                    <TextField hintText="City" onChange={(e) => this.setState({city: e.target.value})} />
                    <br />
                    <TextField hintText="ZipCode" onChange={(e) => this.setState({zipcode: e.target.value})}/>
                <p>
                    Where is your event?
                </p>
            </div>
        );
        case 3:
        return (
            <div>
            <div>
                    <TextField hintText="Image URL" onChange={(e) => this.setState({imgUrl: e.target.value})}/>
                    <br />
                    <TextField hintText="Any Additional Perks?" onChange={(e) => this.setState({perks: e.target.value})}/>
                    <br />
                    <TextField hintText="How many Lenders would you like?" onChange={(e) => this.setState({quantofvols: e.target.value})} />
                    <br />
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.customWidth}
                        autoWidth={false}
                        >
                        <MenuItem value="Event Staffing" primaryText="Event Staffing" />
                        <MenuItem value="Environmental" primaryText="Environmental" />
                        <MenuItem value="Parks and Recreation" primaryText="Parks and Recreation" />
                        <MenuItem value="Arts and Crafts" primaryText="Arts and Crafts" />
                        <MenuItem value="Infrastructure" primaryText="Infrastructure" />
                        <MenuItem value="Household Tasks" primaryText="Household Tasks" />
                        <MenuItem value="Education" primaryText="Education" />
                        <MenuItem value="Animals" primaryText="Animals" />
                        <MenuItem value="Disaster Relief" primaryText="Disaster Relief" />
                        <MenuItem value="Poverty Alleviation" primaryText="Poverty Alleviation" />
                        </DropDownMenu>
      </div>
                    
                    
                <p>
                    Please provide an image URL that can be displayed with your event.

                    Volunteers like free stuff. If there are any additional perks, (ie. free food, free t-shirts), here is a good place to mention it.
                </p>
            </div>
        
        );
   
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    // if (finished) {
    //   return (
    //     <div style={contentStyle}>
    //       <p>
    //         <a
    //           href="#"
    //           onClick={(event) => {
    //             event.preventDefault();
    //             this.setState({stepIndex: 0, finished: false});
    //           }}
    //         >
    //           Click here
    //         </a> to reset the example.
    //       </p>
    //     </div>
    //   );
    // }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />

          {stepIndex === 3 ? 

            <Link to="/viewevent"><RaisedButton
            label={'Create New Event'}
            primary={true}
            onClick={this.handleFinish}
          /></Link>
           :         
          
          <RaisedButton
            label={'Next'}
            primary={true}
            onClick={ this.handleNext}
          />
          }
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>What?</StepLabel>
          </Step>
          <Step>
            <StepLabel>When?</StepLabel>
          </Step>
          <Step>
            <StepLabel>Where?</StepLabel>
          </Step>
          <Step>
             <StepLabel>More</StepLabel>
          </Step>    
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default EventInput2;