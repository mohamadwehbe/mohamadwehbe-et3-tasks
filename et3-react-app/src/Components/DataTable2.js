import React, { useState, useEffect } from "react";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import AddForm from './AddForm';
import Button2 from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CancelIcon from '@mui/icons-material/Close';

const DataTable = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [searchColText, setSearchColText] = useState("");
  const [searchedCol, setSearchedCol] = useState("");
  let [filteredInfo, setFilteredInfo] = useState({});
  let [filteredData] = useState();
  const [row,setRow] = useState();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(()=>{
     if(row) {
         setGridData(gridData.concat(row))
     }
  },[row])

  const loadData = async () => {
    setLoading(true);
    setGridData([]);
    setLoading(false);
  };

  const handleDelete = (value) => {
    const dataSource = [...gridData];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filteredData);
  };

  console.log("gridData", gridData);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 0, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleResetCol(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      searchedCol === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchColText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchColText(selectedKeys[0]);
    setSearchedCol(dataIndex);
  };

  const handleResetCol = (clearFilters) => {
    clearFilters();
    setSearchColText("");
  };

  const edit = (record) => {
    form.setFieldsValue({
      se:'',
      date: '',
      platform: '',
      version: '',
      comments: '',
      prlink: '',
      size: '',
      dificulty: '',
      status: '',
      reviewByBY: '', reviewByAH:'', reviewByHT:'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const handleChange = (_, filters, sorter) => {
    console.log("sorter", sorter);
    console.log("filters", filters);
    const { order, field } = sorter;
    setFilteredInfo(filters);
    setSortedInfo({ columnKey: field, order });
  };

  console.log("filteredInfo", filteredInfo);

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...gridData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setGridData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  }) => {
    const input = <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please input ${title}`,
              },
            ]}
          >
            {input}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
      editable: true,
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === "date" && sortedInfo.order,
    },
    {
      title: "SE",
      dataIndex: "se",
      align: "center",
      editable: true,
      ...getColumnSearchProps("se"),
    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Platform",
      dataIndex: "platform",
      align: "center",
      editable: true,
      ...getColumnSearchProps("platform"),
    },
    {
      title: "release version",
      dataIndex: "version",
      align: "center",
      editable: true,
    },
    {
      title: "Comments",
      dataIndex: "comments",
      align: "center",
      editable: true,
      ...getColumnSearchProps("comments"),
    },
    {
      title: "prlink",
      dataIndex: "prlink",
      align: "center",
      editable: true,
    },
    {
      title: "size",
      dataIndex: "size",
      align: "center",
      editable: true,
    },{
      title: "dificulty",
      dataIndex: "dificulty",
      align: "center",
      editable: true,
    },{
      title: "status",
      dataIndex: "status",
      align: "center",
      editable: true,
      ...getColumnSearchProps("status"),
    },
    {
      title: "Review by BY",
      dataIndex: "reviewByBY",
      align: "center",
      editable: true,
    },
    {
        title: "Review by AH",
        dataIndex: "reviewByAH",
        align: "center",
        editable: true,
      },
      {
        title: "Review by HT",
        dataIndex: "reviewByHT",
        align: "center",
        editable: true,
      },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return gridData.length >= 1 ? (
          <Space>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record)}
            >
              <Button2 startIcon={<HighlightOffIcon />} style={{color:'red'}}/>
            </Popconfirm>
            {editable ? (
              <span>
                <Space size="middle">
                  <Button2
                    startIcon={<SaveIcon />}
                    onClick={(e) => save(record.key)}
                    style={{ marginRight: 8 }}
                  />
                  <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <Button2 startIcon={<CancelIcon />}/>
                  </Popconfirm>
                </Space>
              </span>
            ) : (
              <Button2 startIcon={<EditIcon />} onClick={() => edit(record)}/>
            )}
          </Space>
        ) : null;
      },
    },
  ];

  const isEditing = (record) => {
    return record.key === editingKey;
  };

  const clearAll = () => {
    setSortedInfo({});
    setFilteredInfo({});
    setSearchText("");
    loadData();
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };
  const globalSearch = () => {
    filteredData = gridData.filter((value) => {
      return (
        value.se.toLowerCase().includes(searchText.toLowerCase()) ||
        value.comments.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setGridData(filteredData);
  };

  return (
    <div style={{padding:20 ,backgroundColor:'#ececec'}}>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Enter Search Text"
          onChange={handleSearch}
          type="text"
          allowClear
          value={searchText}
        />
        <Button type="primary" onClick={globalSearch}>
          Search
        </Button>
      </Space>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={mergedColumns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.info}</p>
            ),
            rowExpandable: (record) => record.info !== "Not Expandable",
          }}
          dataSource={
            filteredData && filteredData.length ? filteredData : gridData
          }
          bordered
          loading={loading}
          onChange={handleChange}
        />
      </Form>
      <Button onClick={clearAll} style={{marginTop:5,marginBottom:30,marginRight:1400,backgroundColor:'red',color:'white',borderRadius:5,fontWeight:500}}>Clear All</Button>
      <AddForm setRow={setRow}/>
    </div>
  );
};

export default DataTable;
