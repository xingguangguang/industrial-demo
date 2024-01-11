import { Table, Input, Form, Button, Pagination } from "antd";
import { useState, useEffect, useRef } from "react";


const Equipment = () => {
  // 列配置
  const columns = [
    // {
    //   title: 'id',
    //   dataIndex: 'id',
    //   key: 'id'
    // },
    {
      title: '设备编号',
      dataIndex: 'equipmentNumber',
      key: 'equipmentNumber',
      align: 'center'
    },
    {
      title: '设备名',
      dataIndex: 'equipmentName',
      key: 'equipmentName',
      align: 'center'
    },
    {
      title: '所属车间',
      dataIndex: 'workshop',
      key: 'workshop',
      align: 'center'
    },
    {
      title: '设备型号',
      dataIndex: 'equipmentMN',
      key: 'equipmentMN',
      align: 'center'
    },
    {
      title: '生产厂家',
      dataIndex: 'manufacturers',
      key: 'manufacturers',
      align: 'center'
    },
    {
      title: '安装时间',
      dataIndex: 'installTime',
      key: 'installTime',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      render: (_, item) => (
        <span>
          <Button type="link" onClick={() => edit(item.id)}>编辑</Button>
          <span>|</span>
          <Button type="link" onClick={() => del(item.id)}>删除</Button>
        </span>
      ),
      align: 'center'
    }
  ];
  // 初始数据，模拟数据库
  const originalData = useRef([
    {
      id: 1,
      equipmentNumber: 'YT-1234567',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:01:01',
    },
    {
      id: 2,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 3,
      equipmentNumber: 'JQ46676',
      equipmentName: 'Hurco车削中心机械臂',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: 'TX90',
      manufacturers: '',
      installTime: '2020-12-12 09:34:56',
    },
    {
      id: 4,
      equipmentNumber: 'JQ46677',
      equipmentName: '产线移动机械臂',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: 'TX160',
      manufacturers: '',
      installTime: '2020-12-12 11:21:30',
    },
    {
      id: 5,
      equipmentNumber: 'JQ47262',
      equipmentName: 'Schaublin车铣复合中心机械臂',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: 'TX90',
      manufacturers: '',
      installTime: '2020-12-12 15:26:41',
    },
    {
      id: 6,
      equipmentNumber: 'JQ4493',
      equipmentName: 'agv小车',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-12 16:37:28',
    },
    {
      id: 7,
      equipmentNumber: 'JQ25',
      equipmentName: '三坐标',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-13 10:42:15',
    },
    {
      id: 8,
      equipmentNumber: 'JQ344939',
      equipmentName: 'Schaublin136 7AX-Y车铣复合中心',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-13 15:36:51',
    },
    {
      id: 9,
      equipmentNumber: 'JQ344940',
      equipmentName: 'Hurco TMM10i车削中心',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-12 09:34:56',
    },
    {
      id: 10,
      equipmentNumber: 'JQ344941',
      equipmentName: 'Hurco VMX42i加工中心',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-12 09:34:56',
    },
    {
      id: 11,
      equipmentNumber: 'JQ344942',
      equipmentName: '科恩Micro',
      workshop: '上海市浦东新区沪城环路1111号',
      equipmentMN: '',
      manufacturers: '',
      installTime: '2020-12-12 09:34:56',
    },
    {
      id: 12,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 13,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 14,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 15,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 16,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 17,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 18,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 19,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 20,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 21,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    },
    {
      id: 22,
      equipmentNumber: 'YT-1234568',
      equipmentName: '一体化污水处理设备',
      workshop: '上海市嘉定区外冈镇恒定路1号',
      equipmentMN: '#99-BS12345',
      manufacturers: '中原联',
      installTime: '2021-08-03 10:16:21',
    }
  ]);
  // 展示的数据
  const [tableData, setTableData] = useState({list: [], total: 0});
  // 搜索表单
  const [searchForm, setSearchForm] = useState({equipmentNumber: '', equipmentName: '', workshop: ''});
  // 分页
  const [pagination, setPagination] = useState({current: 1, pageSize: 10});


  // 新增
  const add = () => {
    console.log('add')
  };
  // 删除
  const del = id => {
    const index = originalData.current.findIndex(v => v.id === id);
    originalData.current.splice(index, 1);
    console.log(originalData.current)
    getList();
  };
  // 编辑
  const edit = id => {
    console.log('edit', id);
  };
  // 搜索
  const search = values => {
    setSearchForm({ ...values });
    setPagination({ ...pagination, current: 1 });
  };
  // 翻页
  const changePagination = pageNum => {
    console.log(pageNum, pagination);
    const nextPagination = { ...pagination, current: pageNum };
    setPagination(nextPagination);
  };
  // 获取列表
  const getList = () => {
    const { equipmentNumber = '', equipmentName = '', workshop = '' } = searchForm;
    const { current, pageSize } = pagination;
    const newOrigin = originalData.current.filter(v => {
      return v.equipmentNumber.includes(equipmentNumber)
        && v.equipmentName.includes(equipmentName)
        && v.workshop.includes(workshop);
    });
    let newTableData = newOrigin.slice((current - 1) * pageSize, current * pageSize);
    // 有符合条件的数据，但是当前页码没有数据
    if (newOrigin.length !== 0 && newTableData.length === 0) {
      setPagination({current: current - 1, pageSize});
    } else {
      setTableData({list: newTableData, total: newOrigin.length});
    }
  };

  useEffect(() => {
    getList();
  }, [pagination]);


  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Form layout="inline" style={{height: '60px'}} onValuesChange={search}>
          <Form.Item label="设备编号" name="equipmentNumber">
            <Input />
          </Form.Item>
          <Form.Item label="设备名" name="equipmentName">
            <Input />
          </Form.Item>
          <Form.Item label="所属车间" name="workshop">
            <Input />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          style={{marginRight: '40px'}}
          onClick={add}
        >新建</Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <Table
          style={{width: '100%'}}
          columns={columns}
          rowKey={'id'}
          dataSource={tableData.list}
          pagination={false}
        />
        <Pagination
          total={tableData.total}
          pageSize={pagination.pageSize}
          current={pagination.current}
          onChange={changePagination}
          style={{marginTop: '20px'}}
        />
      </div>
    </>
  )
}

export default Equipment;