import React from 'react';

export default class Form extends React.Component { 
  counter = 0;
  state={dodaj:''};
  constructor(props) {
    super(props);
    this.add=this.add.bind(this);
    this.save=this.save.bind(this);
  }
 add(event){
   this.setState({dodaj:event.target.value})
   //console.log(event.target.value);
   // alert(event.value);
  }
  save() {
    this.props.save(this.state.dodaj)
  }

  render() {
    const {dodaj}=this.state;
    //const {save}=this.props;
    this.counter++;
    return ( <form><input onChange={this.add} name="dodaj" value={dodaj}/><div onClick={this.save}>Zapisz</div></form> )
  }
}
