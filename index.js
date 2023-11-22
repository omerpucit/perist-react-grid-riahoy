import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Inject,
  Pager,
  Resize,
  Reorder,
} from '@syncfusion/ej2-react-grids';
import { orderDetails } from './data';
import { SampleBase } from './sample-base';

export class Default extends SampleBase {
  constructor() {
    super();
    this.initialRender = true;
    this.gridProperties = {};
    this.state = {
      enablePersistence: true,
    };
  }
  click() {
    // this.gridInstance.setProperties(this.gridProperties);
  }
  dataBound() {
    // if (this.initialRender) {
    //   this.gridProperties = JSON.parse(this.gridInstance.getPersistData());
    //   this.initialRender = false;
    // }
  }
  onResetGrid() {
    // `grid${this.gridInstance.id}`
    this.setState({
      enablePersistence: false,
    });
    localStorage.removeItem(`grid${this.gridInstance.id}`);
    // this.gridInstance.refresh();
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <input
            type="button"
            value="get Data"
            onClick={this.click.bind(this)}
          />
          <input
            type="button"
            value="Reset Grid"
            onClick={this.onResetGrid.bind(this)}
          />
          <GridComponent
            id="my-custom-grid"
            ref={(grid) => (this.gridInstance = grid)}
            dataSource={orderDetails}
            height="350"
            enablePersistence={this.state.enablePersistence}
            dataBound={this.dataBound.bind(this)}
            allowSorting={true}
            allowFiltering={true}
            filterSettings={{ type: 'Excel' }}
            allowReordering={true}
            allowResizing={true}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="OrderID"
                headerText="Order ID"
                width="120"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="CustomerName"
                headerText="Customer Name"
                width="150"
              ></ColumnDirective>
              <ColumnDirective
                field="OrderDate"
                headerText="Order Date"
                width="130"
                format="yMd"
                textAlign="Right"
              />
              <ColumnDirective
                field="Freight"
                headerText="Freight"
                width="120"
                format="C2"
                textAlign="Right"
              />
              <ColumnDirective
                field="ShippedDate"
                headerText="Shipped Date"
                width="130"
                format="yMd"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="ShipCountry"
                headerText="Ship Country"
                width="150"
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Reorder, Resize]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

render(<Default />, document.getElementById('sample'));
