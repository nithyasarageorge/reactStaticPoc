import React from 'react';

const section = {
  width: '350px',
  float: 'left',
  padding: '10px'
};

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Menu extends React.Component {
  render() {
    if(this.props.data===0)
    return (
      <div style={styles}>
        <div style={section}>
          <h2>London</h2>
          <p>
            London is the capital city of England. It is the most populous city in the United Kingdom,
  with a metropolitan area of over 13 million inhabitants.
        </p>
          <p>
            Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.
        </p>
        </div>
        </div>);
        if(this.props.data===1)
          return (
          <div style={styles}>
            <div style={section}>
              <h2>Paris</h2>
              <p>
              Paris (French pronunciation: ​[paʁi] (About this sound listen)) is the capital and most populous city in France, with an administrative-limits area of 105 square kilometres (41 square miles) and an official population of 2,206,488 (2015).[5] The city is a commune and department, and the heart of the 12,012-square-kilometre (4,638-square-mile) Île-de-France region (colloquially known as the 'Paris Region'), whose 2016 population of 12,142,802 represented roughly 18 percent of the population of France    </p>
            </div>
          </div>
          );
        if (this.props.data=== 2)
          return (
            <div style={styles}>
              <div style={section}>
                <h2>Tokyo</h2>
                <p>
                  Tokyo (/ˈtoʊkioʊ/, Japanese: [toːkʲoː] (About this sound listen)), officially Tokyo Metropolis,[6] is the capital city of Japan and one of its 47 prefectures.[7] The Greater Tokyo Area is the most populous metropolitan area in the world.[8] It is the seat of the Emperor of Japan and the Japanese government. 
                </p>
              </div>
            </div>
          );
        if (this.props.data===3)
          return (
            <div style={styles}>
              <div style={section}>
              </div>
            </div>
          );
  }
}
export default Menu;
