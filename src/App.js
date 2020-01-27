import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import List from './List';


class App extends React.Component {
 state = { text:'Hello world!',
  data:[{name:'tekst'},
  {name:'tekst2'},
  {name:'tekst3'},
  {name:'tekst4'},
  {name:'tekst5'},
  {name:'tekst6'},
  {name:'tekst7'}
  ]
  };
 constructor(props) {
   super(props);
   this.changeText=this.changeText.bind(this);
   this.save=this.save.bind(this);
 }
 changeText() {
   this.setState({ text:'Goodbye world!'},()=>{alert(this.state.text)});
   alert(this.state.text); 
 }

 save(value) {

  const data = [...this.state.data]
  data.push({name:value})
   this.setState({data:data})
 }
  
  render() {
    const {text,data}=this.state;
    return ( <div>
      <Header text={text}/>
      <button onClick={this.changeText}>Ok</button>
      <button onClick={this.save}>save</button>
      <Form save={this.save}/>
    <List data={data} />
    <Footer text={text}/></div> )
  }

}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
export default App;
