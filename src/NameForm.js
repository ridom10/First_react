import React from 'react';
export default class NameForm extends React.Component {
	  constructor(props) {
		      super(props);
		      this.state = {samlue: ''};
		      this.handleChange = this.handleChange.bind(this);
		      this.handleSubmit = this.handleSubmit.bind(this);
		    }

	  handleChange(event) {
		      this.setState({value: event.target.value});
		    }

	  handleSubmit(event) {
		      alert('A name was submitted: ' + this.state.value);
		      event.preventDefault();
		    }

	  render() {
		  let className = "FormClass";
		  let form_id = "name_form"
		      return (
			            <form id={form_id} class={className} onSubmit={this.handleSubmit}>
			              <label>
			                Name:
			                <input type="text" value={this.state.samlue} onChange={this.handleChange} />
			              </label>
			              <input type="submit" value="Submit" />
			            </form>
			          );
		    }
}
