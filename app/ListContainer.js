var React = require('react'),
	AddItem = require('./AddItem'),
	List = require('./List');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},
	handleAddItem: function(newItem) {
		this.setState({
			list: this.state.list.concat([newItem])
		})
	},
	handleRemoveItem: function(index) {
		var arrayToSplice = this.state.list;
		arrayToSplice.splice(index, 1);
		this.setState({
			list: arrayToSplice
		})
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-offset3">
						<h3 className="text-center"> Todo List </h3>
						<AddItem add={this.handleAddItem}/>
						<List items={this.state.list} remove={this.handleRemoveItem} />
					</div>
				</div>
			</div>
		)
	}
});

module.exports = ListContainer;