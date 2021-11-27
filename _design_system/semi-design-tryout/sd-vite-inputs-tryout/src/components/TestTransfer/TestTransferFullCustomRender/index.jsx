import React from 'react';
import { Transfer, Input, Spin, Button } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

import './index.scss';

class CustomRenderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: Array.from({ length: 100 }, (v, i) => ({
        label: `海底捞门店 ${i}`,
        value: i,
        disabled: false,
        key: i,
      })),
    };
    this.renderSourcePanel = this.renderSourcePanel.bind(this);
    this.renderSelectedPanel = this.renderSelectedPanel.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(type, item, onItemAction, selectedItems) {
    let buttonText = '删除';
    if (type === 'source') {
      let checked = selectedItems.has(item.key);
      buttonText = checked ? '删除' : '添加';
    }
    return (
      <div className="semi-transfer-item panel-item" key={item.label}>
        <p>{item.label}</p>
        <Button
          theme="borderless"
          type="primary"
          onClick={() => onItemAction(item)}
          className="panel-item-remove"
          size="small">
          {buttonText}
        </Button>
      </div>
    );
  }

  renderSourcePanel(props) {
    const {
      loading,
      noMatch,
      filterData,
      selectedItems,
      allChecked,
      onAllClick,
      inputValue,
      onSearch,
      onSelectOrRemove,
    } = props;
    let content;
    switch (true) {
      case loading:
        content = <Spin loading />;
        break;
      case noMatch:
        content = (
          <div className="empty sp-font">
            {inputValue ? '无搜索结果' : '暂无内容'}
          </div>
        );
        break;
      case !noMatch:
        content = filterData.map((item) =>
          this.renderItem('source', item, onSelectOrRemove, selectedItems)
        );
        break;
      default:
        content = null;
        break;
    }
    return (
      <section className="source-panel">
        <div className="panel-header sp-font">门店列表</div>
        <div className="panel-main">
          <Input
            style={{ width: 454, margin: '12px 14px' }}
            prefix={<IconSearch />}
            onChange={onSearch}
            showClear
          />
          <div className="panel-controls sp-font">
            <span>待选门店: {filterData.length}</span>
            <Button onClick={onAllClick} theme="borderless" size="small">
              {allChecked ? '取消全选' : '全选'}
            </Button>
          </div>
          <div className="panel-list">{content}</div>
        </div>
      </section>
    );
  }

  renderSelectedPanel(props) {
    const { selectedData, onClear, clearText, onRemove } = props;

    let mainContent = selectedData.map((item) =>
      this.renderItem('selected', item, onRemove)
    );

    if (!selectedData.length) {
      mainContent = <div className="empty sp-font">暂无数据，请从左侧筛选</div>;
    }

    return (
      <section className="selected-panel">
        <div className="panel-header sp-font">
          <div>已选同步门店: {selectedData.length}</div>
          <Button
            theme="borderless"
            type="primary"
            onClick={onClear}
            size="small">
            {clearText || '清空 '}
          </Button>
        </div>
        <div className="panel-main">{mainContent}</div>
      </section>
    );
  }

  render() {
    const { dataSource } = this.state;
    return (
      <Transfer
        onChange={(values) => console.log(values)}
        className="component-transfer-demo-custom-panel"
        renderSourcePanel={this.renderSourcePanel}
        renderSelectedPanel={this.renderSelectedPanel}
        dataSource={dataSource}
      />
    );
  }
}

export default CustomRenderDemo;
