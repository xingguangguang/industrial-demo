import { Table, Input, Form, Button, Pagination, Modal } from "antd";
import { useState, useEffect, useRef } from "react";
import { formatDate } from "../utils/utils";


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
          <Button type="link" onClick={() => edit(item)}>编辑</Button>
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
        "id": 22,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 21,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 20,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 19,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 18,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 17,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 16,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 15,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 14,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 13,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 12,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 11,
        "equipmentNumber": "JQ344942",
        "equipmentName": "科恩Micro",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-12 09:34:56"
    },
    {
        "id": 10,
        "equipmentNumber": "JQ344941",
        "equipmentName": "Hurco VMX42i加工中心",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-12 09:34:56"
    },
    {
        "id": 9,
        "equipmentNumber": "JQ344940",
        "equipmentName": "Hurco TMM10i车削中心",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-12 09:34:56"
    },
    {
        "id": 8,
        "equipmentNumber": "JQ344939",
        "equipmentName": "Schaublin136 7AX-Y车铣复合中心",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-13 15:36:51"
    },
    {
        "id": 7,
        "equipmentNumber": "JQ25",
        "equipmentName": "三坐标",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-13 10:42:15"
    },
    {
        "id": 6,
        "equipmentNumber": "JQ4493",
        "equipmentName": "agv小车",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "",
        "manufacturers": "",
        "installTime": "2020-12-12 16:37:28"
    },
    {
        "id": 5,
        "equipmentNumber": "JQ47262",
        "equipmentName": "Schaublin车铣复合中心机械臂",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "TX90",
        "manufacturers": "",
        "installTime": "2020-12-12 15:26:41"
    },
    {
        "id": 4,
        "equipmentNumber": "JQ46677",
        "equipmentName": "产线移动机械臂",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "TX160",
        "manufacturers": "",
        "installTime": "2020-12-12 11:21:30"
    },
    {
        "id": 3,
        "equipmentNumber": "JQ46676",
        "equipmentName": "Hurco车削中心机械臂",
        "workshop": "上海市浦东新区沪城环路1111号",
        "equipmentMN": "TX90",
        "manufacturers": "",
        "installTime": "2020-12-12 09:34:56"
    },
    {
        "id": 2,
        "equipmentNumber": "YT-1234568",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:16:21"
    },
    {
        "id": 1,
        "equipmentNumber": "YT-1234567",
        "equipmentName": "一体化污水处理设备",
        "workshop": "上海市嘉定区外冈镇恒定路1号",
        "equipmentMN": "#99-BS12345",
        "manufacturers": "中原联",
        "installTime": "2021-08-03 10:01:01"
    }
]);
  // 列表中最新的id，确保不会重复
  const newId = useRef(22);
  // 正在编辑的数据
  const editRecord = useRef({});
  // 展示的数据
  const [tableData, setTableData] = useState({list: [], total: 0});
  // 搜索表单
  const [searchForm, setSearchForm] = useState({equipmentNumber: '', equipmentName: '', workshop: ''});
  // 分页
  const [pagination, setPagination] = useState({current: 1, pageSize: 10});
  // 显示新增弹框
  const [showModal, setShowModal] = useState(false);
  // form表单绑定的对象实例
  const [form] = Form.useForm();


  // 新增
  const add = () => {
    setShowModal(true);
  };

  // 删除
  const del = id => {
    const index = originalData.current.findIndex(v => v.id === id);
    originalData.current.splice(index, 1);
    getList();
  };

  // 编辑
  const edit = record => {
    setShowModal(true);
    editRecord.current = {...record};
    form.setFieldsValue(record);
  };

  // 搜索
  const search = values => {
    setSearchForm({ ...values });
    setPagination({ ...pagination, current: 1 });
  };

  // 翻页
  const changePagination = pageNum => {
    const nextPagination = { ...pagination, current: pageNum };
    setPagination(nextPagination);
  };

  // 获取列表
  const getList = () => {
    const { equipmentNumber = '', equipmentName = '', workshop = '' } = searchForm;
    const { current, pageSize } = pagination;
    // 筛选符合搜索条件的数据
    const newOrigin = originalData.current.filter(v => {
      const {
        equipmentNumber: vEquipmentNumber = '',
        equipmentName: vEquipmentName = '',
        workshop: vWorkshop = ''
      } = v;
      return vEquipmentNumber.includes(equipmentNumber)
        && vEquipmentName.includes(equipmentName)
        && vWorkshop.includes(workshop);
    });
    // 从符合条件的数据中截取当前页码应该显示的数据
    let newTableData = newOrigin.slice((current - 1) * pageSize, current * pageSize);
    // 有符合条件的数据，但是当前页码没有数据
    if (newOrigin.length !== 0 && newTableData.length === 0) {
      setPagination({current: current - 1, pageSize});
    } else {
      setTableData({list: newTableData, total: newOrigin.length});
    }
  };

  // 点击弹框的确定按钮
  const ok = async () => {
    try {
      const formValue = await form.validateFields();
      if (editRecord.current.id) {
        // 编辑逻辑
        const index = originalData.current.findIndex(v => v.id === editRecord.current.id);
        originalData.current.splice(index, 1, {...editRecord.current, ...formValue});
      } else {
        // 新增逻辑
        const obj = { id: newId.current + 1, ...formValue, installTime: formatDate(Date.now())};
        originalData.current.unshift(obj);
        newId.current += 1;
      }
      form.resetFields();
      setShowModal(false);
      getList();
    } catch (error) {
      console.log(error)
    }
  };

  // 点击弹框的取消按钮
  const cancel = () => {
    form.resetFields();
    setShowModal(false);
  };

  // 副作用函数，pagination改变时，重新获取表格显示的数据
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
      <div>
        <Modal
          title="新建"
          width={600}
          open={showModal}
          onOk={ok}
          onCancel={cancel}
        >
          <Form
            form={form}
            style={{marginRight: '100px'}}
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
          >
            <Form.Item
              name="equipmentNumber"
              label="设备编号"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="equipmentName"
              label="设备名"
              rules={[{required: true, message: '请输入设备名！'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="workshop"
              label="所属车间"
              rules={[{required: true, message: '请输入所属车间！'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="equipmentMN" label="设备型号">
              <Input />
            </Form.Item>
            <Form.Item name="manufacturers" label="生产厂家">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default Equipment;