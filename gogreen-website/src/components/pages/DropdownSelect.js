import React from "react";
import Select from 'react-select';

const options = [
    { label: "Paper 📰", value: "paper" },
    { label: "Tin 🥫", value: "tin" },
    { label: "Glass 🍷", value: "glass" },
    { label: "Cardboard 📦", value: "cardboard" },
    { label: "Plastic 🥤", value: "plastic" }
  ];
class App extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(selectedOption); //saves material as variable 'selectedOption'
    };
    render() {
        const { selectedOption } = this.state;
        return(
            <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            />
        );
    };
}
export default App;
