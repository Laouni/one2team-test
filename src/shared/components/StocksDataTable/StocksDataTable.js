// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContentEditable from 'react-contenteditable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as Actions from '../../redux/actions/StocksActions';

import './StocksDataTable.css';

type PropTypes = {
  data: Array<Object>,
};

type StateTypes = {
  stocks: Array<Object>,
  row: Object,
};

/**
 * StocksDataTable
 */
class StocksDataTable extends React.Component<PropTypes, StateTypes> {
  /**
   * constructor
   * @param props
   */
  constructor(props: PropTypes) {
    super(props);
    this.setState({
      stocks: props.data,
      row: { CAC40: '', NASDAQ: '' },
    });
  }

  /**
   * highlight select cell
   */
  highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null);
    }, 0);
  };

  /**
   * check if it's a number
   * @param event
   */
  validateNumber = event => {
    const keyCode = event.keyCode || event.which;
    console.log(`My keCode ${keyCode}`);
    const string = String.fromCharCode(keyCode);
    console.log(`My string ${string}`);
    const regex = /[0-9,]|\./;

    if (!regex.test(string)) {
      event.returnValue = false;
      if (event.preventDefault) event.preventDefault();
    }
  };

  /**
   * paste as plain text
   * @param event
   */
  pasteAsPlainText = event => {
    event.preventDefault();

    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  };

  /**
   * handle content editable update
   * @param event
   */
  handleContentEditableUpdate = event => {
    const { data } = this.props;
    console.log(`My new CAC40 and NASDAQ stocks : ${JSON.stringify(data)}`);

    const {
      currentTarget: {
        dataset: { row, column },
      },
      target: { value },
    } = event;

    // eslint-disable-next-line radix
    const updatedRow = data.filter((item, i) => parseInt(i) === parseInt(row))[0];
    console.log(`row updating ${JSON.stringify(updatedRow)}`);
    updatedRow[column] = value;
    console.log(`row updating column ${JSON.stringify(updatedRow)}`);

    this.setState({
      stocks: data.map((item, i) => (item[column] === row ? updatedRow : item)),
    });
    const stocks = data.map((item, i) => (item[column] === row ? updatedRow : item));
    Actions.setStocks(stocks);
    console.log(`My stocks list changed ${JSON.stringify(stocks)}`);
  };

  /**
   * render
   * @returns {HTMLElement}
   */
  render() {
    const { data } = this.props;

    return (
      <div className="root">
        <Paper className="paper">
          <Table className="table" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>CAC40</TableCell>
                <TableCell>NASDAQ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={row.index}>
                  <TableCell>{row.index}</TableCell>
                  <TableCell>
                    <ContentEditable
                      html={row.CAC40}
                      data-column="CAC40"
                      data-row={i}
                      className="content-editable"
                      onPaste={this.pasteAsPlainText}
                      onFocus={this.highlightAll}
                      onChange={this.handleContentEditableUpdate}
                    />
                  </TableCell>
                  <TableCell>
                    <ContentEditable
                      html={row.NASDAQ}
                      data-column="NASDAQ"
                      data-row={i}
                      className="content-editable"
                      onPaste={this.pasteAsPlainText}
                      onFocus={this.highlightAll}
                      onChange={this.handleContentEditableUpdate}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

/**
 * @private
 * @param {Object} state
 * @returns {{}}
 */
const mapStateToProps = (state: Object) => ({
  ...state,
});

/**
 * @private
 * @param {Object} dispatch
 * @returns {{actions: *}}
 */
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StocksDataTable);
