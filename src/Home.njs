import Nullstack from 'nullstack';
import './Home.scss';

class Home extends Nullstack {
  teste = '';

  static async serverFunction(){
    // saved value in database example
    return `<script>console.log('injected');</script>`
  }

  async initiate(){
    this.teste =  await this.serverFunction();
  }
  render({ project }) {
    return (
     <div> Hello 
       <input bind={this.teste} ></input>
       {this.teste}
     </div>
    )
  }

}

export default Home;