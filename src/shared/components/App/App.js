// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { stocksCac40NasdaqData } from '../../api/stocks';
import StocksDataTable from '../StocksDataTable/StocksDataTable';
import StocksGraphic from '../StocksGraphic/StocksGraphic';

import './App.css';

/**
 * App
 */
class App extends React.Component {
  state = {
    stocksList: [],
  };

  /**
   * componentDidMount
   */
  async componentDidMount(): void {
    await this.loadStocks();
    // TODO: comment this line to stop display continous data
    // setInterval(this.loadStocks, 1000);
  }

  /**
   * return latest stocks
   * @returns {Promise<void>}
   */
  loadStocks = async () => {
    try {
      const stocksList = await stocksCac40NasdaqData();

      this.setState({ stocksList });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Get a simplified list of stocks
   * @returns {Array<Object>}
   */
  getSimplifiedStocksList = () => {
    const { stocksList } = this.state;
    let index = 1;
    return stocksList.map(obj => ({
      index: index++,
      NASDAQ: obj.stocks.NASDAQ.toFixed(2),
      CAC40: obj.stocks.CAC40.toFixed(2),
    }));
  };

  /**
   * render
   * @returns {HTMLElement}
   */
  render() {
    const data = this.getSimplifiedStocksList();

    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className="App-Typography" variant="h4" component="h2" gutterBottom>
              One2Team - Test Perfomed By Beauclair BILONG
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <div className="App-DataTable">
              <StocksDataTable data={data} />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="App-Graphic">
              <StocksGraphic data={data} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
